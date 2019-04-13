<template>
  <div
    :class="[heightClass]"
    :style="`background-image: url(${ background })`"
    class="app-section flex flex-col justify-center items-center bg-no-repeat bg-cover"
  >
    <div v-if="$slots.call2Action" class="hidden sm:flex items-center justify-center w-full h-24">
      <slot name="call2Action" />
    </div>

    <div class="max-w-full p-4 sm:py-16 md:py-20 lg:py-8 xl:py-32" :class="[ !fullWidth && 'md:max-w-md' ]">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      required: true
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    peek: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    heightClass() {
      return this.peek ? 'min-h-screen-peek' : 'min-h-screen'
    }
  }
}
</script>

<style lang="scss" scoped>
.is-peek {
  max-height: calc(100vh - 100px);
}
</style>
