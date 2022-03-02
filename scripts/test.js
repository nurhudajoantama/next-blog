const elasticlunr = require("elasticlunr");
const data_posts = require("../cache/data.js");

const idx = elasticlunr.Index.load(data_posts.posts);

const res = idx.search("lorem");

console.log(res);
