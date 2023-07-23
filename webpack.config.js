const path = require('path');
const { globSync } = require('glob');
const defaultConfig = require('@wordpress/scripts/config/webpack.config')

// Adds a new loader in the scss rules to do bulk includes useing glob
const customRules = defaultConfig.module.rules.map((item) => {
  if (item.test && item.test.test('.scss')) {
    item.use = [...item.use, { loader: 'import-glob-loader' }];
  }
  return item;
});

module.exports = {
  ...defaultConfig,
  entry: globSync('./src/blocks/*/frontend/index.js').reduce((acc, path) => {
    const entry = path.replace('/index.js', '')
      .replace('./src/', '').replace('src/', '').replace('js/', '')

    const entryParsed = entry.split('/')[1] ? entry + '/' + entry.split('/')[1] : entry;

    if (entryParsed && !Array.isArray(entryParsed) && typeof acc[entryParsed] === 'undefined') {
      acc[entryParsed] = './' + path
      return acc;
    }

    acc[entry] = './' + path
    return acc
  },
    {
      admin: path.resolve(__dirname, './src/admin/index.js'),
      'editor': path.resolve(__dirname, './src/blocks/index.js'),
      public: path.resolve(__dirname, './src/public/index.js'),
    }
  ),
  output: {
    ...defaultConfig.output,
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  module: {
    ...defaultConfig.module,
    rules: customRules,
  },
};
