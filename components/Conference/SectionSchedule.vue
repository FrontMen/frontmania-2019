<template>
  <app-section :full-width="true" background="/images/bg-white.jpg">
    <div class="schedule-wrapper">
      <img src="~assets/images/schedule/schedule.svg" alt="schedule">
      <div class="schedule" aria-labelledby="schedule-heading">
        <span class="track-slot slot-1" aria-hidden="true" style="grid-column: track-1; grid-row: tracks;"><p>Track 1</p></span>
        <span class="track-slot slot-2" aria-hidden="true" style="grid-column: track-2; grid-row: tracks;"><p>Track 2</p></span>

        <h2 class="time-slot" style="grid-row: time-0900;">
          9:00
        </h2>

        <div class="session track-all" style="grid-column: track-1-start / track-2-end; grid-row: time-0900 / time-0930;">
          <h3 class="session-title">
            Opening Show
          </h3>
        </div>

        <h2 class="time-slot" style="grid-row: time-0930;">
          9:30
        </h2>

        <h2 class="time-slot" style="grid-row: time-1000;">
          10:00
        </h2>

        <h2 class="time-slot" style="grid-row: time-1030;">
          10:30
        </h2>

        <h2 class="time-slot" style="grid-row: time-1100;">
          11:00
        </h2>
        <schedule-card
            v-bind="sessions.session1"
        />

        <h2 class="time-slot" style="grid-row: time-1130;">
          11:30
        </h2>

        <div class="session session-11 track-2" style="grid-column: track-2; grid-row: time-1130 / time-1230;">
          <div class="session-timestamp-box">
            <span class="session-track">Track 2</span>
            <span> | </span>
            <span>11:30 - 12:30</span>
          </div>
          <span class="session-time">11:30 - 12:30</span>
          <h3 class="session-title">
            !The Teenage Mutant Ninja Turtles lorem ip  Guide to Color Theory lorem ipsum sit do Line 3 if title talk is very long pixels
          </h3>
          <hr>
          <div class="session-speaker-wrapper">
            <span class="left">
              <h4 class="session-presenter">
                Louisa Barrett
              </h4>
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias animi sit velit</p>
            </span>
            <span class="right">
              <img src="http://place-puppy.com/250x250" alt="speaker">
            </span>
          </div>
        </div>

        <h2 class="time-slot" style="grid-row: time-1200;">
          12:00
        </h2>

        <h2 class="time-slot" style="grid-row: time-1230;">
          12:30
        </h2>

        <h2 class="time-slot" style="grid-row: time-1300;">
          13:00
        </h2>

        <h2 class="time-slot" style="grid-row: time-1330;">
          13:30
        </h2>

        <h2 class="time-slot" style="grid-row: time-1400;">
          14:00
        </h2>

        <h2 class="time-slot" style="grid-row: time-1430;">
          14:30
        </h2>

        <h2 class="time-slot" style="grid-row: time-1500;">
          15:00
        </h2>

        <h2 class="time-slot" style="grid-row: time-1530;">
          15:30
        </h2>

        <div class="session session-7 track-all" style="grid-column: track-1-start / track-2-end; grid-row: time-1530 / time-1600;">
          <h3 class="session-title">
            Take a break!
          </h3>
        </div>

        <h2 class="time-slot" style="grid-row: time-1600;">
          16:00
        </h2>

        <h2 class="time-slot" style="grid-row: time-1630;">
          16:30
        </h2>

        <h2 class="time-slot" style="grid-row: time-1700;">
          17:00
        </h2>

        <h2 class="time-slot" style="grid-row: time-1730;">
          17:30
        </h2>

        <h2 class="time-slot" style="grid-row: time-1800;">
          18:00
        </h2>
      </div>
    </div>
  </app-section>
</template>

<script>
import ScheduleCard from '~/components/Conference/ScheduleCard.vue'

export default {
  components: {
    ScheduleCard
  },

  data() {
    return {
      sessions: {
        session1: {
          speakerName: 'Seb Lee-Delisle',
          image: 'http://place-puppy.com/250x250',
          speakerDescription: 'Seb Lee-Delisle is a digital artist',
          trackNumber: 1,
          timeStart: '10:30',
          timeEnd: '11:30',
          sessionTitle: 'Learning Graphic Art'
        },
        session2: {
          speakerName: 'Foo',
          image: 'http://place-puppy.com/250x250',
          speakerDescription: 'Bar',
          trackNumber: 2,
          timeStart: '10:30',
          timeEnd: '11:30',
          sessionTitle: 'Web Worker n stuff'
        }
      }
    }
  }
}
</script>

const data = {
  trackNumber: 1,
  timeStart: '10:30',
  timeEnd: '11:30',
  sessionTitle: 'Learning Vue with Service Workers',
  speakerName: 'Sherlock Holmes',
  speakerDescription: 'Foo'
}

<style lang="scss">
$pink: #ea5297; // Brilliant Rose
$yellow: #ffed00; // Turbo
$blue: #00afcb; // Pacific Bluee
$green: #13a538; // Malachite
$lightBlue: #69acdf; // Havelock Blue
$red: #e4032e; // Monza
$white: #fff;
$black: #000;

$greyShadow: rgba(255, 255, 255, 0.6);
$blackShadow: rgba(0, 0, 0, 0.3);

/*************************
 * GRID SCHEDULE LAYOUT
 *************************/
@media screen and (min-width: 700px) {
  .schedule {
    display: grid;
    grid-gap: 1em;
    grid-template-rows:
      [tracks] auto
      [time-0900] 1fr
      [time-0930] 1fr
      [time-1000] 1fr
      [time-1030] 1fr
      [time-1100] 1fr
      [time-1130] 1fr
      [time-1200] 1fr
      [time-1230] 1fr
      [time-1300] 1fr
      [time-1330] 1fr
      [time-1400] 1fr
      [time-1430] 1fr
      [time-1500] 1fr
      [time-1530] 1fr
      [time-1600] 1fr
      [time-1630] 1fr
      [time-1700] 1fr
      [time-1730] 1fr
      [time-1800] 1fr;
    /* Note 1:
			Use 24hr time for gridline names for simplicity

			Note 2: Use "auto" instead of "1fr" for a more compact schedule where height of a slot is not proportional to the session length.
      Implementing a "compact" shortcode attribute might make sense for this!
			Try 0.5fr for more compact equal rows. I don't quite understand how that works :)
			*/

    grid-template-columns:
      [times] 4em
      [track-1-start] 1fr
      [track-1-end track-2-start] 1fr;
  }
}

.time-slot {
  grid-column: times;
}

.track-slot {
  display: none; /* hidden on small screens and browsers without grid support */
}

@supports (display: grid) {
  @media screen and (min-width: 700px) {
    .track-slot {
      display: block;
      padding: 10px 5px 5px;
      position: sticky;
      top: 0;
      z-index: 1000;
      text-align: center;

      p {
        font-size: 30px;
        margin: 0;
        padding: 0;
        top: 80px;
        z-index: 1000;
        color: $white;
        text-transform: uppercase;
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .track-slot {
      top: 80px;
    }
  }
}
/*************************
 * VISUAL STYLES
 *************************/

.schedule-wrapper {
  padding: 50px;
  margin: 0 auto;
}

@media screen and (max-width: 850px) {
  .schedule-wrapper {
    padding: 0 !important;
  }
}

.slot-1 {
  background: $pink;
}

.slot-2 {
  background: $red;
}

.track-all {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $black;
  box-shadow: none;
  text-transform: uppercase;
  font-size: 2em;

  h3 {
    color: $yellow;
  }
}

.time-slot {
  font-size: 1em;
}
</style>
