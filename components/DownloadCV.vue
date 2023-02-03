<template>
  <a
    href="/dominikHavel_en.pdf"
    class="text-special underline underline-offset-4 decoration-dotted decoration-special/20 hover:decoration-special transition duration-300 ease-in-out"
    download
    >{{ text }}</a
  >
</template>
<script>
export default {
  props: {
    text: String,
  },
};
</script>
