<template>
  <footer
    class="mt-20 flex hidden h-[60px] flex-row items-center justify-center gap-x-10 sm:flex"
  >
    <p>{{ $t("footerText") }}</p>
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
