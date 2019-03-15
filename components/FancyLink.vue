<template>
  <span>
    <nuxt-link v-if="!isExternal" :to="to" class="fm-fancy-link" :style="linkStyle">
      <slot/>
    </nuxt-link>
    <a
      v-else
      :href="to"
      class="fm-fancy-link"
      :style="linkStyle"
      target="_blank"
      rel="noopener"
    >
      <slot/>
    </a>
  </span>
</template>

<script>
export default {
  name: 'FmFancyLink',
  props: {
    to: String,
    themeColor: String,
    angle: String
  },
  computed: {
    linkStyle: props => {
      const angle = props.angle
      const themeColor = props.themeColor || '#ffed00'

      return `transform: rotate(${angle}deg); background-color: ${themeColor}`
    },
    isExternal() {
      return this.to.startsWith('http')
    }
  }
}
</script>

<style scoped lang="scss">
.fm-fancy-link {
  display: block;
  align-items: center;
  background-color: #ffed00;
  font-family: GTAmericaMono;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;
  padding: 2px 8px;
  text-align: center;
  text-decoration: none;

  @include media('>=desktop') {
    padding: 2px 12px;
    word-wrap: none;
    white-space: nowrap;
  }
}
</style>
