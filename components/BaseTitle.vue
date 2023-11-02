<template>
  <h1 class=" tw-text-xl tw-font-bold tw-my-2">
    {{ props.text }}
  </h1>
</template>

<script setup lang=ts>
  const props = defineProps<{
    text: {
      type: string,
      required: true,
    }
  }>()
</script>