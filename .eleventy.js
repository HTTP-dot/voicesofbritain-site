const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("date", (dateObj, format = "dd LLL yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
eleventyConfig.addCollection("post", function (collectionApi) {
  return collectionApi.getFilteredByGlob("./posts/*.md");
});
