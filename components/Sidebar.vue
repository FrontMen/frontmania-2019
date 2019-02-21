<template>
  <div class="fm-sidebar">
    <nuxt-link to="/">
      <fm-logo/>
    </nuxt-link>

    <div class="fm-sidebar__info">
      <p>FrontMania is a group of people who are crazy about frontend development a.k.a. frontend maniacs.</p>
      <p>We as a group believe that frontend development should be fun for everyone!</p>

      <nuxt-link to="/privacy">PRIVACY POLICY</nuxt-link>
    </div>
  </div>
</template>

<script>
import FmLogo from '@/components/Logo'

export default {
  name: 'FmSidebar',
  components: { FmLogo }
}
</script>

<style scoped lang="scss">
.fm-sidebar {
  position: fixed;
  height: 100vh;
  width: 360px;
  background-color: black;
  text-align: center;
  padding: 50px 0;
}

.fm-sidebar__info {
  position: absolute;
  color: white;
  padding: 0 32px;
  bottom: 50px;
  text-align: left;

  p {
    margin-bottom: 24px;
  }

  a {
    color: #a8a8a8;
  }

  p,
  a {
    font: normal 300 16px/1.5 GTAmericaMono;
    letter-spacing: 1px;
  }
}
</style>
