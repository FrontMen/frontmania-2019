<template>
  <app-section background="/images/slider/1.jpg" full-width peek>
    <div class="flex flex-col items-center p-4">
      <div class="text-4xl sm:text-5xl sm:self-start sm:pl-10 text-app-yellow date mb-8 lg:mb-4">
        15.11.19
      </div>
      <img src="~/assets/images/conference/conference.svg" alt="conference">

      <app-video />
    </div>
  </app-section>
</template>

<script>
import AppVideo from '~/components/Conference/Video.vue'

export default {
  components: { AppVideo }
}
</script>
