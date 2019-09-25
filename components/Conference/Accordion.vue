<template>
  <div class="">
    <div class="tab-header">
      <a
        href="#"
        class="tab-link p-4 py-8 block bg-app-blue hover:bg-blue-darker no-underline text-white border-b-2 border-white flex justify-between"
        @click.prevent="active = !active"
      >
        <div>
          <strong class="block mb-1">{{ title }}</strong>
          <span class="block text-sm flex flex-no-wrap items-center justify-between"> <em class="italics">with</em> {{ speaker }}  <img
            class="rounded-full h-8 w-8  flex items-center justify-center"
            :src="src"
            :alt="name"
          ></span>
        </div>
        <span v-show="!active" class="down-Arrow">&#9660;</span>
        <span v-show="active" class="up-Arrow">&#9650;</span>
      </a>
    </div>
    <div v-show="active" class="tab-content p-4">
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
    image: {
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
  },
  computed: {
    src() {
      return require(`~/assets/images/speakers/${this.image}.jpg`)
    }
  }
}
</script>
