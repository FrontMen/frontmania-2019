<template>
  <section class="lg:flex items-center justify-center lg:h-screen">
    <fm-slider :imgs="sliderImages" />

    <fm-toolbar>
      <template #contentTrigger>
        <button class="text-fm-white appearance-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><path fill="#FFF" fill-rule="evenodd" d="M43.996 49.735l7.761-.705.43 4.726-18.519 1.681-.43-4.726 6.026-.547-1.204-15.629-4.216.702-.782-4.68 10.102-1.682.781 4.681-1.18.196 1.231 15.983zM37.312 26.75v-5.313h4.25v5.313h-4.25zM29.953 14H53.22v1.094l.214-.16 9.78 12.985h.661v24.823h-.678l-8.175 9.769-.035-.029.062.863L31.782 65l-.04-.557-13.167-9.833.095-.126-1.028.068-1.603-23.94L15 29.577l14.953-14.89V14zm-7.82 37.43l11.706 8.742 18.113-1.289 7.232-8.642V30.352L50.386 18.67h-17.8L20.732 30.475l1.403 20.955z"/></svg>
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
        <svg class="mr-10 h-24 sm:h-48 w-auto " xmlns="http://www.w3.org/2000/svg" width="173" height="85" viewBox="0 0 173 85"><path fill="#FFED00" fill-rule="evenodd" d="M2.72 8.023L3.222 3 24 5.085l-.583 5.857L5.915 9.186l.996 23h14.72v5.886H7.165l.717 16.544 15.534-1.559.583 5.857L3.221 61l-.49-4.915-.653.029L0 8.142l2.72-.119zM115.032 43.21V14H121v45.86h-5.969v-1.49l-11.67-27.32L101.962 60 96 59.72l2.115-43.775 5.963.28-.059 1.206 11.012 25.778zm30.32-29.006L169.72 10l.078.485 1.172-.243L173 20.748l-5.62 1.164-1.027-5.32-15.253 2.631 1.216 13.85h15.844v.864h2.865V59.15h-5.73v-.716L150.17 60l-.087-.89-3.008.622-2.031-10.506 5.62-1.162 1.122 5.81 13.508-1.398V39.003h-17.44v-.672l-.824.077L145 15.295l.52-.05-.168-1.042zM169.877 0L170 5.92l-32.533.676 6.007 77.95-5.914.454-6.033-78.281L71.84 7.96l-.825 21.408h16.964v5.92H70.787l-.726 18.846 21.893-1.681.455 5.903-27.32 2.097-.233-3.032-.856-.033 2.101-54.542 2.92.112-.018-.86L169.876 0zM45.304 45.652L57.088 0 63 1.432 47.883 60l-5.913-1.432.196-.758-.209.046L29 3.472l5.939-1.328 10.365 43.508z"/></svg>
        <svg class="h-24 sm:h-48 w-auto" xmlns="http://www.w3.org/2000/svg" width="49" height="74" viewBox="0 0 49 74"><path fill="#FFED00" fill-rule="evenodd" d="M27.205 12.107l17.511 4.366-1.173 13.597 4.802 1.197L35.141 73.86 6.463 66.71l10.532-42.245-14.278 5.979-2.175-5.859 17.325-7.254 2.176 5.858-1.527.64 3.342.833 5.347-12.556zm3.456 7.394l-2.832 6.65 9.743 2.43.621-7.202-7.532-1.878zM21.59 31.13L20 37.5l19.617 1.416.947-3.055-18.975-4.73zm-3.143 12.607l-2.388 9.575 17.726 4.42 3.908-12.606-19.246-1.39zm-3.921 15.726l-.64 2.566 17.235 4.297.784-2.53-17.38-4.333zM3.74 15.103l1.452-5.822 10.673 2.662-1.451 5.821-10.674-2.66zM14.02.77l8.92 9.069-4.354 4.437-8.92-9.07L14.019.77z"/></svg>
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
