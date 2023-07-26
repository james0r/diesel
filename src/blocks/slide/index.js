import apiFetch from '@wordpress/api-fetch';
import { Button, PanelBody, PanelRow } from '@wordpress/components';
import {
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
  useBlockProps
} from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { useEffect } from '@wordpress/element';

registerBlockType('diesel/slide', {
	title: 'Diesel Slide',
	supports: {
		align: ['full'],
	},
	attributes: {
		align: { type: 'string', default: 'full' },
		imgID: { type: 'number' },
		imgURL: { type: 'string', default: window.dieselSlide.fallbackImage },
	},
	edit: EditComponent,
	save: SaveComponent,
});

function EditComponent(props) {
	useEffect(
		function () {
			if (props.attributes.imgID) {
				async function go() {
					const response = await apiFetch({
						path: `/wp/v2/media/${props.attributes.imgID}`,
						method: 'GET',
					});
					props.setAttributes({
						imgURL: response.media_details.sizes.pageBanner
							.source_url,
					});
				}
				go();
			}
		},
		[props.attributes.imgID]
	);

	function onFileSelect(x) {
		props.setAttributes({ imgID: x.id });
	}

  const blockProps = useBlockProps()

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title="Background" initialOpen={true}>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onFileSelect}
								value={props.attributes.imgID}
								render={({ open }) => {
									return (
										<Button onClick={open} className="is-primary">
											Choose Image
										</Button>
									);
								}}
							/>
						</MediaUploadCheck>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className="tw-h-[300px] tw-relative">
				<div
					className="tw-absolute tw-w-full tw-h-full tw-bg-cover tw-bg-center"
					style={{
						backgroundImage: `url('${props.attributes.imgURL}')`,
					}}
				></div>
				<div className="tw-absolute tw-h-full tw-w-full tw-flex tw-items-center tw-justify-center tw-text-white tw-text-center">
					<InnerBlocks
						allowedBlocks={[
							'diesel/genericheading',
							'diesel/genericbutton',
						]}
					/>
				</div>
			</div>
		</div>
	);
}

function SaveComponent() {
	return <InnerBlocks.Content />;
}
