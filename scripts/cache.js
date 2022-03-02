const elasticlunr = require("elasticlunr");
const fs = require("fs");
const { getAllPosts } = require("../src/lib/post-api");

try {
  fs.readdirSync("cache");
} catch {
  fs.mkdirSync("cache");
}

const data_posts = getAllPosts(["title", "date", "slug", "thumbnail", "tags"]);

// CACHING DATA

const dataCacheFileContent = `exports.posts = ${JSON.stringify(data_posts)}`;

fs.writeFile("cache/data.js", dataCacheFileContent, (err) => {
  if (err) throw err;
  console.log("File saved");
});

// INDEX SEARCH CACHE

const idx = elasticlunr(function () {
  this.setRef("slug");
  this.addField("title");
  this.addField("tags");
});

data_posts.forEach((post) => {
  idx.addDoc({
    slug: post.slug,
    title: post.title,
    tags: post.tags.join(" "),
  });
});

const indexFileContents = `exports.posts = ${JSON.stringify(idx)}`;

fs.writeFile("cache/index_search.js", indexFileContents, (err) => {
  if (err) throw err;
  console.log("File saved");
});
