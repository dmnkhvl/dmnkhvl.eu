import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import sk from "../locales/sk.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    messages: {
      en,
      sk,
    },
  });

  vueApp.use(i18n);
});
