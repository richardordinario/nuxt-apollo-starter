<template>
  <p class=" tw-text-[15px] tw-text-gray-600">
    {{ props.text  }}
  </p>
</template>

<script setup lang=ts>
  const props = defineProps<{
    text: {
      type: String,
      required: true,
    }
  }>()
</script>