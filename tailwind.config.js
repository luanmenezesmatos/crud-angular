/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
  content: ["./src/**/*.{html,ts}", "./src/components/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        handwrite: "var(--font-handwrite)",
      },
    },
  },
  plugins: [],
};
