import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    animation: {
      'console-cursor': 'console-cursor 2s ease-in-out infinite',
    },
    keyframes: {
      'console-cursor': {
        '0%': { opacity: '0' },
        '50%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1200px',
    },
    colors: {
      primary: 'rgba(var(--color-primary) / <alpha-value>)',
      secondary: 'rgba(var(--color-secondary) / <alpha-value>)',
      accent: 'rgba(var(--color-accent) / <alpha-value>)',
      black: 'rgba(0 0 0 / <alpha-value>)',
      white: 'rgba(255 255 255 / <alpha-value>)',
    },
  },
  plugins: [],
}

export default config
