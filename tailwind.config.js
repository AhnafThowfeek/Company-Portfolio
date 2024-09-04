/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color:{
        'silver':'#F5F7FA',
        'dGrey':'#4D4D4D',
        'primary':'#1974B8',
        'gray':'#717171',
        'gray900':'#18191F',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

