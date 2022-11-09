import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('diesel/accordion-esc', {
	title: 'Diesel Accordion',
	edit: EditComponent,
	save: SaveComponent,
});

function EditComponent(props) {
	return <div>something backend</div>;
}

function SaveComponent(props) {
	return <InnerBlocks.Content />;
}
