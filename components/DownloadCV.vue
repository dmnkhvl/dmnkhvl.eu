<template>
  <a
    href="/dominikHavel_en.pdf"
    target="_blank"
    class="text-special decoration-special/20 hover:decoration-special mt-2 flex items-center gap-x-1 underline decoration-dotted underline-offset-4 transition duration-300 ease-in-out hover:decoration-solid"
  >
    <nuxt-icon name="resume" />{{ $t("viewResume") }}</a
  >
</template>
<script>
export default {
  props: {
    text: String,
  },
};
</script>
