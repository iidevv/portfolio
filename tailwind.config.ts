import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: 'rgba(var(--color-primary) / <alpha-value>)',
      secondary: 'rgba(var(--color-secondary) / <alpha-value>)',
      accent: 'rgba(var(--color-accent) / <alpha-value>)',
    },
  },
  plugins: [],
}

export default config
