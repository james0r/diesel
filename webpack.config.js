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

const frontendEntries = globSync('./src/blocks/*/frontend/index.js').reduce((acc, path) => {
  const entry = path
    .replace('/index.js', '')
    .replace(/(^\.\/)?src\//g, '')
    .replace('js/', '')

  const entryParsed = entry.split('/')[1] ? `${entry}/${entry.split('/')[1]}` : entry;

  if (entryParsed && !acc[entryParsed]) {
    return { ...acc, [entryParsed]: `./${path}` }
  }

  return { ...acc };
}, {});

const blockEntries = globSync('./src/blocks/*/index.js').reduce((acc, path) => {
  const entry = path
    .replace('src/', '')
    .replace('.js', '')

  return { ...acc, [entry]: `./${path}` };
}, {});

module.exports = {
  ...defaultConfig,
  entry: {
    ...blockEntries,
    ...frontendEntries,
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
