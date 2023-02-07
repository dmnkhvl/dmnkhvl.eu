<template>
  <main class="container">
    <h1 class="title">{{ $t("contact") }}</h1>
    <p class="text-paragraph text-gray my-4 max-w-xl">
      {{ $t("contactMsg") }}
    </p>
    <ContactSocials />
    <h2 class="text-white mt-10">{{ $t("sendMessage") }}</h2>
    <a href="mailto:dev@dmnkhvl.eu" class="link text-3xl sm:text-4xl block">
      dev@dmnkhvl.eu
    </a>
  </main>
</template>
<script setup></script>
