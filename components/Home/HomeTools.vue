<template>
  <div class="mt-12 sm:mt-0">
    <p class="mb-1 text-sm sm:mb-0 sm:text-base">and this</p>
    <h3 class="subtitle mt-1">Tools</h3>
    <div>
      <div class="mt-4 grid select-none grid-cols-2 gap-x-6 gap-y-1 text-white">
        <div
          v-for="tool in tools"
          :key="tool.id"
          class="col-span-1 row-span-1 flex items-center gap-x-2"
        >
          <!--          <v-icon :name="tool.icon" class="text-gray"></v-icon>-->
          <p>{{ tool.name }}</p>
        </div>
      </div>
      <ul></ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tools: [
        {
          id: 0,
          name: "Git, GitHub",
          icon: "bi-git",
        },
        {
          id: 1,
          name: "Figma",
          icon: "co-figma",
        },
        {
          id: 2,
          name: "VS Code",
          icon: "co-visual-studio-code",
        },
        {
          id: 3,
          name: "PHP Storm",
          icon: "si-phpstorm",
        },
        {
          id: 4,
          name: "NPM",
          icon: "co-npm",
        },
        {
          id: 5,
          name: "Photoshop",
          icon: "si-adobephotoshop",
        },
      ],
    };
  },
};
</script>
