import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
 extend:{
  fontFamily:{
    Playwrite : [ "Playwrite GB S", "cursiv"],
    Kanit:["Kanit", "sans-serif"],
    margarine : [ "Margarine", "sans-serif"],
    anton : ["Anton", "sans-serif"],
    dmserrif : ["DM Serif Display", "serif"],
    marker: ["Permanent Marker", "cursive"],
    concert : ["Concert One", "sans-serif"],
    rubikone: ["Rubik Mono One", "monospace"],
    gelasio : ["Gelasio", "serif"],
    roboto: ["Roboto", "sans-serif"],
    hind : ["Hind Guntur", "sans-serif"],
    poppins: ["Poppins", "sans-serif"],
    lato : ["Lato", "sans-serif"],
    montserrat: ["Montserrat", "sans-serif"],

  }
 }
  },
  plugins: [],
};
export default config;
