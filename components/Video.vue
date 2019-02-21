<template>
  <div :class="{'video-loaded': allowPlay}">
    <div class="video-wrap" :class="{'video-wrap--show': playing, 'video-wrap--hide': !playing}">
      <div class="video-inner">
        <video
          ref="videoEl"
          class="video-player"
          src="/videos/aftermovie.mp4"
          preload="auto"
          @canplaythrough="allowPlay = true"
          @endded="hide"
        />
        <button class="action action--close" @click="hide">˟</button>
      </div>
    </div>
    <fm-btn class="call-2-action" @click="play">
      <template slot="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="47" viewBox="0 0 50 47">
          <path
            fill-rule="evenodd"
            d="M5.352.875l-.969 4.13L.268 6.04l10.27 40.934 5.753-1.444.583.688 1.399-1.185.497-.124-.061-.244 30.044-25.44-.52-.613 1.709-7.278L5.352.875zm4.841 9.852l27.772 6.513-21.557 18.253-6.215-24.766z"
          ></path>
        </svg>
      </template>

      <template slot="default">
        <span v-if="allowPlay">Watch 2018 video</span>
        <span v-else>Loading...</span>
      </template>
    </fm-btn>
  </div>
</template>

<script>
import FmBtn from '~/components/Button'

export default {
  name: 'FmVideo',
  components: { FmBtn },
  data() {
    return {
      allowPlay: false,
      playing: false
    }
  },
  methods: {
    play() {
      this.$refs.videoEl.currentTime = 1
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

.action--close {
  color: white;
  line-height: 1;
  position: absolute;
  font-size: 100px;
  z-index: 1000;
  top: 10px;
  right: 0px;
  width: 60px;
  height: 60px;
  padding: 0;
  opacity: 0;
  outline: none;
  transition: transform 0.3s, opacity 0.3s;
  transform: scale3d(0.7, 0.7, 1);

  @include media('>=tablet') {
    top: 20px;
    right: 20px;
  }
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
    animation: showVideo-1 1.25s forwards;
  }
  .video-wrap--hide .video-inner {
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

@keyframes showVideo-1 {
  0% {
    width: 100vw;
    height: 100vh;
    opacity: 0;
    transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 0deg);
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
