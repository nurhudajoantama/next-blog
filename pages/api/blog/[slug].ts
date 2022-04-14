import { NextApiHandler } from "next";
import { getBlogFromSlugCache } from "../../../src/lib/get-cache";

const handler: NextApiHandler = (req, res) => {
  const slug = req.query.slug as string;

  const post = getBlogFromSlugCache(slug);

  res.status(200).json({
    success: true,
    post,
  });
};

export default handler;
