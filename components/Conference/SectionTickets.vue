<template>
  <app-section background="/images/bg-yellow-green.png">
    <div class="flex flex-col justify-center">
      <p class="text-4xl pl-4 sm:hidden">
        GET THEM WHILE THEY'RE HOT
      </p>
      <img src="~/assets/images/conference/tickets.svg">

      <div class="flex">
        <p class="hidden sm:block text-4xl w-2/3">
          GET THEM WHILE THEY'RE HOT
        </p>
        <app-btn
          tag="a"
          class="mx-10 sm:mx-0 h-16 text-sm sm:text-lg justify-center p-0 w-full sm:w-75"
          color="bg-app-pink"
          href="https://www.eventbrite.nl/e/tickets-frontmania-conference-2019-58636364946"
          rel="noopener noreferrer"
          target="_blank"
        >
          GET TICKETS FOR 2019
        </app-btn>
      </div>
    </div>
  </app-section>
</template>
