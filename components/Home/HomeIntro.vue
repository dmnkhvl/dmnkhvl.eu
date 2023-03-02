<template>
  <div class="container items-center gap-x-10 sm:flex">
    <div>
      <div>
        <h1 class="mt-4 title sm:mt-0">Hi, I'm Dominik 👋</h1>
      </div>
      <p class="mt-4">
        Frontend developer at
        <a
          href="https://www.websupport.sk/"
          target="_blank"
          ref="noreferrer"
          class="hover:text-websupport-red hover:decoration-websupport-red text-white underline decoration-white/20 decoration-dotted underline-offset-4 transition duration-300 ease-in-out hover:decoration-solid active:decoration-white"
          >Websupport</a
        >
        & part-time graphic designer from Bratislava, Slovakia. Transforming
        code into meaningful experiences.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  methods: {
    getGreeting(lang: string) {
      const hour = new Date().getHours();
      if (lang === "sk") {
        if (hour >= 6 && hour < 12) return "Dobré ráno";
        else if (hour >= 12 && hour < 18) return "Dobrý deň";
        return "Dobrý večer";
      } else {
        if (hour >= 6 && hour < 12) return "Good morning";
        else if (hour >= 12 && hour < 18) return "Good afternoon";
        return "Good evening";
      }
    },
  },
};
</script>
