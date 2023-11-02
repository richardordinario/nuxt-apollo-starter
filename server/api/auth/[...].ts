// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import login from './login'
const config = useRuntimeConfig()

export default NuxtAuthHandler({
  secret: config.APP_SECRET,
  providers: [
    CredentialsProvider.default({
      name: 'credentials',
      credentials: {},
      // callbackUrl: 'http://localhost:3000/login',
      async authorize(credentials: any) {
        // console.log(credentials)
        const { email, password } = credentials as {
          email: string
          password: string
        }

        const user = await login(email, password)
        // console.log(user)
        // return user;
        if(!user.error) {
          return user;

        } else {
          // throw createError({ statusCode: 401, message: "Unauthorized" }); 
          console.error('Warning: Malicious login attempt registered, bad credentials provided')
          return null;
        }
      }
    })
  ],
  callbacks:  {
    async jwt({user, token, account}) {
      // Persist the OAuth access_token and or the user id to the token right after 
      if (user) {
        token.accessToken = user.access_token
        token.apolloExpires = user.expires_in
        token.refreshToken = user.refresh_token
        token.id = user.id
        token.provider = account.provider
        token.socialToken = account.oauth_token ?? account.access_token
        token.secret = account.oauth_token_secret ?? ''
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.apolloExpires = token.apolloExpires
      session.user.id = token.id
      session.user.provider = token.provider
      session.user.socialToken = token.socialToken
      session.user.secret = token.secret
      return session
    }
  },

  session: {
    strategy: 'jwt'
  }
})