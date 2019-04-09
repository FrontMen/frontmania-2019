<template>
  <section class="page-home">
    <h1 class="events-header">
      Events
    </h1>
    <fm-slider />
    <fm-block>
      <div v-for="event in fmEvents" :key="event.id" :v-if="fmEvents.length">
        <fm-row :event="event" />
      </div>
    </fm-block>
  </section>
</template>

<script>
import FmRow from '~/components/Row.vue'
import FmBlock from '~/components/Block.vue'
import FmSlider from '~/components/Slider.vue'

export default {
  components: {
    FmRow,
    FmBlock,
    FmSlider
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
      ],
      fmEvents: [
        {
          id: '001',
          eventName: 'Frontmania Pubquiz',
          linkText: 'See event details',
          href: 'https://www.meetup.com/FrontMania/events/259185705/',
          date: '28.03.2019',
          venue: 'Claude Debussylaan 2',
          location: 'Amsterdam',
          buttonAngle: '1.5',
          themeColor: '#e4032e'
        },
        {
          id: '002',
          eventName: 'Frontmania Pubquiz',
          linkText: 'See event details',
          href:
            'https://www.meetup.com/Building-an-e-commerce-platform-withTypeScript-React-GraphQL/events/259723732/?joinRsvpYes=true',
          date: '16.04.2019',
          venue: 'Kramp Groep Breukelaarweg 33 ',
          location: 'Varsseveld',
          buttonAngle: '1.5',
          themeColor: '#ea5297'
        },
        {
          id: '003',
          eventName: 'Frontmania Conference',
          linkText: 'Get tickets',
          href: '/conference',
          date: '15.11.2019',
          venue: 'Croeselaan 18',
          location: 'Utrecht',
          buttonAngle: '0',
          themeColor: '#13a538'
        }
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
