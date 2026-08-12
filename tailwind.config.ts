import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#182339',
          light: '#26365A',
          dark: '#0F1728',
        },
        paper: '#F6F2E9',
        gold: {
          DEFAULT: '#D9A441',
          light: '#EFC876',
          dark: '#A97A22',
        },
        sage: {
          DEFAULT: '#54805A',
          light: '#7BA47E',
        },
        wine: {
          DEFAULT: '#6E2A3D',
          light: '#8C4258',
        },
        charcoal: '#232323',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-worksans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        grooves:
          'repeating-radial-gradient(circle, rgba(246,242,233,0.08) 0px, rgba(246,242,233,0.08) 1px, transparent 1px, transparent 6px)',
      },
      borderRadius: {
        disc: '999px',
      },
    },
  },
  plugins: [],
};

export default config;
