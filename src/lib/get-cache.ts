import { Post } from "../../types/Post";

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
