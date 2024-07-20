import reshapedConfig from 'reshaped/config/postcss';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    ...reshapedConfig.plugins,
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
