<template>
  <div class="container mt-10 sm:mt-0">
    <p class="mb-1 text-sm sm:mb-1 sm:text-base">{{ getGreeting() }}, I'm</p>
    <h1 class="text-4xl font-bold capitalize text-white sm:text-[2.75rem]">
      Dominik Havel
    </h1>
    <h2 class="text-[0.98rem] text-white capitalize sm:mt-1 sm:font-bold">
      web developer & ex-graphic designer.
    </h2>
  </div>
</template>
<script lang="ts">
export default {
  methods: {
    getGreeting() {
      const hour = new Date().getHours();
      if (hour >= 6 && hour < 12) return "Good morning";
      else if (hour >= 12 && hour < 18) return "Good afternoon";
      return "Good evening";
    },
  },
};
</script>
