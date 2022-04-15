import elasticlunr from "elasticlunr";
import { NextApiHandler } from "next";
import { getAllBlogFromCache, getBlogFromSlugCache, getIndexSearch } from "../../../src/lib/get-cache";

const handler: NextApiHandler = async (req, res) => {
  const search = req.query.search as string;
  let posts = [];

  if (search && search.length > 0) {
    const index = await getIndexSearch();
    const idx = elasticlunr.Index.load(index);
    const results = idx.search(search);
    if (results.length > 0) {
      posts = results.map((res) => {
        const post = getBlogFromSlugCache(res.ref);
        return {
          slug: post?.slug,
          title: post?.title,
          thumbnail: post?.thumbnail,
          date: post?.date,
          description: post?.description,
          tags: post?.tags,
        };
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
  } else {
    posts = getAllBlogFromCache()
      .map((post) => {
        return {
          slug: post.slug,
          title: post.title,
          thumbnail: post.thumbnail,
          date: post.date,
          description: post.description,
          tags: post.tags,
        };
      })
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  }

  const limit = Number(req.query.limit);
  if (limit) {
    posts = posts.slice(0, limit);
  }

  res.status(200).json({
    success: true,
    data: posts,
  });
};

export default handler;
