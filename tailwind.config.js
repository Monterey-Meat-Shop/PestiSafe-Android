/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#006A67',
        accentLight: '#94E8B4',
        secondary: '#72BDA3',
        neutralDark: '#0C1B33',
        danger: '#FF6B6B',
        light: {
          primary: '#2A8A86', // Lighter variant of primary
          accentLight: '#B3F0C9', // Even lighter variant of accentLight
          secondary: '#8CD6B9', // Lighter variant of secondary
          neutralDark: '#E0E5EB', // A light neutral, as a contrast to neutralDark
          danger: '#FF8C8C', // Lighter variant of danger
        },
        dark: {
          primary: '#004D4A', // Darker variant of primary
          accentLight: '#69B88A', // Darker, more saturated for dark background
          secondary: '#5AA78A', // Darker variant of secondary
          neutralDark: '#081324', // Even darker variant of neutralDark
          danger: '#E05252', // Darker/richer variant of danger
        },
      },
    },
  },
  plugins: [],
};
