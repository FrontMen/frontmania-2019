<template>
  <div class="flex flex-wrap -mx-2">
    <div v-for="section in sections" :key="section.name" class="w-1/2 h-12 px-2 mb-2" @click="navigateTo(section)">
      <app-btn
        :color="section.color"
        :active="section.active"
        class="w-full h-full justify-center text-base text-app-white border-solid border-2"
      >
        {{ section.name }}
      </app-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FmNavigation',
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
