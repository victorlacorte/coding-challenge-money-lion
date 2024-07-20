// Must be CJS require
const reshapedTailwind = require('reshaped/config/tailwind');
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: reshapedTailwind.getTheme() },
  plugins: [],
};
export default config;
