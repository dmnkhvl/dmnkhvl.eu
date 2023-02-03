<template>
  <div
    class="bg-black/80 sm:bg-black/50 border-t border-white/10 sm:border-0 fixed bg-blur bottom-0 sm:top-0 left-0 right-0 h-[65px]"
  >
    <div
      class="container flex items-center justify-center sm:justify-between h-full"
    >
      <nav class="flex items-center gap-x-10">
        <NuxtLink
          to="/"
          class="hidden sm:flex text-white decoration-white/20 underline underline-offset-8 hover:decoration-white decoration-solid transition duration-300 ease-in-out"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/"
          :class="
            $route.path === '/'
              ? 'sm:hidden mt-1 text-white px-1 py-1 '
              : 'sm:hidden text-white/20  mt-1 px-1 py-1'
          "
        >
          <nuxt-icon
            name="home"
            class="text-2xl transition duration-300 ease-in-out"
          />
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-white decoration-white/20 underline underline-offset-8 hover:decoration-white decoration-solid transition duration-300 ease-in-out"
        >
          About
        </NuxtLink>

        <NuxtLink
          to="/projects"
          class="text-white decoration-white/20 underline underline-offset-8 hover:decoration-white decoration-solid transition duration-300 ease-in-out"
        >
          Projects</NuxtLink
        >

        <NuxtLink
          to="/contact"
          class="text-white decoration-white/20 underline underline-offset-8 hover:decoration-white decoration-solid transition duration-300 ease-in-out"
        >
          Contact</NuxtLink
        >
      </nav>
      <SocialsBar class="hidden sm:flex" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
