import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'clumoss-dark': '#0A0F2B',
        'clumoss-accent': '#5C6BC0',
        'clumoss-light': '#E8EAF6',
      },
    },
  },
  plugins: [],
};

export default config;