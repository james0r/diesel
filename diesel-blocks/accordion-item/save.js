import { __ } from '@wordpress/i18n'
import {
  useBlockProps,
  RichText,
  InnerBlocks
} from '@wordpress/block-editor'

export default function Save({ attributes }) {

  const alpine = {
    'x-data': '{ isActive: false }',
    'x-on:click': 'console.log(\'Clicked\')'
  }

  return null
}