<template>
  <app-section background="/images/bg-blue.jpg">
    <div class="flex flex-col justify-center text-white">
      <img src="~/assets/images/conference/venue.svg" alt="Venue">
        <p class="text-4xl w-full my-4">
          CROESELAAN 18, 3521 CB UTRECHT
        </p>
        <p class="w-full my-4">
          On the 15th of November Rabobank opens its doors to a stunning location in the middle of Utrecht were we will have the 2nd edition of FrontMania.
        </p>
    </div>
    <div class="venue-images flex flex-wrap justify-between items-center">
        <img class="my-4" src="~/assets/images/conference/venue/bar.jpg" alt="Bar area" >
        <img class="my-4" src="~/assets/images/conference/venue/rabobank-toren.png" alt="Panoramic view of the Rabobank Tower" >
        <img class="my-4" src="~/assets/images/conference/venue/room.jpg" alt="The actual conference room">
        <img class="my-4" src="~/assets/images/conference/venue/side.jpg" alt="Conference venue from the side.">
    </div>
  </app-section>
</template>

<style lang="scss" scoped>
.venue-images img {
  object-fit: contain;
}
</style>
