<template>
  <section class="page-home">
    <fm-slider :imgs="sliderImages"/>
    <logo/>
    <div class="date">15th November, 2019</div>
    <div class="location">The Netherlands</div>
    <fm-video/>

    <nuxt-link to="/privacy">Privacy</nuxt-link>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import FmVideo from '~/components/Video.vue'
import FmSlider from '~/components/Slider.vue'

export default {
  components: {
    Logo,
    FmSlider,
    FmVideo
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
  @include dead-centered();

  color: white;
  margin: 0 auto;
  min-height: 100vh;
  flex-direction: column;
}

a {
  color: white;
  margin-top: 10px;
}

.date,
.location {
  font-size: 70px;
  font-family: 'frontmania';
}

.location {
  font-size: 30px;
}

@media screen and (min-width: 1200px) {
  .date {
    font-size: 100px;
  }

  .location {
    font-size: 40px;
  }
}
</style>
