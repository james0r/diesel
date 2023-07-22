import { registerBlockType } from '@wordpress/blocks';
import {
	CheckboxControl,
	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
	PanelBody,
} from '@wordpress/components';
import {
	RichText,
	InspectorControls,
	useBlockProps,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';

registerBlockType('my-plugin/inspector-controls-example', {
	apiVersion: 2,

	title: 'Inspector controls example',

	icon: 'universal-access-alt',

	category: 'diesel',

	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		checkboxField: {
			type: 'boolean',
			default: true,
		},
		radioField: {
			type: 'string',
			default: 'yes',
		},
		textField: {
			type: 'string',
		},
		toggleField: {
			type: 'boolean',
		},
		selectField: {
			type: 'string',
		},
		textAlignment: {
			type: 'string',
		},
	},

	edit({ attributes, setAttributes, className }) {
		const blockProps = useBlockProps();
		const {
			content,
			checkboxField,
			radioField,
			textField,
			toggleField,
			selectField,
			textAlignment,
		} = attributes;

		function onChangeContent(newContent) {
			setAttributes({ content: newContent });
		}

		function onChangeCheckboxField(newValue) {
			setAttributes({ checkboxField: newValue });
		}

		function onChangeRadioField(newValue) {
			setAttributes({ radioField: newValue });
		}

		function onChangeTextField(newValue) {
			setAttributes({ textField: newValue });
		}

		function onChangeToggleField(newValue) {
			setAttributes({ toggleField: newValue });
		}

		function onChangeSelectField(newValue) {
			setAttributes({ selectField: newValue });
		}

		function onChangeTextAlignment(newValue) {
			setAttributes({ textAlignment: newValue });
		}

		return (
			<>
				<InspectorControls>
					<PanelBody title={'Settings'}>
						<CheckboxControl
							heading="Checkbox Field"
							label="Tick Me"
							help="Additional help text"
							checked={checkboxField}
							onChange={onChangeCheckboxField}
						/>

						<RadioControl
							label="Radio Field"
							selected={radioField}
							options={[
								{ label: 'Yes', value: 'yes' },
								{ label: 'No', value: 'no' },
							]}
							onChange={onChangeRadioField}
						/>

						<TextControl
							label="Text Field"
							help="Additional help text"
							value={textField}
							onChange={onChangeTextField}
						/>

						<ToggleControl
							label="Toggle Field"
							checked={toggleField}
							onChange={onChangeToggleField}
						/>

						<SelectControl
							label="Select Control"
							value={selectField}
							options={[
								{ value: 'a', label: 'Option A' },
								{ value: 'b', label: 'Option B' },
								{ value: 'c', label: 'Option C' },
							]}
							onChange={onChangeSelectField}
						/>
					</PanelBody>
				</InspectorControls>
				<BlockControls>
					<AlignmentToolbar
						value={textAlignment}
						onChange={onChangeTextAlignment}
					/>
				</BlockControls>

				<div {...blockProps}>
					<RichText
						key="editable"
						tagName="p"
						onChange={onChangeContent}
						value={content}
						style={{ textAlign: textAlignment }}
					/>
					<h2>Inspector Control Fields</h2>
					<ul>
						<li>
							Checkbox Field:{' '}
							{checkboxField != true ? 'False' : 'True'}
						</li>
						<li>Radio Field: {radioField}</li>
						<li>Text Field: {textField}</li>
						<li>
							Toggle Field:{' '}
							{toggleField != true ? 'False' : 'True'}
						</li>
						<li>Select Field: {selectField}</li>
					</ul>
				</div>
			</>
		);
	},

	save({ attributes }) {
		const {
			content,
			checkboxField,
			radioField,
			textField,
			toggleField,
			selectField,
			textAlignment,
		} = attributes;
		const blockProps = useBlockProps.save();

		return (
			<div {...blockProps}>
				<RichText.Content
					value={content}
					tagName="p"
					style={{ textAlign: textAlignment }}
				/>

				<h2>Inspector Control Fields</h2>
				<ul>
					<li>
						Checkbox Field:{' '}
						{checkboxField != true ? 'False' : 'True'}
					</li>
					<li>Radio Field: {radioField}</li>
					<li>Text Field: {textField}</li>
					<li>
						Toggle Field: {toggleField != true ? 'False' : 'True'}
					</li>
					<li>Select Field: {selectField}</li>
				</ul>
			</div>
		);
	},
});
