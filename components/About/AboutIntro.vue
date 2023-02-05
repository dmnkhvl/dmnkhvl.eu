<template>
  <h1 class="title">{{ $t("aboutMe") }}</h1>
  <p class="text-gray my-4 max-w-xl" v-if="$i18n.locale === 'en'">
    I'm Dominik, a
    <a class="link" @click="scrollTo('developer')"> web developer</a> from
    Bratislava, Slovakia. I have a passion for technology, sports and design.
    Developed through years of
    <a class="link" @click="scrollTo('basketball')"> playing basketball</a>,
    <a class="link" @click="scrollTo('designer')"> graphic design</a> and IT
    studies. My interest in web technologies really took off in college, where I
    began building more advanced web applications.
  </p>
  <p class="text-gray my-4 max-w-xl" v-else>
    Moje meno je Dominik,
    <a class="link" @click="scrollTo('developer')"> webový developer</a> z
    Bratislavy, Slovenska. Mám vášeň pre technológie, šport a dizajn. Vyvinutú v
    počas rokov<a class="link" @click="scrollTo('basketball')">
      hrania basketbalu</a
    >, <a class="link" @click="scrollTo('designer')"> grafického dizajnu</a> a
    študovania IT. Môj záujem o webové technológie najviac vzrástol na vysokej
    škole, kde som začal budovať pokročilejšie webové aplikácie a venovať im
    viac času.
  </p>

  <DownloadCV />
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
