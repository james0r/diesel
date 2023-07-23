import { __ } from '@wordpress/i18n'
import { useState } from '@wordpress/element'
import {
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentToolbar,
  InspectorControls,
  PanelColorSettings,
  ContrastChecker,
} from '@wordpress/block-editor'
import {
  PanelBody,
  TextControl,
  TextareaControl,
  ToggleControl,
  AnglePickerControl,
  ColorPicker,
  BaseControl,
  ColorPalette,
  __experimentalBoxControl as BoxControl,
} from '@wordpress/components'
import './editor.scss'

export default function Edit({ attributes, setAttributes }) {
  const {
    text,
    alignment,
    isToggled,
    angle,
    backgroundColor,
    textColor,
    padding
  } = attributes
  const [legacyColor, setLegacyColor] = useState('#000')

  const legacyProps = {
    color: legacyColor,
    onChangeComplete: setLegacyColor,
    disableAlpha: false,
    __nextHasNoMarginBottom: true,
  }

  const alpine = {
    'x-data': '{ isActive: false }',
    'x-on:click': 'console.log(\'Clicked\')'
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

  const onBackgroundColorChange = (newBgColor) => {
    setAttributes({ backgroundColor: newBgColor })
  }

  const onTextColorChange = (newTextColor) => {
    setAttributes({ textColor: newTextColor })
  }

  const onPaddingChange = (newPadding) => {
    setAttributes({ padding: newPadding })
  }

  return (
    <>
      <InspectorControls>
        <PanelBody
          title={__('Color Settings', 'diesel')}
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
          <AnglePickerControl
            value={angle}
            label="Set a degree."
            onChange={onChangeAngle}
          />
          <ColorPicker {...legacyProps} />
          <ColorPalette
            colors={[
              { name: 'red', color: '#F00' },
              { name: 'black', color: '#000' },
            ]}
            onChange={(v) => console.log(v)}
          />
          <BoxControl
            values={padding}
            onChange={onPaddingChange}
          />
        </PanelBody>
        <PanelColorSettings
          title={__('Color Settings', 'text-box')}
          icon="admin-appearance"
          initialOpen
          disableCustomColors={false}
          colorSettings={[
            {
              value: backgroundColor,
              onChange: onBackgroundColorChange,
              label: __('Background Color', 'text-box'),
            },
            {
              value: textColor,
              onChange: onTextColorChange,
              label: __('Text Color', 'text-box'),
            },
          ]}
        >
          <ContrastChecker
            textColor={textColor}
            backgroundColor={backgroundColor}
          />
        </PanelColorSettings>
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
          style: {
            backgroundColor,
            color: textColor,
            textAlign: alignment,
            paddingLeft: padding.left,
            paddingRight: padding.right,
            paddingBottom: padding.bottom,
            paddingTop: padding.top,
          },
          ...alpine
        })}
        placeholder={__('Your Text', 'diesel')}
        tagName="h4"
        value={text}
        allowedFormats={['']}
        onChange={onChangeText}
      />
    </>
  )
}
