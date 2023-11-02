<template>
  <section class=" tw-flex tw-h-[calc(100vh-170px)]" v-if="status === 'success'">
   {{ data }}
   {{ status }}
  </section>
  
</template>

<script setup lang=ts>
  definePageMeta({ 
    layout: 'auth-user',
    middleware: 'auth-user'
  })
  useHead({title: 'Learn'})


  // const data = await useAsyncGql({
  //   operation: 'me'
  // })
  const { data, pending, status } : any = await useAsyncData('me', () => GqlMe(), { server: false })
  useState('auth-user', () => unref(data)?.me)

  console.log(data)
  console.log(status)
</script>
