// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        max600: { max: "600px" }, // screens smaller than 600px
      },
    },
  },
  plugins: [],
};
