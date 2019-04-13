<template>
  <div
    :class="[heightClass]"
    :style="backgroundStyle"
    class="app-section flex flex-col justify-center items-center bg-no-repeat bg-cover"
  >
    <div v-if="$slots.call2Action" class="hidden sm:flex items-center justify-center w-full h-24">
      <slot name="call2Action" />
    </div>

    <div ref="sectionContent" class="max-w-full p-4 sm:py-16 md:py-20 lg:py-8 xl:py-32" :class="[ !fullWidth && 'md:max-w-md' ]">
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
    lazy: {
      type: Boolean,
      default: false
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
  data() {
    return {
      observer: null,
      lazyload: this.lazy,
      heightClass: this.peek ? 'min-h-screen-peek' : 'min-h-screen'
    }
  },
  computed: {
    backgroundStyle() {
      return this.lazyload ? '' : `background-image: url(${this.background})`
    }
  },
  mounted() {
    if (this.lazyload) {
      this.observer = new IntersectionObserver(this.onIntersection.bind(this))
      this.observer.observe(this.$refs.sectionContent)
    }
  },
  beforeDestroy() {
    this.observer && this.observer.disconnect()
  },
  methods: {
    onIntersection(changes) {
      changes.forEach(change => {
        if (this.lazyload && change.isIntersecting) {
          this.lazyload = false
          this.observer.unobserve(this.$refs.sectionContent)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.is-peek {
  max-height: calc(100vh - 100px);
}
</style>
