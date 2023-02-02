<template>
  <div class="mt-10 flex items-start gap-x-2">
    <div><p class="text-2xl leading-none text-special">#</p></div>
    <div class="">
      <h3 class="text-heading3 leading-none text-white">{{ title }}</h3>
    </div>
  </div>
  <p class="mt-2 max-w-xl text-paragraph">
    <slot></slot>
  </p>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
