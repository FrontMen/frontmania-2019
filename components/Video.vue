<template>
  <video playsinline autoplay muted loop>
    <source src="~assets/videos/aftermovie.mp4" type="video/mp4">
  </video>
</template>

<style>
video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
