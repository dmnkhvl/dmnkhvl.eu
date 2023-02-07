// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-icons",
    "@formkit/nuxt",
    "@nuxt/image-edge",
    [
      "nuxt-mail",
      {
        message: {
          to: "dev@dmnkhvl.eu",
        },
        smtp: {
          host: "smtp.hostcreators.sk",
          port: 465,
        },
      },
    ],
  ],
});
