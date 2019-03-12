<template>
  <section class="page-home">
    <fm-slider class="slider" :imgs="sliderImages" />
    <div class="date">
      15.11.19
    </div>
    <svg
      class="decor"
      xmlns="http://www.w3.org/2000/svg"
      width="937"
      height="249"
      viewBox="0 0 937 249"
    >
      <path
        fill="#FFF"
        fill-rule="evenodd"
        d="M884.078 28.378l.34-2.718L937 32.238l-2.3 18.421-43.881-5.488-4.858 46.196h43.314v18.564h-45.267l-3.405 32.364 53.246-4.844 1.68 18.487-72.3 6.577-.914-10.066-1.417-.149.753-7.154-.101-1.117.22-.02 12.274-116.688 10.034 1.057zM15.93 15.835l1.158-9.182 52.88 6.557-2.313 18.367-42.811-5.309-5.68 140.926 54.624-9.634 3.266 18.224-59.492 10.49-1.11-6.203L0 179.419 6.61 15.465l9.32.37zM119.107 58.85l-35.879 3.238-4.539 63.09 45.173 4.483-4.755-70.811zm17.929-11.284l6.606 98.38-9.968.659-.262 2.605-66.062-6.558.272-2.697-8.643-.613 5.436-75.556-1.9.171-1.69-18.433 72.67-6.558.805 8.78 2.736-.18zm80.256 88.396V15.805h18.623v164.17h-15.91l-8.967 2.498-32.44-115.293 4.519 112.425-18.608.74-6.598-164.17 17-.677 7.87-2.193 34.51 122.657zm126.167-50.394l1.852 18.445-60.019 5.979-4.14 136.157-18.602-.562 6.312-207.502-2.763.249-1.685-18.46 72.533-6.569 1.686 18.46-51.102 4.63-1.67 54.91 57.598-5.737zm92.275-53.927l-55.497-5.526 3.16 72.358h46.672v18.519h-45.864l2.272 52.051 49.257-4.905 1.85 18.426-65.889 6.562-1.552-15.462-2.072.089-6.589-150.923 8.627-.375 1.586-15.802 65.889 6.561-1.85 18.427zM489.82 0l52.733 6.567-1.97 15.696 10.092.772-6.593 85.356-9.273-.712v15.83h-12.63l47.631 118.61L552.537 249l-50.393-125.49h-8.33l-2.444 63.314-18.59-.712 6.59-170.709 8.477.325L489.82 0zm8.004 19.67l-3.294 85.31h31.157l6.26-81.06-34.123-4.25zm244.569 103.506V9.504h18.622v177.365h-18.622v-5.062L706.026 73.196l-4.405 114.03-18.61-.713 6.6-170.795 18.61.713-.164 4.2 34.336 102.545zm65.611-93.507l5.262 136.337 51.407 4.657-1.686 18.463-72.523-6.57 1.685-18.463 2.43.22-5.977-154.867 18.594-.712.084 2.172L862.006 0l3.649 18.18-57.65 11.49zM610.243 163.23l45.272-2.098.86 18.488-61.552 2.853-.737-15.801h-2.397V9.276h10.1l.328-2.623 52.593 6.557-2.301 18.365-42.166-5.256v58.959h36.743v18.508h-36.743v59.444z"
      />
    </svg>

    <fm-video />
  </section>
</template>

<script>
import FmSlider from '~/components/Slider.vue'
import FmVideo from '~/components/Video.vue'

export default {
  components: {
    FmVideo,
    FmSlider
  },
  data() {
    return {
      sliderImages: [
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
</script>

<style lang="scss">
.page-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include media('>=tablet') {
    height: 100vh;
  }
}

.slider {
  display: none;

  @include media('>=tablet') {
    display: block;
  }
}

.decor {
  max-width: 80%;

  @include media('>=tablet') {
    max-width: 90%;
  }

  @include media('>=1300px') {
    max-width: 100%;
  }
}

.call-2-action {
  position: relative;

  @include media('>=tablet') {
    top: -60px;
    left: 45px;
    transform: rotate(-10deg);
  }

  @include media('>=desktop') {
    top: -25px;
    left: 45px;
    transform: rotate(-10deg);
  }
}

.date {
  position: relative;
  font: normal 300 60px / normal GTAmericaMono;
  color: #ffed00;

  @include media('>=desktop') {
    top: -21px;
    left: -138px;
  }
}
</style>
