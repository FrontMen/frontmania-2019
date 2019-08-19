<template>
  <app-section class="background">
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
    <article class="flex flex-wrap items-center p-4 bg-app-yellow">
      <speaker
        v-for="speaker in speakers"
        :key="speaker.name"
        :image="speaker.image"
        :name="speaker.name"
        :class="{'border-b': !speaker.last}"
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
          name: 'Milica Mihajlija',
          image: 'MilicaMIhajlija',
          description:
            'Contractor for Google, writer about performance on web.dev. and Mozilla Tech Speaker'
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
          description: 'CTO @Frontmen and co-organizing FrontMania'
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
            'A founder, a CTO, an open-sourcerer, an O’Reilly published author, a W3C Invited Expert, and thanks to one sleepless weekend, the creator of a choose-your-own-adventure GitHub template generator featuring Lewis Carroll and Cthulhu.'
        },
        {
          name: 'Lucas Fernandes da Costa',
          image: 'LucasFernandesdaCosta',
          description: 'Core team member of Chai.js and Sinon.js',
          last: true
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

.border-color-frontmania {
  border-color: #e4032e !important;
}
</style>
