<template>
  <ul class="mt-6 text-sm md:text-base">
    <h4 class="mb-4 font-medium text-gray">Zaujímavé články:</h4>
    <li
      v-for="article in articles"
      :key="article.id"
      class="list-disc ml-6 mt-2 text-gray"
    >
      <a
        :href="article.link"
        rel="noreferrer"
        target="_blank"
        class="text-gray decoration-gray hover:underline hover:underline-offset-2 hover:text-special-darker hover:decoration-special-darker focus:underline focus:underline-offset-2 focus:text-special-darker focus:decoration-special-darker transition-colors underline underline-offset-2"
        >{{ article.title }}</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 0,
          title: 'O pár rokov chcem byť súčasťou extraligového tímu',
          link: 'http://www.mbkkarlovka.sk/dominik-havel-o-par-rokov-chcem-byt-sucastou-extraligoveho-timu/',
        },
        {
          id: 1,
          title: 'Dominik Havel si opäť na seba navliekol slovenský dres',
          link: 'http://www.mbkkarlovka.sk/dominik-havel-si-na-seba-opat-navliekol-slovensky-dres/',
        },
        {
          id: 2,
          title:
            'Superman? Dominik Havel hrá za kadetov, juniorov, strihá videá a má čas aj chodiť von!',
          link: 'http://www.mbkkarlovka.sk/superman-dominik-havel-hra-za-kadetov-juniorov-striha-videa-a-ma-cas-aj-chodit-von/',
        },
        {
          id: 3,
          title: 'Slovensko ide na Majstrovstvá sveta',
          link: 'https://slovakbasket.sk/sk/article/3%C3%973-basketbal-slovensko-ide-na-majstrovstva-sveta',
        },
        {
          id: 4,
          title: 'Boli sme súčasťou FIBA 3x3 Majstrovstiev sveta',
          link: 'https://slovakbasket.sk/sk/article/3x3-basketbal-boli-sme-sucastou-fiba-3x3-majstrovstiev-sveta',
        },
      ],
    }
  },
}
</script>
