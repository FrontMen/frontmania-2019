<template>
  <button @click="$emit('click')">
    <div class="btn__icon">
      <slot name="icon"/>
    </div>

    <span class="btn__text">
      <slot/>
    </span>
  </button>
</template>

<script>
export default {
  name: 'FmBtn'
}
</script>

<style scoped lang="scss">
button {
  appearance: none;
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  background-color: var(--accent-color);
  font: normal bold 24px/1 GTAmericaMono;
  letter-spacing: 1px;
  color: #000000;
  text-transform: uppercase;
  padding: 0 30px;

  @include media('>=tablet') {
    width: 400px;
  }
}

.btn__icon {
  margin-right: 18px;
}
</style>
