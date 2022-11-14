import { registerBlockType } from '@wordpress/blocks'
import edit from './edit'
import save from './save'

registerBlockType('diesel/accordion-item', {
  title: 'Diesel Accordion Item',
  edit,
  save,
  attributes: {
    headingText: {
      type: 'string'
    },
    panelText: {
      type: 'string'
    },
    id: {
      type: 'string'
    }
  }
})