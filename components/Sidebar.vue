<template>
  <div class=" fm-sidebar fixed w-90 h-screen black p-8 pt-12 text-center">
    <nuxt-link to="/">
      <fm-logo />
    </nuxt-link>

    <fm-navigation v-if="$route.name === 'conference'" />

    <div class="fm-sidebar__info absolute pin-l white--text text-left px-8">
      <p class="mb-6 text-base">FrontMania is a group of people who are crazy about frontend development a.k.a. frontend maniacs.</p>
      <p class="mb-6 text-base">We as a group believe that frontend development should be fun for everyone!</p>

      <fm-divider />

      <nuxt-link to="/privacy" class="yellow--text text-base">
        PRIVACY POLICY
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import FmLogo from '@/components/Logo'
import FmNavigation from '@/components/Navigation'
import FmDivider from '@/components/Divider'

export default {
  name: 'FmSidebar',
  components: { FmLogo, FmNavigation, FmDivider }
}
</script>

<style scoped lang="scss">
.fm-sidebar__info {
  bottom: 50px;
}
</style>
