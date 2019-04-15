<template>
  <app-section background="/images/bg-blue.jpg">
    <div class="flex items-center p-4 md:px-8 bg-app-white">
      <img class="w-1/2 sm:w-1/3 w-auto" src="~/assets/images/sponsors/frontmen.svg" alt="Frontmen sponsor">
      <img class="w-1/2 sm:w-1/3 w-auto" src="~/assets/images/sponsors/rabobank.svg" alt="Rabobank sponsor">
    </div>

    <div class="bg-app-yellow flex flex-wrap items-center p-4 sm:p-8">
      <p class="w-full sm:w-1/2 xl:w-3/4 sm:pr-4 text-center">
        <img class="h-24" src="~/assets/images/conference/sponsors.svg" alt="">
      </p>

      <p class="w-full sm:w-1/2 xl:w-1/4 sm:pl-4">A shout out to our sponsors!</p>
    </div>
  </app-section>
</template>

<style lang="scss" scoped>
img {
  object-fit: contain;
  max-height: 120px;
}
</style>
