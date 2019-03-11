<template>
  <a :href="href" class="fm-fancy-link" v-bind:style="linkStyle">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'FmFancyLink',
  props: ['href', 'angle'],

  computed: {
    linkStyle: props => {
      const angle = props.angle
      return `transform: rotate(${angle}deg)`
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
  color: #000000;
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
