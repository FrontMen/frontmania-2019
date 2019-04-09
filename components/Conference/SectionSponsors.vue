<template>
  <fm-section background="/images/bg-blue.png">
    <div class="flex px-4 py-10 white block--main">
      <img class="h-32" src="/images/fm-logo.png" alt="">
    </div>

    <div class="yellow py-5">
      <div class="flex items-center h-32">
        <p class="w-3/4 pl-8 text-center">
          <img class="h-24" src="~/assets/images/sponsors.svg" alt="">
        </p>

        <p class="w-1/4 pr-10">A shout out to our sponsors</p>
      </div>
    </div>
  </fm-section>
</template>

<script>
import FmSection from '~/components/Section.vue'

export default {
  components: { FmSection }
}
</script>
