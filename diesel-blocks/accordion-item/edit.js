import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'

export default function Edit({ attributes, setAttributes, clientId }) {
  const blockProps = useBlockProps()
  const { headingText, panelText, id } = attributes

  const onChangeHeadingText = (newValue) => {
    setAttributes({ headingText: newValue })
  }

  const onChangePanelText = (newValue) => {
    setAttributes({ panelText: newValue })
  }

  setAttributes({ id: clientId })

  return (
    <>
      <div {...useBlockProps({
        'id': id
      })}>
        <RichText
          tagName="h2"
          placeholder={__('Item Heading', 'diesel')}
          onChange={onChangeHeadingText}
          value={headingText}
        />
        <RichText
          tagName="div"
          placeholder={__('Some panel text...')}
          onChange={onChangePanelText}
          value={panelText}
        />
      </div>
    </>
  )
}
