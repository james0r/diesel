wp.blocks.registerBlockType('diesel/header', {
	title: 'Diesel Header',
	edit: function () {
		return wp.element.createElement(
			'div',
			{ className: 'placeholder-block' },
			'Header Placeholder'
		);
	},
	save: function () {
		return null;
	},
});
