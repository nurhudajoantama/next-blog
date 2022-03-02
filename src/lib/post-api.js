const fs = require("fs");
const { join } = require("path");
const matter = require("gray-matter");

const postsDirectory = join(process.cwd(), "_posts");

function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

function getDataContent(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content, realSlug };
}

function getPostBySlug(slug, fields = []) {
  const { data, content, realSlug } = getDataContent(slug);

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

module.exports = {
  getPostSlugs,
  getPostBySlug,
  getAllPosts,
};
