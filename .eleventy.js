module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");

  eleventyConfig.addCollection("tagList", function (collectionApi) {
    let tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        tags = tags.filter(tag => !["post"].includes(tag)); // ignore generic tags
        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });
    return [...tagSet];
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
    },
  };
};
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("tagFilter", function(collections) {
    return Object.keys(collections).filter(tag => tag !== "all" && !tag.startsWith("_"));
  });
};
