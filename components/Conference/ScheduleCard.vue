<template>
  <!-- For both collumns -->
  <div
    v-if="tracknumber === 0"
    class="session track-all"
    :style="gridStyle"
  >
    <span class="track-all-session-time">
      {{ timestart }} - {{ timeend }}
    </span>
    <h3 class="session-title">
      {{ sessiontitle }}
    </h3>
    <span class="track-all-subtitle">
      {{ speakername }}
    </span>
  </div>

  <vue-flip
    v-else
    class="session"
    :class="[`track-${tracknumber}`, isMinified && 'minified' ]"
    width="100%"
    height="100%"
    :style="gridStyle"
    :active-hover="isMinified ? false : true"
  >
    <div slot="front">
      <div class="session-timestamp-box">
        <span class="session-track">Track {{ tracknumber }}</span>
        <span> | </span>
        <span>{{ timestart }} - {{ timeend }}</span>
      </div>

      <div class="top-part">
        <span class="session-time">{{ timestart }} - {{ timeend }}</span>
        <h3 class="session-title">
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
    <div slot="back">
      {{ sessiondescription }}
    </div>
  </vue-flip>
</template>

<script>
import VueFlip from 'vue-flip'

export default {
  name: 'ScheduleCard',
  components: {
    'vue-flip': VueFlip
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
    speakerdescription: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  computed: {
    gridStyle() {
      /* generate a timestamp without colons */
      const timeStamp = ` grid-row: time-${this.timestart.replace(
        ':',
        ''
      )} / time-${this.timeend.replace(':', '')};
          `
      /* Outputs a style tag like this: grid-column: track-1; grid-row: time-1030 / time-1130; */
      const minifiedStyle = `${this.isMinified &&
        'min-height: 110px !important;'}`

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
  }
}
</script>

<style lang="scss">
/*
Cross Browser text stroke generator
https://github.com/Owumaro/text-stroke-generator
*/

@mixin textStroke($color) {
  text-shadow: $color 1px 0px 0px, $color 0.540302px 0.841471px 0px,
    $color -0.416147px 0.909297px 0px, $color -0.989992px 0.14112px 0px,
    $color -0.653644px -0.756802px 0px, $color 0.283662px -0.958924px 0px,
    $color 0.96017px -0.279415px 0px;
}

$pink: #ea5297; // Brilliant Rose
$yellow: #ffed00; // Turbo
$blue: #00afcb; // Pacific Bluee
$green: #13a538; // Malachite
$lightBlue: #69acdf; // Havelock Blue
$red: #e4032e; // Monza
$white: #fff;
$black: #000;

$greenImages: (
  '~assets/images/schedule/spray_fat_green.svg',
  '~assets/images/schedule/spray_splat_green.svg',
  '~assets/images/schedule/spray_streak_green.svg',
  '~assets/images/schedule/spray_thin_green.svg',
  '~assets/images/schedule/spray_wide_green.svg',
  '~assets/images/schedule/spray_zigzag_green.svg'
);

$yellowImages: (
  '~assets/images/schedule/spray_fat_yellow.svg',
  '~assets/images/schedule/spray_splat_yellow.svg',
  '~assets/images/schedule/spray_streak_yellow.svg',
  '~assets/images/schedule/spray_thin_yellow.svg',
  '~assets/images/schedule/spray_wide_yellow.svg',
  '~assets/images/schedule/spray_zigzag_yellow.svg'
);

// generate a random spray
$greenSpray: nth($greenImages, random(length($greenImages)));
$yellowSpray: nth($yellowImages, random(length($yellowImages)));

/* Small-screen & fallback styles */
.session {
  margin-bottom: 1em;
}

@supports (display: grid) {
  @media screen and (min-width: 700px) {
    .session {
      margin: 0;
    }

    .session-timestamp-box {
      display: none !important; // hide the timestamp box when on desktop view
    }
  }

  @media screen and (max-width: 700px) {
    .session-time {
      display: none !important; // hide the timestamp box when on desktop view
    }

    .session {
      .top-part {
        min-height: auto !important;
      }
    }
  }

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
  color: $black;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;

  .flipper {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    min-height: 350px;
  }
  .front {
    display: flex;
    justify-content: stretch;

    background-repeat: no-repeat;
    background-position-y: -120px;
    background-position-x: -58px;
    background-size: cover;
    padding: 1em;
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
  }

  hr {
    border: 5px solid $white;
    width: 20%;
    clear: both;
    display: block;
    margin: 1em 0;
    padding: 0;
  }

  h3 {
    color: $black;
    font-size: 19px;
    display: block;
    width: 100%;

    @include textStroke($white);
  }

  span {
    display: inline-block;
  }

  .session-timestamp-box {
    position: relative;
    width: 277px;
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
    min-height: 150px;

    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
}

.track-1 {
  .front {
    background-color: $yellow;
    background-image: url($greenSpray);
  }

  /* box-shadow: 10px 10px 0px 0px $pink; */

  .session-timestamp-box {
    background: $pink;
  }
}

.track-2 {
  .front {
    background-color: $lightBlue;
    background-image: url($yellowSpray);
  }
  /* box-shadow: 10px 10px 0px 0px $red; */

  .session-timestamp-box {
    background: $red;
  }
}

.session-time {
  background: $white;
  display: inline-block;
  padding: 0.5em;
  margin-bottom: 1em;
  border-radius: 2px;
  max-height: 34px;
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
  }

  p {
    line-height: 1rem;
    font-size: 14px;
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
  background: $black;
  box-shadow: none;
  padding: 0.5em 0;
  flex-direction: column;
  color: $white;

  .track-all-session-time {
    margin-bottom: 0.2em;
  }

  h3 {
    text-transform: uppercase;
    color: $yellow;
    text-shadow: none;
    text-align: center;
    font-size: 19px;
  }

  .track-all-subtitle {
    font-size: 14px;
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
    .track-all-session-time {
      color: $black;
      font-size: 12px;
    }
    h3 {
      color: $black;
    }

    .track-all-subtitle {
      color: $black;
    }
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
    padding: 0;
    margin: 0 0 0.5em;
    width: auto;
    display: block;
    font-weight: initial;
    background: none;
  }

  .session-time {
    padding: 0;
  }

  .speaker-description {
    display: none;
  }
  .front {
    background: white !important;
    border: 1px solid #000;
    background: none;
    min-height: 110px;

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

  @media screen and (max-width: 700px) {
    .flip-container,
    .session,
    .flipper,
    .front {
      min-height: 100px !important;
    }
  }
}
</style>
