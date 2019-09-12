<template>
  <div class="session" :class="`track-${tracknumber}`" :style="gridStyle">
    <div class="session-timestamp-box">
      <span class="session-track">Track {{ tracknumber }}</span>
      <span> | </span>
      <span>{{ timestart }} - {{ timeend }}</span>
    </div>
    <span class="session-time">{{ timestart }} - {{ timeend }}</span>
    <h3 class="session-title">
      {{ sessiontitle }}
    </h3>
    <hr>
    <div class="session-speaker-wrapper">
      <span class="left">
        <h4 class="session-presenter">
          {{ speakername }}
        </h4>
        <p v-if="speakerdescription.length > 1">{{ speakerdescription }}</p>
      </span>
      <span class="right">
        <img v-if="image.length > 1" :src="image" alt="speaker">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleCard',
  props: {
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
    /* Outputs a style tag like this: grid-column: track-1; grid-row: time-1030 / time-1130; */
    gridStyle() {
      // eslint-disable-next-line no-console
      console.log('data', this.data)
      return `grid-column: track-${this.tracknumber};
              grid-row: time-${this.timestart.replace(
                ':',
                ''
              )} / time-${this.timeend.replace(':', '')};`
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
  }
}

.session {
  padding: 1em;
  border-radius: 2px;
  font-size: 14px;
  color: $black;
  background-repeat: no-repeat;
  background-position-y: -120px;
  background-position-x: -58px;
  background-size: cover;

  hr {
    border: 5px solid $white;
    width: 20%;
    clear: both;
    display: block;
    margin: 2em 0;
    padding: 0;
  }

  h3 {
    color: $black;
    font-size: 25px;
    display: block;
    min-height: 130px;

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
}

.track-1 {
  background-color: $yellow;
  background-image: url($greenSpray);

  /* box-shadow: 10px 10px 0px 0px $pink; */

  .session-timestamp-box {
    background: $pink;
  }
}

.track-2 {
  background-color: $lightBlue;
  background-image: url($yellowSpray);
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
}

.session-speaker-wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: row;

  h4 {
    font-size: 18px;
    margin-bottom: 0.5em;
  }

  p {
    line-height: 1rem;
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
</style>
