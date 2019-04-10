<template>
  <div class="app">
    <fm-sidebar class="hidden lg:block" />

    <div class="lg:ml-90">
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
