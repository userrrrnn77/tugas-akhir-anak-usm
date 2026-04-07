import type { Config } from "tailwindcss";

export default {
  // Aktifkan dark mode berbasis class 'dark' di tag <html>
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Set font utama ke Plus Jakarta Sans
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        // Warna Hijau KSPPS Modern
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          500: "#10b981", // Emerald Utama
          600: "#059669", // Hover
          700: "#047857", // Deep buat Boomer
          800: "#065f46",
          900: "#064e3b",
        },
        // Warna Emas/Amber buat aksen Haji & Umroh
        secondary: {
          500: "#f59e0b",
          600: "#d97706",
        },
        // Dark Mode Slate Palette (Elegan, gak item pekat)
        dark: {
          bg: "#0f172a", // Slate 950
          card: "#1e293b", // Slate 800
          border: "#334155",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
