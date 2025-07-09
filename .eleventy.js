module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
  };
};
