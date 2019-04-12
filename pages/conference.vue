<template>
  <section>
    <fm-toolbar>
      <template #contentTrigger>
        <button class="text-fm-white appearance-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><path d="M58.875 16L20 18.287l.379 6.442 38.875-2.286zM20 43.024l38.875 2.287.379-6.443-38.875-2.287zm0 14.138l.38 6.442 38.874-2.286-.379-6.443z" fill="#FFF" fill-rule="evenodd"/></svg>
        </button>
      </template>

      <template #content>
        <div class="bg-fm-black p-8">
          <fm-navigation />
        </div>
      </template>
    </fm-toolbar>

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
import FmToolbar from '~/components/Toolbar.vue'
import FmNavigation from '~/components/Navigation.vue'
import SectionHome from '~/components/Conference/SectionHome.vue'
import SectionPapercall from '~/components/Conference/SectionPapercall.vue'
import SectionConference from '~/components/Conference/SectionConference.vue'
import SectionSponsors from '~/components/Conference/SectionSponsors.vue'
import SectionTickets from '~/components/Conference/SectionTickets.vue'

export default {
  components: {
    FmToolbar,
    FmNavigation,
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
