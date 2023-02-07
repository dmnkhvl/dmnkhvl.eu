<template>
  <main class="container">
    <h1 class="title">{{ $t("projects") }}</h1>
    <p class="mt-10 mb-20 font:text-xl text-2xl text-yellow-300">
      This page is in progress...
    </p>
    <ProjectsCards />
  </main>
</template>
<script>
export default {
  data() {
    return {
      projects: [
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
