<template>
  <app-section background="/images/slider/1.jpg" full-width peek>
    <div class="flex flex-col items-center p-4">
      <div class="text-4xl sm:text-5xl sm:self-start sm:pl-10 text-app-yellow date mb-8 lg:mb-4">
        15.11.19 - Utrecht
      </div>
      <img src="~/assets/images/conference/conference.svg" alt="conference">

      <app-btn tag="a" href="https://www.youtube.com/watch?v=fjzXwwWmHaA" class="call-2-action text-base sm:text-2xl p-4 h-auto sm:h-24">
        <template slot="icon">
          <svg class="h-8" xmlns="http://www.w3.org/2000/svg" width="50" height="47" viewBox="0 0 50 47">
            <path
              fill-rule="evenodd"
              d="M5.352.875l-.969 4.13L.268 6.04l10.27 40.934 5.753-1.444.583.688 1.399-1.185.497-.124-.061-.244 30.044-25.44-.52-.613 1.709-7.278L5.352.875zm4.841 9.852l27.772 6.513-21.557 18.253-6.215-24.766z"
            />
          </svg>
        </template>

        Watch 2018 video
      </app-btn>
    </div>
  </app-section>
</template>

<style lang="scss" scoped>
.call-2-action {
  cursor: pointer;
  position: relative;
  transform: rotate(-10deg);

  @include media('>=tablet') {
    top: -30px;
    left: 45px;
  }

  @include media('>=desktop') {
    top: -25px;
    left: 45px;
  }
}
</style>
