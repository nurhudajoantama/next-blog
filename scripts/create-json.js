// CREATING ALL JSON ON PUBLIC DIRECTORY

const fs = require("fs");
const { getAllPosts } = require("../src/lib/post-api");

const data_posts = getAllPosts(["title", "date", "slug", "thumbnail", "tags", "content"]);

// CACHING ALL BLOG DATA

try {
  fs.readdirSync("public/json");
} catch {
  fs.mkdirSync("public/json");
}

try {
  fs.readdirSync("public/json/blog");
} catch {
  fs.mkdirSync("public/json/blog");
}

const data = JSON.stringify(
  data_posts.map((data_post) => {
    return {
      title: data_post.title,
      date: data_post.date,
      slug: data_post.slug,
      thumbnail: data_post.thumbnail,
      tags: data_post.tags,
    };
  })
);

fs.writeFile(`public/json/blog.json`, data, (err) => {
  if (err) throw err;
  console.log("File saved");
});

for (const data_post of data_posts) {
  const data = JSON.stringify(data_post);
  fs.writeFile(`public/json/blog/${data_post.slug}.json`, data, (err) => {
    if (err) throw err;
    console.log("File saved");
  });
}
