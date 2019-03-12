<template>
  <div class="app">
    <fm-sidebar/>
    <div class="app__content">
      <fm-slider class="slider" :imgs="sliderImages"/>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import FmSidebar from '~/components/Sidebar'
import FmSlider from '~/components/Slider.vue'

export default {
  components: { FmSlider, FmSidebar },
  data() {
    return {
      sliderImages: [
        '/images/slider/1.jpg',
        '/images/slider/2.jpg',
        '/images/slider/3.jpg',
        '/images/slider/4.jpg',
        '/images/slider/5.jpg',
        '/images/slider/6.jpg'
      ]
    }
  }
}
</script>

<style lang="scss">
.app__content {
  @include media('>=tablet') {
    margin-left: $sidebar-width;
  }
}
</style>
