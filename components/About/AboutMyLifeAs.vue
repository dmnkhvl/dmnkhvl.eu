<template>
  <section class="page-section">
    <h2 class="subtitle">{{ $t("lifeAs") }}</h2>
    <h3 class="text-heading3 paragraph-heading" id="developer">
      {{ $t("webDeveloper") }}
    </h3>
    <div v-if="$i18n.locale === 'en'">
      <p class="paragraph" v-if="$i18n.locale === 'en'">
        I learned about web development, including technologies such as
        <ExternalLink
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          >JavaScript</ExternalLink
        >
        and
        <ExternalLink href="https://www.php.net/docs.php">PHP</ExternalLink>,
        with the help of a friend who taught and supported me throughout the
        process. At first, I found it challenging to grasp everything, but as I
        continued to learn and work on my own projects, my understanding and
        skill grew.
      </p>
      <p class="mt-4">
        I particularly enjoy using JavaScript, and had the opportunity to work
        with
        <ExternalLink href="https://beta.reactjs.org/">React</ExternalLink> and
        <ExternalLink href="https://vuejs.org/guide/introduction.html"
          >Vue</ExternalLink
        >. I also experimented with different CSS preprocessors, ultimately
        settling on using
        <ExternalLink href="https://tailwindcss.com/docs/installation"
          >Tailwind CSS</ExternalLink
        >.
      </p>
    </div>
    <div v-else>
      <p class="paragraph">
        K vývoju webových aplikácii, vrátanie webový technológii ako
        <ExternalLink
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          >JavaScript</ExternalLink
        >
        a <ExternalLink href="https://www.php.net/docs.php">PHP</ExternalLink>,
        som sa dostal vďaka kamarátovi. Ten mi pomáhal učiť sa a podporoval v
        priebehu začiatkov. Najprv mi to bolo pre mňa pomerne náročné rozumieť
        všetkému ako funguje. Ale čím viac som sa učil a pracoval na projektoch,
        tým mi to išlo lahšie a moje zručnosti sa zlepšovali.
      </p>
      <p class="mt-4">
        Dnes si užívam hlavne JavaScript, mal som možnosť pracovať s jeho
        nadstavbami
        <ExternalLink href="https://beta.reactjs.org/">React</ExternalLink> a
        <ExternalLink href="https://vuejs.org/guide/introduction.html"
          >Vue.js</ExternalLink
        >. Taktiež som si vyskúšal prácu s viacerými CSS prepreocesormi, no
        najviac sa mi zapáčil
        <ExternalLink href="https://tailwindcss.com/docs/installation"
          >Tailwind CSS</ExternalLink
        >, ktorý používam na väčšinu projektov.
      </p>
    </div>
    <div v-if="$i18n.locale === 'en'">
      <h3 class="text-heading3 paragraph-heading" id="basketball">
        {{ $t("basketballPlayer") }}
      </h3>
      <p class="paragraph">
        I have been playing basketball since the age of nine. Over the years, I
        have participated in various Slovakian Championships, earning multiple
        medals, and even had the honor of representing my country on the
        international stage, including European and
        <ExternalLink href="https://www.fiba.basketball/3x3U23WC/2022"
          >World Championship</ExternalLink
        >.
      </p>
    </div>
    <div v-else>
      <h3 class="text-heading3 paragraph-heading" id="basketball">
        {{ $t("basketballPlayer") }}
      </h3>
      <p class="paragraph">
        Basketbalu sa venujem od svojich deviatich rokov. Za túto dobu som sa
        zúčastnil niekoľkých Majstrovstiev Slovenska, získal nespočetne medailí,
        a mal šancu obliecť si na seba ten najvzácnejší dres. Reprezentačný. V
        ktorom som absoloval viacero Majstrovstiev Európy a
        <ExternalLink href="https://www.fiba.basketball/3x3U23WC/2022"
          >Majstrovstvá Sveta</ExternalLink
        >.
      </p>
    </div>
    <div v-if="$i18n.locale === 'en'">
      <h3 class="text-heading3 paragraph-heading" id="founder">
        {{ $t("founder") }}
      </h3>
      <p class="paragraph">
        I founded and built a project about Slovak basketball, aiming to provide
        interesting interviews, current information, results, and statistics
        about players. The project, called
        <ExternalLink href="https://www.instagram.com/basketlab.sk/"
          >basketlab.sk</ExternalLink
        >, was successful and became popular and had thousands of fans. After
        approximately two years, the brand basketlab was abandoned and the
        project continued under the
        <ExternalLink href="https://slovakbasket.sk/sk/"
          >Slovak Basketball Association</ExternalLink
        >.
      </p>
    </div>
    <div v-else>
      <h3 class="text-heading3 paragraph-heading" id="founder">
        {{ $t("founder") }}
      </h3>
      <p class="paragraph">
        Tým, že mi basketbal toho veľa dal. Rozhodol som sa mu niečo vrátiť.
        Vybudoval som portál o slovenskom basketbale. Cieľom bolo priniesť
        zaujímavé rozhovory aktuálne informácie, výsledky a štatistiky hráčov.
        Tento projekt pod názvom
        <ExternalLink href="https://www.instagram.com/basketlab.sk/"
          >basketlab.sk</ExternalLink
        >
        zožal úspech. Hovorilo sa o ňom, ľudia sa pýtali kto za ním stojí a
        čísla nielen, na sociálnych sietiach stúpali. Dovolim si tvrdiť, že sme
        boli najoblúbenejší portál na Slovensku. Po dohode s generálnym
        sekretárom
        <ExternalLink href="https://slovakbasket.sk/sk/"
          >Slovenskej Basketbalovej Asociácie</ExternalLink
        >
        zanikla značka basketlab a pokračovalo sa pod hlavičkou slovakbasket.
      </p>
    </div>
    <div v-if="$i18n.locale === 'en'" class="mb-10">
      <h3 class="text-heading3 paragraph-heading" id="designer">
        {{ $t("graphicDesigner") }}
      </h3>
      <p class="paragraph">
        At the age of 13, I discovered my passion for graphic design. With years
        of experience under my belt, I've created a significant amount of
        outputs such as banners, infographics, print materials, and more, mostly
        for sports clubs and organizations. I've also had the chance to design
        complete visual concepts for events, including logos, color schemes, and
        other graphic elements. Additionally, I've had some experience in photo
        editing,
        <ExternalLink href="https://www.youtube.com/watch?v=f47nHrzYWDE"
          >video editing</ExternalLink
        >, and animation.
      </p>
    </div>
    <div v-else class="mb-10">
      <h3 class="text-heading3 paragraph-heading" id="designer">
        {{ $t("graphicDesigner") }}
      </h3>
      <p class="paragraph">
        V mojich 13 rokoch ma začalo baviť tvoriť grafiky a začal som sa tomu
        viac venovať. Dnes, mám roky skúseností, za ktoré som stihol vytvoriť
        značné množstvo bannerov, infografík, tlačiarenských materiálov atď.
        hlavne pre športové kluby a firmy. Taktiež som mal šancu vytvoriť celé
        vizuálne koncepty a branding pre udalosti. Okrem toho mám skúsenost s
        editovaním fotiak,
        <ExternalLink href="https://www.youtube.com/watch?v=f47nHrzYWDE"
          >strihaním videí</ExternalLink
        >
        a animáciou.
      </p>
    </div>
    <nuxt-link
      to="/about"
      class="bg-special rounded-xl px-4 py-2 text-sm font-medium text-black transition duration-300 ease-in-out hover:text-white hover:ring-2 hover:ring-white"
    >
      {{ $t("fullstory") }}
    </nuxt-link>
  </section>
</template>

<script></script>
