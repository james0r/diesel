wp.blocks.registerBlockType("diesel/eventsandblogs", {
  title: "Diesel Events & Blogs",
  edit: function () {
    return wp.element.createElement(
      "div",
      { className: "placeholder-block" },
      "Events & Blogs Placeholder"
    )
  },
  save: function () {
    return null
  }
})
