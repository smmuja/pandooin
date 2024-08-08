import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "yellow-tan": "#6A999B",
      "green-tosca": "#3B7777",
      "white-smoke": "#FAF9F5",
      "white-paper": "#FAF9F5",
      "dark-green": "#004040",
      bermuda: "#78dcca",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
