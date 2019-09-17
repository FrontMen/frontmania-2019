<template>
  <h2 class="time-slot" :style="formattedTimeCss">
    {{ time }}
  </h2>
</template>


<script>
export default {
  name: 'TimeStamp',
  props: {
    time: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedTimeCss() {
      return `grid-row: time-${this.time.replace(':', '')}`
    }
  }
}
</script>
