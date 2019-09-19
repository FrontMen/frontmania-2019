<template>
  <div class="team-member flex-shrink-0 relative overflow-hidden max-w-xs w-1/3 h-18" :class="[`bg-app-${color}`]">
    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
      <rect
        x="159.52"
        y="175"
        width="152"
        height="152"
        rx="8"
        transform="rotate(-45 159.52 175)"
        fill="white"
      />
      <rect
        y="107.48"
        width="152"
        height="152"
        rx="8"
        transform="rotate(-45 0 107.48)"
        fill="white"
      />
    </svg>
    <div class="relative pt-10 px-8 flex items-center justify-center">
      <div class="h-30 w-30 overflow-hidden">
        <img class="relative object-scale-down" :src="src" alt="">
      </div>
    </div>
    <div class="relative text-white px-3 pb-4 mt-6">
      <span class="block opacity-75 mb-1 text-sm">{{ subTitle }} </span>
      <div class="flex justify-between">
        <span class="block font-semibold text-lg">{{ name }}</span>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'Speaker',
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    src() {
      return require(`~/assets/images/team/${this.image}.jpg`)
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  object-fit: contain;
  max-height: 120px;
}
</style>
