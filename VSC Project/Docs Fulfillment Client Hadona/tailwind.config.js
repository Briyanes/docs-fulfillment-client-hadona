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
          'bg-dark': '#0F1A5C', // Dark blue for backgrounds
          'bg-darker': '#0A1240', // Darker blue for deeper backgrounds
          yellow: '#EDD947', // Hadona yellow (same as Copy Link button)
          'yellow-dark': '#E5D03D', // Darker yellow for hover (same as Copy Link button)
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1f2937',
            lineHeight: '1.6',
            'h2': {
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
              fontWeight: '600',
            },
            'h3': {
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
              fontWeight: '600',
            },
            'h4': {
              marginTop: '1rem',
              marginBottom: '0.5rem',
              fontWeight: '600',
            },
            p: {
              marginTop: '0.5rem',
              marginBottom: '0.75rem',
            },
            ul: {
              marginTop: '0.5rem',
              marginBottom: '0.75rem',
            },
            ol: {
              marginTop: '0.5rem',
              marginBottom: '0.75rem',
            },
            'li > ul': {
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
            },
            'li > ol': {
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
            },
            table: {
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
            },
            pre: {
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
            },
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

