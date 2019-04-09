<template>
  <fm-section background="/images/bg-pink.png">
    <div class="blue">
      <div class="flex flex-wrap items-center">
        <div class="w-full xl:w-1/2 sm:text-center mb-4 px-6 pt-8">
          <img src="~/assets/images/conference.svg">
        </div>

        <div class="yellow w-full xl:w-1/2 p-4 sm:p-8 xl:pl-0 xl:pr-4 xl:bg-transparent black--text xl:text-white">
          <p>
            Last year was our first Frontmania and what a party it was. But don't take our word for it, here are some interesting facts about last year.
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 black flex flex-col justify-center items-center p-4 pt-12">
        <img class="px-16" src="~/assets/images/t-shirt.svg">

        <div class="w-full self-start">
          <div class="flex flex-wrap mt-10">
            <div class="w-full sm:w-2/5 num blue--text mb-4 sm:text-4xl">
              <div class="divider w-12 h-2 sm:mb-8" />
              205
              <div class="divider w-12 h-2 sm:hidden" />
            </div>

            <div class="w-full sm:w-3/5 sm:mt-10 label white--text sm:text-lg">
              CUSTOM T-SHIRT DESIGNS
            </div>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 yellow flex flex-col justify-center items-center p-4 pt-12">
        <img class="px-16" src="~/assets/images/person.svg">

        <div class="w-full self-start">
          <div class="flex flex-wrap mt-10">
            <div class="w-full sm:w-2/5 num red--text mb-4 sm:text-4xl">
              <div class="divider w-12 h-2 sm:mb-8" />
              325
              <div class="divider w-12 h-2 sm:hidden" />
            </div>

            <div class="w-full sm:w-3/5 sm:mt-10 label black--text sm:text-lg">
              ENTHUSIASTIC FRONTMANIACS
            </div>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 blue flex flex-col justify-center items-center p-4 pt-12">
        <img class="px-16" src="~/assets/images/phone.svg">

        <div class="w-full self-start">
          <div class="flex flex-wrap mt-10">
            <div class="w-full sm:w-2/5 num yellow--text mb-4 sm:text-4xl">
              <div class="divider w-12 h-2 sm:mb-8" />
              42
              <div class="divider w-12 h-2 sm:hidden" />
            </div>

            <div class="w-full sm:w-3/5 sm:mt-10 label white--text sm:text-lg">
              INSPIRING
              <br>
              SPEAKERS
            </div>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 green flex flex-col justify-center items-center p-4 pt-12">
        <img class="px-16" src="~/assets/images/right.svg">

        <div class="w-full self-start">
          <div class="flex flex-wrap mt-10">
            <div class="w-full sm:w-2/5 num white--text mb-4 sm:text-4xl">
              <div class="divider w-12 h-2 sm:mb-8" />
              123
              <div class="divider w-12 h-2 sm:hidden" />
            </div>

            <div class="w-full sm:w-3/5 sm:mt-10 label white--text sm:text-lg">
              OTHER AWESOME THINGS
            </div>
          </div>
        </div>
      </div>
    </div>
  </fm-section>
</template>

<script>
import FmSection from '~/components/Section.vue'

export default {
  components: { FmSection }
}
</script>

<style lang="scss">
// .square {
//   position: relative;
//   width: 100%;

//   &:before {
//     content: '';
//     display: block;
//     padding-top: 100%;
//   }
// }

// .square__content {
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
// }

.divider {
  display: block;
  height: 8px;
  width: 64px;
  background: #fff;
}

.num {
  font-size: 60px;
  font-weight: bold;
}

.label {
  font-size: 24px;
  font-weight: 300;
  line-height: 1.33;
}
</style>
