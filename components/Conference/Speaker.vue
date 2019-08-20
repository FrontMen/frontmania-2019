<template>
  <section class="flex items-center max-w-4xl w-full p-2 lg:p-5 border-solid border-color-frontmania">
    <img
      class="h-64"
      :src="src"
      :alt="name"
    >
    <div class="p-3">
      <h1 class="text-sm lg:text-lg pb-1">
        {{ name }}
      </h1>
      <span class="text-sm lg:text-md leading-normal">
        <slot />
      </span>
    </div>
  </section>
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
    }
  },
  computed: {
    src() {
      return require(`~/assets/images/speakers/${this.image}.jpg`)
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  object-fit: contain;
  max-height: 120px;
}

.border-color-frontmania {
  border-color: #e4032e !important;
}
</style>
