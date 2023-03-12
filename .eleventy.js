const fs = require("fs")
const delay = ms => new Promise(res => setTimeout(res, ms));
const htmlmin = require("html-minifier");


module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"static": "./"});
    eleventyConfig.addPassthroughCopy({".git-static": "./.git"});
    eleventyConfig.addPassthroughCopy({"src/styling/*.css": "./styles"});

    for (const path of findIncludeDirs("./")) {
        const pass = {[path]: path.slice("./src/".length, path.length - ".11ty.include/".length)}
        eleventyConfig.addPassthroughCopy(pass)
    }

    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
        if (outputPath.endsWith(".html")) {
            return htmlmin.minify(content, {
                collapseWhitespace: true,
                removeComments: true,
                useShortDoctype: true,
            });
        }

        return content;
    });

    return {dir: {input: "src", output: "build"}}
}

function convertGit() {
}

function findIncludeDirs(path) {
    const isDir = path => fs.statSync(path).isDirectory();
    const list = []

    for (const dir of fs.readdirSync(path).filter(name => isDir(`${path}${name}`))) {
        if (dir === ".11ty.include")
            list.push(`${path}${dir}/`);
        else {
            const trace = findIncludeDirs(`${path}${dir}/`)
            if (trace && trace.length > 0) list.push(trace)
        }
    }
    return list.flat();
}

