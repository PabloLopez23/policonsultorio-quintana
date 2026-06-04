import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dental: {
          ink: "#063642",
          blue: "#007d8f",
          sky: "#16c7c2",
          aqua: "#45e2d7",
          mint: "#bafff6",
          soft: "#d9fbf6",
          teal: "#00aaa0",
          ocean: "#006f83",
          deep: "#004d63",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0, 77, 99, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
