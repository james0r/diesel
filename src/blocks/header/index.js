import { getThemePaletteAsColorPaletteColors } from '../../helpers';
import { registerBlockType } from '@wordpress/blocks';
import {
  useBlockProps,
  getColorObjectByColorValue,
  InnerBlocks,
  useSetting
} from '@wordpress/block-editor';

import {
  PanelRow,
  PanelBody,
  ColorPalette,
  ButtonGroup,
  Button
} from '@wordpress/components'

import {
  InspectorControls,
  RichText
} from '@wordpress/block-editor';

import { useState, useEffect } from '@wordpress/element';

const themeColors = getThemePaletteAsColorPaletteColors();

registerBlockType('diesel/header', {
  title: 'Diesel Header',
  category: 'Diesel',
  attributes: {
    logoText: {
      type: "string"
    },
    logoTextSize: {
      type: 'string',
      default: '2xl',
    },
    bgColorSlug: { type: 'string', default: 'brown' }
  },
  edit: Edit,
  save: Save,
});

function Edit({ attributes, setAttributes }) {

  useEffect(() => {
    if (!attributes.logoText) {
      setAttributes({ logoText: 'DIESEL' })
    }
  }, [])

  const fontSizes = useSetting('typography.fontSizes').filter((fontSize) => {
    return (fontSize.slug == 'lg' || fontSize.slug == '2xl' || fontSize.slug == '3xl');
  })

  const blockProps = useBlockProps({
    className: `has-tailwind`
  })

  const handleBgColorChange = (colorCode) => {
    console.log(colorCode)
    const { name } = getColorObjectByColorValue(themeColors, colorCode);
    setAttributes({ bgColorSlug: name })
  }

  const handleTextChange = (text) => {
    setAttributes({ logoText: text })
  }

  const currentBgColorValue = themeColors.filter((color) => {
    return color.name == attributes.bgColorSlug;
  })[0].color;

  const onChangeFontSize = (fontSize) => {
    setAttributes({ logoTextSize: fontSize.slug });
    console.log(fontSize.slug)
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title="Background" initialOpen={true}>
          <PanelRow>
            <ColorPalette
              disableCustomColors={true}
              clearable={false}
              colors={themeColors}
              value={currentBgColorValue}
              onChange={handleBgColorChange}
            />
          </PanelRow>
        </PanelBody>
        <PanelBody title="Logo Text Settings" initialOpen={true}>
          <ButtonGroup>
            {fontSizes.map((fontSize) => (
              <Button
                key={fontSize}
                className={`${fontSize.slug === attributes.logoTextSize ? 'is-primary' : ''}`}
                onClick={() => onChangeFontSize(fontSize)}
              >
                {`${fontSize.name}`}
              </Button>
            ))}
          </ButtonGroup>
        </PanelBody>
      </InspectorControls>
      <div className={`bg-${attributes.bgColorSlug} text-white is-layout-constrained px-6 md:px-8`}>
        <div className={`alignwide flex items-center justify-between min-h-[60px] relative`}>
          <InnerBlocks
            template={[
              ['core/navigation']
            ]}
            allowedBlocks={['core/navigation']}
          />
          <RichText
            tagName="span"
            className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white bg-transparent border-none text-${attributes.logoTextSize} font-bold appearance-none p-0 m-0 !w-auto text-center`}
            allowedFormats={[]}
            value={attributes.logoText}
            onChange={handleTextChange}
            placeholder="DIESEL"
          />
        </div>
      </div>
    </div>
  )
}

function Save() {
  return (
    <InnerBlocks.Content />
  );
}