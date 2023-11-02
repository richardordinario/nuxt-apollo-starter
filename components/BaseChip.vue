<template>
  <div class=" tw-px-5 tw-border-2 tw-border-info-1 tw-text-info-1 tw-font-bold tw-rounded-lg tw-text-sm">
    {{ props.text }}
  </div>
</template>

<script setup lang=ts>
  const props = defineProps<{
    text: {
      type: string,
      required: true,
    }
  }>()
</script>