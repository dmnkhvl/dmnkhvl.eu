<template>
  <div
    class="border-t border-white/10 sm:border-0 fixed bg-blur bottom-0 sm:top-0 left-0 right-0 h-[60px]"
  >
    <div
      class="container flex items-center justify-center sm:justify-between h-full"
    >
      <nav class="flex items-center gap-x-10">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-white decoration-white/20 underline underline-offset-8 hover:decoration-white decoration-solid transition duration-300 ease-in-out"
          >{{ link.label }}</NuxtLink
        >
      </nav>
      <div>
        <!-- ADD SOCIALS-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      navLinks: [
        {
          to: "/",
          label: "Home",
        },
        {
          to: "about",
          label: "About",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
