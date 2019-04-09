<template>
  <section class="page-conference">
    <!-- <section-conference /> -->
    <!-- <section-papercall /> -->
    <section-lookback />
    <!-- <section-sponsors /> -->
    <!-- <section-tickets /> -->
  </section>
</template>

<script>
// import SectionConference from '~/components/Conference/SectionConference.vue'
import SectionLookback from '~/components/Conference/SectionLookback.vue'
// import SectionPapercall from '~/components/Conference/SectionPapercall.vue'
// import SectionSponsors from '~/components/Conference/SectionSponsors.vue'
// import SectionTickets from '~/components/Conference/SectionTickets.vue'

export default {
  components: {
    // SectionConference,
    SectionLookback
    // SectionPapercall,
    // SectionSponsors
    // SectionTickets
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
