import pkg from "@apollo/client/core/core.cjs"

const { ApolloClient, createHttpLink, InMemoryCache } = pkg
// Apollo boilerplate to use composables outside of components
export default function() {
  const config = useRuntimeConfig()

  const httpLink = createHttpLink({
    uri: config.public.GQL_HOST,
  })
  const cache = new InMemoryCache()

  return new ApolloClient({
    link: httpLink,
    cache,
  })
}
