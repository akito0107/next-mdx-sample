const rehypePrism = require("@mapbox/rehype-prism");

const withMDX = require("@next/mdx")({
  options: {
    rehypePlugins: [rehypePrism]
  }
});

module.exports = withMDX();
