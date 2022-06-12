import { Button, PanelBody, PanelRow, SelectControl } from "@wordpress/components"
import {
  InnerBlocks,
  InspectorControls
} from "@wordpress/block-editor"
import { networking } from "@wordpress/icons"
import { registerBlockType } from "@wordpress/blocks"
import { useState } from "@wordpress/element"

registerBlockType("dieselblocks/sociallink", {
  title: "Diesel Social Link",
  attributes: {
    network: { type: 'string' }
  },
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {
  const [ network, setNetwork ] = useState( 'facebook' );

  return (
    <>
      <InspectorControls title="Link Details" initialOpen={true}>
        <PanelBody>
          <PanelRow>
            <SelectControl
                label="Social Network"
                labelPosition="side"
                value={ network }
                options={ [
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'Twitter', value: 'twitter' },
                    { label: 'Instagram', value: 'instagram' },
                ] }
                onChange={ ( newNetwork ) => setNetwork( newNetwork ) }
                __nextHasNoMarginBottom
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <li class="social-icons-item">
        <a href="<?php echo carbon_get_theme_option('crb_facebook_url'); ?>"
          target="_blank">
        </a>
      </li>
    </>
  )
}

function SaveComponent() {
  return <InnerBlocks.Content />
}
