import React from "react";
import { Box, Input, InputGroup, InputLeftElement, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import MainLayout from "../../src/components/layout/MainLayout";
import Link from "next/link";
import { SearchIcon } from "@chakra-ui/icons";
import { getAllPosts } from "../../src/lib/post-api";
import { Post } from "../../types/Post";
import Blog from "../../src/components/blogs/Blog";
import { getAllPostCache, getPostIndexSearchCache } from "../../src/lib/get-cache";

const elasticlunr = require("elasticlunr");

type BlogProps = {
  blogs: Post[];
};

export default function Index(props: BlogProps) {
  const { blogs: allBlogs } = props;

  const [blogs, setBlogs] = React.useState<Post[]>([]);
  const [search, setSearch] = React.useState("");
  const post_index = getPostIndexSearchCache();
  const idx = elasticlunr.Index.load(post_index);

  React.useEffect(() => {
    setBlogs(allBlogs);
  }, [allBlogs]);

  React.useEffect(() => {
    if (search) {
      const results = idx.search(search, {
        expand: true,
      });
      setBlogs(results.map((result: any) => allBlogs.find((blog) => blog.slug === result.ref)));
    } else {
      setBlogs(allBlogs);
    }
  }, [search, allBlogs, idx]);

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
          <Input onChange={(e) => setSearch(e.target.value)} placeholder="What you want to find ?" variant="outline" py={3} rounded="full" size="xl" w={450} />
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
  const blogs = getAllPostCache();
  return {
    props: {
      blogs,
    },
  };
}
