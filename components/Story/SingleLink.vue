<template>
  <a
    :href="link"
    rel="noreferrer"
    target="_blank"
    class="text-special underline underline-offset-2 decoration-special focus:text-special-darker focus:decoration-special-darker hover:text-special-darker hover:decoration-special-darker transition-colors"
    >{{ text }}</a
  >
</template>

<script>
export default {
  props: {
    text: String,
    link: String,
  },
}
</script>
