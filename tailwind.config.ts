import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "q-orange": "var(--q-orange)",
        "q-purple": "var(--q-purple)",
        "q-blue": "var(--q-blue)",
      },
      boxShadow: {
        header: "0 3px 40px 0 rgba(0, 0, 0, 0.1)",
        dark: "0 3px 40px 0 rgba(0, 0, 0, 0.5)",
        middle: "0 3px 40px 0 rgba(0, 0, 0, 0.2)",
        "dark-lg": "0 10px 50px 0 rgba(0, 0, 0, 0.7)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        rubik: ["var(--font-rubik)"],
      },
    },
  },
  plugins: [],
};
export default config;
