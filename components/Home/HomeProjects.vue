<template>
  <p>to build apps like</p>
  <div v-for="project in homeProjects" class="mt-10 sm:flex sm:items-center">
    <img
      :src="project.img"
      :alt="project.title"
      class="h-56 w-full rounded-xl object-cover sm:mr-10 sm:h-[150px] sm:w-[250px]"
    />

    <div class="mt-4 flex items-center gap-x-2 sm:hidden">
      <p
        class="label"
        v-for="technology in project.technologies"
        :key="technology.id"
      >
        {{ technology.name }}
      </p>
    </div>
    <div>
      <div class="mt-6 mb-2 flex items-center sm:mt-0">
        <h3 class="text-2xl font-bold text-white">
          {{ project.title }}
        </h3>
        <a
          v-if="project.github"
          :href="project.github"
          rel="noreferrer"
          target="_blank"
          class="link ml-5 text-xs text-gray"
          >GitHub</a
        >
        <a
          v-if="project.live"
          :href="project.live"
          rel="noreferrer"
          target="_blank"
          class="link ml-5 text-xs text-gray"
          >Live</a
        >
      </div>

      <p class="mb-3">
        {{ project.text }}
      </p>

      <div class="hidden sm:flex sm:items-center sm:gap-x-2">
        <p
          class="label"
          v-for="technology in project.technologies"
          :key="technology.id"
        >
          {{ technology.name }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      homeProjects: [
        {
          id: 0,
          title: "Order.me",
          img: "/orderme.jpg",
          github: "https://github.com/dmnkhvl/SimpleOrder",
          live: "https://order.dmnkhvl.eu/",
          text: "This app lets users create, manage and products in a virtual bag with options to delete and see total cost, subtotal and discount.",
          technologies: [
            {
              id: 0,
              name: "React",
            },
            {
              id: 1,
              name: "Tailwind CSS",
            },
          ],
        },
        {
          id: 1,
          title: "dmnkhvl.eu",
          img: "/dmnkhvl.jpg",
          github: "https://github.com/dmnkhvl/dmnkhvl.eu",
          live: "https://dmnkhvl.eu/",
          text: "My personal portfolio, showcasing my design and web development skills in a sleek, minimal way.",
          technologies: [
            {
              id: 0,
              name: "Nuxt.js",
            },
            {
              id: 1,
              name: "Tailwind CSS",
            },
          ],
        },
        {
          id: 2,
          title: "LaCompra",
          img: "/lacompra.jpg",
          github: "https://github.com/dmnkhvl/LaCompra",
          live: "https://la-compra.vercel.app/lists",
          text: "The task was to create a mobile app using Vue.js and Ionic for Wezeo. Replicating their old app that allows users to manage shopping lists from an API.",
          technologies: [
            {
              id: 0,
              name: "Vue.js",
            },
            {
              id: 1,
              name: "Ionic Framework",
            },
          ],
        },
      ],
    };
  },
};
</script>
