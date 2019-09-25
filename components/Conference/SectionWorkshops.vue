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
          <div class="py-4">
            <h4>Time:  <span class="font-normal">{{ workshop.time }} </span></h4>
            <h4>Location: <span class="font-normal"> {{ workshop.location }} </span> </h4>

            <hr class="thick-hr mx-0 my-4 w-1/4">
            <p>
              {{ workshop.description }}
            </p>
          </div>

          <h4 class="mb-4">
            What you'll learn
          </h4>
          <ul>
            <template v-for="item in workshop.whatYoullLearn">
              <li :key="item.split(' ')[0]" class="leading-normal">
                {{ item }}
              </li>
            </template>
          </ul>

          <h4 class="my-4">
            Prerequisites
          </h4>
          <ul>
            <template v-for="item in workshop.requirements">
              <li :key="item.split(' ')[0]" class="leading-normal">
                {{ item }}
              </li>
            </template>
          </ul>
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
          title: 'Learning things with people',
          location: 'See Conference venue for more info',
          time: ' 16:00 - 18:00',
          speaker: 'Frontend mc FrontFace',
          description:
            'This is the workshop description, here you will learn stuff and things and new frammework and things to study lorem eslint ipsum react redu vue',
          requirements: ['Laptop', 'Node 10+', 'Basic Es6 knowledge'],
          whatYoullLearn: [
            'Setting up webpack',
            'Learning McopterFlux 18.2',
            'Ui techniques'
          ],
          image: 'jlwagner'
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
          ],
          image: 'nielsleenheer'
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

.thick-hr {
  border-top: 3px double #8c8b8b;
}
</style>
