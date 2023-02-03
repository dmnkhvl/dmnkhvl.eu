<template>
  <div class="mt-10 flex items-start gap-x-2">
    <div><p class="text-2xl leading-none text-special">#</p></div>
    <div class="">
      <h3 class="text-heading3 leading-none text-white" id="id">
        {{ title }} {{ id }}
      </h3>
    </div>
  </div>
  <slot></slot>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
