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

export const getBlogFromSlugCache = (slug: string): Post | undefined => {
  const files = join(postCacheDirectory, `${slug}.json`);
  try {
    const post: Post = JSON.parse(fs.readFileSync(files, "utf8"));
    return post;
  } catch {
    return undefined;
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
