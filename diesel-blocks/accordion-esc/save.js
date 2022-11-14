import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function Save({ attributes, setAttributes }) {

  return (
    <>
      <div {...useBlockProps.save({
        'x-data': '{ itemActive: 1 }'
      })}>
        <InnerBlocks.Content />
      </div>
    </>
  )
}