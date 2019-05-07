<template>
  <div class="app-row">
    <h2 class="section-title">FrontMania {{ event.type }}</h2>
    <div class="section-row">
      <div class="section-row__column section-row__date">{{ event.date | date }}</div>
      <div class="section-row__column section-row__venue">{{ event.address }}</div>
      <div class="section-row__column section-row__location">{{ event.city }}</div>
      <div class="section-row__column section-row__call-to-action">
        <app-fancy-link
          :to="event.link"
          :theme-color="event.color"
          :angle="event.rotation"
        >
          {{ event.linktext }}
        </app-fancy-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppFancyLink from '~/components/Home/FancyLink.vue'
export default {
  name: 'AppRow',
  components: {
    AppFancyLink
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.app-row {
  margin-bottom: 32px;
}

.section-title {
  text-transform: uppercase;
  color: #ffed00;
  padding-bottom: 11px;
  border-bottom: 1px solid #ffed00;
}

.section-row {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 0 16px;

  @include media('>=tablet') {
    width: 100%;
    flex-direction: row;
    border-bottom: 1px solid #fff;
  }

  @include media('>=xl') {
    flex-wrap: nowrap;
  }

  &__column {
    width: 100%;
    border-top: 1px solid #fff;
    line-height: 32px;
    padding: 8px 0;

    &:first-child {
      border-top: none;
    }

    @include media('>=tablet') {
      widh: auto;
      border-top: none;
      padding-right: 12px;
    }
  }

  &__location,
  &__venue {
    flex-basis: 33%;

    @include media('>=tablet') {
      text-align: center;
    }
  }

  &__date {
    flex-grow: 0;

    @include media('>=tablet') {
      width: 120px;
    }
  }

  &__call-to-action {
    border-top: none;
    flex-wrap: wrap;

    @include media('>=xl') {
      width: 245px;
      flex-shrink: 0;
    }
  }
}
</style>
