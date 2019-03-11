<template>
  <section class="page-home">
    <fm-slider class="slider" :imgs="sliderImages"/>
    <h1 class="events-header">Events</h1>
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
          linkText: 'See event details',
          href: 'https://www.meetup.com',
          date: '28.03.2019',
          venue: 'Jumbo Foodmarkt',
          location: 'Veghel',
          buttonAngle: '1.5',
          themeColor: '#e4032e'
        },
        {
          id: '002',
          eventName: 'meetup',
          linkText: 'See event details',
          href: 'https://www.meetup.com',
          date: '28.03.2019',
          venue: 'Rabobank',
          location: 'Utrecht',
          buttonAngle: '-1.15',
          themeColor: '#ea5297'
        },
        {
          id: '003',
          eventName: 'Frontmania Conference',
          linkText: 'Get tickets',
          href: '/conference',
          date: '28.03.2019',
          venue: 'Pand Noord',
          location: 'Amsterdam',
          buttonAngle: '1.25',
          themeColor: '#13a538'
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

.events-header {
  display: block;
  text-indent: -9999px;
  background: url('~assets/svg/title-events.svg') no-repeat left top;
  background-size: contain;
  height: 150px;
  width: 75%;

  @include media('<=tablet') {
    width: 313px;
  }
}

.slider {
  display: none;

  @include media('>=tablet') {
    display: block;
  }
}
</style>
