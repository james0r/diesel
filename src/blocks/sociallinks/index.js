import { Button, PanelBody, PanelRow } from '@wordpress/components';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('diesel/sociallinks', {
	title: 'Diesel Social Links',
	attributes: {},
	edit: EditComponent,
	save: SaveComponent,
});

function EditComponent(props) {
	return (
		<div className="social-links-wrapper">
			<ul class="social-icons-list">
				<InnerBlocks allowedBlocks={['diesel/sociallink']} />
			</ul>
		</div>
	);
}

function SaveComponent() {
	return <InnerBlocks.Content />;
}
