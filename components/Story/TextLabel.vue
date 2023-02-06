<template>
  <span
    class="text-sm bg-vue-blue-gray bg-opacity-5 px-2 py-1 rounded-lg text-vue-blue-gray"
    >{{ text }}</span
  >
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>

<style lang="scss" scoped></style>
