<template>
  <div class="container items-center gap-x-10 sm:flex">
    <div class="flex items-start justify-between">
      <nuxt-img
        src="/profilePic.jpg"
        alt="profile-picture"
        class="h-[120px] w-[120px] rounded-full object-cover sm:h-[160px] sm:w-[160px]"
      />
    </div>

    <div>
      <div>
        <h1
          class="mt-4 text-3xl font-bold capitalize text-white sm:mt-0 sm:text-4xl"
        >
          Dominik Havel
        </h1>
        <h2 class="text-special capitalize sm:-mt-1 sm:text-[0.98rem]">
          {{ $t("dh_subtitle") }}
        </h2>
      </div>
      <p class="mt-2">{{ getGreeting() }}, {{ $t("homeIntro") }}</p>
    </div>
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
