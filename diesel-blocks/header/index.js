wp.blocks.registerBlockType("dieselblocks/header", {
  title: "Diesel Header",
  edit: function() {
    return wp.element.createElement('div', {className: 'placeholder-block'}, 'Header Placeholder')
  },
  save: function() {
    return null
  }
})