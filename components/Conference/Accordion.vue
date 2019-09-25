<template>
  <div class="">
    <div class="tab__header">
      <a
        href="#"
        class="tab__link p-4 py-8 block bg-blue-dark hover:bg-blue-darker no-underline text-white border-b-2 border-white flex justify-between"
        @click.prevent="active = !active"
      >
        <div>
          <strong class="block mb-1">{{ title }}</strong>
          <span class="block text-sm"> with {{ speaker }}</span>
        </div>
        <span v-show="!active" class="down-Arrow">&#9660;</span>
        <span v-show="active" class="up-Arrow">&#9650;</span>
      </a>
    </div>
    <div v-show="active" class="tab__content p-2">
      <slot />
    </div>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    speaker: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    requirements: {
      type: String,
      required: true
    },
    whatYoullLearn: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  }
}
</script>
