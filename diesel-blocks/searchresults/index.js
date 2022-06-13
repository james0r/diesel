wp.blocks.registerBlockType("dieselblocks/searchresults", {
  title: "Diesel Search Results",
  edit: function () {
    return wp.element.createElement("div", { className: "placeholder-block" }, "Search Results Placeholder")
  },
  save: function () {
    return null
  }
})