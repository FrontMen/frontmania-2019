<template>
  <div class="app">
    <fm-sidebar class="app__sidebar hidden lg:block" />
    <div class="app__content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import FmSidebar from '~/components/Sidebar'

export default {
  components: { FmSidebar }
}
</script>

<style lang="scss">
.app__content {
  @include media('>=desktop') {
    margin-left: $sidebar-width;
  }
}
</style>
