<template>
  <app-section class="background" background="/images/bg-green-yellow.jpg">
    <div class="bg-app-yellow main">
      <div class="flex flex-wrap items-center">
        <img class="w-full p-4" src="~/assets/images/workshops/workshops.svg">
      </div>
    </div>
    <div class="text-app-black main bg-app-white">
      <template v-for="workshop in workshops">
        <accordion :key="workshop.speaker" class="w-full" v-bind="workshop">
          <div>
            <h3>
              {{ workshop.title }}
            </h3>

            <p>
              {{ workshop.description }}
            </p>
          </div>
        </accordion>
      </template>
    </div>
  </app-section>
</template>
<script>
import accordion from './Accordion'

export default {
  components: {
    accordion
  },
  data() {
    return {
      workshops: [
        {
          title: 'Workshop Title here',
          location: 'See Conference venue for more info',
          time: ' 16:00 - 18:00',
          speaker: 'Name',
          description:
            'This is the workshop description, here you will learn stuff and things and new frammework and things to study lorem eslint ipsum react redu vue',
          requirements: ['Laptop', 'Node 10+', 'Basic Es6 knowledge'],
          whatYoullLearn: [
            'How to build your house',
            'Lorem ipsum',
            'Sit dolor'
          ]
        },
        {
          title: 'This is another workshop',
          location: '3A',
          time: ' 13:00 - 14:00',
          speaker: 'Pony Mc Unicorn',
          description:
            'This is the workshop description, here you will learn stuff and things and new frammework and things to study lorem eslint ipsum react redu vue',
          requirements: ['Laptop', 'Node 10+', 'food'],
          whatYoullLearn: [
            'How to build your house',
            'Lorem ipsum',
            'Sit dolor'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.main {
  width: 40em !important;
  max-width: inherit;
}
</style>
