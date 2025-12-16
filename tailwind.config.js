/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Soft, calm palette for Sukrit
        sukrit: {
          bg: "#f6f7fb",
          surface: "#ffffff",
          primary: "#5c7cfa",
          primarySoft: "#e3e8ff",
          accent: "#f9b5d0",
          accentSoft: "#ffe4ef",
          text: "#1f2933",
          muted: "#6b7280",
          darkBg: "#0b1220",
          darkSurface: "#0f172a",
          darkMuted: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};


