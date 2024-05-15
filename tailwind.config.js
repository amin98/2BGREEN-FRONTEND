/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        primary: '#405631',
        secondary: '#D2D94F',
        'lime-green': '#8EBF46',
        // 'hover-lime-green': '#7EAC3E',
      },
      backgroundColor: {
        primary: '#405631',
        secondary: '#efefee',
        'light-green': '#6a944d',
        'lime-green': '#8EBF46',
        green: '#597d41',
        greenSecondary: '#9BECE1',
        hero: '#EDEFDE',
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      ringColor: {
        primary: '#8EBF46',
      },
      height: {
        'screen-90': '90vh',
      },
    },
  },
  plugins: [],
};
