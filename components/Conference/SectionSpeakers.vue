<template>
  <app-section class="background">
     <div class="bg-app-yellow flex flex-wrap items-center p-4 sm:p-8">
      <p class="w-full sm:w-1/2 xl:w-1/4 sm:pr-4 text-center">
        <img class="h-24" src="~/assets/images/conference/dancing-character.svg" alt="">
      </p>

      <p class="w-full sm:w-1/2 xl:w-3/4 sm:pl-4 text-5xl text-center">SPEAKERS</p>
    </div>
    <article class="flex flex-wrap items-center p-4 bg-app-yellow">
      <section class="max-w-4xl w-full">
        <img class="h-64" src="~/assets/images/conference/speakers/MilicaMIhajlija.jpg" alt=""></section>
      <section  class="max-w-4xl w-full">
        <img class="h-64" src="~/assets/images/conference/speakers/nielsleenheer.jpg" alt=""></section>
      <section  class="max-w-4xl w-full">
        <img class="h-64" src="~/assets/images/conference/speakers/rubenvanderleun.jpeg" alt=""></section>
      <section  class="max-w-4xl w-full">
        <img class="h-64" src="~/assets/images/conference/speakers/sebastiangolasch.png" alt=""></section>
      <section  class="max-w-4xl w-full">
        <img class="h-64" src="~/assets/images/conference/speakers/talater.jpeg" alt=""></section>
    </article>
  </app-section>
</template>

<style lang="scss" scoped>
img {
  object-fit: contain;
  max-height: 120px;
}
.background {
  background-color: #e4032e;
}
</style>
