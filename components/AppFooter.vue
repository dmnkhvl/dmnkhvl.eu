<template>
  <footer
    class="hidden sm:flex mt-20 border-t border-white/10 flex flex-row gap-x-10 items-center justify-center h-[60px]"
  >
    <NuxtLink
      v-for="link in navLinks"
      :key="link.to"
      :to="link.to"
      class="text-sm hover:text-white"
      >{{ link.label }}</NuxtLink
    >
  </footer>
</template>

<script>
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
