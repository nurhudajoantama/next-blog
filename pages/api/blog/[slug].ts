import { NextApiHandler } from "next";
import { getBlogFromSlugCache } from "../../../src/lib/get-cache";

const handler: NextApiHandler = (req, res) => {
  const slug = req.query.slug as string;

  const post = getBlogFromSlugCache(slug);

  if (post) {
    res.status(200).json({
      success: true,
      post,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Post not found",
    });
  }
};

export default handler;
