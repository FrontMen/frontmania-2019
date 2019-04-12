<template>
  <app-section background="/images/bg-pink.png">
    <div class="bg-app-blue">
      <div class="flex flex-wrap items-center">
        <div class="w-full xl:w-1/2 sm:text-center mb-4 px-6 pt-8">
          <img src="~/assets/images/conference.svg">
        </div>

        <div class="bg-app-yellow w-full xl:w-1/2 p-4 sm:p-8 xl:pl-0 xl:pr-4 xl:bg-transparent text-app-black xl:text-white">
          <p>
            Last year was our first Frontmania and what a party it was. But don't take our word for it, here are some interesting facts about last year.
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 bg-app-black flex flex-col justify-center items-center p-4 pt-12">
        <img class="px-16" src="~/assets/images/conference/t-shirt.svg">

        <div class="w-full self-start">
          <div class="flex flex-wrap mt-10">
            <div class="w-full sm:w-2/5 num text-app-blue mb-4 sm:text-4xl">
              <app-divider medium class="sm:mb-8" />
              205
              <app-divider medium class="sm:hidden" />
            </div>

            <div class="w-full sm:w-3/5 sm:mt-10 label text-app-white sm:text-lg">
              CUSTOM T-SHIRT DESIGNS
            </div>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 bg-app-yellow flex flex-col justify-center items-center p-4 pt-12">
        <img class="px-16" src="~/assets/images/conference/person.svg">

        <div class="w-full self-start">
          <div class="flex flex-wrap mt-10">
            <div class="w-full sm:w-2/5 num text-app-red mb-4 sm:text-4xl">
              <app-divider medium class="sm:mb-8" />
              325
              <app-divider medium class="sm:hidden" />
            </div>

            <div class="w-full sm:w-3/5 sm:mt-10 label text-app-black sm:text-lg">
              ENTHUSIASTIC FRONTMANIACS
            </div>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 bg-app-blue flex flex-col justify-center items-center p-4 pt-12">
        <img class="px-16" src="~/assets/images/conference/phone.svg">

        <div class="w-full self-start">
          <div class="flex flex-wrap mt-10">
            <div class="w-full sm:w-2/5 num text-app-yellow mb-4 sm:text-4xl">
              <app-divider medium class="sm:mb-8" />
              42
              <app-divider medium class="sm:hidden" />
            </div>

            <div class="w-full sm:w-3/5 sm:mt-10 label text-app-white sm:text-lg">
              INSPIRING
              <br>
              SPEAKERS
            </div>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 bg-app-green flex flex-col justify-center items-center p-4 pt-12">
        <img class="px-16" src="~/assets/images/hand-right.svg">

        <div class="w-full self-start">
          <div class="flex flex-wrap mt-10">
            <div class="w-full sm:w-2/5 num text-app-white mb-4 sm:text-4xl">
              <app-divider medium class=" sm:mb-8" />
              123
              <app-divider medium class="sm:hidden" />
            </div>

            <div class="w-full sm:w-3/5 sm:mt-10 label text-app-white sm:text-lg">
              OTHER AWESOME THINGS
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-section>
</template>

<style lang="scss">
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
