<template>
  <app-section background="/images/bg-yellow.jpg">
    <template #call2Action>
      <img class="point-down" src="~/assets/images/conference/point-down.svg" alt="scroll down">
    </template>

    <div class="flex flex-wrap items-start justify-around bg-app-red p-8 xl:py-16">
      <img class="w-full xl:w-1/2 mb-10" src="~/assets/images/conference/announcement.svg" alt="announcement">
      <img class="w-full xl:w-1/2" src="~/assets/images/conference/papercall.svg" alt="for papercall">
    </div>

    <div class="flex flex-wrap items-center bg-app-white">
      <p class="w-full md:w-1/2 p-4 md:p-8 lg:pr-4">
        Do you  have an awesome idea for a talk at our 2019 conference? We would love to hear from you.
      </p>

      <div class="w-full md:w-1/2 p-4 md:p-8 lg:pl-4 xl:pl-8">
        <app-btn tag="a" size="medium" class="w-full text-base" href="https://www.papercall.io/frontmania-2019">
          SUBMIT YOUR PAPER

          <template #icon_append>
            <img src="~/assets/images/conference/point-right.svg" alt="submit icon">
          </template>
        </app-btn>
      </div>
    </div>
  </app-section>
</template>

<style lang="scss">
.point-down {
  animation: bounce 0.8s ease-in infinite;
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes bounce {
  0% {
    transform: translate3d(0, -5px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
  100% {
    transform: translate3d(0, -5px, 0);
  }
}
</style>
