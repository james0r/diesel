import { __ } from '@wordpress/i18n'
import { useState } from '@wordpress/element'
import {
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentToolbar,
  InspectorControls,
} from '@wordpress/block-editor'
import {
  PanelBody,
  TextControl,
  TextareaControl,
  ToggleControl,
  AnglePickerControl,
  ColorPicker,
} from '@wordpress/components'
import './editor.scss'

export default function Edit({ attributes, setAttributes }) {
  const { text, alignment, isToggled, angle } = attributes
  const [legacyColor, setLegacyColor] = useState('#000')

  const legacyProps = {
    color: legacyColor,
    onChangeComplete: setLegacyColor,
    disableAlpha: false
  }

  const onChangeText = (newValue) => {
    setAttributes({ text: newValue })
  }

  const onChangeToggle = (newValue) => {
    setAttributes({ isToggled: newValue })
  }

  const onChangeAngle = (newValue) => {
    setAttributes({ angle: newValue })
  }

  return (
    <>
      <InspectorControls>
        <PanelBody
          title={__('Color Settings')}
          icon="admin-appearance"
          initialOpen
        >
          <TextControl
            label="Some Text Label"
            value={text}
            onChange={onChangeText}
            help={__('Enter some text here', 'diesel')}
          ></TextControl>
          <TextareaControl
            label="Some Text Label"
            value={text}
            onChange={onChangeText}
            help={__('Enter some text here', 'diesel')}
          ></TextareaControl>
          <ToggleControl
            label="Some Toggle"
            checked={isToggled}
            onChange={onChangeToggle}
          ></ToggleControl>
          <AnglePickerControl value={ angle } label="Set a degree." onChange={onChangeAngle} />
          <ColorPicker
            { ...legacyProps }
          />
        </PanelBody>
      </InspectorControls>
      <BlockControls>
        <AlignmentToolbar
          value={alignment}
          onChange={(value) => setAttributes({ alignment: value })}
          help="Some help text."
        />
      </BlockControls>

      <RichText
        {...useBlockProps({
          className: `text-box-align-${alignment}`,
        })}
        placeholder={__('Your Text', 'diesel')}
        tagName="h4"
        value={text}
        allowedFormats={['']}
        onChange={onChangeText}
        style={{ textAlign: alignment }}
      />
    </>
  )
}
