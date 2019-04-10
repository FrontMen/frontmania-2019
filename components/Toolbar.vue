<template>
  <div class="fixed pin-t w-full flex flex-col bg-fm-black lg:hidden z-10">
    <div class="flex items-center p-4 h-20">
      <p class="text-fm-white">
        <nuxt-link to="/">
          <fm-logo class="h-12 w-auto" />
        </nuxt-link>
      </p>

      <div class="flex-1" />

      <div v-if="$slots.contentTrigger" @click.stop="toggleContent">
        <slot name="contentTrigger" />
      </div>
    </div>

    <div v-if="$slots.content && showContent">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import FmLogo from '@/components/Logo'

export default {
  name: 'FmToolbar',
  components: { FmLogo },
  data() {
    return {
      showContent: false
    }
  },
  mounted() {
    this.onPageClick = this.onPageClick.bind(this)

    document.body.addEventListener('click', this.onPageClick)
  },
  destroyed() {
    document.body.removeEventListener('click', this.onPageClick)
  },
  methods: {
    toggleContent() {
      this.showContent = !this.showContent
    },

    onPageClick() {
      this.showContent = false
    }
  }
}
</script>

<style>
</style>
