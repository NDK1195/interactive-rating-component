/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: 'hsl(25, 97%, 53%)',
        'light-grey': 'hsl(217, 12%, 63%)',
        'dark-blue': 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
      },
      backgroundColor: {
        'radial-gradient':
          'radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%))',
      },
    },
  },
  plugins: [],
};
