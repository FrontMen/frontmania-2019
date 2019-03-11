<template>
  <div class="fm-row">
    <h2 class="section-title">{{event}}</h2>
    <div class="section-divider--themed"></div>
    <div class="section-row">
      <div>{{date}}</div>
      <div>{{venue}}</div>
      <div>{{location}}</div>
      <FmBtn>button</FmBtn>
    </div>
    <div class="section-divider"></div>
  </div>
</template>

<script>
import FmBtn from '~/components/Button.vue'
export default {
  name: 'FmBlock',
  components: {
    FmBtn
  },
  props: ['event', 'date', 'venue', 'location']
}
</script>

<style scoped lang="scss">
.fm-row {
  margin-bottom: 28px;
}
.section-title {
  text-transform: uppercase;
  color: #ffed00;
  margin-bottom: 11px;
}
.section-divider {
  width: 100%;
  border-bottom: 1px solid #ffffff;
  &--themed {
    border-color: #ffed00;
  }
}
.section-divider--themed {
  width: 100%;
  border-bottom: 1px solid #ffed00;
}

.section-row {
  display: flex;
  justify-content: space-between;
  width: 600px;
  margin: 28px 0;
}
</style>
