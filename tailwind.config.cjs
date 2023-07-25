/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        yellow: {
          20: "#fdf9ee",
          50: "#F1E2A6",
          100: "#FFEC9E",
          200: "#F9F7F7",
          500: "#F7F1DF",
          600: "#ECE5E0",
          700: "#F7F4F4",
          800: "#F7F7F7",
        },
        text: "#330A21",
        bordo: {
          20: "#ecdbe3",
          100: "#750843",
          200: "#60113D",
          300: "#330A21",
          400: "#F1E6EC",
        },
        beige: {
          DEFAULT: "#C4B7AF",
          100: "#EDE8E5",
        },
        grey: {
          100: "#D6D6D6",
          200: "#1F1F1F",
          300: "#383838",
          400: "#F9F7F7",
          500: "#EFEEED",
          600: "#EBE9E7",
        },
        neutral: {
          200: "#FAFAFA",
          900: "#1F1F1F",
        },
        error: "#B00000",
      },
    },
  },
  plugins: [],
};
