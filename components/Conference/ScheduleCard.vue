<template>
  <!-- Session that spans both collumns -->
  <div
    v-if="tracknumber === 0 && sessiondescription.length < 2"
    class="session track-all"
    :style="gridStyle"
  >
    <span class="track-all-session-time">
      {{ timestart }} - {{ timeend }}
    </span>
    <h3>
      {{ sessiontitle }}
    </h3>
    <span class="track-all-subtitle">
      {{ speakername }}
    </span>
  </div>

  <no-ssr v-else>
    <vue-flip
      class="session"
      :class="cardClasses"
      width="100%"
      height="100%"
      :style="gridStyle"
      :bind-with-me="flipped"
    >
      <div slot="front" :style="trackImageStyle" @click="handleClick">
        <div class="session-timestamp-box">
          <span>{{ timestart }} - {{ timeend }}</span>
          <span> | </span>
          <span class="session-track">Track {{ tracknumber }}</span>
          <span> | </span>
          <span>{{ type }}</span>
        </div>

        <div class="top-part">
          <span class="session-time">{{ timestart }} - {{ timeend }}</span>
          <span class="session-type" :session-type="type" >{{ type }}</span>
          <h3>
            {{ sessiontitle }}
          </h3>
        </div>

        <div class="bottom-part">
          <hr>
          <div class="session-speaker-wrapper">
            <span class="left">
              <h4 class="session-presenter">
                {{ speakername }}
              </h4>
              <p v-if="speakerdescription.length > 1" class="speaker-description">{{ speakerdescription }}</p>
            </span>
            <span class="right">
              <img v-if="image.length > 1" :src="image" alt="speaker">
            </span>
          </div>
        </div>
      </div>
      <div slot="back" @click="handleClick">
        {{ sessiondescription }}
      </div>
    </vue-flip>
  </no-ssr>
</template>

<script>
export default {
  name: 'ScheduleCard',
  components: {
    ...(process.client && { 'vue-flip': () => import('vue-flip') })
  },
  props: {
    isMinified: {
      type: Boolean,
      required: true
    },
    tracknumber: {
      type: Number,
      required: true
    },
    timestart: {
      // 10:30
      type: String,
      required: true
    },
    timeend: {
      // 11:30
      type: String,
      required: true
    },
    sessiontitle: {
      type: String,
      required: true
    },
    sessiondescription: {
      type: String,
      required: false,
      default: ''
    },
    speakername: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false
    },
    speakerdescription: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      cardClasses: {
        [`track-${this.tracknumber}`]: true,
        minified: this.isMinified,
        clickable: !this.isMinified && this.sessiondescription.length > 2
      },
      flipped: false,
      greenImages: [
        '/images/schedule/spray_fat_green.svg',
        '/images/schedule/spray_splat_green.svg',
        '/images/schedule/spray_streak_green.svg',
        '/images/schedule/spray_thin_green.svg',
        '/images/schedule/spray_wide_green.svg',
        '/images/schedule/spray_zigzag_green.svg'
      ],
      yellowImages: [
        '/images/schedule/spray_fat_yellow.svg',
        '/images/schedule/spray_splat_yellow.svg',
        '/images/schedule/spray_streak_yellow.svg',
        '/images/schedule/spray_thin_yellow.svg',
        '/images/schedule/spray_wide_yellow.svg',
        '/images/schedule/spray_zigzag_yellow.svg'
      ]
    }
  },
  computed: {
    /* Generate a random image for each card */
    trackImageStyle() {
      if (this.tracknumber === 0 || this.isMinified) {
        return
      }

      const image = this.randomItem(
        this.tracknumber === 1 ? this.greenImages : this.yellowImages
      )

      /* Inline Stlye because vue-flip generates extra divs without classes
      we need to inline these styles to the div it generates;
      */
      return `background-image: url('${image}');
            background-repeat: no-repeat;
            background-position-y: -120px;
            background-position-x: -58px;
            background-size: cover;
            width: 100%;
            z-index: -1;`
    },
    gridStyle() {
      /* generate a timestamp without colons */
      const timeStamp = `grid-row: time-${this.timestart.replace(
        ':',
        ''
      )} / time-${this.timeend.replace(':', '')};
          `
      /* Outputs a style tag like this: grid-column: track-1; grid-row: time-1030 / time-1130; */
      const minifiedStyle = `${this.isMinified &&
        'min-height: 55px !important;'}`

      if (this.tracknumber === 0) {
        return `grid-column: track-1-start / track-2-end;
                ${timeStamp}
                ${minifiedStyle}
                `
      }

      return `grid-column: track-${this.tracknumber};
              ${timeStamp}
              ${minifiedStyle}`
    }
  },
  watch: {
    isMinified(newBool) {
      if (newBool) {
        this.flipped = false
      }
    }
  },
  methods: {
    handleClick() {
      // Only allow flipping if the sessiondescription has content
      if (!this.isMinified && this.sessiondescription.length > 1) {
        this.flipped = !this.flipped
      }
    },
    randomItem(array) {
      return array[Math.floor(Math.random() * array.length)]
    }
  }
}
</script>

<style lang="scss">
/* Small-screen & fallback styles */
.session {
  margin-bottom: 1em;
}

.clickable {
  .front:after {
    content: 'Click for details';
    position: absolute;
    opacity: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    padding: 1em;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    color: $white;
    transition: opacity 0.2s linear;
  }
  &:hover {
    cursor: pointer;
    .front:after {
      opacity: 1;
    }
  }
}
.minified {
  .clickable {
    &:hover {
      .front:after {
        display: none;
      }
    }
  }
}

@supports (display: grid) {
  /** Desktop Styles */
  @media screen and (min-width: 700px) {
    .session {
      margin: 0;
    }

    .session-timestamp-box {
      display: none !important;
    }
  }

  /* Mobile Styles */
  @media screen and (max-width: 700px) {
    .session-time,
    .session-type {
      display: none !important;
    }

    .session {
      .top-part {
        min-height: auto !important;
      }

      .flipper {
        min-height: 283px !important;
      }
    }
  }

  /* Desktop styles before the sidebar collapses into a mobile header */
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    .flip-container,
    .session,
    .front,
    .back {
      min-height: 250px;
    }
  }
}

.session {
  border-radius: 2px;
  font-size: 14px;
  color: $white;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;

  .flipper {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    /* Required min-height because of flipper library */
    min-height: 290px;
  }
  .front {
    display: flex;
    justify-content: stretch;
  }

  .back {
    background: black;
    color: $white;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    text-align: center;

    /* Target the first div generated by flipper library */
    & > div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  hr {
    border: 5px solid $white;
    width: 20%;
    clear: both;
    display: block;
    margin: 1em 0;
    padding: 0 1em;
  }

  h3 {
    font-size: 19px;
    display: block;
    width: 100%;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.7);
      position: absolute;
      z-index: -1;
    }
  }

  span {
    display: inline-block;
  }

  .session-timestamp-box {
    position: relative;
    width: 370px;
    margin-left: -13px;
    transform: rotate(-2deg);
    display: flex;
    padding: 8px;
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: 700;
    justify-content: space-evenly;
  }
  .top-part {
    min-height: 85px;
    padding: 1em 1em 0;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    .session-time {
      color: $black;
    }
  }

  .bottom-part {
    padding: 0 1em;
  }
}

.track-1 {
  .front {
    background-color: $yellow;
  }

  .session-timestamp-box {
    background: $pink;
  }
}

.track-2 {
  .front {
    background-color: $lightBlue;
  }

  .session-timestamp-box {
    background: $red;
  }
}

.session-time,
.session-type {
  background: $green;
  display: inline-block;
  padding: 0.5em;
  margin-bottom: 1em;
  border-radius: 2px;
  max-height: 34px;
  color: $white;

  &[session-type='TECH'] {
    background: $red;
  }
}
.session-time {
  background: $white;
  color: $black;
}

.session-speaker-wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;

  h4 {
    font-size: 18px;
    margin-bottom: 0.5em;
    color: $yellow;
  }

  p {
    line-height: 1rem;
    font-size: 13px;
  }
  .left {
    flex: 1;
  }

  .right {
    img {
      box-shadow: 4px 4px 0px 0px $white;
      transform: rotate(-14deg);
      max-width: 100px;
    }
  }
}

.track-all {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $pink;
  box-shadow: none;
  padding: 0.5em 0;
  flex-direction: column;
  color: $white;
  background-image: url('/images/schedule/spray_big_white.svg');
  background-size: cover;
  background-position-y: -176px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    z-index: 1;
  }

  .track-all-session-time {
    z-index: 3;
    background: $white;
    border-radius: 2px;
    color: black;
    padding: 0.5em;
    margin-bottom: 1em;
  }

  h3 {
    text-transform: uppercase;
    color: $white;
    text-shadow: none;
    text-align: center;
    font-size: 19px;
    z-index: 2;

    &::after {
      display: none;
    }
  }

  .track-all-subtitle {
    font-size: 18px;
    z-index: 2;
    color: $yellow;
  }
}

/*************************
 * MINIFIED STYLES
 *************************/
/* Minified styles for easier scanning  */

@mixin minifiedHeight {
  min-height: auto !important;
}

.minified {
  .track-all {
    border: 1px solid black;
    background: $white;
    font-size: 12px;
    .track-all-session-time {
      color: $black;
    }

    h3 {
      color: $black;
      font-size: 12px;
      margin-top: 0.5em;
    }

    .track-all-subtitle {
      margin-top: 0.5em;
      color: $black;
      font-size: 12px;
    }
  }
  .track-all-session-time {
    margin: 0;
    padding: 0;
  }

  .session.track-all:after {
    display: none;
  }

  .track-slot {
    background: $white;

    p {
      color: $black;
      font-size: 16px;
    }
  }

  .flip-container,
  .session,
  .flipper,
  .front {
    @include minifiedHeight;
  }

  .top-part {
    min-height: 0;
  }

  .session-presenter {
    margin: 0.5em 0;
    font-weight: 500;
  }

  .session-timestamp-box {
    transform: none;
    padding: 0.5em 1em 0;
    margin: 0 0 0.5em;
    width: auto;
    display: block;
    font-weight: initial;
    background: none;
  }

  .session-time {
    padding: 0;
  }
  .session-type {
    background: $white;
    color: $black;
  }

  .speaker-description {
    display: none;
  }
  .front {
    background: white !important;
    border: 1px solid #000;
    background: none;

    &:hover {
      cursor: default !important;
    }
    @include minifiedHeight;

    h3:after {
      display: none;
    }

    p,
    h2,
    h3,
    h4,
    span {
      font-size: 12px !important;
      color: #000 !important;
    }
  }

  .back {
    display: none;
  }

  hr {
    display: none !important;
  }

  /* Mobile Styles */
  @media screen and (max-width: 700px) {
    .flip-container,
    .session,
    .flipper,
    .front {
      min-height: 85px !important;
    }
  }
}
</style>
