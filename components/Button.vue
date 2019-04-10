<template>
  <component
    :is="tag"
    v-bind="anchorAttrs"
    :class="[ size, active ? 'bg-fm-black' : color, `border-fm-${color}` ]"
    class="flex items-center appearance-none no-underline uppercase text-fm-black"
    @click="onClick"
  >
    <div v-if="$slots.icon" class="btn__icon">
      <slot name="icon" />
    </div>

    <slot />

    <div v-if="$slots.icon_append" class="btn__icon">
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
      default: 'bg-fm-yellow'
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    anchorAttrs() {
      if (!this.tag === 'a') {
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
