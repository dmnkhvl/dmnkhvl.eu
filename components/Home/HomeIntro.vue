<template>
  <div class="container sm:flex items-center gap-x-10">
    <nuxt-img
      src="/profilePic.jpg"
      alt="profile-picture"
      class="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full object-cover"
    />
    <div>
      <div>
        <h1
          class="mt-4 sm:mt-0 text-3xl sm:text-4xl font-bold capitalize text-white"
        >
          Dominik Havel
        </h1>
        <h2 class="sm:text-[0.98rem] capitalize sm:-mt-1 text-special">
          web developer & ex-graphic designer.
        </h2>
      </div>
      <p class="sm:text-[0.88rem] mt-2 text-white">
        {{ getGreeting() }}, I'm a frontend developer with a love for both
        sports and creating amazing user experiences. I bring projects to life
        in a way that's not only functional, but also enjoyable for everyone
        involved.
        <NuxtLink to="/about" class="link ml-1 text-xs"> More</NuxtLink>
      </p>
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
