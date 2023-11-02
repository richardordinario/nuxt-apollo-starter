import gql from 'graphql-tag';
import * as VueApollo from '@vue/apollo-composable'
import apolloClient from '~/utils/apolloClient'

export default async function(email: string, password: string) {
  VueApollo.provideApolloClient(apolloClient())
  // console.log(VueApollo)
  try {
    const query = gql`
      mutation Login($email: String!, $password: String!) {
        login(input: { username: $email, password: $password }) {
          access_token
          expires_in
          refresh_token
          user {
            id
            email
            forename
            surname
            avatar
            json
            last_login
          }
        }
      }
    `
    const { mutate } = await VueApollo.useMutation(query)
    const { data }: any = await mutate({ email: email, password: password })
    const { 
      id,
      email: responseEmail,
      forename,
      surname,
      avatar,
      json
    } = data.login.user
    
    const access_token = data.login.access_token
    const expires_in = data.login.expires_in
    const refresh_token = data.login.refresh_token

    const name = forename && surname ? `${forename} ${surname}` : responseEmail
    return {
      id,
      email: responseEmail,
      name,
      image: avatar,
      access_token,
      expires_in,
      refresh_token,
      error: false
    }
  } catch(e: any) {
    // console.log('error composable', e.graphQLErrors)
    
    // // open toast on error
    // if(e.graphQLErrors) {
    
    // }
    return {
      error: true,
      errors: e.graphQLErrors
    }
  } 
}
