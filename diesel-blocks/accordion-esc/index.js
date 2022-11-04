import { InnerBlocks, useBlockProps } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("diesel/accordion-esc", {
  title: "Diesel Accordion",
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {
  const {
    className,
  } = props;
  return (
    <div {...useBlockProps({ className })}>
      Alpinejs Example Block in the Editor.
    </div>
  );
}

function SaveComponent(props) {
  return (
    <div
     { ...useBlockProps.save() }
     { ...{ 'x-data': '{ show: false }' } }
    >
     <div
      className="block"
      { ...{ ':class': `{'block': show, 'hidden': ! show }` } }
     >
      Alpinejs Example Block on the Frontend.
     </div>
     <button
      { ...{ '@click':'show = !show' } }
     >
      <span
       className="hidden"
       { ...{ ':class': `{'hidden': show, 'block': ! show }` } }
      >Show Text</span>
      <span
       className="block"
       { ...{ ':class': `{'block': show, 'hidden': ! show }` } }
      >Hide Text</span>
     </button>
    </div>
   );
}