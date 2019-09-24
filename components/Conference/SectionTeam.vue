<template>
  <app-section class="background" background="/images/bg-yellow.jpg">
    <div class="bg-app-white">
      <div class="flex flex-wrap items-center">
        <div class="w-full xl:w-1/2 sm:text-center mb-4 px-6 pt-8">
          <img src="~/assets/images/conference/team.svg">
        </div>

        <div class="w-full xl:w-1/2 p-4 sm:p-8 xl:pl-0 xl:pr-4 xl:bg-transparent text-app-black xl:text-black">
          <p>
            Meet the awesome people who helped make FrontMania happen! 💪
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center">
      <template v-for="member in teamMembers">
        <TeamMate :key="member.image" v-bind="member" />
      </template>
    </div>
  </app-section>
</template>

<script>
import TeamMate from './TeamMate'

export default {
  components: {
    TeamMate
  },
  data() {
    return {
      teamMembers: [
        {
          name: 'Randy Daal',
          subTitle: 'MC, FrontManiac & Frontend Zombie  🧟‍‍',
          image: 'randyDaal',
          color: 'blue'
        },
        {
          name: 'Lasse Capel',
          subTitle: 'Spice Unicorn 🌶',
          image: 'lasse',
          color: 'red'
        },
        {
          name: 'Prashant Palikhe',
          subTitle: 'an 🥑 in the making',
          image: 'prashant',
          color: 'pink'
        },
        {
          name: 'Janine Lourens',
          subTitle: 'FrontEnd Unicorn 🦄',
          image: 'janine',
          color: 'pink'
        },
        {
          name: 'Steven Straatemans',
          subTitle: 'Has Glasses 👓',
          image: 'steven',
          color: 'green'
        },
        {
          name: 'Stefanos Lignos',
          subTitle: 'Frontend 🅰️ngularManiac ',
          image: 'stefanos',
          color: 'blue'
        },
        {
          name: 'Ronald Treur',
          subTitle: 'Programme Committee',
          image: 'ronald',
          color: 'green'
        },
        {
          name: 'Anthony Moendir',
          subTitle: 'Code Dancer 🐜',
          image: 'anthony',
          color: 'blue'
        },
        {
          name: 'Eduardo Pedroso ',
          subTitle: 'Programme Committee',
          image: 'eduardo',
          color: 'red'
        },
        {
          name: 'Dominique Rienties ',
          subTitle: 'Programme Committee',
          image: 'dominique',
          color: 'pink'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
