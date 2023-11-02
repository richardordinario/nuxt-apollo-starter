<template>
  <input :class="` tw-px-3 tw-py-2 tw-font-medium tw-text-gray-800 tw-text-[15px] tw-bg-white focus:tw-outline-none tw-shadow tw-rounded focus:tw-ring-2 tw-ring-blue-500
  ${props.block ? ' tw-w-full' : ''}
  ${props.class}`"/>
</template>

<script setup lang=ts>
  const props = defineProps<{
    class: {
      type: string,
      required: false,
    },
    block: {
      type: boolean,
      required: false,
      default: false
    }
  }>()
</script>
