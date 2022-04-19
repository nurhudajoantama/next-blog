import { Post } from "../../types/Post";
import fs from "fs";
import { join } from "path";

export const getAllBlogFromCache = (limit = 0, start = 0): Post[] => {
  const files_path = join(process.cwd(), `/public/json/blog.json`);
  try {
    const data = fs.readFileSync(files_path, "utf8");
    const posts: Post[] = JSON.parse(data);
    if (limit > 0) {
      return posts.slice(start, start + limit);
    }
    return posts;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getBlogFromSlugCache = (slug: string): Post | null => {
  const files_path = join(process.cwd(), `/public/json/blog/${slug}.json`);
  try {
    const data = fs.readFileSync(files_path, "utf8");
    const post: Post = JSON.parse(data);
    return post;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getIndexSearch = () => {
  const files_path = join(process.cwd(), `/public/json/index_search.json`);
  try {
    const data = fs.readFileSync(files_path, "utf8");
    const search_index = JSON.parse(data);
    return search_index;
  } catch (e) {
    console.log(e);
  }
};
