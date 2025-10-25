import type { Config } from "tailwindcss";

const config: Config = { 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5B21B6',
          light: '#7C3AED',
          dark: '#4C1D95',
          50: '#F5F3FF',
          100: '#EDE9FE',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        accent: {
          DEFAULT: '#F97316',
          light: '#FB923C',
          dark: '#EA580C',
        },
      },
    },
  },
  plugins: [],
};

export default config;  