<template>
  <main class="container">
    <h1 class="title">About me</h1>
    <p class="mt-4 max-w-xl text-paragraph text-gray">
      I'm Dominik, a
      <a class="link" @click="scrollTo('developer')"> web developer</a> from
      Bratislava, Slovakia. I have a passion for technology, sports and design.
      Developed through years of
      <a class="link" @click="scrollTo('basketball')"> playing basketball</a>,
      <a class="link" @click="scrollTo('designer')"> graphic design</a> and IT
      studies. My interest in web technologies really took off in college, where
      I began building more advanced web applications.
    </p>
    <!--    <AboutSkills />-->

    <!--    <section-->
    <!--      class="page-section flex-col sm:flex w-full items-center justify-between"-->
    <!--    >-->
    <!--      <a-->
    <!--        href="https://github.com/dmnkhvl"-->
    <!--        class="link border border-white/10 px-16 py-6 rounded-xl hover:bg-white/5 inline-block w-full text-center mb-4"-->
    <!--        rel="noreferrer"-->
    <!--        target="_blank"-->
    <!--        >Github</a-->
    <!--      >-->

    <!--      <a-->
    <!--        href="https://www.linkedin.com/in/dmnkhvl/"-->
    <!--        class="link border border-white/10 px-16 py-6 rounded-xl hover:bg-white/5 inline-block w-full text-center mb-4"-->
    <!--        rel="noreferrer"-->
    <!--        target="_blank"-->
    <!--        >LinkedIn</a-->
    <!--      >-->

    <!--      <a-->
    <!--        href="https://twitter.com/dmnkhvl"-->
    <!--        class="link border border-white/10 px-16 py-6 rounded-xl hover:bg-white/5 inline-block w-full text-center"-->
    <!--        rel="noreferrer"-->
    <!--        target="_blank"-->
    <!--        >Twitter</a-->
    <!--      >-->
    <!--    </section>-->

    <section class="page-section">
      <h2 class="subtitle">Work Experience</h2>
      <AboutWorkExperience />
    </section>
    <section class="page-section">
      <h2 class="subtitle">My Life as</h2>
      <h3 class="text-heading3 leading-none text-white pt-10" id="developer">
        <a class="text-special" href="#developer" aria-hidden="true">#</a>
        Web developer
      </h3>
      <p class="paragraph">
        I learned about web development, including technologies such as
        JavaScript and PHP, with the help of a friend who taught and supported
        me throughout the process. At first, I found it challenging to grasp
        everything, but as I continued to learn and work on my own projects, my
        understanding and skill grew. I particularly enjoy using JavaScript, and
        had the opportunity to work with React and Vue. I also experimented with
        different CSS preprocessors, ultimately settling on using Tailwind CSS.
        While I am still relatively new to web development, I am excited to
        continue learning and expanding my skills.
      </p>
      <h3 class="text-heading3 leading-none text-white pt-10" id="basketball">
        <a class="text-special" href="#basketball" aria-hidden="true">#</a>
        Basketball player
      </h3>
      <p class="paragraph">
        I have been playing basketball since the age of nine. Over the years, I
        have participated in various Slovakian Championships, earning multiple
        medals, and even had the honor of representing my country on the
        international stage, including European and World Championships.
      </p>

      <h3 class="text-heading3 leading-none text-white pt-10" id="founder">
        <a class="text-special" href="#founder" aria-hidden="true">#</a>
        Founder
      </h3>
      <p class="paragraph">
        I founded and built a project about Slovak basketball, aiming to provide
        interesting interviews, current information, results, and statistics
        about players. The project, called basketlab.sk, was successful and
        became popular and had thousands of fans. After approximately two years,
        the brand basketlab was abandoned and the project continued under the
        Slovak Basketball Association.
      </p>

      <h3 class="text-heading3 leading-none text-white pt-10" id="designer">
        <a class="text-special" href="#designer" aria-hidden="true">#</a>
        Graphic designer
      </h3>
      <p class="paragraph">
        At the age of 13, I discovered my passion for graphic design. With years
        of experience under my belt, I've created a significant amount of
        outputs such as banners, infographics, print materials, and more, mostly
        for sports clubs and organizations. I've also had the chance to design
        complete visual concepts for events, including logos, color schemes, and
        other graphic elements. Additionally, I've had some experience in photo
        editing, video editing, and animation.
      </p>
    </section>
  </main>
</template>

<script>
import AboutSkills from "~/components/About/AboutSkills.vue";

export default {
  components: { AboutSkills },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
