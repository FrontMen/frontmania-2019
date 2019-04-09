<template>
  <fm-section background="/images/bg-blue.png">
    <div class="flex px-4 md:px-8 white block--main">
      <img class="w-1/2 sm:w-1/3 xl:w-1/4 h-auto object-contain" src="/images/fm-logo.png" alt="">
    </div>

    <div class="yellow flex flex-wrap items-center p-4 md:p-8">
      <p class="w-full sm:w-1/2 xl:w-3/4 sm:pr-4 text-center">
        <img class="h-24" src="~/assets/images/sponsors.svg" alt="">
      </p>

      <p class="w-full sm:w-1/2 xl:w-1/4 sm:pl-4">A shout out to our sponsors!</p>
    </div>
  </fm-section>
</template>

<script>
import FmSection from '~/components/Section.vue'

export default {
  components: { FmSection }
}
</script>

<style lang="scss" scoped>
img {
  object-fit: contain;
}
</style>
