/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans JP"],
      ubuntu: ["Ubuntu"],
      mono: ["Ubuntu Mono"],
    },
    extend: {},
  },
  plugins: [],
};
