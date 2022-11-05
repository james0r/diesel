const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	entry: {
    'index': './src/index',
		'diesel-blocks/banner': './diesel-blocks/banner',
		'diesel-blocks/slide': './diesel-blocks/slide',
		'diesel-blocks/slideshow': './diesel-blocks/slideshow',
		'diesel-blocks/sociallink': './diesel-blocks/sociallink',
		'diesel-blocks/sociallinks': './diesel-blocks/sociallinks',
		'diesel-blocks/genericheading': './diesel-blocks/genericheading',
		'diesel-blocks/genericbutton': './diesel-blocks/genericbutton',
    'diesel-blocks/searchresults': './diesel-blocks/searchresults',
    'diesel-blocks/search': './diesel-blocks/search',
    'diesel-blocks/accordion-esc': './diesel-blocks/accordion-esc',
	},
};