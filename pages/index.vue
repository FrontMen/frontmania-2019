<template>
  <section class="page-home">
    <fm-slider class="slider" :imgs="sliderImages"/>
    <fm-block>
      <div v-for="event in fmEvents" :key="event.id" :v-if="fmEvents.length">
        <fm-row :event="event"/>
      </div>
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
      fmEvents: [
        {
          id: '001',
          eventName: 'Frontmania Pubquiz',
          date: '28.03.2019',
          venue: 'Jumbo Foodmarkt',
          location: 'Veghel',
          buttonAngle: '2.25'
        },
        {
          id: '002',
          eventName: 'meetup',
          date: '28.03.2019',
          venue: 'Rabobank',
          location: 'Utrecht',
          buttonAngle: '-1.50'
        },
        {
          id: '003',
          eventName: 'Frontmania Conference',
          date: '28.03.2019',
          venue: 'Pand Noord',
          location: 'Amsterdam',
          buttonAngle: '1.75'
        }
      ],
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
