import colors from 'tailwindcss/colors'      // paleta oficial v4

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,   // tendrás primary-50 … primary-950
      },
    },
  },
  plugins: [],
}