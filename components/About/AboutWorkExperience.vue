<template>
  <section class="page-section">
    <h2 class="subtitle">{{ $t("workExperience") }}</h2>
    <div class="mt-4">
      <div
        v-for="experience in experiences"
        :key="experience.id"
        class="flex w-full items-end justify-between border-b border-slate-800 py-5"
      >
        <div>
          <h3 class="text-lg text-white sm:text-lg">
            {{ experience.position }}
          </h3>
          <p class="text-sm">{{ experience.company }}</p>
        </div>
        <div class="mt-2 flex flex-col items-end text-xs sm:mt-0 sm:text-base">
          <p class="text-white">
            {{ countMonths(experience.startDate, experience.endDate) }}
          </p>
          <p class="sm:text-sm">{{ experience.date }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  methods: {
    countMonths(startDate: string, endDate: string): string {
      if (endDate === "") {
        endDate = new Date().toISOString().split("T")[0];
      }

      const start = new Date(startDate);
      const end = new Date(endDate);

      const diffTime = end.getTime() - start.getTime();
      const diffDays = diffTime / (1000 * 60 * 60 * 24);
      const diffMonths = diffDays / 30;
      const diffYears = diffMonths / 12;

      const years = Math.floor(diffYears);
      const months = Math.floor(diffMonths % 12);

      let yearString = years === 1 ? "year" : "years";

      if (years >= 1 && months > 0) {
        let monthString = months === 1 ? "month" : "months";
        return years + " " + yearString + " " + months + " " + monthString;
      } else if (years >= 1) {
        return years + " " + yearString;
      } else {
        let monthString = months === 1 ? "month" : "months";
        return months + " " + monthString;
      }
    },
  },
  data() {
    return {
      experiences: [
        {
          id: 0,
          company: "Freelance",
          startDate: "2022-10-01",
          endDate: "",
          date: "oct2022 - present",
          position: "Web Developer",
        },
        {
          id: 1,
          company: "Slovak national team",
          startDate: "2022-06-01",
          endDate: "2022-12-01",
          date: "june2022 - nov2022",
          position: "Basketball player",
        },
        {
          id: 2,
          company: "Vermont services",
          startDate: "2022-03-01",
          endDate: "2022-08-01",
          date: "mar2022 - july2022",
          position: "Junior Web Developer",
        },
        {
          id: 3,
          company: "Basketlab.sk",
          startDate: "2018-08-01",
          endDate: "2021-10-01",
          date: "aug2018 - sep2021",
          position: "Founder, creator",
        },
        {
          id: 4,
          company: "Freelance",
          startDate: "2015-01-01",
          endDate: "2021-12-01",
          date: "2015 - 2022",
          position: "Graphic designer",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
