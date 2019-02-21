<template>
  <button @click="$emit('click')">
    <div class="btn__icon">
      <slot name="icon"></slot>
    </div>

    <span class="btn__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'FmBtn',
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
button {
  appearance: none;
  width: 400px;
  height: 96px;
  display: flex;
  align-items: center;
  background-color: #ffed00;
  font: normal bold 24px/1 GTAmericaMono;
  letter-spacing: 1px;
  text-align: center;
  color: #000000;
  text-transform: uppercase;
  transform: rotate(-10deg);
  padding: 0 30px;
}

.btn__icon {
  margin-right: 18px;
}
</style>
