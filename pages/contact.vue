<template>
  <main class="container">
    <h1 class="title">{{ $t("contact") }}</h1>
    <PageInProgress />
    <p class="text-paragraph text-gray my-4 max-w-xl">
      {{ $t("contactMsg") }}
    </p>
    <a href="mailto:dev@dmnkhvl.eu" class="link">dev@dmnkhvl.eu</a>
    <SocialsBar class="mt-8 flex" />
  </main>
</template>
<script setup>
import { ref } from "vue";
const submitted = ref(false);
const submitHandler = async () => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000));
  submitted.value = true;
};
</script>
