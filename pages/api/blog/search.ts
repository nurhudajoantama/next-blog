import { SearchResults } from "elasticlunr";
import { NextApiHandler } from "next";
import { searchPost } from "../../../src/lib/search-post";

interface Response {
  success: boolean;
  data: SearchResults[];
}

const handler: NextApiHandler<Response> = (req, res) => {
  const q = req.query.q as string;
  const data = searchPost(q);

  res.status(200).json({
    success: true,
    data,
  });
};

export default handler;
