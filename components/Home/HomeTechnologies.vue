<template>
  <div>
    <p class="text-sm sm:mb-0 sm:text-basicText">I use this</p>
    <h3 class="subtitle mt-1">Technologies</h3>
    <div>
      <div class="mt-4 grid select-none grid-cols-2 gap-x-6 gap-y-1 text-white">
        <div
          v-for="technology in technologies"
          :key="technology.id"
          class="col-span-1 row-span-1 flex items-center gap-x-2"
        >
          <p>{{ technology.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      technologies: [
        {
          id: 0,
          name: "JavaScript",
          icon: "js",
        },
        {
          id: 1,
          name: "TypeScript",
          icon: "ts",
        },
        {
          id: 2,
          name: "Vue.js",
          icon: "vue",
        },
        {
          id: 3,
          name: "Nuxt.js",
          icon: "si-tailwindcss",
        },
        {
          id: 4,
          name: "React",
          icon: "co-react",
        },
        {
          id: 5,
          name: "Next.js",
          icon: "co-next-js",
        },
        {
          id: 6,
          name: "HTML",
          icon: "io-logo-html5",
        },
        {
          id: 7,
          name: "CSS",
          icon: "io-logo-css3",
        },
        {
          id: 8,
          name: "SCSS",
          icon: "io-logo-css3",
        },
        {
          id: 8,
          name: "Tailwind CSS",
          icon: "io-logo-css3",
        },
      ],
    };
  },
};
</script>
