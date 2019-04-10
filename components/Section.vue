<template>
  <div 
    class="flex justify-center flex-col items-center bg-no-repeat bg-cover min-h-screen p-4 sm:py-16 md:py-20 lg:py-8 xl:py-32" 
    :class="{'is-peek': peek}" 
    :style="`background-image: url(${ background })`"
  >
    <div class="fm-section__content max-w-full md:max-w-md xl:max-w-lg">
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
    peek: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.fm-section__content {
  @include media('>=desktop') {
    max-width: 600px !important;
  }
}
</style>
