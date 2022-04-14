import { NextApiHandler } from "next";
import { getAllBlogFromCache } from "../../../src/lib/get-cache";

const handler: NextApiHandler = async (req, res) => {
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
