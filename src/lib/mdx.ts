import { serialize } from "next-mdx-remote/serialize";

export async function getSerializeContent(content: string) {
  const res = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [require("mdx-prism")],
    },
  });
  return res;
}
