import { getThemePaletteAsColorPaletteColors } from '../../helpers'
import { link } from '@wordpress/icons';
import {
  ToolbarGroup,
  ToolbarButton,
  Popover,
  Button,
  PanelBody,
  PanelRow,
  ColorPalette,
} from '@wordpress/components';
import {
  RichText,
  BlockControls,
  InspectorControls,
  __experimentalLinkControl as LinkControl,
  getColorObjectByColorValue,
  useBlockProps
} from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { useState } from '@wordpress/element';

const themeColors = getThemePaletteAsColorPaletteColors();

registerBlockType('diesel/genericbutton', {
  title: 'Diesel Button',
  category: 'Diesel',
  attributes: {
    text: { type: 'string', default: 'Button Text' },
    size: { type: 'string', default: 'large' },
    linkObject: { type: 'object', default: { url: '', opensInNewTab: false } },
    colorName: { type: 'string', default: 'oxford-blue' }
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);

  function handleTextChange(x) {
    props.setAttributes({ text: x });
  }

  function buttonHandler() {
    setIsLinkPickerVisible((prev) => !prev);
  }

  function handleLinkChange(newLink) {
    props.setAttributes({ linkObject: newLink });
  }

  const currentColorValue = themeColors.filter((color) => {
    return color.name == props.attributes.colorName;
  })[0].color;

  function handleColorChange(colorCode) {
    // from the hex value that the color palette gives us, we need to find its color name
    const { name } = getColorObjectByColorValue(themeColors, colorCode);
    props.setAttributes({ colorName: name });
  }

  function getBlockSizeClasses() {
    const size = props.attributes.size;
    if (size === 'large') {
      return 'py-2 px-6 text-lg';
    } else if (size === 'medium') {
      return 'py-2 px-4 text-base';
    } else if (size === 'small') {
      return 'py-1 px-3 text-sm';
    }
  }

  const blockProps = useBlockProps()

  return (
    <div { ...blockProps }>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton onClick={buttonHandler} icon={link} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton
            isPressed={props.attributes.size === 'large'}
            onClick={() => props.setAttributes({ size: 'large' })}
          >
            Large
          </ToolbarButton>
          <ToolbarButton
            isPressed={props.attributes.size === 'medium'}
            onClick={() => props.setAttributes({ size: 'medium' })}
          >
            Medium
          </ToolbarButton>
          <ToolbarButton
            isPressed={props.attributes.size === 'small'}
            onClick={() => props.setAttributes({ size: 'small' })}
          >
            Small
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>
      <InspectorControls>
        <PanelBody title="Color" initialOpen={true}>
          <PanelRow>
            <ColorPalette
              disableCustomColors={true}
              clearable={false}
              colors={themeColors}
              value={currentColorValue}
              onChange={handleColorChange}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <RichText
        allowedFormats={[]}
        tagName="a"
        className={`rounded-lg py-2 px-6 text-white no-underline transition bg-${props.attributes.colorName} hover:bg-${props.attributes.colorName}/75 ${getBlockSizeClasses()}`}
        value={props.attributes.text}
        onChange={handleTextChange}
        { ...props.attributes.linkObject?.opensInNewTab && { 'target': '_blank' } }
      />
      {isLinkPickerVisible && (
        <Popover
          position="middle center"
          onFocusOutside={() => setIsLinkPickerVisible(false)}
        >
          <LinkControl
            settings={[
              {
                id: 'opensInNewTab',
                title: 'New tab?',
              }
            ]}
            value={props.attributes.linkObject}
            onChange={handleLinkChange}
            
          />
          <Button
            variant="primary"
            onClick={() => setIsLinkPickerVisible(false)}
            style={{ display: 'block', width: '100%' }}
          >
            Confirm Link
          </Button>
        </Popover>
      )}
    </div>
  );
}

function SaveComponent(props) {
  function getBlockSizeClasses() {
    const size = props.attributes.size;
    if (size === 'large') {
      return 'py-2 px-6 text-lg';
    } else if (size === 'medium') {
      return 'py-2 px-4 text-base';
    } else if (size === 'small') {
      return 'py-1 px-3 text-sm';
    }
  }

  return (
    <a
      href={props.attributes.linkObject.url}
      className={`rounded-lg text-white no-underline transition bg-${props.attributes.colorName} hover:bg-${props.attributes.colorName}/75 ${getBlockSizeClasses()}`}
      { ...props.attributes.linkObject?.opensInNewTab && { 'target': '_blank' } }
    >
      {props.attributes.text}
    </a>
  );
}
