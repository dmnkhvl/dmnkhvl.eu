<template>
  <button @click="changeLanguage()" class="hover:text-special p-1">
    {{ $i18n.locale === "en" ? "sk" : "en" }}
  </button>
</template>

<script>
export default {
  methods: {
    changeLanguage() {
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "sk";
      } else this.$i18n.locale = "en";
    },
  },
};
</script>
