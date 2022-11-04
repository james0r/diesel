wp.blocks.registerBlockType("diesel/search", {
  title: "Diesel Search",
  edit: function () {
    return wp.element.createElement("div", { className: "placeholder-block" }, "Search Placeholder")
  },
  save: function () {
    return null
  }
})