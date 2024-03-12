module.exports = function (eleventyConfig) {
  // Input Directory : src Output directory: _site
  eleventyConfig.addPassthroughCopy("src/assets/");

  return {
    dir: { input: "src", output: "_site" },
    templateFormats: ["html", "md", "njk"],
  };
};
