/** @type {import('tailwindcss').Config} */

import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B6161',
        secondary: '#BFB0B0',
        accent: '#5D1516',
        thirt:'#C08261'
      },
      backgroundImage: {  
        site: 'url("/inicio.png")',
        mobile:'url("/mobile.png")',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      fontFamily: {
        
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
