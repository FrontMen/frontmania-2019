<template>
  <div class="fm">
    <div class="hidden lg:block fixed w-90 h-screen bg-app-black p-8 pt-12 text-center">
      <nuxt-link to="/">
        <app-logo />
      </nuxt-link>

      <transition name="fade">
        <app-navigation v-if="$route.name === 'conference'" class="mt-12" />
      </transition>

      <div class="absolute pin-l pin-b text-app-white text-left px-8 pb-8">
        <p class="mb-6 text-base">
          FrontMania is a group of people who are crazy about frontend development a.k.a. frontend maniacs.
        </p>
        <p class="mb-6 text-base">
          We as a group believe that frontend development should be fun for everyone!
        </p>

        <app-divider class="mb-4" />

        <nuxt-link to="/privacy" class="text-app-yellow text-base">
          PRIVACY POLICY
        </nuxt-link>
      </div>
    </div>

    <div class="lg:ml-90">
      <nuxt />
    </div>
  </div>
</template>
