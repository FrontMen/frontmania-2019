<template>
  <div class="fm-menu flex flex-wrap -mx-2">
    <div v-for="section in sections" :key="section.name" class="w-1/2 h-12 px-2 mb-2" @click="navigateTo(section)">
      <fm-btn
        :color="section.color"
        :active="section.active"
        class="w-full h-full justify-center text-base white--text border-solid border-2"
      >
        {{ section.name }}
      </fm-btn>
    </div>
  </div>
</template>

<script>
import FmBtn from '~/components/Button'
import { mapState } from 'vuex'

export default {
  name: 'FmNavigation',
  components: { FmBtn },
  computed: {
    ...mapState('conference', ['sections'])
  },
  methods: {
    navigateTo(section) {
      document
        .getElementById(section.name)
        .scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
