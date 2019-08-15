<template>
  <app-section class="background">
     <div class="bg-app-yellow flex flex-wrap items-center p-4 sm:p-8">
      <p class="w-full sm:w-1/2 xl:w-1/4 sm:pr-4 text-center">
        <img class="h-24" src="~/assets/images/conference/dancing-character.svg" alt="">
      </p>

      <p class="w-full sm:w-1/2 xl:w-3/4 sm:pl-4 text-5xl text-center">SPEAKERS</p>
    </div>
    <article class="flex flex-wrap items-center p-4 bg-app-yellow">
      <speaker src="/images/speakers/MilicaMIhajlija.jpg" name="Milica Mihajlija">
        Contractor for Google, writer about performance on web.dev. and Mozilla Tech Speaker
      </speaker>
      <speaker src="/images/speakers/nielsleenheer.jpg" name="Niels Leenheer">
        Creator of HTML5test.com is a Mozilla TechSpeaker, Google Developer Expert, Microsoft MVP and CTO of Salonhub
      </speaker>
      <speaker src="/images/speakers/andrestaltz.jpg" name="Andre Staltz">
        Open source developer, creator of cycle.JS, a programming instructor and speaker
      </speaker>
      <speaker src="/images/speakers/rubenvanderleun.jpeg" name="Ruben van der Leun">
        Owner of Leunix and an Augmented and Virtual Reality enthusiast
      </speaker>
      <speaker src="/images/speakers/KaterinaSkroumpelou.jpg" name="Katerina Skroumpelou">
        Frontend developer at Upstream and co-organizing AngularAthens
      </speaker>
      <speaker src="/images/speakers/sebastiangolasch.png" name="Sebastian Golasch">
        “Specialist Senior Manager Software Developer” at Deutsche Telekom
      </speaker>
      <speaker src="/images/speakers/talater.jpeg" name="Tal Ater">
        A founder, a CTO, an open-sourcerer, an O’Reilly published author, a W3C Invited Expert, and thanks to one sleepless weekend, the creator of a choose-your-own-adventure GitHub template generator featuring Lewis Carroll and Cthulhu.
      </speaker>
      <speaker src="/images/speakers/LucasFernandesdaCosta.jpeg" name="Lucas Fernandes da Costa">
        Core team member of Chai.js and Sinon.js
      </speaker>
    </article>
  </app-section>
</template>

<script>
import Speaker from '~/components/Conference/Speaker.vue'

export default {
  components: {
    Speaker
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
