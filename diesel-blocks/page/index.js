wp.blocks.registerBlockType('diesel/page', {
	title: 'Diesel Page',
	edit: function () {
		return wp.element.createElement(
			'div',
			{ className: 'placeholder-block' },
			'Single Page Placeholder'
		);
	},
	save: function () {
		return null;
	},
});
