import React from "react";
import { Box, Flex, HStack, IconButton, Input, InputGroup, InputLeftElement, InputRightAddon, InputRightElement, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import MainLayout from "../../components/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "@chakra-ui/icons";
import { getAllPosts, Post } from "../../lib/api";
import Blog from "../../components/blog/Blog";

type BlogProps = {
  blogs: Post[];
};

export default function Index({ blogs }: BlogProps) {
  return (
    <MainLayout>
      {/* Box on top */}
      <Box px={7} py={10} rounded="lg" bg={useColorModeValue("gray.100", "gray.700")}>
        {/* Title */}
        <Text as="h1" fontSize="5xl" fontWeight="black" letterSpacing="widest">
          <Link href="/blog">Blog</Link>
        </Text>

        {/* Search */}
        <InputGroup my={12} display="flex" alignItems="center">
          <InputLeftElement pointerEvents="none" top="unset" pl={2}>
            <SearchIcon />
          </InputLeftElement>
          <Input placeholder="What you want to find ?" variant="outline" py={3} rounded="full" size="xl" w={450} />
        </InputGroup>
      </Box>

      {/* Blog List */}
      <Box my={12}>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 3, md: 5, xl: 12 }}>
          {blogs.map((blog) => (
            <Blog key={blog.slug} blog={blog} />
          ))}
        </SimpleGrid>
      </Box>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const blogs = getAllPosts(["title", "date", "slug", "thumbnail", "tags"]);
  return {
    props: {
      blogs,
    },
  };
}
