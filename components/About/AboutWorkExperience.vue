<template>
  <div class="mt-4">
    <div
      v-for="experience in experiences"
      :key="experience.id"
      class="w-full items-end justify-between border-b border-slate-800 py-5 sm:flex"
    >
      <div>
        <h3 class="text-lg text-white sm:text-heading3">
          {{ experience.position }}
        </h3>
        <p class="">{{ experience.company }}</p>
      </div>
      <p class="">{{ experience.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          id: 0,
          company: "Freelance",
          date: "oct2022 - jan2022",
          position: "Web Developer",
        },
        {
          id: 1,
          company: "Slovak national team",
          date: "june2022 - nov2022",
          position: "Basketball player",
        },
        {
          id: 2,
          company: "Vermont services",
          date: "mar2022 - july2022",
          position: "Junior Web Developer",
        },
        {
          id: 3,
          company: "Basketlab.sk",
          date: "aug2018 - sep2021",
          position: "Founder, creator",
        },
        {
          id: 4,
          company: "",
          date: "2015 - 2022",
          position: "Graphic designer",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
