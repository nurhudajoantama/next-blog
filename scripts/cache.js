const elasticlunr = require("elasticlunr");
const fs = require("fs");
const { join } = require("path");
const matter = require("gray-matter");
// import { getAllPosts } from "../lib/api";

const postsDirectory = join(process.cwd(), "_posts");

function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

function getAllPosts(fields = [], limit = 0, start = 0) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  if (limit > 0) return posts.slice(start, start + limit);
  return posts;
}

const idx = elasticlunr(function () {
  this.setRef("slug");
  this.addField("title");
  this.addField("tags");
});

const data_posts = getAllPosts(["slug", "title", "tags"]);
data_posts.forEach((post) => {
  idx.addDoc({
    slug: post.slug,
    title: post.title,
    tags: post.tags.join(" "),
  });
});

// const fileContents = `const postsData = ${JSON.stringify(idx)}; export default postsData;`;
const fileContents = `exports.posts = ${JSON.stringify(idx)}`;

try {
  fs.readdirSync("cache");
} catch {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", fileContents, (err) => {
  if (err) throw err;
  console.log("File saved");
});
