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
        "baw-baw-g5": "#D4C6C0",
        "baw-baw-g3": "#85716B",

        "baw-light-gray": "#00000080",
        "baw-text": "#85716B",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
