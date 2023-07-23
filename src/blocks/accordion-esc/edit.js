import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor'
import { PanelBody, ToggleControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps()
  const ALLOWED_BLOCKS = ['diesel/accordion-item']

  const { firstItemInitiallyOpen, oneItemOpen } = attributes

  const onChangeFirstItemInitiallyOpen = (newValue) => {
    setAttributes({ firstItemInitiallyOpen: newValue })
  }

  const onChangeOneItemOpen = (newValue) => {
    setAttributes({ oneItemOpen: newValue })
  }

  return (
    <>
      <InspectorControls>
        <PanelBody
          title={__('Accordion Behavior', 'diesel')}
          icon="hammer"
          initialOpen
        >
          <ToggleControl
            label={__('First item initially open', 'diesel')}
            checked={firstItemInitiallyOpen}
            onChange={onChangeFirstItemInitiallyOpen}
          ></ToggleControl>
          <ToggleControl
            label={__('One item open at a time', 'diesel')}
            checked={oneItemOpen}
            onChange={onChangeOneItemOpen}
          ></ToggleControl>
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps({
        'data-first-item-initially-open': firstItemInitiallyOpen,
        'data-one-item-open': oneItemOpen
      })}>
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
      </div>
    </>
  )
}
