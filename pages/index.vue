<template>
  <section class="lg:flex items-center justify-center lg:h-screen">
    <app-slider />

    <!--
      id="canvas-wrapper" is going to be the container
      we attach the canvas to. Find a good place for it
      in the new layout, I think as high-level as you
      can within the main content area would be good.

      You'll also need to place in the actual canvas
      which is right below this comment block. Its
      width and height are reformatted to
      window.width and window.height in mounted().

      But there's a quick demo that's currently working
      it is however pushing the content to the side.
      But depending on how you guys change the index
      layout, it should be quite simply to fix with
      some position: absolute. :)
    -->
    <app-canvas></app-canvas>

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
  </section>
</template>

<script>
import AppRow from '~/components/Home/Row.vue'
import AppBlock from '~/components/Home/Block.vue'
import AppCanvas from '~/components/_globals/AppCanvas.vue'

export default {
  components: {
    AppRow,
    AppBlock,
    AppCanvas
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
  }
}
</script>

<style>
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
