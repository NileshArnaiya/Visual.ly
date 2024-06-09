import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  darkMode: "class",
  
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: "#0072f5",
          secondary: "#EE457E",
          background:"#fff"
        }
      },
      dark: {
        colors: {
          primary: "#0072f5",
          secondary: "#EE457E",
          background: "#000000"
        }
      },
    },
  }),],
}
