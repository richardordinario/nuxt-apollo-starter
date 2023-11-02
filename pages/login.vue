<template>
  <form @submit.prevent="login">
    <input type="text" class=" tw-p-2 tw-border" v-model="email">
    <input type="password" class=" tw-p-2 tw-border" v-model="password">
    <button type="submit">Login</button>
  </form>
</template>

<script setup lang=ts>
  definePageMeta({
    middleware: 'guest'
  })
  const router = useRouter()
  const { signIn, getSession, signOut } = useAuth()

  const email = ref('')
  const password = ref('')
  
  const login = async () => {
    try {
      const data = await signIn('credentials', { 
        email: unref(email),
        password: unref(password),
        redirect: false,
      })

      if(!data.error) {
        const session:any = await getSession()
        useGqlHeaders({ 'Authorization': `Bearer ${session.accessToken}` })
        router.push('learn')
      }
    } catch (error) {
      console.log('ERROR', error)
    }

  }
</script>