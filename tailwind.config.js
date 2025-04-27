/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./src/client/**/*.{tsx,ts,jsx,js}",
    "./src/shared/**/*.{tsx,ts,jsx,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        vazir: ["Vazirmatn UI FD NL", "sans-serif"],
      },
      colors: {
        // Light theme
        bg: {
          primary: "#FFFFFF", // Unchanged: Pure white for clean background
          secondary: "#F7F7F7", // Slightly lighter than #F5F5F5 for softer contrast
          tertiary: "#2D2D2D", // Darker than #212121 for better contrast
        },
        text: {
          primary: "#1A1A1A", // Slightly darker than #1C2526 for better readability
          secondary: "#6B7280", // Unchanged: Balanced gray
          tertiary: "#FFFFFF", // Unchanged: White for contrast on dark backgrounds
          disabled: "#A3A3A3", // Lighter than #9CA3AF for clarity
        },
        accent: {
          primary: "#007AFF", // Unchanged: Vibrant blue
          secondary: "#34C759", // Unchanged: Green for consistency
          destructive: "#FF3B30", // Unchanged: Strong red
        },
        // Dark theme
        dark: {
          bg: {
            primary: "#1A1A1A", // Slightly darker than #1C2526 for deeper contrast
            secondary: "#2E2E2E", // Lighter than #2D3748 for hierarchy
            tertiary: "#121212", // Darker than #111827 for true black feel
          },
          text: {
            primary: "#F7F7F7", // Lighter than #F5F5F5 for better contrast
            secondary: "#D4D4D4", // Lighter than #D1D5DB for readability
            disabled: "#737373", // Lighter than #6B7280 for visibility
          },
          accent: {
            primary: "#339CFF", // Brighter than #0A84FF for vibrancy
            secondary: "#36D769", // Unchanged: Matches light theme green
            destructive: "#FF453A", // Unchanged: Matches light theme red
          },
        },
        // Sepia theme
        sepia: {
          bg: {
            primary: "#F5F3E7", // Unchanged: Warm, creamy background
            secondary: "#ECE8D9", // Softer than #E8E4D3 for hierarchy
            tertiary: "#FFF8E1", // Lighter than #FDFBF5 for warmth
          },
          text: {
            primary: "#4A3728", // Darker than #5C4033 for contrast
            secondary: "#8B6F47", // Unchanged: Warm brown
            disabled: "#A68A64", // Unchanged: Muted for disabled state
          },
          accent: {
            primary: "#B89700", // Brighter than #A67C00 for vibrancy
            secondary: "#A66F2E", // Warmer than #8B5A2B for cohesion
            destructive: "#A83333", // Softer than #9B2C2C for sepia tone
          },
        },
        // Retro theme
        retro: {
          bg: {
            primary: "#2A2A2A", // Lighter than #2E2E2E for less harshness
            secondary: "#3A3A3A", // Lighter than #3C3C3C for hierarchy
            tertiary: "#1C1C1C", // Lighter than #1A1A1A for depth
          },
          text: {
            primary: "#00FF4D", // Softer than #00FF00 for readability
            secondary: "#A3FF99", // Less intense than #B0FFB0
            disabled: "#4CAF50", // Unchanged: Muted green
          },
          accent: {
            primary: "#FF33FF", // Softer than #FF00FF for less saturation
            secondary: "#FFFF4D", // Softer than #FFFF00 for readability
            destructive: "#FF4D4D", // Softer than #FF4444 for cohesion
          },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("dark", "[data-theme='dark'] &");
      addVariant("sepia", "[data-theme='sepia'] &");
      addVariant("retro", "[data-theme='retro'] &");
    },
  ],
  corePlugins: {
    direction: true,
  },
  variants: {
    extend: {
      margin: ["rtl", "ltr"],
      padding: ["rtl", "ltr"],
      textAlign: ["rtl", "ltr"],
      backgroundColor: ["dark", "sepia", "retro"],
      textColor: ["dark", "sepia", "retro"],
      borderColor: ["dark", "sepia", "retro"],
    },
  },
};
