<template>
  <footer
    class="hidden sm:flex mt-20 flex flex-row gap-x-10 items-center justify-center h-[60px]"
  >
    <p>© Dominik Havel, Bratislava, Slovakia</p>
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
