import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17201B',
        paper: '#F7F4EC',
        line: '#DDD6C8',
        moss: '#49624A',
        clay: '#B8654B',
        sky: '#4F88A8',
        saffron: '#C4932F',
      },
      boxShadow: {
        soft: '0 16px 40px rgba(23, 32, 27, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
