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

        <schedule-card v-bind="sessions.session2a" />
        <schedule-card v-bind="sessions.session2b" />

        <h2 class="time-slot" style="grid-row: time-1030;">
          10:30
        </h2>

        <h2 class="time-slot" style="grid-row: time-1100;">
          11:00
        </h2>

        <h2 class="time-slot" style="grid-row: time-1130;">
          11:30
        </h2>

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
        session1a: {
          sessiontitle: 'Opening Show',
          speakername: 'Seb Lee Delisle',
          sessiondescription: "'",
          speakerdescription:
            'Seb Lee-Delisle is a digital artist and speaker who specialises in large scale interactive light installations.',
          image: "'",
          tracknumber: 0,
          timestart: '9:00',
          timeend: '10:00',
          twitterurl: "'"
        },
        session2a: {
          sessiontitle: 'The Weird—Yet Practical—World of Paint Worklets',
          speakername: 'Jeremy Wagner',
          sessiondescription:
            'Come to this session and you’ll understand how paint worklets, well, work. But the really good stuff will be in all the inspired experimentation that can come from experimenting with the programatic generation of art and graphics, and how we can practically use it in our designs. If the intersection between weird and usable is your thing, you’ll feel right at home with paint worklets!',
          speakerdescription:
            'Jeremy Wagner is an independent web performance consultant, author, and speaker.',
          image: "'",
          tracknumber: 1,
          timestart: '10:00',
          timeend: '11:00',
          twitterurl: "'"
        },
        session2b: {
          sessiontitle: '???',
          speakername: 'Lee Boonstra',
          sessiondescription: "'",
          speakerdescription: 'Sales engineer in the Google Cloud team.',
          image: "'",
          tracknumber: 2,
          timestart: '10:00',
          timeend: '11:00',
          twitterurl: "'"
        },
        session3a: {
          sessiontitle: 'WebAssembly: Binary in Plain English',
          speakername: 'Milica Mihajlija',
          sessiondescription:
            'How to run native code in the browser, why would you do that, and what does it all mean for the future of web development.',
          speakerdescription:
            'Contractor for Google, writer about performance on web.dev. and Mozilla Tech Speaker',
          image: "'",
          tracknumber: 1,
          timestart: '11:00',
          timeend: '12:00',
          twitterurl: ''
        },
        session3b: {
          sessiontitle: 'What Can We Learn With Javascript Fatigue',
          speakername: 'Lucas Fernandes da Costa',
          sessiondescription:
            'Explore the goals of software engineers, the UNIX philosophy and the history and causes of JavaScript fatigue. In this talk he creates a parallel between psychology, decision making and JavaScript.',
          speakerdescription: 'Core team member of Chai.js and Sinon.js',
          image: "'",
          tracknumber: 2,
          timestart: '11:00',
          timeend: '12:00',
          twitterurl: "'"
        },
        session4: {
          sessiontitle: 'Break',
          speakername: 'FrontMania',
          sessiondescription: "'",
          speakerdescription: "'",
          image: "'",
          tracknumber: 0,
          timestart: '12:00',
          timeend: '13:00',
          twitterurl: "'"
        },
        session5a: {
          sessiontitle: 'The Intranet of Things',
          speakername: 'Sebastian Golasch',
          sessiondescription:
            'The dust around everybody’s fav buzzword from 2015 “IoT” has settled, but do solutions exist  that value our privacy & autonomy? No really.',
          speakerdescription:
            'Specialist Senior Manager Software Developer at Qivicon, IoT reverse engineer, Long time JavaScript lover',
          image: "'",
          tracknumber: 1,
          timestart: '13:00',
          timeend: '14:00',
          twitterurl: "'"
        },
        session5b: {
          sessiontitle: 'Puppeteer',
          speakername: 'Önder Ceylan',
          sessiondescription:
            'Talk on Puppeteer: a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. ',
          speakerdescription:
            'Self-established JavaScript professional and a Google Developers Expert in Web Technologies',
          image: "'",
          tracknumber: 2,
          timestart: '13:00',
          timeend: '14:00',
          twitterurl: "'"
        },
        session6a: {
          sessiontitle: 'JavaScript on the Desktop, Fast and Slow',
          speakername: 'Felix Rieseberg',
          sessiondescription:
            'We need to talk about JavaScript performance on the desktop. Why does it seem like so many Electron apps consume more resources than their native counterparts? Felix explores the architectural tricks separating slow and fast Electron apps.',
          speakerdescription:
            'Felix is a Senior Staff Engineer and Tech Lead at Slack.',
          image: "'",
          tracknumber: 1,
          timestart: '14:00',
          timeend: '15:00',
          twitterurl: "'"
        },
        session6b: {
          sessiontitle: 'Raising $24 million to Build an Open Source Skynet',
          speakername: 'Tal Ater',
          sessiondescription:
            "An adventure story with drones, robots, autonomous boats, astronauts, and JavaScript… and what it means for tomorrow's autonomous cars.",
          speakerdescription: 'Founder and CTO of the DAV Foundation.',
          image: "'",
          tracknumber: 2,
          timestart: '14:00',
          timeend: '15:00',
          twitterurl: "'"
        },
        session7a: {
          sessiontitle: 'JavaScript on Microcontrollers',
          speakername: 'Niels Leenheer',
          sessiondescription:
            'Building an IoT device feels out of reach to a lot of web developers. Most of us didn’t study electrical engineering, and never learned to solder. And programming a microcontroller is on a completely different level than building a website.\n\nBut that is just not true anymore. Nowadays microcontrollers have become powerful enough to run JavaScript. And that opens up IoT to all of us.',
          speakerdescription:
            'Creator of HTML5test.com is a Mozilla TechSpeaker, Google Developer Expert, Microsoft MVP and CTO of Salonhub',
          image: "'",
          tracknumber: 1,
          timestart: '15:00',
          timeend: '16:00',
          twitterurl: "'"
        },
        session7b: {
          sessiontitle: 'Cloudflare Workers and the application with GraphQL',
          speakername: 'Albert Groothedde',
          sessiondescription:
            "GraphQL is a great technology. But... your backend developers might not want to convert just yet. That's where Cloudflare Workers can step in. In the talk we'll talk about example application leveraging Cloudflare workers using Graphql, seeing how to deal with the limitations of the workers and how to make use Cloudflare's cache.",
          speakerdescription:
            'Albert is a Frontmaniac @Frontmen, the creator of Ortum and GraphQL enthusiast. He also created graphql-query-path and uses Colemak.',
          image: "'",
          tracknumber: 2,
          timestart: '15:00',
          timeend: '16:00',
          twitterurl: "'"
        },
        session8: {
          sessiontitle: 'Break',
          speakername: 'FrontMania',
          sessiondescription: "'",
          speakerdescription: "'",
          image: "'",
          tracknumber: 0,
          timestart: '16:00',
          timeend: '16:30',
          twitterurl: "'"
        },
        session9a: {
          sessiontitle: 'Node.js on mobile apps',
          speakername: 'Andre Staltz',
          sessiondescription: "'",
          speakerdescription:
            'Freelancer builds open source software, teaches programming, and write articles.',
          image: "'",
          tracknumber: 1,
          timestart: '16:30',
          timeend: '17:30',
          twitterurl: "'"
        },
        session9b: {
          sessiontitle: 'How to build Javascript-powered Smartglasses',
          speakername: 'Ruben van der Leun',
          sessiondescription:
            'After having worked at an AR-focused company with the Vuzix, a Google Glass-like product, Ruben had a lot of fun with the hardware and really wanted to have one at home to play around with. Unfortunately, they are too expensive to get one just for hobby purposes. This session will cover what was required to build his own wearable, the pitfalls, the compromises, and the sheer joy of saying "Screw it, I\'ll build it myself!".',
          speakerdescription: 'Full Stack Web / XR Developer',
          image: "'",
          tracknumber: 2,
          timestart: '16:30',
          timeend: '17:30',
          twitterurl: "'"
        },
        session10a: {
          sessiontitle: 'AI',
          speakername: 'Katerina Skroumpelou',
          sessiondescription: "'",
          speakerdescription:
            'Google Developer Expert in Angular and Web Technologies',
          image: "'",
          tracknumber: 1,
          timestart: '17:30',
          timeend: '18:30',
          twitterurl: "'"
        },
        session10b: {
          sessiontitle: 'Keynote',
          speakername: 'FrontMania',
          sessiondescription: "'",
          speakerdescription: "'",
          image: "'",
          tracknumber: 2,
          timestart: '17:30',
          timeend: '18:30',
          twitterurl: "'"
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
  background: $green;
}

.slot-2 {
  background: $lightBlue;
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
