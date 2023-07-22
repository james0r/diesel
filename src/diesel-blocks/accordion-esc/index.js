import { registerBlockType } from '@wordpress/blocks'
import edit from './edit'
import save from './save'

registerBlockType('diesel/accordion-esc', {
  title: 'Diesel Accordion',
  edit,
  save,
  attributes: {
    firstItemInitiallyOpen: {
      type: 'boolean',
      default: false
    },
    oneItemOpen: {
      type: 'boolean',
      default: false
    }
  }
})