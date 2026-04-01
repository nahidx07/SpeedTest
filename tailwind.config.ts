import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fast: "#e50914", // Netflix Red
      },
    },
  },
  plugins: [],
};
export default config;
