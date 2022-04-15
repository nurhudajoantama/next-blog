import elasticlunr from "elasticlunr";
import { NextApiHandler } from "next";
import { getAllBlogFromCache, getIndexSearch } from "../../../src/lib/get-cache";

const handler: NextApiHandler = async (req, res) => {
  const search = req.query.search as string;

  if (search && search.length > 0) {
    const index = await getIndexSearch();
    const idx = elasticlunr.Index.load(index);
    const posts = idx.search(search);
    if (posts.length > 0) {
      return res.status(200).json({
        success: true,
        data: posts,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
  }

  const posts = getAllBlogFromCache();
  const data = posts.map((post) => {
    return {
      title: post.title,
      slug: post.slug,
      date: post.date,
      description: post.description,
      tags: post.tags,
    };
  });
  res.status(200).json({
    success: true,
    data,
  });
};

export default handler;
