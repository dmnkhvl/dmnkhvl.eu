/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./index.vue",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1E1E20",
        white: "#fff",
        gray: "#98A0A9",
        special: "#00dc82",
        alt: "#7cfbc7",
        "websupport-red": "#CC5F5A",
        "websupport-green": "#70DCD5",
        "special-darker": "#05b76e",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        heading2: ["1.875rem", "2.25rem"],
        heading3: ["1.3rem", "1.9rem"],
        paragraph: ["1rem", "1.5rem"],
        basicText: ["0.88rem", "0.88rem"],
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};
