import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        base: 'rgb(var(--c-base) / <alpha-value>)',
        panel: 'rgb(var(--c-panel) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        brand: 'rgb(var(--c-brand) / <alpha-value>)',
        brandSoft: 'rgb(var(--c-brand-soft) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        text: 'rgb(var(--c-text) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(var(--c-brand),0.25), 0 10px 40px rgba(var(--c-brand),0.15)'
      }
    }
  },
  plugins: []
};

export default config;
