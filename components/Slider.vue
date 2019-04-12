<template>
  <ul class="fm-slideshow">
    <li v-for="(img, index) in imgs" :key="index">
      <span :style="{ backgroundImage: `url(${img})` }" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FmSlider',
  props: {
    imgs: {
      type: Array,
      default() {
        return [
          '/images/slider/1.jpg',
          '/images/slider/2.jpg',
          '/images/slider/3.jpg',
          '/images/slider/4.jpg',
          '/images/slider/5.jpg',
          '/images/slider/6.jpg'
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fm-slideshow,
.fm-slideshow:after {
  @include full-screen();
  z-index: -1;
}

.fm-slideshow:after {
  content: '';
  background: transparent url(~assets/images/pattern.png) repeat top left;
  z-index: 0;
}

.fm-slideshow li span {
  @include cover-parent();

  background-size: cover;
  background-position: 50% 50%;
  background-repeat: none;
  opacity: 0;
  z-index: 0;
  animation: imageAnimation 36s linear infinite 0s;
}

.fm-slideshow li:nth-child(2) span {
  animation-delay: 6s;
}
.fm-slideshow li:nth-child(3) span {
  animation-delay: 12s;
}
.fm-slideshow li:nth-child(4) span {
  animation-delay: 18s;
}
.fm-slideshow li:nth-child(5) span {
  animation-delay: 24s;
}
.fm-slideshow li:nth-child(6) span {
  animation-delay: 30s;
}

@keyframes imageAnimation {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }
  8% {
    opacity: 1;
    transform: scale(1.05);
    animation-timing-function: ease-out;
  }
  17% {
    opacity: 1;
    transform: scale(1.1);
  }
  25% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
  }
}
</style>
