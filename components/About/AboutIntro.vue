<template>
  <h1 class="title">About me</h1>
  <p class="mt-4 max-w-xl text-paragraph text-gray">
    I'm Dominik, a
    <a class="link" @click="scrollTo('developer')"> web developer</a> from
    Bratislava, Slovakia. I have a passion for technology, sports and design.
    Developed through years of
    <a class="link" @click="scrollTo('basketball')"> playing basketball</a>,
    <a class="link" @click="scrollTo('designer')"> graphic design</a> and IT
    studies. My interest in web technologies really took off in college, where I
    began building more advanced web applications.
  </p>
</template>

<script>
export default {
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
