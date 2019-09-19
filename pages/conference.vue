<template>
  <section>
    <portal to="sidebar">
      <app-navigation class="mt-12" />
    </portal>

    <app-toolbar>
      <template #contentTrigger>
        <button class="text-app-white appearance-none">
          <img src="~/assets/images/conference/menu.svg" alt="menu">
        </button>
      </template>

      <template #content>
        <div class="bg-app-black p-8">
          <app-navigation />
        </div>
      </template>
    </app-toolbar>

    <component
      :is="`Section${ section.name }`"
      v-for="section in sections"
      :id="section.name"
      :key="section.name"
      ref="section"
    />
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SectionHome from '~/components/Conference/SectionHome.vue'
import SectionSpeakers from '~/components/Conference/SectionSpeakers.vue'
import SectionConference from '~/components/Conference/SectionConference.vue'
import SectionSponsors from '~/components/Conference/SectionSponsors.vue'
import SectionTickets from '~/components/Conference/SectionTickets.vue'
import twitterCardImage from '~/assets/images/conference/twitter-card.png'
import SectionTeam from '~/components/Conference/SectionTeam.vue'

export default {
  components: {
    SectionHome,
    SectionSpeakers,
    SectionConference,
    SectionSponsors,
    SectionTickets,
    SectionTeam
  },
  data() {
    return {
      observer: null,
      baseUrl: process.server
        ? process.env.DEPLOY_URL || process.env.URL || 'http://localhost:3000'
        : window.location.origin
    }
  },
  computed: {
    ...mapState('conference', ['sections']),

    sectionElements() {
      return this.$refs.section.map(section => section.$el)
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(this.onIntersection.bind(this), {
      threshold: 0.5
    })

    this.sectionElements.forEach(section => {
      this.observer.observe(section)
    })
  },
  destroyed() {
    this.sectionElements.forEach(section => {
      this.observer.unobserve(section)
    })

    this.observer.disconnect()
  },
  methods: {
    ...mapActions('conference', ['setActiveMenuItem']),

    onIntersection(changes) {
      changes.forEach(change => {
        if (change.intersectionRatio > 0.5 && change.isIntersecting) {
          this.setActiveMenuItem(change.target.getAttribute('id'))
        }
      })
    }
  },
  head() {
    return {
      meta: [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@frontmania' },
        { name: 'twitter:title', content: 'FrontMania 2019 Conference' },
        {
          name: 'twitter:description',
          content: 'Come and be part of great FrontMania Conference!'
        },
        {
          name: 'twitter:image',
          content: `${this.baseUrl}${twitterCardImage}`
        },
        { name: 'twitter:image:alt', content: 'FrontMania 2019' }
      ]
    }
  }
}
</script>

<style lang="scss">
.decor {
  max-width: 80%;

  @include media('>=tablet') {
    max-width: 90%;
  }

  @include media('>=1300px') {
    max-width: 100%;
  }
}
</style>
