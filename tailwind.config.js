/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        shortly: ["Poppins", "sans-serif"],
      },
      colors: {
        shortly_pr_cyan: "#2acfcf",
        shortly_pr_darkViolet: "#3b3054",
        shortly_sec_red: "#f46262",
        shortly_ntrl_gray: "#bfbfbf",
        shortly_grayishViolet: "#9e9aa7",
        shortly_VeryDarkBlue: "#35323e",
        shortly_VeryDarkViolet: "#232127",
      },
      fontSize: {
        base: "18px",
      },
      screens: {
        xl: "1440px",
        sm: "375px",
      },
    },
  },
  plugins: [],
};
