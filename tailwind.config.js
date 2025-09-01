/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          "0%":   { transform: "translateY(0)" },
          "100%": { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        marquee:            "marquee var(--duration, 40s) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration, 40s) linear infinite",
        "marquee-reverse":  "marquee var(--duration, 40s) linear infinite reverse",
      },
    },
  },
  plugins: [],
};

