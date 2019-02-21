<template>
  <div class="app">
    <fm-sidebar/>
    <div class="app__content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import FmSidebar from '@/components/Sidebar'

export default {
  components: { FmSidebar }
}
</script>

<style lang="scss">
.app__content {
  margin-left: 360px;
}
</style>
