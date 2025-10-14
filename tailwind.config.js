/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import { fontFamily } from "tailwindcss/defaultTheme";


export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {}
  },
  plugins: [daisyui, require("tailwindcss-animate")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
