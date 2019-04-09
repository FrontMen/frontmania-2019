<template>
  <button :class="[ size ]" @click="$emit('click')">
    <div v-if="$slots.icon" class="btn__icon">
      <slot name="icon" />
    </div>
    
    <slot />

    <div v-if="$slots.icon_append" class="btn__icon">
      <slot name="icon_append" />
    </div>
  </button>
</template>

<script>
export default {
  name: 'FmBtn',
  props: {
    size: {
      type: String,
      default: 'large'
    }
  }
}
</script>

<style scoped lang="scss">
button {
  appearance: none;
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  background-color: #ffed00;
  font: normal bold 24px/1 GTAmericaMono;
  letter-spacing: 1px;
  color: #000000;
  text-transform: uppercase;
  padding: 0 30px;

  &.large {
    width: 100%;
    height: 96px;

    @include media('>=tablet') {
      width: 400px;
    }
  }

  &.medium {
    width: 100%;
    height: 64px;
    font-size: 20px;
    padding: 0 16px;

    @include media('>=tablet') {
      width: 328px;
    }
  }
}

.btn__icon {
  margin-right: 18px;
}
</style>
