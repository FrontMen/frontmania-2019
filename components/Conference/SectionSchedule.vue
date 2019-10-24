<template>
  <app-section :full-width="true" background="/images/bg-white.jpg">
    <div class="schedule-wrapper" :class="{ minified: isMinified}">
      <img src="~assets/images/schedule/schedule.svg" alt="schedule">
      <div class="schedule" aria-labelledby="schedule-heading">
        <!-- Top Row -->
        <span class="track-slot slot-1" aria-hidden="true" style="grid-column: track-1; grid-row: tracks;">
          <p>Track 1</p>
        </span>
        <span class="track-slot slot-2" aria-hidden="true" style="grid-column: track-2; grid-row: tracks;">
          <p>Track 2</p>
        </span>
        <button class="custom-btn" :class="{ active: isMinified }" @click="handleToggle">
          {{ isMinified ? 'Detail View' : 'Simple Styles' }}
        </button>

        <!-- TimeStamps Collumn 1 -->
        <template v-for="time in timeStamps">
          <time-stamp :key="time" :time="time" />
        </template>

        <!-- Sessions Collumn 2 & 3 -->
        <template v-for="session in sessions">
          <schedule-card :key="session.speakerName" v-bind="session" :is-minified="isMinified" />
        </template>
      </div>
    </div>
  </app-section>
</template>

<script>
import { timeArray } from '../../utilities/time'
import ScheduleCard from '~/components/Conference/ScheduleCard.vue'
import TimeStamp from '~/components/Conference/TimeStamp.vue'

export default {
  components: {
    ScheduleCard,
    TimeStamp
  },
  data() {
    return {
      // generate array of timestamps based on start and end time
      timeStamps: timeArray('9:00', '18:00'),
      isMinified: false,
      sessions: [
        {
          timestart: '09:00',
          timeend: '10:00',
          tracknumber: 0,
          sessiontitle: 'Opening Show',
          speakername: 'Seb Lee Delisle',
          sessiondescription: "'",
          speakerdescription:
            'Seb Lee-Delisle is a digital artist and speaker who specialises in large scale interactive light installations.',
          image: "'"
        },
        {
          timestart: '10:00',
          timeend: '11:00',
          tracknumber: 1,
          sessiontitle: 'ML Fairness',
          speakername: 'Lee Boonstra',
          sessiondescription:
            'As an AI-first company, Google aims to develop the benefits of machine learning for everyone. Building inclusive machine learning algorithms is crucial to help make the world’s information universally useful and accessible. ML fairness is a critical consideration in machine learning development. This session will present a few lessons Google has learned through our products and research and how developers can apply these learnings in their own efforts. This session will enable developers to proactively think about fairness in product development.',
          speakerdescription:
            'Lee Boonstra works as a developer advocate for Dialogflow at Google based in Amsterdam, and an O’Reilly published author.',
          image: "'"
        },
        {
          timestart: '10:00',
          timeend: '11:00',
          tracknumber: 2,
          sessiontitle: 'From code to pixels in a Blink',
          speakername: 'Prashant Palikhe',
          sessiondescription:
            "Let's take a journey through the browser's rendering pipeline. How the code that we write, HTML, CSS and JavaScript gets converted into pixels on the screen in a Blink of an eye. And how we can leverage that information to understand why industry best practices are the way they are and how we can write performant applications.",
          speakerdescription:
            'Prashant is a frontend developer from Utrecht, Netherlands. While not coding, he likes to travel, preach about technologies and break a sweat at the basketball court with friends.',
          image: "'"
        },
        {
          timestart: '11:00',
          timeend: '12:00',
          tracknumber: 1,
          sessiontitle: 'WebAssembly: Binary in Plain English',
          speakername: 'Milica Mihajlija',
          sessiondescription:
            'Think about cases where you need to use software outside of the browser: video games, 3D rendering, music production and more. These things require a high degree of performance and that’s where WebAssembly steps in - a standardized compilation target for languages that are good at this kind of stuff. You do not write WebAssembly, you compile other languages, like C++ or Rust, to it. All major browsers support it and they are steadily working on adding new features.\nThis will be your gentle, illustrated guide into how WebAssembly works, why we need it and how you can benefit from it in your next project (even if you continue to work with JavaScript only). The future is here now and it looks fast and bright.',
          speakerdescription:
            'Contractor for Google, writer about performance on web.dev. and Mozilla Tech Speaker',
          image: "'"
        },
        {
          timestart: '11:00',
          timeend: '12:00',
          tracknumber: 2,
          sessiontitle: 'What Can We Learn From Javascript Fatigue',
          speakername: 'Lucas Fernandes da Costa',
          sessiondescription:
            'The whole reason for JS Fatigue is not the huge amount of modules we’ve got available, the real issue is the mindset we have when writing code. With an average of 447 new packages a day and lots of new technologies appearing it seems impossible to keep up with the insane velocity things happen in the JavaScript ecosystem. Explore the goals of software engineers, the UNIX philosophy and the history and causes of JavaScript fatigue. In this talk he creates a parallel between psychology, decision making and JavaScript.',
          speakerdescription: 'Core team member of Chai.js and Sinon.js',
          image: "'"
        },
        {
          timestart: '12:00',
          timeend: '13:00',
          tracknumber: 0,
          sessiontitle: 'Lunch Break',
          speakername: 'FrontMania',
          sessiondescription: "'",
          speakerdescription: "'",
          image: "'"
        },
        {
          timestart: '13:00',
          timeend: '14:00',
          tracknumber: 1,
          sessiontitle: 'The Intranet of Things',
          speakername: 'Sebastian Golasch',
          sessiondescription:
            'The dust around everybody’s fav buzzword from 2015 “IoT” has settled, but do solutions exist  that value our privacy & autonomy? No really.',
          speakerdescription:
            ' Specialist Senior Manager Software Developer at Qivicon, IoT reverse engineer, Long time JavaScript lover',
          image: "'"
        },
        {
          timestart: '13:00',
          timeend: '14:00',
          tracknumber: 2,
          sessiontitle: 'Puppeteer can automate that!',
          speakername: 'Önder Ceylan',
          sessiondescription:
            "Puppeteer is a node library which provides a high-level API to control Chrome over the DevTools Protocol. When combined with the power of the web technologies, it can be used for automating image processing and batch file generation, creating automated visual testing with device emulation and so much more! We'll explore those capabilities of Puppeteer API with combination of DevTools protocol and cloud functions (FaaS) with a showcase of real life use cases demonstrated by live-examples. Finally, we’ll go through the existing puppeteer based SaaS solutions such as Checkly and Browslerless.",
          speakerdescription:
            ' Self-established JavaScript professional and a Google Developers Expert in Web Technologies',
          image: "'"
        },
        {
          timestart: '14:00',
          timeend: '15:00',
          tracknumber: 1,
          sessiontitle: 'JavaScript on the Desktop, Fast and Slow',
          speakername: 'Felix Rieseberg',
          sessiondescription:
            'We need to talk about JavaScript performance on the desktop. Why does it seem like so many Electron apps consume more resources than their native counterparts? Felix explores the architectural tricks separating slow and fast Electron apps.',
          speakerdescription:
            'Felix is a Senior Staff Engineer and Tech Lead at Slack. Co-maintainer of Electron and maintainer of numerous open source libraries, focusing on JavaScript and Node.js',
          image: "'"
        },
        {
          timestart: '14:00',
          timeend: '15:00',
          tracknumber: 2,
          sessiontitle: 'Raising $24 million to Build an Open Source Skynet',
          speakername: 'Tal Ater',
          sessiondescription:
            "An adventure story with drones, robots, autonomous boats, astronauts, and JavaScript… and what it means for tomorrow's autonomous cars.",
          speakerdescription:
            "Founder and CTO of the DAV Foundation, the creator of a number of popular open source libraries,  an O'Reilly published autho and an W3C Invited Expert.",
          image: "'"
        },
        {
          timestart: '15:00',
          timeend: '16:00',
          tracknumber: 1,
          sessiontitle: 'JavaScript on Microcontrollers',
          speakername: 'Niels Leenheer',
          sessiondescription:
            'Building an IoT device feels out of reach to a lot of web developers. Most of us didn’t study electrical engineering, and never learned to solder. And programming a microcontroller is on a completely different level than building a website.\n\nBut that is just not true anymore. Nowadays microcontrollers have become powerful enough to run JavaScript. And that opens up IoT to all of us.',
          speakerdescription:
            'Creator of HTML5test.com is a Mozilla TechSpeaker, Google Developer Expert, Microsoft MVP and CTO of Salonhub',
          image: "'"
        },
        {
          timestart: '15:00',
          timeend: '16:00',
          tracknumber: 2,
          sessiontitle: 'Cloudflare Workers and the application with GraphQL',
          speakername: 'Albert Groothedde',
          sessiondescription:
            "GraphQL is a great technology. But... your backend developers might not want to convert just yet. That's where Cloudflare Workers can step in. In the talk we'll talk about example application leveraging Cloudflare workers using Graphql, seeing how to deal with the limitations of the workers and how to make use Cloudflare's cache.",
          speakerdescription:
            'Albert is a Frontmaniac @Frontmen, the creator of Ortum and GraphQL enthusiast. He also created graphql-query-path and uses Colemak.',
          image: "'"
        },
        {
          timestart: '16:00',
          timeend: '16:30',
          tracknumber: 0,
          sessiontitle: 'Coffee break',
          speakername: 'FrontMania',
          sessiondescription: "'",
          speakerdescription: "'",
          image: "'"
        },
        {
          timestart: '16:30',
          timeend: '17:30',
          tracknumber: 1,
          sessiontitle: 'Node.js on mobile apps',
          speakername: 'Andre Staltz',
          sessiondescription:
            "If you're building a React Native app, you don't have access to Node APIs such as the filesystem, TCP, and others, and the alternative is to build support for these in Java (Android) and ObjectiveC (iOS) yourself. Recently, though, a new library exists called nodejs-mobile, which allows you to run a real Node.js process on mobile devices. In this talk, you can learn exactly how to do this, and when it is beneficial to your project.",
          speakerdescription:
            'Freelancer builds open source software, teaches programming, and write articles. His Areas of focus are: JavaScript, user interfaces, reactive programming, React Native, and peer-to-peer networks.',
          image: "'"
        },
        {
          timestart: '16:30',
          timeend: '17:30',
          tracknumber: 2,
          sessiontitle: 'How to build Javascript-powered Smartglasses',
          speakername: 'Ruben van der Leun',
          sessiondescription:
            'After having worked at an AR-focused company with the Vuzix, a Google Glass-like product, Ruben had a lot of fun with the hardware and really wanted to have one at home to play around with. Unfortunately, they are too expensive to get one just for hobby purposes. This session will cover what was required to build his own wearable, the pitfalls, the compromises, and the sheer joy of saying "Screw it, I\'ll build it myself!".',
          speakerdescription: 'Full Stack Web / XR Developer',
          image: "'"
        },
        {
          timestart: '17:30',
          timeend: '18:30',
          tracknumber: 0,
          sessiontitle:
            'There’s no talent (or luck or favoritism), just hard work - but is it worth it?',
          speakername: 'Katerina Skroumpelou',
          sessiondescription:
            'If you’re sitting there wondering “How did they manage that?“, well, you now have the answer. In this talk we’ll go through all the clichés and myths concerning “life achievements”, including the term “life achievements”. In our culture, in our age and time, and in our industry, burnout and the impostor syndrome are real. But so are toxic environments that ask you to overwork yourself. And so are toxic people who like to think that those who “made it” (another cliché we’ll talk about) did so because they got lucky or favored.\n' +
            'But let’s take a step back and think for a second. Let’s redefine our goals and choices and let’s think about what drives them. Is a “life achievement” a generally accepted standard? When will you feel that you finally “made it”? Is our perception of success driven by what we really want, or rather by movies, rockstar developers, and the life of Steve Jobs?',
          speakerdescription:
            'Frontend developer at This Dot, Inc and co-organizing AngularAthens',
          image: "'"
        }
      ]
    }
  },
  methods: {
    handleToggle() {
      this.isMinified = !this.isMinified
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/colors';

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

/* Before sidebar collapses */
@media screen and (min-width: 992px) and (max-width: 1200px) {
  .schedule-wrapper {
    padding: 0 !important;
  }
}

@media screen and (max-width: 700px) {
  .time-slot {
    display: none;
  }
}

/*************************
 * VISUAL STYLES
 *************************/

.schedule-wrapper {
  padding: 0 60px 0 40px;
  margin: 0 auto;
}

.track-slot {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 850px) {
  .schedule-wrapper {
    padding: 0 !important;
  }

  .track-slot {
    display: none; /* hidden on small screens and browsers without grid support */
  }
}

.slot-1 {
  background: $green;
}

.slot-2 {
  background: $lightBlue;
}

.time-slot {
  font-size: 1em;
}

.custom-btn {
  display: inline-block;
  font-size: 13px;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.15em;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  color: #ffffff;
  background-color: #9fa1a7;
  box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
  text-align: center;
  position: relative;
  padding: 0.5em;

  &:active {
    box-shadow: none;
  }
}

.active {
  top: 0.1em;
  background-color: $green;
  background-image: url('/images/schedule/spray_fat_yellow.svg');
  background-repeat: no-repeat;
  background-size: cover;
  color: $black;
}
</style>
