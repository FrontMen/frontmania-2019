<template>
  <div class="fm-section p-4 sm:py-16 md:py-20 lg:py-8 xl:py-32" :class="{'is-peek': peek}" :style="`background-image: url(${ background })`">
    <div class="fm-section__content">
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
.fm-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.fm-section.is-peek {
  max-height: 85vh;
  height: 85vh;
}

.fm-section__content {
  max-width: 100%;

  @include media('>=tablet') {
    max-width: 640px;
  }

  @include media('>=desktop') {
    max-width: 600px;
  }

  @include media('>=xl') {
    max-width: 800px;
  }
}
</style>
