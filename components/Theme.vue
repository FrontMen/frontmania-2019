<template>
<style>
  :root {
    --accent-color: {{ accentColor }};
  }
</style>
</template>

<script>
const colors = {
  pink: '#EA5297',
  yellow: '#FFED00',
  lightBlue: '#00AFCB',
  green: '#13A538',
  darkBlue: '#69ACDF',
  red: '#E4032E'
}
export default {
  props: {
    themeColor: {
      type: String,
      default: function() {
        const keys = Object.keys(colors)
        return keys[(keys.length * Math.random()) << 0]
      },
      validator: function(value) {
        return value && Object.keys(colors).indexOf(value) !== -1
      }
    }
  },
  computed: {
    accentColor: function() {
      return colors[this.themeColor]
    }
  },
  data() {
    return {
      colors
    }
  }
}
</script>
