/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'heading': 'rgb(255 255 255 )',
        'purple': 'rgb(129 140 248)',
        'description': 'rgb(209 213 219)',
        'dark-description': 'rgb(156 163 175)',
        'dark-purple' : 'rgb(79 70 229)',
      }
    }
  },
  plugins: [require("daisyui")],
};