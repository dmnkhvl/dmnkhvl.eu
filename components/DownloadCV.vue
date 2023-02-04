<template>
  <a
    href="/dominikHavel_en.pdf"
    target="_blank"
    class="mt-2 flex items-center gap-x-1 text-special underline underline-offset-4 decoration-dotted decoration-special/20 hover:decoration-special hover:decoration-solid transition duration-300 ease-in-out"
  >
    <nuxt-icon name="resume" />{{ text }}</a
  >
</template>
<script>
export default {
  props: {
    text: String,
  },
};
</script>
