const defaultConfig = require('@wordpress/scripts/config/webpack.config')

module.exports = {
  ...defaultConfig,
  entry: {
    index: './src/index',
    'diesel-blocks/banner': './src/diesel-blocks/banner',
    'diesel-blocks/slide': './src/diesel-blocks/slide',
    'diesel-blocks/slideshow': './src/diesel-blocks/slideshow',
    'diesel-blocks/sociallink': './src/diesel-blocks/sociallink',
    'diesel-blocks/sociallinks': './src/diesel-blocks/sociallinks',
    'diesel-blocks/genericheading': './src/diesel-blocks/genericheading',
    'diesel-blocks/genericbutton': './src/diesel-blocks/genericbutton',
    'diesel-blocks/searchresults': './src/diesel-blocks/searchresults',
    'diesel-blocks/search': './src/diesel-blocks/search',
    'diesel-blocks/accordion-esc': './src/diesel-blocks/accordion-esc',
    'diesel-blocks/accordion-item': './src/diesel-blocks/accordion-item',
    'diesel-blocks/inspector-controls-example': './src/diesel-blocks/inspector-controls-example',
    'diesel-blocks/dynamic-block-example': './src/diesel-blocks/dynamic-block-example',
    'diesel-blocks/course-text-box': './src/diesel-blocks/course-text-box',
  },
}
