<template>
  <a :href="href" target="_blank" rel="noreferrer" class="link"> <slot /></a>
</template>

<script>
export default {
  props: {
    href: String,
  },
};
</script>
