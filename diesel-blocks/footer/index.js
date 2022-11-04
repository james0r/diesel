wp.blocks.registerBlockType("diesel/footer", {
  title: "Diesel Footer",
  edit: function() {
    return wp.element.createElement('div', {className: 'placeholder-block'}, 'Footer Placeholder')
  },
  save: function() {
    return null
  }
})