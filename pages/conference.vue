<template>
  <section>
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
import SectionPapercall from '~/components/Conference/SectionPapercall.vue'
import SectionConference from '~/components/Conference/SectionConference.vue'
import SectionSponsors from '~/components/Conference/SectionSponsors.vue'
import SectionTickets from '~/components/Conference/SectionTickets.vue'

export default {
  components: {
    SectionHome,
    SectionPapercall,
    SectionConference,
    SectionSponsors,
    SectionTickets
  },
  data() {
    return {
      observer: null
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
