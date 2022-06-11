import { InnerBlocks } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("dieselblocks/slideshow", {
  title: "Diesel Slideshow",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" }
  },
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent() {
  return (
    <div style={{ backgroundColor: "#333", padding: "35px" }}>
      <p style={{ textAlign: "center", fontSize: "20px", color: "#FFF" }}>Slideshow</p>
      <InnerBlocks allowedBlocks={['dieselblocks/slide']} />
    </div>
  )
}

function SaveComponent() {
  return <InnerBlocks.Content />
}