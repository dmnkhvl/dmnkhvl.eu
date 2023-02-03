<template>
  <div
    class="border-t border-white/10 sm:border-0 fixed bg-blur bottom-0 sm:top-0 left-0 right-0 h-[60px]"
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
          to="/about"
          class="text-white decoration-white/20 underline underline-offset-8 hover:decoration-white decoration-solid transition duration-300 ease-in-out"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/"
          :class="
            $route.path === '/'
              ? 'sm:hidden text-special px-2 py-1 '
              : 'sm:hidden text-white px-2 py-1'
          "
        >
          <nuxt-icon
            name="home"
            class="text-3xl decoration-white/20 underline underline-offset-8 hover:decoration-white decoration-solid transition duration-300 ease-in-out"
          />
        </NuxtLink>

        <NuxtLink
          to="/projects"
          class="text-white decoration-white/20 underline underline-offset-8 hover:decoration-white decoration-solid transition duration-300 ease-in-out"
        >
          Projects</NuxtLink
        >
      </nav>
      <div>
        <!-- ADD SOCIALS-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
