/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        farm: {
          tan: '#ccb78c',
          'tan-hover': '#c2a56b',
          green: '#5ec277',
          'green-dark': '#1f6a0d',
          bg: '#F1F0EC',
          section: '#F5F5F5',
          card: '#59A859',
          'card-hover': '#387638',
          plank: '#e2d6be',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
