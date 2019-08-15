<template>
  <section class="flex items-center max-w-4xl w-full p-5 border-b border-solid border-color-frontmania">
    <img class="h-64" :src="src" alt="">
    <div class="p-3">
      <h1 class="text-xl">
        {{name}}
      </h1>
      <span>
      <slot></slot>
    </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'speaker',
  props: {
    src: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
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
