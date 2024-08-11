import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "dark-indigo": "#2f2b3a",
        "dark-green": "#20696e",
        "light-green": "#72dccf",
        'white-10': 'rgba(255, 255, 255, 0.1)',
        'white-20': 'rgba(255, 255, 255, 0.2)',
        'white-30': 'rgba(255, 255, 255, 0.3)',
        'white-50': 'rgba(255, 255, 255, 0.5)',
      },
      textColor: {
        "light-green": "#72dccf",
      }
    },
  },
  plugins: [],
};
export default config;
