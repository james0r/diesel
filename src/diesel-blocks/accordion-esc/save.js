import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function Save({ attributes, setAttributes }) {
  const { firstItemInitiallyOpen, oneItemOpen } = attributes

  const activeItemIndex = oneItemOpen && firstItemInitiallyOpen ? 0 : null

  return (
    <>
      <div {...useBlockProps.save({
        'x-data': `{ dieselBlockAccordionItemActive: ${activeItemIndex} }`,
        'data-first-item-initially-open': firstItemInitiallyOpen,
        'data-one-item-open': oneItemOpen
      })}>
        <InnerBlocks.Content />
      </div>
    </>
  )
}