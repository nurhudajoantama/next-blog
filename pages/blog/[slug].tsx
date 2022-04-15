import React from "react";

import { Container, Box, HStack, useColorModeValue, Text, useColorMode } from "@chakra-ui/react";
import MainLayout from "../../src/components/layout/MainLayout";
import Image from "next/image";
import { getSerializeContent } from "../../src/lib/mdx";
import { Post } from "../../types/Post";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import components from "../../src/components/blog/MDXcomponents";
import PrismStyle from "../../src/styles/PrismStyle";
import MyBreadcrumb from "../../src/components/breadcrumb/MyBreadcrumb";
import { getAllPostCache, getPostCacheBySlug } from "../../src/lib/get-cache";
import Seo from "../../src/components/SEO/SEO";
import { GetServerSideProps } from "next";

interface BlogProps {
  blog: Post;
  source: MDXRemoteSerializeResult;
}

const Blog: React.FC<BlogProps> = ({ blog, source }) => {
  const tagBgColor = useColorModeValue("gray.200", "gray.700");
  return (
    <>
      {/* <Seo postData={blog} isBlogPost /> */}
      <PrismStyle />
      <MainLayout>
        <Container maxW="container.md" mt={12} mb={7}>
          <Box>
            <MyBreadcrumb />
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
            <MDXRemote {...source} components={components} />
          </Box>
        </Container>
      </MainLayout>
    </>
  );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  if (!slug) {
    return {
      notFound: true,
    };
  }

  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
    if (res.status === 404) {
      return {
        notFound: true,
      };
    }
    const data = await res.json();
    const blog: Post = data.data;
    const source = await getSerializeContent(blog.content);
    return { props: { blog, source } };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
