<template>
  <fm-section background="/images/bg-yellow-green.png">
    <div class="flex flex-col justify-center">
      <p class="text-4xl pl-4 sm:hidden">
        GET THEM WHILE THEY'RE HOT
      </p>
      <img src="~/assets/images/tickets.svg">

      <div class="flex">
        <p class="hidden sm:block text-4xl w-2/3">
          GET THEM WHILE THEY'RE HOT
        </p>
        <a
          class="w-1/2 bg-fm-pink mx-10 sm:mx-0 h-16 text-sm sm:text-lg font-bold flex items-center justify-center no-underline text-fm-black w-full sm:w-75"
          href="https://www.eventbrite.nl/e/tickets-frontmania-conference-2019-58636364946"
          rel="noopener noreferrer"
          target="_blank"
        >
          GET TICKETS FOR 2019
        </a>
      </div>
    </div>
  </fm-section>
</template>

<script>
import FmSection from '~/components/Section.vue'

export default {
  components: { FmSection }
}
</script>
