<template>
  <div
    v-for="project in homeProjects"
    class="mb-24 sm:mb-10 sm:flex sm:items-center"
  >
    <nuxt-img
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
          class="link text-gray ml-5 text-xs"
          >GitHub</a
        >
        <a
          v-if="project.live"
          :href="project.live"
          rel="noreferrer"
          target="_blank"
          class="link text-gray ml-5 text-xs"
          >{{ $t("live") }}</a
        >
      </div>

      <p class="mb-3" v-if="$i18n.locale === 'en'">
        {{ project.text_en }}
      </p>
      <p class="mb-3" v-else>
        {{ project.text_sk }}
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
          live: "https://simple-order.vercel.app/",
          text_en:
            "This app lets users create and manage products in a virtual bag with options to delete and see total cost, subtotal and discount.",
          text_sk:
            "Táto aplikácia umožňuje používateľom vytvárať a spravovať produkty vo virtuálnom košíku s možnosťami vymazať a zobraziť celkovú cenu, medzisúčet a zľavu.",
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
          text_en:
            "My personal portfolio, showcasing my design and web development skills in a sleek, minimal way.",
          text_sk:
            "Moje osobné portfólio. Prezentuje moje zručnosti v oblasti dizajnu a vývoja webu",
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
          text_en:
            "The task was to create a mobile app using Vue.js and Ionic Framework for Wezeo. Replicating their old app that allows users to manage shopping lists from an API.",
          text_sk:
            "Úlohou bolo vytvoriť mobilnú aplikáciu pomocou Vue.js a Ionic Frameworku pre Wezeo. Replikuje ich starú aplikáciu, ktorá používateľom umožňuje spravovať nákupné zoznamy z rozhrania API.",
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
