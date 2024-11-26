import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-inset': '0px -1px 0px 0px #000000 inset',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      screens: {
        sm: { max: '428px'},
       'lg-custom': {'min': '429px', 'max': '768px'},
      },
    },
  },
  plugins: [],
} satisfies Config;
