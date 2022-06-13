const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	entry: {
    'index': './src/index',
		'diesel-blocks/banner': './diesel-blocks/banner',
		'diesel-blocks/eventsandblogs': './diesel-blocks/eventsandblogs',
		'diesel-blocks/footer': './diesel-blocks/footer',
		'diesel-blocks/header': './diesel-blocks/header',
		'diesel-blocks/slide': './diesel-blocks/slide',
		'diesel-blocks/slideshow': './diesel-blocks/slideshow',
		'diesel-blocks/sociallink': './diesel-blocks/sociallink',
		'diesel-blocks/sociallinks': './diesel-blocks/sociallinks',
		'diesel-blocks/genericheading': './diesel-blocks/genericheading',
		'diesel-blocks/genericbutton': './diesel-blocks/genericbutton',
    'diesel-blocks/page': './diesel-blocks/page',
    'diesel-blocks/archive': './diesel-blocks/archive'
	},
};