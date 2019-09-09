<template>
  <app-section background="/images/bg-yellow.jpg">
    <div class="flex flex-wrap items-center bg-app-white">
      <p class="w-full md:w-1/2 p-4 md:p-8 lg:pr-4">
      Schedule here
      </p>
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
