import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote/index";

const postsDirectory = join(process.cwd(), "_posts");

export type Post = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  tags: string[];
  content: MDXRemoteSerializeResult;
};

type PostItems = {
  [key: string]: any;
};

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

function getDataContent(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content, realSlug };
}

export async function getPostWithContentBySlug(slug: string, fields: string[] = []): Promise<PostItems> {
  const { data, content, realSlug } = getDataContent(slug);

  const items: PostItems = {};

  items.content = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [require("mdx-prism")],
    },
  });
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") return;
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getPostBySlug(slug: string, fields: string[] = []): PostItems {
  const { data, content, realSlug } = getDataContent(slug);

  const items: PostItems = {};

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

export function getAllPosts(fields: string[] = [], limit = 0, start = 0): PostItems[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  if (limit > 0) return posts.slice(start, start + limit);
  return posts;
}
