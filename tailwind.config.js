/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "baw-yellow": "#FFB315",
        "baw-light": "#FFB315",
        "baw-input": "#FFF6F4",

        "baw-red": "#F47458",
        "baw-baw-g4": "#C4B0A9",
        "baw-baw-g6": "#F3EAE7",
        "baw-light-gray": "#00000080",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
