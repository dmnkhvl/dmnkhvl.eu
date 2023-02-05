// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-icons",
    "@formkit/nuxt",
    "@nuxt/image-edge",
  ],
  i18n: {
    // locales: ["en", "sk"],
    // defaultLocale: "sk",
    vueI18n: {
      locale: "en",
      messages: {
        en: {
          welcome: "Welcome",
        },
        sk: {
          welcome: "Vitajte",
        },
      },
    },
  },
});
