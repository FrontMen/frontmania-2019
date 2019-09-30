<template>
  <app-section class="background" background="/images/bg-red.jpg">
    <div class="bg-app-yellow flex flex-wrap items-center p-4 sm:p-8">
      <p class="w-full sm:w-1/2 xl:w-1/4 sm:pr-4 text-center">
        <img
          class="h-24"
          src="~/assets/images/conference/dancing-character.svg"
          alt=""
        >
      </p>

      <p class="w-full sm:w-1/2 xl:w-3/4 sm:pl-4 text-5xl text-center">
        SPEAKERS
      </p>
    </div>
    <article class="flex flex-wrap items-center p-4 sm:p-2 bg-app-yellow">
      <speaker
        v-for="speaker in speakers"
        :key="speaker.name"
        :image="speaker.image"
        :name="speaker.name"
        class="speaker"
      >
        {{ speaker.description }}
      </speaker>
    </article>
  </app-section>
</template>

<script>
import Speaker from '~/components/Conference/Speaker.vue'

export default {
  components: {
    Speaker
  },
  data() {
    return {
      speakers: [
        {
          name: 'Seb Lee-Delisle',
          image: 'sebleedelisle',
          description:
            'Seb Lee-Delisle is a digital artist and speaker who specialises in large scale interactive light installations.'
        },
        {
          name: 'Milica Mihajlija',
          image: 'MilicaMIhajlija',
          description:
            'Contractor for Google, writer about performance on web.dev. and Mozilla Tech Speaker'
        },
        {
          name: 'Lee Boonstra',
          image: 'leeBoonstra',
          description:
            'Sales engineer in the Google Cloud team where she assist the sales team with technical knowledge about cloud computing and machine learning for the financial industry.'
        },
        {
          name: 'Niels Leenheer',
          image: 'nielsleenheer',
          description:
            'Creator of HTML5test.com is a Mozilla TechSpeaker, Google Developer Expert, Microsoft MVP and CTO of Salonhub'
        },
        {
          name: 'Andre Staltz',
          image: 'andrestaltz',
          description:
            'Open source developer, creator of cycle.JS, a programming instructor and speaker'
        },
        {
          name: 'Ruben van der Leun',
          image: 'rubenvanderleun',
          description:
            'Owner of Leunix and an Augmented and Virtual Reality enthusiast'
        },
        {
          name: 'Katerina Skroumpelou',
          image: 'KaterinaSkroumpelou',
          description:
            'Frontend developer at Upstream and co-organizing AngularAthens'
        },
        {
          name: 'Prashant Palikhe',
          image: 'prashantpalikhe',
          description:
            'FrontMania co-organizer. Frontend developer from Utrecht, Netherlands. While not coding, he likes to travel, preach about technologies and break a sweat at the basketball court with friends.'
        },
        {
          name: 'Sebastian Golasch',
          image: 'sebastiangolasch',
          description:
            'Specialist Senior Manager Software Developer” at Deutsche Telekom'
        },
        {
          name: 'Tal Ater',
          image: 'talater',
          description:
            'A founder, a CTO, an open-sourcerer, an O’Reilly published author, a W3C Invited Expert, and thanks to one sleepless weekend, the creator of a choose-your-own-adventure GitHub template generator featuring Lewis Carroll and Cthulhu'
        },
        {
          name: 'Lucas Fernandes da Costa',
          image: 'LucasFernandesdaCosta',
          description: 'Core team member of Chai.js and Sinon.js'
        },
        {
          name: 'Felix Rieseberg',
          image: 'FelixRieseberg',
          description: `Felix is a Senior Staff Engineer and Tech Lead at Slack. He is a co-maintainer of Electron and maintainer of numerous open source libraries, focusing on JavaScript and Node.js`
        },
        {
          name: 'Albert Groothedde',
          image: 'albertgroothedde',
          description: `Albert is a Frontmaniac @Frontmen, the creator of Ortum and GraphQL enthusiast. He also created graphql-query-path and uses Colemak.`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  object-fit: contain;
  max-height: 120px;
}
.background {
  background-color: #e4032e;
}

.speaker {
  border-bottom: 1px solid #e4032e;
}

.speaker:last-child {
  border-bottom: none !important;
}
</style>
