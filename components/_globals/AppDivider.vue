<template>
  <div :class="[ size === 'large' ? 'w-16' : 'w-12' ]" class="bg-app-white h-2 mb-2" />
</template>

<script>
export default {
  name: 'FmDivider',
  props: {
    size: {
      type: String,
      default: 'large',
      validator: size => {
        return ['large', 'medium', 'small'].includes(size)
      }
    }
  }
}
</script>
