const path = require('path');
const { globSync } = require('glob');
const defaultConfig = require('@wordpress/scripts/config/webpack.config')

// Adds a new loader in the scss rules to do bulk includes using glob
const customRules = defaultConfig.module.rules.map((item) => {
  if (item.test && item.test.test('.scss')) {
    item.use = [...item.use, { loader: 'import-glob-loader' }];
  }
  return item;
});

const blockEntries = globSync('./src/blocks/*/index.js').reduce((acc, path) => {
  const entry = path
    .replace('src/', '')
    .replace('.js', '')

  return { ...acc, [entry]: `./${path}` };
}, {});

const viewEntries = globSync('./src/blocks/*/view.js').reduce((acc, path) => {
  const entry = path
    .replace('src/', '')
    .replace('.js', '')

  return { ...acc, [entry]: `./${path}` };
}, {});

module.exports = {
  ...defaultConfig,
  entry: {
    ...blockEntries,
    ...viewEntries,
    'admin': path.resolve(__dirname, './src/admin/index.js'),
    'public': path.resolve(__dirname, './src/public/index.js'),
  },
  output: {
    ...defaultConfig.output,
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  module: {
    ...defaultConfig.module,
    rules: customRules,
  },
  optimization: {
    ...defaultConfig.optimization,
    splitChunks: false
  }
};
