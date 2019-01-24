<template>
  <div :class="{'video-loaded': allowPlay}">
    <div class="video-wrap" :class="{'video-wrap--show': playing, 'video-wrap--hide': !playing}">
      <div class="video-inner">
        <video
          ref="videoEl"
          class="video-player"
          src="~assets/videos/aftermovie.mp4"
          poster="/images/poster.jpg"
          preload="auto"
          @canplaythrough="allowPlay = true"
          @endded="hide"
        >
          <source
            src="~assets/videos/aftermovie.mp4"
            type="video/mp4; codecs='avc1.4D401E, mp4a.40.2'"
          >
          <p>Sorry, but your browser does not support this video format.</p>
        </video>
        <button class="action action--close" @click="hide">
          <i class="fa fa-times"/>
          <span class="action__label action__label--hidden">Close</span>
        </button>
      </div>
    </div>
    <div class="content">
      <div class="loader">
        <i class="fa fa-spinner fa-pulse"/>
      </div>
      <button class="action action--hidden action--play" @click="play">
        <i class="fa fa-play"/>
        <span class="action__label">Watch 2018 video</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FmVideo',
  data() {
    return {
      allowPlay: false,
      playing: false
    }
  },
  methods: {
    play() {
      this.$refs.videoEl.currentTime = 0
      this.playing = true
      setTimeout(() => this.$refs.videoEl.play(), 600)
    },

    hide() {
      this.playing = false
      this.$refs.videoEl.pause()
    }
  }
}
</script>

<style lang="scss" scoped>
.video-wrap {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
}

.video-wrap--show {
  pointer-events: auto;
}

.video-inner {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  opacity: 0;
  background: black;
}

.video-wrap--show .video-inner {
  opacity: 1;
}

.video-player {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translate3d(0, -50%, 0);
}

.content {
  position: relative;
}

.loader {
  font-size: 2.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.video-loaded .loader {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.action {
  font-family: 'Avenir Next', 'Helvetica Neue', 'Lato', 'Segoe UI', Helvetica,
    Arial, sans-serif;
  font-size: 1.15em;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 1em 2em;
  color: #fff;
  border: 2px solid;
  border-radius: 40px;
  background: none;
  flex: none;
}

.action:focus {
  outline: none;
}

.action__label {
  display: inline-block;
  margin: 0 0 0 0.75em;
}

.action__label--hidden {
  position: absolute;
  top: 200%;
}

.action--play {
  display: block;
  margin: 1em auto;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s 0.1s;
}

.video-loaded .action--play {
  opacity: 1;
  pointer-events: auto;
}

.action--close {
  line-height: 1;
  position: absolute;
  z-index: 1000;
  top: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  padding: 0;
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
  transform: scale3d(0.7, 0.7, 1);
}

.video-wrap--show .action--close {
  opacity: 1;
  transition-delay: 1.2s;
  transform: scale3d(1, 1, 1);
}

@media screen and (min-width: 25em) {
  .video-inner {
    width: 30vw;
    height: 30vw;
    border: 20px solid #000;
    transform: scale3d(0.1, 0.1, 1) rotate3d(0, 0, 1, -5deg);
  }
  .video-wrap--show .video-inner {
    opacity: 0;
    -webkit-animation: showVideo-1 1.25s forwards;
    animation: showVideo-1 1.25s forwards;
  }
  .video-wrap--hide .video-inner {
    -webkit-animation: hideVideo 1.25s forwards;
    animation: hideVideo 1.25s forwards;
  }
  .video-player {
    left: 50%;
    width: auto;
    height: 100vh;
    transition: transform 1s;
    transform: translate3d(-50%, -50%, 0) scale3d(0.7, 0.7, 1)
      rotate3d(0, 0, 1, 5deg);
  }
  .video-wrap--show .video-player,
  .video-wrap--hide .video-player {
    transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
  }
}

@media screen and (min-width: 25em) and (min-aspect-ratio: 1280/720) {
  .video-inner {
    width: 30vh;
    height: 30vh;
  }
  .video-wrap--show .video-inner {
    -webkit-animation: showVideo-2 1.25s forwards;
    animation: showVideo-2 1.25s forwards;
  }
  .video-player {
    width: 100vw;
    height: auto;
  }
}

@keyframes showVideo-1 {
  50% {
    width: 50vw;
    height: 50vw;
    opacity: 1;
    transform: scale3d(0.5, 0.5, 1) rotate3d(0, 0, 1, -5deg);
  }
  100% {
    width: 100vw;
    height: 100vh;
    opacity: 1;
    transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 0deg);
  }
}

@keyframes showVideo-2 {
  50% {
    width: 50vh;
    height: 50vh;
    opacity: 1;
    transform: scale3d(0.5, 0.5, 1) rotate3d(0, 0, 1, -5deg);
  }
  100% {
    width: 100vw;
    height: 100vh;
    opacity: 1;
    transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 0deg);
  }
}

@keyframes hideVideo {
  0% {
    width: 100vw;
    height: 100vh;
    opacity: 1;
    transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 0deg);
  }
  100% {
    width: 100vw;
    height: 100vh;
    opacity: 0;
    transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 0deg);
  }
}
</style>
