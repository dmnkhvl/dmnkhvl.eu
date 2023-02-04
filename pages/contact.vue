<template>
  <main class="container">
    <h1 class="title">Contact</h1>
    <PageInProgress />
    <p class="my-4 max-w-xl text-paragraph text-gray">
      Feel free to drop me a line for any reason. Let's connect! I'm always down
      for a good conversation.
    </p>
    <a href="mailto:dev@dmnkhvl.eu" class="link">dev@dmnkhvl.eu</a>
    <SocialsBar class="flex mt-8" />
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
