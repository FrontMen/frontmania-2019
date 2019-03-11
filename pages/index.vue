<template>
  <section class="page-home">
    <fm-slider class="slider" :imgs="sliderImages"/>
    <fm-block>
      <fm-row event="Frontmania Pubquiz" date="28.03.2019" venue="venue" location="veghel"></fm-row>
      <fm-row event="meetup" date="28.03.2019" venue="venue" location="veghel"></fm-row>
      <fm-row event="Frontmania Conference" date="28.03.2019" venue="venue" location="veghel"></fm-row>
    </fm-block>
  </section>
</template>

<script>
import FmSlider from '~/components/Slider.vue'
import FmBlock from '~/components/Block.vue'
import FmRow from '~/components/Row.vue'

export default {
  components: {
    FmBlock,
    FmSlider,
    FmRow
  },
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
.page-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include media('>=tablet') {
    height: 100vh;
  }
}

.slider {
  display: none;

  @include media('>=tablet') {
    display: block;
  }
}
</style>
