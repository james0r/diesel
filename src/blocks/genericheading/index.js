import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { RichText, BlockControls } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('diesel/genericheading', {
	title: 'Diesel Heading',
	attributes: {
		text: { type: 'string' },
		size: { type: 'string', default: 'large' },
	},
	edit: EditComponent,
	save: SaveComponent,
});

function getClassName(size) {
  switch (size) {
    case 'small':
      return 'tw-text-2xl tw-mb-4';
    case 'medium':
      return 'tw-text-4xl tw-mb-4';
    case 'large':
      return 'tw-text-6xl tw-mb-6';
  }
}

function EditComponent(props) {
	function handleTextChange(x) {
		props.setAttributes({ text: x });
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						isPressed={props.attributes.size === 'large'}
						onClick={() => props.setAttributes({ size: 'large' })}
					>
						Large
					</ToolbarButton>
					<ToolbarButton
						isPressed={props.attributes.size === 'medium'}
						onClick={() => props.setAttributes({ size: 'medium' })}
					>
						Medium
					</ToolbarButton>
					<ToolbarButton
						isPressed={props.attributes.size === 'small'}
						onClick={() => props.setAttributes({ size: 'small' })}
					>
						Small
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				allowedFormats={['core/bold']}
				tagName="h1"
        className={`${getClassName(props.attributes.size)}`}
				value={props.attributes.text}
				onChange={handleTextChange}
			/>
		</>
	);
}

function SaveComponent(props) {
	function createTagName() {
		switch (props.attributes.size) {
			case 'small':
				return 'h1';
			case 'medium':
				return 'h2';
			case 'large':
				return 'h3';
		}
	}

	return (
		<RichText.Content
			tagName={createTagName()}
			value={props.attributes.text}
			className={`${getClassName(props.attributes.size)}`}
		/>
	);
}
