<template>
  <section class="container">
    <fm-video/>
    <logo/>
    <div class="date">15th November, 2019</div>
    <div class="date">The Netherlands</div>

    <nuxt-link to="/privacy">Privacy</nuxt-link>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import FmVideo from '~/components/Video.vue'

export default {
  components: {
    Logo,
    FmVideo
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: white;
}

a {
  color: white;
  text-decoration: none;
  margin-top: 10px;
}

.date {
  font-size: 40px;
  font-family: 'frontmania';
}
</style>
