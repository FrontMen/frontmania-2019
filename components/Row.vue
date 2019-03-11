<template>
  <div class="fm-row">
    <h2 class="section-title">{{event.eventName}}</h2>
    <div class="section-row">
      <div class="section-row__column section-row__date">{{event.date}}</div>
      <div class="section-row__column section-row__venue">{{event.venue}}</div>
      <div class="section-row__column section-row__location">{{event.location}}</div>
      <div class="section-row__column section-row__call-to-action">
        <FmFancyLink href="#" :angle="event.buttonAngle">See event details</FmFancyLink>
      </div>
    </div>
  </div>
</template>

<script>
import FmFancyLink from '~/components/FancyLink.vue'
export default {
  name: 'FmBlock',
  components: {
    FmFancyLink
  },
  props: {
    event: {
      eventName: String,
      date: String,
      venue: String,
      location: String,
      buttonAngle: String
    }
  }
}
</script>

<style scoped lang="scss">
.fm-row {
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
  margin: 0 0 18px;

  @include media('>=desktop') {
    width: 100%;
    flex-direction: row;
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

    @include media('>=desktop') {
      widh: auto;
      border-top: none;
      padding-right: 12px;
    }
  }

  &__location,
  &__venue {
    flex-basis: 33%;
  }

  &__date {
    flex-grow: 0;

    @include media('>=desktop') {
      width: 120px;
    }
  }

  &__call-to-action {
    border-top: none;
    flex-wrap: wrap;
  }
}
</style>
