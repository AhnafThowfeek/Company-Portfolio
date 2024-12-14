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
        'white': '#ffffff',
        'black': '#1c1c1c',
        'silver':'#F5F7FA',
        'dGrey':'#4D4D4D',
        'primary':'#0e76bf',
        'gray': {
          '400': '#a3a3a3',
        },
        'gray900':'#18191F',
      },
      textColor: {
        'primary':'#0e76bf',
        'black': '#1c1c1c',
        'white': '#ffffff',
        'gray': {
          '400': '#a3a3a3',
        },
      }
    },
  },
  plugins: [],
}

