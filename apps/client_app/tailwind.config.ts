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
    afacad: ["Afacad", "sans-serif"]

  },
 colors : {
  MainBlack: "#111111",
  actualBlack:"#181616",
  Myblue: "#1F75FE",
  heheblu: "#6F00FF",
  dukeblue: "#012169",
  redMe: "#fb8500",
  bubblyblue: "#003049",
  peela: "#f7b801",
  tans: "#cbf3f0",
  oceangreen: "#a8dadc",
  pata: "#4361ee",
  mast: "#eae2b7",
  chuma: "#c4fff9",
  skin: "#fefae0",
  hehe: "#8ecae6",
  hehetwo: "#219ebc",
  kuch: "#f4f1de",
  kuch1: "#284b63",
  suttleblue: "#bfdbf7",
  purple: "#5a189a",
  jubile: "#edf2f4",
  
 }
 }
  },
  plugins: [],
};
export default config;