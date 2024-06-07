import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
                    100: "#C8E9FA",
                    200: "#93D0F5",
                    300: "#5AA8E2",
                    400: "#3180C6",
                    500: "#004DA1",
                    600: "#003B8A",
                    700: "#002C73",
                    800: "#001F5D",
                    900: "#00164D",
                  },
                  secondary: {
                    100: "#FEFBCB",
                    200: "#FEF798",
                    300: "#FEF165",
                    400: "#FEEB3F",
                    500: "#fee200",
                    600: "#DABF00",
                    700: "#B69E00",
                    800: "#937D00",
                    900: "#796600",
                },
      }
      
    },
  },
  plugins: [
   
  ],
};
export default config;
