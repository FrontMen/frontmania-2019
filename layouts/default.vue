<template>
  <div class="app">
    <fm-theme/>
    <fm-sidebar/>
    <div class="app__content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import FmTheme from '@/components/Theme'
import FmSidebar from '@/components/Sidebar'
export default {
  components: { FmSidebar, FmTheme }
}
</script>

<style lang="scss">
.app__content {
  @include media('>=tablet') {
    margin-left: $sidebar-width;
  }
}
</style>
