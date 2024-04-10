import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const alizarinCrimson = {
  '50': '#fff1f3',
  '100': '#ffe1e4',
  '200': '#ffc8ce',
  '300': '#ffa1ac',
  '400': '#fe6b7c',
  '500': '#f73c52',
  '600': '#e41e35',
  '700': '#c01529',
  '800': '#9f1525',
  '900': '#831925',
  '950': '#48070f',
};

const flushOrange = {
  '50': '#fff7ed',
  '100': '#ffedd4',
  '200': '#ffd7a8',
  '300': '#ffbb71',
  '400': '#ff8a28',
  '500': '#fe7311',
  '600': '#ef5807',
  '700': '#c64008',
  '800': '#9d340f',
  '900': '#7e2d10',
  '950': '#441306',
};

const conifer = {
  '50': '#f6fde8',
  '100': '#e8facd',
  '200': '#d3f5a1',
  '300': '#b4ec6a',
  '400': '#94de36',
  '500': '#78c51d',
  '600': '#5b9d13',
  '700': '#467813',
  '800': '#3a5f15',
  '900': '#325116',
  '950': '#182c07',
};

const pictonBlue = {
  '50': '#eff9ff',
  '100': '#dff1ff',
  '200': '#b8e5ff',
  '300': '#78d2ff',
  '400': '#2fbaff',
  '500': '#06a2f1',
  '600': '#0081ce',
  '700': '#0067a7',
  '800': '#02578a',
  '900': '#084872',
  '950': '#062d4b',
};

const rope = {
  '50': '#faf6ec',
  '100': '#f2e9cf',
  '200': '#e7d3a1',
  '300': '#d9b56b',
  '400': '#cd9942',
  '500': '#be8434',
  '600': '#a3672b',
  '700': '#8d5228',
  '800': '#6e3f25',
  '900': '#5e3625',
  '950': '#361c12',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        crimson: alizarinCrimson,
        orange: flushOrange,
        conifer,
        picton: pictonBlue,
        rope,
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: { ...alizarinCrimson, DEFAULT: alizarinCrimson['600'] },
            secondary: { ...flushOrange, DEFAULT: flushOrange['400'] },
          },
        },
      },
    }),
  ],
};
export default config;
