<template>
  <div class="fm-sidebar">
    <nuxt-link to="/">
      <fm-logo/>
    </nuxt-link>

    <div class="fm-sidebar__info">
      <p>FrontMania is a group of people who are crazy about frontend development a.k.a. frontend maniacs.</p>
      <p>We as a group believe that frontend development should be fun for everyone!</p>

      <span class="divider"/>
      <nuxt-link to="/privacy" class="link__privacy">PRIVACY POLICY</nuxt-link>
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
  position: relative;
  width: 100%;
  background-color: black;
  text-align: center;
  padding: 50px 0;

  @include media('>=tablet') {
    position: fixed;
    width: 360px;
    height: 100vh;
  }
}

.fm-sidebar__info {
  color: white;
  padding: 0 32px;
  bottom: 50px;
  text-align: center;
  margin-top: 50px;

  @include media('>=tablet') {
    text-align: left;
    position: absolute;
  }

  p {
    margin-bottom: 24px;
  }

  .divider {
    display: block;
    height: 8px;
    width: 64px;
    background: #fff;
    margin-bottom: 10px;
  }

  a {
    color: #ffed00;
  }

  p,
  a {
    font: normal 300 16px/1.5 GTAmericaMono;
    letter-spacing: 1px;
  }
}
</style>
