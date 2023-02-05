<template>
  <section class="page-section">
    <h2 class="subtitle">Skills</h2>
    <div class="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-y-10">
      <div>
        <h3 class="text-gray text-lg font-medium">Languages</h3>
        <div class="mt-2 grid grid-cols-2">
          <div
            class="flex items-center gap-x-1 text-white"
            v-for="lang in sortedLanguages"
            :key="lang.id"
          >
            <p>{{ lang.name }}</p>
            <div class="flex items-center gap-x-1">
              <!--              <div-->
              <!--                v-for="n in lang.skill"-->
              <!--                class="w-[5px] h-[5px] rounded-full bg-special"-->
              <!--              />-->
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-gray text-lg font-medium">Frameworks/libs</h3>
        <div class="mt-2 grid grid-cols-2 text-white">
          <p class="" v-for="lib in javascriptLibs" :key="lib.id">
            {{ lib.name }}
          </p>
        </div>
      </div>
      <div>
        <h3 class="text-gray text-lg font-medium">Dev tools</h3>
        <div class="mt-2 grid grid-cols-2 text-white">
          <p class="" v-for="tool in devTools" :key="tool.id">
            {{ tool.name }}
          </p>
        </div>
      </div>
      <div>
        <h3 class="text-gray text-lg font-medium">Design</h3>
        <div class="mt-2 grid grid-cols-2 text-white">
          <p class="" v-for="tool in design" :key="tool.id">
            {{ tool.name }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    sortedLanguages() {
      return this.languages.sort(function (a, b) {
        return b.skill - a.skill;
      });
    },
  },
  data() {
    return {
      languages: [
        {
          id: 0,
          name: "JavaScript",
          skill: 4,
        },
        {
          id: 1,
          name: "TypeScript",
          skill: 3,
        },
        {
          id: 2,
          name: "PHP",
          skill: 2,
        },
        {
          id: 3,
          name: "Python",
          skill: 3,
        },
        {
          id: 4,
          name: "C++",
          skill: 2,
        },
        {
          id: 5,
          name: "Java",
          skill: 1,
        },
        {
          id: 6,
          name: "Swift",
          skill: 1,
        },
        {
          id: 7,
          name: "SQL",
          skill: 3,
        },
        {
          id: 8,
          name: "bash",
          skill: 3,
        },
        {
          id: 9,
          name: "HTML",
          skill: 4,
        },
        {
          id: 10,
          name: "CSS",
          skill: 4,
        },
      ],
      javascriptLibs: [
        {
          id: 0,
          name: "Vue.js",
        },
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Nuxt.js",
        },
        {
          id: 3,
          name: "Next.js",
        },
        {
          id: 7,
          name: "Node.js",
        },
        {
          id: 5,
          name: "Pinia/Vuex",
        },
        {
          id: 6,
          name: "Redux",
        },
        {
          id: 7,
          name: "Express.js",
        },
        {
          id: 8,
          name: "Ionic Framework",
        },
        {
          id: 9,
          name: "Tailwind CSS",
        },
        {
          id: 10,
          name: "SCSS",
        },
        {
          id: 10,
          name: "Laravel",
        },
      ],
      devTools: [
        {
          id: 0,
          name: "Git",
          skill: 4,
        },
        {
          id: 1,
          name: "GitHub",
          skill: 3,
        },
        {
          id: 2,
          name: "Postman",
          skill: 2,
        },
        {
          id: 3,
          name: "Jira",
          skill: 2,
        },
        {
          id: 4,
          name: "NPM",
          skill: 4,
        },
        {
          id: 5,
          name: "VS Code",
          skill: 4,
        },
        {
          id: 6,
          name: "PHP Storm",
          skill: 3,
        },
        {
          id: 7,
          name: "Webpack",
          skill: 2,
        },
        {
          id: 8,
          name: "Vercel",
          skill: 1,
        },
        {
          id: 9,
          name: "Supabase",
          skill: 1,
        },
        {
          id: 9,
          name: "Vite",
          skill: 1,
        },
      ],
      design: [
        {
          id: 0,
          name: "Adobe Photoshop",
          skill: 4,
        },
        {
          id: 1,
          name: "Adobe Illustrator",
          skill: 3,
        },
        {
          id: 2,
          name: "Adobe XD",
          skill: 2,
        },
        {
          id: 3,
          name: "Figma",
          skill: 2,
        },
        {
          id: 4,
          name: "Graphic design",
          skill: 4,
        },
        {
          id: 5,
          name: "UI/UX design",
          skill: 4,
        },
        {
          id: 6,
          name: "Brand identity",
          skill: 3,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
