import { Container, Box, HStack, useColorModeValue, Text, useColorMode } from "@chakra-ui/react";
import MainLayout from "../../components/layout/MainLayout";
import Image from "next/image";
import { getAllPosts, getPostWithContentBySlug, Post } from "../../lib/api";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import components from "../../components/blog/MDXcomponents";
import { css, Global } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "../../style/prism";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
type BlogProps = {
  blog: Post;
  source: { mdxSource: MDXRemoteSerializeResult };
};
export default function Blog({ blog, source }: BlogProps) {
  const tagBgColor = useColorModeValue("gray.200", "gray.700");
  const { colorMode } = useColorMode();
  return (
    <>
      <Global
        styles={css`
          ${colorMode === "dark" ? prismDarkTheme : prismLightTheme} };
        `}
      />

      <MainLayout>
        <Container maxW="container.md" mt={12} mb={7}>
          <Box>
            <Breadcrumb />
            <Text fontSize="3xl" fontWeight="bold">
              {blog.title}
            </Text>
            <Text color="gray.500">{blog.date}</Text>
          </Box>
        </Container>
        <Container maxW="container.lg" mb={5}>
          <Box position="relative" w="auto" h={600} rounded="md" overflow="hidden">
            <Image src={blog.thumbnail} alt="example" layout="fill" objectFit="cover" />
          </Box>
        </Container>
        <Container maxW="container.md">
          <Box borderBottom="2px" pb={3} mb={5}>
            <HStack spacing={3}>
              {blog.tags.map((tag) => (
                <Box key={tag} px={4} py={0.5} rounded="sm" bg={tagBgColor}>
                  <Text>{tag}</Text>
                </Box>
              ))}
            </HStack>
          </Box>
          <Box>
            <MDXRemote {...blog.content} components={components} />
          </Box>
        </Container>
      </MainLayout>
    </>
  );
}

type Path = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Path) {
  const blog = await getPostWithContentBySlug(params.slug, ["slug", "title", "thumbnail", "date", "content", "tags"]);

  return {
    props: { blog },
  };
}

export async function getStaticPaths(): Promise<{ paths: Path[]; fallback: boolean }> {
  const blogs = getAllPosts(["slug"]);
  return {
    paths: blogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
}
