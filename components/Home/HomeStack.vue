<template>
  <div>
    <h2 class="subtitle mt-1">tech stack</h2>
    <p class="mt-2 max-w-lg">
      {{ $t("homeTechStackText") }}
    </p>
    <div>
      <div class="mt-6 grid grid-cols-2 gap-2 sm:text-lg">
        <div
          class="flex items-center gap-x-3"
          v-for="tech in stack"
          :key="tech.id"
        >
          <nuxt-img
            :src="tech.img"
            class="h-[20px] w-[20px] rounded-sm object-scale-down"
            :alt="tech.name"
          />
          <p class="text-white">{{ tech.name }}</p>
        </div>
        <NuxtLink to="/about" class="link text-sm sm:text-base">{{
          $t("seeAll")
        }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stack: [
        {
          id: 0,
          name: "JavaScript",
          img: "/javascript.png",
        },
        {
          id: 1,
          name: "TypeScript",
          img: "/typescript.png",
        },
        {
          id: 2,
          name: "Vue.js",
          img: "/vue.png",
        },
        {
          id: 3,
          name: "Nuxt.js",
          img: "/nuxt.png",
        },
        {
          id: 4,
          name: "React",
          img: "/react.png",
        },
        {
          id: 5,
          name: "Next.js",
          img: "/next.png",
        },
        {
          id: 6,
          name: "Tailwind CSS",
          img: "/tailwind.png",
        },
      ],
    };
  },
};
</script>
