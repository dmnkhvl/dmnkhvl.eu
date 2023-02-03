<template>
  <div class="container">
    <!--    <p class="mb-1 text-sm sm:mb-1 sm:text-base">{{ getGreeting() }}, I'm</p>-->
    <h1 class="text-4xl font-bold capitalize text-white sm:text-[2.75rem]">
      Dominik Havel
    </h1>
    <h2 class="text-[0.98rem] capitalize sm:mt-1">
      web developer & ex-graphic designer.
    </h2>
    <p class="mt-2 max-w-xl"></p>
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
