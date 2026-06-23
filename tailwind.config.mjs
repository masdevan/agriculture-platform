/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        glass: {
          white: 'rgba(255,255,255,0.06)',
          border: 'rgba(255,255,255,0.10)',
          hover: 'rgba(255,255,255,0.14)',
        },
        farm: {
          deep: '#0C2416',
          forest: '#183D28',
          leaf: '#2A6B3F',
          green: '#3DA15E',
          greenLight: '#6FC389',
          gold: '#D4A853',
          goldLight: '#E8C87A',
          cream: '#F5F1EB',
          light: '#FAF8F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
