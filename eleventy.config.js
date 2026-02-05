import htmlmin from "html-minifier";
import markdownIt from "markdown-it";
import yaml from "js-yaml";

export default function (eleventyConfig) {
  // YAML data file support
  eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy({ static: "./" });
  eleventyConfig.addPassthroughCopy({ ".git-static": "./.git" });
  eleventyConfig.addPassthroughCopy({ "src/styling/*.css": "./styles" });

  // HTML minification
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath?.endsWith(".html")) {
      return htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      });
    }
    return content;
  });

  // Markdown configuration
  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  });

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return markdownLib.render(content);
  });

  return { dir: { input: "src", output: "build", data: "../_data" } };
}
