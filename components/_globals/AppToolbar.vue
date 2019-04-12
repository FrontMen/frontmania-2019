<template>
  <div class="fixed pin-t w-full flex flex-col bg-app-black lg:hidden z-10">
    <div class="flex items-center p-4 pr-0 h-20">
      <p class="text-app-white">
        <nuxt-link to="/">
          <app-logo class="h-12 w-auto" />
        </nuxt-link>
      </p>

      <div class="flex-1" />

      <div v-if="$slots.contentTrigger" @click.stop="toggleContent">
        <slot v-if="!showContent" name="contentTrigger" />

        <button v-else class="text-app-white appearance-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><g fill="#FFF" fill-rule="evenodd"><path d="M29.992 14v.688L15 29.578l1.042 1.034 1.607 23.94 1.03-.068-.095.126 13.201 9.833.04.557 23.327-1.655-.063-.863.035.029 8.197-9.77H64V27.92h-.662l-9.805-12.985-.215.16V14H29.992zm-7.606 37.364L21 30.663 32.716 19h17.589L59 30.54v19.65l-7.147 8.537L33.953 60l-11.567-8.636z"/><path d="M54.025 29.03l-3.469-3.081-8.134 8.48-8.676-7.064-3.049 3.467 8.52 6.937-8.73 9.1 3.469 3.08 8.868-9.244 9.615 7.828 3.048-3.467-9.459-7.701z"/></g></svg>
        </button>
      </div>
    </div>

    <div v-if="$slots.content && showContent">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FmToolbar',
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
