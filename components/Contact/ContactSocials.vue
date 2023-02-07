<template>
  <section class="mt-14 sm:mt-10">
    <div class="sm:flex sm:items-center">
      <ExternalLink
        class="link flex items-center"
        href="https://github.com/dmnkhvl"
        ><nuxt-icon name="github" class="text-white mr-2" />Github</ExternalLink
      >
      <p class="sm:ml-2 mt-1 sm:mt-0">{{ $t("githubContact") }}</p>
    </div>
    <div class="sm:flex sm:items-center mt-4 sm:mt-1">
      <ExternalLink
        class="link flex items-center"
        href="https://twitter.com/dmnkhvl"
        ><nuxt-icon
          name="twitter"
          class="text-white mr-2"
        />Twitter</ExternalLink
      >
      <p class="sm:ml-2 mt-1 sm:mt-0">
        {{ $t("twitterContact") }}
      </p>
    </div>
    <div class="sm:flex sm:items-center mt-4 sm:mt-1">
      <ExternalLink
        class="link flex items-center"
        href="https://www.linkedin.com/in/dmnkhvl/"
        ><nuxt-icon
          name="linkedin"
          class="text-white mr-2"
        />LinkedIn</ExternalLink
      >
      <p class="sm:ml-2 mt-1 sm:mt-0">{{ $t("linkedinContact") }}</p>
    </div>
  </section>
</template>
