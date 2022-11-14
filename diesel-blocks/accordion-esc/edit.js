import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps()
  const ALLOWED_BLOCKS = ['diesel/accordion-item']

  return (
    <>
      <div { ...blockProps }>
        <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
      </div>
    </>
  )
}