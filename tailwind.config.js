/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        "bg": "#e4f0f6",
        "bg-light": "#FAFAFA",
        "bg-dark": "#dedede",
        "p": "#7b1ff3",
        "s": "#dbcaf2",
        "t": "#edde07",
        "Dbg": "#181818",
        "Dbg-light": "#1f1f1f",
        "Dbg-dark": "#262626",
        "Dp": "#1CD8B2",
        "Ds": "#004c3d",
        "Dt": "#fed01b",
        "text-balance": "#444444",
        "Dtext-balance": "#999999",
        "white": "#FFFFFA",
        "black": "#02040F",
        "light": "#E2E0Eb",
        "dark": "#202020",
        "red": "#ed252f",
        "red-light": "#ff9595",
        "red-dark": "#920000",
        "blue": "#0365FF",
        "blue-light": "#8F95FF",
        "blue-dark": "#000888",
        "green": "#24e138",
        "green-light": "#bbffcc",
        "green-dark": "#004800",
        "yellow": "#e6ea0c",
        "yellow-light": "#feffbf",
        "yellow-dark": "#656200",
        "border": "#e2e8f0",
        "focus": "#06b6d4",
        "focus-light": "#3edbf7",
        "focus-dark": "#037d93",
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}