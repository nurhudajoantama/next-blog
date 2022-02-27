import { Container, Box, HStack, useColorModeValue, Text } from "@chakra-ui/react";
import React from "react";
import blog from ".";
import QuoteIcon from "../../components/icons/QuoteIcon";
import MainLayout from "../../components/layout/MainLayout";
import Image from "next/image";
import { getAllPosts, getPostBySlug, Post } from "../../lib/api";

type BlogProps = {
  blog: Post;
};
export default function Blog({ blog }: BlogProps) {
  const tagBgColor = useColorModeValue("gray.200", "gray.700");
  return (
    <MainLayout>
      <Container maxW="container.md" mt={12} mb={7}>
        <Box>
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
        <Box>{blog.content}</Box>
      </Container>
    </MainLayout>
  );
}

type Path = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Path) {
  const blog = getPostBySlug(params.slug, ["slug", "title", "thumbnail", "date", "content", "tags"]);
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
