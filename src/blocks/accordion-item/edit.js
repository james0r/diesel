import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import { useSelect } from '@wordpress/data'

export default function Edit({ attributes, setAttributes, clientId }) {
  const { headingText, panelText, id } = attributes

  const onChangeHeadingText = (newValue) => {
    setAttributes({ headingText: newValue })
  }

  const onChangePanelText = (newValue) => {
    setAttributes({ panelText: newValue })
  }

  setAttributes({ editorId: clientId })

  const { index } = useSelect((select) => {
    const { getBlockIndex } = select('core/block-editor')
    return {
      index: getBlockIndex(clientId),
    }
  })

  setAttributes({ index })

  const {parentAttributes} = useSelect((select) => {
    const parentClientId = select( 'core/block-editor' ).getBlockHierarchyRootClientId( clientId )

    return {
      parentAttributes: select('core/block-editor').getBlockAttributes( parentClientId )
    }
  })


  setAttributes({ parentAttributes })

  return (
    <>
      <div
        {...useBlockProps({
          id: id,
        })}
      >
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
