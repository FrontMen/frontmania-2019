<template>
  <component
    :is="tag"
    v-bind="anchorAttrs"
    :class="[ size, active ? 'bg-app-black' : `bg-app-${color}`, `border-app-${color}` ]"
    class="flex items-center appearance-none no-underline uppercase text-app-black"
    @click="onClick"
  >
    <div v-if="$slots.icon" class="btn__icon mr-4">
      <slot name="icon" />
    </div>

    <slot />

    <div v-if="$slots.icon_append" class="btn__icon ml-4">
      <slot name="icon_append" />
    </div>
  </component>
</template>

<script>
export default {
  name: 'FmBtn',
  props: {
    size: {
      type: String,
      default: 'large'
    },
    tag: {
      type: String,
      default: 'button',
      validator(tag) {
        return ['a', 'button'].includes(tag)
      }
    },
    href: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'yellow'
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    anchorAttrs() {
      if (this.tag !== 'a') {
        return {}
      }

      return {
        href: this.href,
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    }
  },
  methods: {
    onClick() {
      if (this.tag === 'button') {
        this.$emit('click')
      }
    }
  }
}
</script>

<style scoped lang="scss">
button,
a {
  width: 100%;
  height: 96px;
  font: normal bold 24px/1 GTAmericaMono;
  padding: 0 30px;

  &:hover,
  &:focus {
    animation: vibrationMania 0.8s cubic-bezier(0.4, 0.05, 0.2, 0.9) both;
    backface-visibility: hidden;
    perspective: 1000px;
  }

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

@keyframes vibrationMania {
  10%,
  90% {
    transform: rotate(2deg);
  }

  20%,
  80% {
    transform: rotate(-2deg);
  }

  30%,
  50%,
  70% {
    transform: rotate(2deg);
  }

  40%,
  60% {
    transform: rotate(-2deg);
  }
}
</style>
