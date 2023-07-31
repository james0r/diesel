import apiFetch from '@wordpress/api-fetch';
import { useInstanceId } from '@wordpress/compose';
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
import './style.scss';

registerBlockType('diesel/banner', {
  supports: {
    align: ['full'],
  },
  attributes: {
    align: { type: 'string', default: 'full' },
    imgID: { type: 'number' },
    instanceId: { type: 'string' },
    imgURL: { type: 'string', default: window.dieselBanner.fallbackImage },
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

	const instanceId = useInstanceId( EditComponent );

  console.log(instanceId)

  useEffect(function () {
		if (!props.attributes.instanceId) {
			props.setAttributes({ instanceId: instanceId });
		}
	}, []);

  return (
    <div {...blockProps} className="has-tailwind diesel-block-banner">
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
      <div className="relative w-full bg-black pt-[80px] md:pt-[130px] px-0 pb-[40px] md:pb-[60px] page-banner">
        <div
          className="page-banner__bg-image"
          style={{
            backgroundImage: `url('${props.attributes.imgURL}')`,
          }}
        ></div>
        <div className="container text-center text-white">
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
