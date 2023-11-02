<template>
  <section class=" tw-min-h-[calc(100vh-170px)]">
    {{ data }}
    <!-- {{ user?.email }} -->
  </section>
</template>

<script setup lang=ts>
  definePageMeta({ 
    layout: 'auth-user',
    middleware: 'auth-user'
  })

  useHead({title: 'Analysis'})

  const data = await useAsyncGql({
    operation: 'blogs'
  })

  // const user : any = useState('auth-user')
  // console.log('analysis', user)
</script>
