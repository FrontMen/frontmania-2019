<template>
  <section class="flex items-center justify-center h-screen">
    <fm-slider :imgs="sliderImages" />

    <fm-toolbar>
      <template #contentTrigger>
        <button class="text-fm-white appearance-none">menu</button>
      </template>

      <template #content>
        <div class="bg-fm-white text-fm-black p-8">
          <p class="mb-4">FrontMania is a group of people who are crazy about frontend development a.k.a. frontend maniacs.</p>
          <p>We as a group believe that frontend development should be fun for everyone!</p>
        </div>
      </template>
    </fm-toolbar>

    <div class="flex flex-col p-4 xl:max-w-lg">
      <div class="bg-fm-blue w-full py-4 items-center text-center font-bold text-fm-yellow">
        EVENTS
      </div>

      <fm-block>
        <div v-for="event in events" :key="event.id" :v-if="events.length">
          <fm-row :event="event" />
        </div>
      </fm-block>
    </div>
  </section>
</template>

<script>
import FmRow from '~/components/Home/Row.vue'
import FmSlider from '~/components/Slider.vue'
import FmToolbar from '~/components/Toolbar.vue'
import FmBlock from '~/components/Home/Block.vue'

export default {
  components: {
    FmRow,
    FmBlock,
    FmSlider,
    FmToolbar
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
      events: [
        {
          id: '001',
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
          id: '002',
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
