<template>
  <div class="session track-1" style="grid-column: track-1; grid-row: time-1030 / time-1130;">
    <div class="session-timestamp-box">
      <span class="session-track">Track {{ trackNumber }}</span>
      <span> | </span>
      <span>{{ timeStart }} - {{ timeEnd }}</span>
    </div>
    <span class="session-time">{{ timeStart }} - {{ timeEnd }}</span>
    <h3 class="session-title">
      {{ sessionTitle }}
    </h3>
    <hr>
    <h4 class="session-presenter">
      {{ speakerName }}
    </h4>
    <p>{{ speakerDescription }}</p>
  </div>
</template>

<script>
export default {
  name: 'ScheduleCard',
  props: {
    trackNumber: {
      type: Number,
      required: true
    },
    timeStart: {
      // 10:30
      type: String,
      required: true
    },
    timeEnd: {
      // 11:30
      type: String,
      required: true
    },
    sessionTitle: {
      type: String,
      required: true
    },
    speakerName: {
      type: String,
      required: true
    },
    speakerDescription: {
      type: String,
      required: true
    }
  },
  computed: {
    cssStartTimestamp() {
      return this.timeStart.replace(':', '')
    },
    cssEndTimestamp() {
      return this.timeEnd.replace(':', '')
    }
  }
}
</script>

<style lang="scss">
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
}

.session {
  padding: 1em;
  border-radius: 2px;
  font-size: 14px;
  color: $black;
  background-position-y: -40px;
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
    font-size: 20px;
    display: block;
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
