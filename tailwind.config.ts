import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#64819a',
          600: '#486581',
          700: '#1B3A57',
          800: '#152e44',
          900: '#0f2332',
        },
        secondary: {
          50: '#e6f2f3',
          100: '#b3d9dc',
          200: '#80c0c4',
          300: '#4da7ac',
          400: '#2E8A92',
          500: '#267179',
          600: '#1f5a61',
          700: '#184349',
          800: '#112c30',
          900: '#0a1518',
        },
        accent: {
          50: '#e8f4f8',
          100: '#c5e4ec',
          200: '#9dd1df',
          300: '#75bed2',
          400: '#4FB3D5',
          500: '#3a9bc0',
          600: '#2e7c9a',
          700: '#225d73',
          800: '#163e4d',
          900: '#0a1f26',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
