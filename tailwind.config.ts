import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{mdx,md}',
  ],
  theme: {
    extend: {
      colors: {
        honeywell: {
          navy: '#0D1B5C',
          red: '#E31B23',
        },
        brand: {
          deepNavy: '#08133F',
          technicalBlue: '#1D3563',
          darkSlate: '#334155',
          steelGray: '#64748B',
          borderGray: '#CBD5E1',
          surfaceGray: '#F8FAFC',
          lightSurface: '#F1F5F9',
          textDark: '#111827',
        }
      },
      fontFamily: {
        display: ['var(--font-roboto)', 'sans-serif'],
        body: ['var(--font-roboto)', 'sans-serif'],
        mono: ['ui-monospace', 'monospace'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        /* Premium elevation system */
        subtle: '0 1px 3px rgba(13, 27, 92, 0.04), 0 1px 2px rgba(13, 27, 92, 0.06)',
        elevated: '0 4px 12px -2px rgba(13, 27, 92, 0.08), 0 2px 6px -1px rgba(13, 27, 92, 0.04)',
        float: '0 12px 32px -6px rgba(13, 27, 92, 0.12), 0 4px 12px -2px rgba(13, 27, 92, 0.06)',
        glow: '0 8px 24px -4px rgba(227, 27, 35, 0.2)',
        'nav-shadow': '0 2px 16px -4px rgba(13, 27, 92, 0.08)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.4s ease forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 40s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
export default config;
