module.exports = {

  
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}', // Include all source files
    './docs/**/*.{md,mdx}',           // Include documentation files
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  //plugins: [require("@tailwindcss/typography")],
}
