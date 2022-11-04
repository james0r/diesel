wp.blocks.registerBlockType("diesel/archive", {
  title: "Diesel Archive",
  edit: function () {
    return wp.element.createElement("div", { className: "placeholder-block" }, "Archive Placeholder")
  },
  save: function () {
    return null
  }
})
