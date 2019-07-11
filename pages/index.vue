<template>
  <section id="canvas-wrapper" class="lg:flex items-center justify-center lg:h-screen">
    <app-slider />

    <app-toolbar>
      <template #contentTrigger>
        <button class="text-app-white appearance-none">
          <img src="~/assets/images/home/menu.svg" alt="menu">
        </button>
      </template>

      <template #content>
        <div class="bg-app-white text-app-black p-4 sm:p-8">
          <p class="mb-4">FrontMania is a group of people who are crazy about frontend development a.k.a. frontend maniacs.</p>
          <p>We as a group believe that frontend development should be fun for everyone!</p>
        </div>
      </template>
    </app-toolbar>

    <div class="flex flex-col p-4 mt-20 lg:mt-0 xl:max-w-lg">
      <div class="flex bg-app-blue w-full pt-2 sm:pt-10 sm:pb-8 px-10 sm:px-20 sm:pb-4 items-center text-center font-bold text-app-yellow">
        <img class="mr-10 h-24 sm:h-48 w-auto " src="~/assets/images/home/events.svg" alt="Upcoming Frontmania events">
        <img class="h-24 sm:h-48 w-auto" src="~/assets/images/home/spraycan.svg" alt="Announcement icon">
      </div>

      <app-block :v-if="events.length">
        <div v-for="event in events" :key="event.id">
          <app-row :event="event" />
        </div>
      </app-block>
    </div>
    <canvas id="c" width="800" height="600"></canvas>
  </section>
</template>

<script>
import AppRow from '~/components/Home/Row.vue'
import AppBlock from '~/components/Home/Block.vue'

export default {
  components: {
    AppRow,
    AppBlock
  },
  data() {
    return {
      events: []
    }
  },
  async asyncData() {
    const context = await require.context('~/events/', false, /\.json$/)

    const events = await context.keys().map(key => ({
      ...context(key),
      _path: `/${key.replace('.json', '').replace('./', '')}`
    }))

    return { events }
  },
  mounted() {
    const el = document.getElementById('c')
    const container = document.querySelector('#canvas-wrapper')
    const canvasWidth = window.innerWidth - 1
    const canvasHeight = window.innerHeight - 1
    el.width = canvasWidth - el.offsetLeft
    el.height = canvasHeight
    const ctx = el.getContext('2d')
    let clientX, clientY, timeout
    const density = 25

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    }

    function getRandomFloat(min, max) {
      return Math.random() * (max - min) + min
    }

    container.onmousemove = function(e) {
      ctx.lineJoin = ctx.lineCap = 'round'
      clientX = e.clientX - el.offsetLeft
      clientY = e.clientY

      timeout = setTimeout(function draw() {
        for (let i = density; i--; ) {
          const angle = getRandomFloat(0, Math.PI * 2)
          const radius = getRandomFloat(0, 40)
          ctx.fillStyle = '#ffed00'
          ctx.shadowColor = '#fff78c'
          ctx.shadowBlur = 10
          ctx.fillRect(
            clientX + radius * Math.cos(angle),
            clientY + radius * Math.sin(angle),
            getRandomInt(3),
            getRandomInt(3)
          )
        }
        if (!timeout) return
        timeout = setTimeout(draw, 50)
      }, 50)
    }
    container.onmouseleave = function() {
      clearTimeout(timeout)
    }
  }
}
</script>

<style>
#c {
  top: 0;
  z-index: -1;
}

.content {
  position: absolute;
  margin: 0;
  padding: 0;
  /* color: #f9f1e9; */
  content: #000;
  text-align: center;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

.testing-header {
  font-size: 6em;
  letter-spacing: 0.1em;
}
</style>
