/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/client/**/*.{tsx,ts,jsx,js}",
    "./src/shared/**/*.{tsx,ts,jsx,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        vazir: ["Vazirmatn", "sans-serif"],
      },
      textColor: {
        primary: "#111827",
      },
      backgroundColor: {
        primary: "#f3f4f6",
      },
    },
  },
  plugins: [],
  // Enable RTL variants
  corePlugins: {
    direction: true,
  },
  variants: {
    extend: {
      margin: ["rtl", "ltr"],
      padding: ["rtl", "ltr"],
      textAlign: ["rtl", "ltr"],
    },
  },
};
