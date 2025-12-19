/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hadona: {
          primary: '#2B46BB',
          dark: '#1E3190',
          light: '#4A6AE8',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1f2937',
            a: {
              color: '#2B46BB',
              '&:hover': {
                color: '#1E3190',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}


