import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import {
	Button,
	PanelBody,
	PanelRow,
	CheckboxControl,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

registerBlockType('diesel/slideshow', {
	title: 'Diesel Slideshow',
	supports: {
		align: ['full'],
	},
	attributes: {
		align: { type: 'string', default: 'full' },
		pagination: { type: 'boolean', default: false },
		blockId: {
			type: 'string',
		},
	},
	edit: EditComponent,
	save: SaveComponent,
});

function EditComponent(props) {
	const [isChecked, setChecked] = useState(props.attributes.pagination);

	useEffect(() => {
		props.setAttributes({ pagination: isChecked });
	}, [isChecked]);

	useEffect(function () {
		if (!props.attributes.blockId) {
			props.setAttributes({ blockId: props.clientId });
		}
	}, []);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={true}>
					<PanelRow>
						<CheckboxControl
							label="Show Pagination"
							checked={isChecked}
							onChange={setChecked}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div style={{ backgroundColor: '#333', padding: '35px' }}>
				<p
					style={{
						textAlign: 'center',
						fontSize: '20px',
						color: '#FFF',
					}}
				>
					Slideshow
				</p>
				<InnerBlocks allowedBlocks={['diesel/slide']} />
			</div>
		</>
	);
}

function SaveComponent(props) {
	return <InnerBlocks.Content />;
}
