<template>
  <div class="fm-block">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FmBlock'
}
</script>

<style scoped lang="scss">
.fm-block {
  position: relative;
  padding: 45px;
  background-color: black;
  color: #fff;

  @include media('>=tablet') {
    padding: 65px;
    width: 85%;
  }

  @include media('>=desktop') {
    width: 75%;
    max-width: 940px;
  }
}
</style>
