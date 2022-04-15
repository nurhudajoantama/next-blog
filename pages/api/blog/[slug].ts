import { NextApiHandler } from "next";
import { getBlogFromSlugCache } from "../../../src/lib/get-cache";

const handler: NextApiHandler = (req, res) => {
  try {
    const slug = req.query.slug as string;
    const post = getBlogFromSlugCache(slug);
    if (post) {
      res.status(200).json({
        success: true,
        data: post,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export default handler;
