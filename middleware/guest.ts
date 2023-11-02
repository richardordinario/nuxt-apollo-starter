export default defineNuxtRouteMiddleware(async(to, from) => {
  const { getSession } = useAuth()
  const session:any = await getSession()

  if (session.accessToken) { 
    return navigateTo('/learn')
  }
})