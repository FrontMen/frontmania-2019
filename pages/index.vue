<template>
  <section class="lg:flex items-center justify-center lg:h-screen">
    <fm-slider />

    <fm-toolbar>
      <template #contentTrigger>
        <button class="text-fm-white appearance-none">
          <img src="~/assets/images/svg/home/menu.svg" alt="menu">
        </button>
      </template>

      <template #content>
        <div class="bg-fm-white text-fm-black p-4 sm:p-8">
          <p class="mb-4">FrontMania is a group of people who are crazy about frontend development a.k.a. frontend maniacs.</p>
          <p>We as a group believe that frontend development should be fun for everyone!</p>
        </div>
      </template>
    </fm-toolbar>

    <div class="flex flex-col p-4 mt-20 lg:mt-0 xl:max-w-lg">
      <div class="flex bg-fm-blue w-full pt-2 sm:pt-10 sm:pb-8 px-10 sm:px-20 sm:pb-4 items-center text-center font-bold text-fm-yellow">
        <img class="mr-10 h-24 sm:h-48 w-auto " src="~/assets/images/svg/home/events.svg" alt="Events">
        <img class="h-24 sm:h-48 w-auto" src="~/assets/images/svg/home/spraycan.svg" alt="Events icon">
      </div>

      <fm-block :v-if="events.length">
        <div v-for="event in events" :key="event.id">
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
