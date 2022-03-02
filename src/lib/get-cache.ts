import { Post } from "../../types/Post";

export function getAllPostCache(): Post[] {
  const { posts } = require("../../cache/data");
  return posts;
}

export function getPostIndexSearchCache() {
  const { posts } = require("../../cache/index_search");
  return posts;
}
