import { Post } from "../../types/Post";
import fs from "fs";
import { join } from "path";

const postCacheDirectory = join(process.cwd(), "cache/blog");

export const getAllBlogFromCache = (): Post[] => {
  const files = fs.readdirSync(postCacheDirectory);
  const posts = files.map((file) => {
    const post: Post = JSON.parse(fs.readFileSync(join(postCacheDirectory, file), "utf8"));
    return post;
  });
  return posts;
};

export const getBlogFromSlugCache = (slug: string): Post | null => {
  const files = join(postCacheDirectory, `${slug}.json`);
  try {
    const post: Post = JSON.parse(fs.readFileSync(files, "utf8"));
    return post;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getIndexSearch = () => {
  const files = join(process.cwd(), `cache/index_search.json`);
  try {
    const post = JSON.parse(fs.readFileSync(files, "utf8"));
    return post;
  } catch (e) {
    console.log(e);
  }
};

export function getAllPostCache(): Post[] {
  const { posts } = require("../../cache/data");
  return posts;
}
export function getPostCacheBySlug(slug: string): Post | undefined {
  const allPosts = getAllPostCache();
  return allPosts.find((post) => post.slug === slug);
}

export function getPostIndexSearchCache() {
  const { posts } = require("../../cache/index_search");
  return posts;
}
