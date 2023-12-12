/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "linear-gradient(0deg, #000 -10.63%, rgba(0, 0, 0, 0.00) 85.07%), url('/background-mobile.png')",
        'desktop': "linear-gradient(0deg, #000 -10.63%, rgba(0, 0, 0, 0.00) 85.07%), url('/background-desktop.png')",
      },
    },
  },
  plugins: [],
}
