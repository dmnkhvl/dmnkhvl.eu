<template>
  <div
    class="bg-blur fixed bottom-0 left-0 right-0 h-[65px] border-t border-white/10 bg-black/80 sm:top-0 sm:border-0 sm:bg-black/50"
  >
    <div
      class="container flex h-full items-center justify-center sm:justify-between"
    >
      <nav class="flex items-center gap-x-6">
        <NuxtLink to="/" class="nav-link hidden sm:flex">
          {{ $t("home") }}
        </NuxtLink>
        <NuxtLink
          to="/"
          :class="
            $route.path === '/'
              ? 'text-special mt-1 px-1 py-1 sm:hidden '
              : 'mt-1 px-1  py-1 text-white/20 sm:hidden'
          "
        >
          <nuxt-icon
            name="home"
            class="text-2xl transition duration-300 ease-in-out"
          />
        </NuxtLink>
        <NuxtLink to="/about" class="nav-link"> {{ $t("about") }} </NuxtLink>

        <NuxtLink to="/projects" class="nav-link">
          {{ $t("projects") }}</NuxtLink
        >

        <NuxtLink to="/contact" class="nav-link"> {{ $t("contact") }}</NuxtLink>
        <form class="sm:hidden">
          <select
            class="appearance-none bg-transparent text-white/40"
            v-model="$i18n.locale"
          >
            <option value="en" class="">en</option>
            <option value="sk">sk</option>
          </select>
        </form>
      </nav>
      <SocialsBar class="hidden sm:flex" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
