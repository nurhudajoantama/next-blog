import React, { useEffect, useState } from "react";

import { Box, Input, InputGroup, InputLeftElement, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import MainLayout from "../../src/components/layout/MainLayout";
import Link from "next/link";
import { SearchIcon } from "@chakra-ui/icons";
import { Post } from "../../types/Post";
import Blog from "../../src/components/blogs/Blog";
import Seo from "../../src/components/SEO/SEO";
import { GetStaticProps } from "next";
import { getAllBlogFromCache } from "../../src/lib/get-cache";
import { useRouter } from "next/router";

interface BlogProps {
  blogs: Post[];
}

const Index: React.FC<BlogProps> = (props) => {
  const { blogs: allBlogs } = props;
  const [blogs, setBlogs] = useState<Post[]>(allBlogs);
  const router = useRouter();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchQuery = router.query.s as string;
    const timeout = setTimeout(async () => {
      if (searchQuery && searchQuery.length > 0) {
        const res = await fetch(`/api/blog/search?q=${searchQuery}`);
        const { data: searchResult } = await res.json();
        const result = searchResult.map((result: any) => allBlogs.find((blog) => blog.slug === result.ref));
        setBlogs(result);
        setSearch(searchQuery);
      } else {
        setBlogs(allBlogs);
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [router.query.s, allBlogs]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
    if (searchQuery.length > 0) {
      router.push(`?s=${searchQuery}`, `/blog?s=${searchQuery}`, { shallow: true });
    } else {
      router.push("", "/blog", { shallow: true });
    }
  };

  return (
    <MainLayout>
      <Seo
        dataPage={{
          title: "Blog - Nurhuda Joantama Putra",
          description: "Blog page of Nurhuda Joantama Putra",
          url: "/blog",
        }}
      />

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
          <Input name="search" onChange={handleSearch} value={search} placeholder="What you want to find ?" variant="outline" py={3} rounded="full" mr={7} size="xl" w="full" />
        </InputGroup>
      </Box>

      {/* Blog List */}
      {blogs.length == 0 && (
        <Box px={7} py={10} rounded="lg">
          <Text as="h3" fontSize="2xl" fontWeight="black" letterSpacing="widest" textAlign="center">
            No Blogs Found
          </Text>
        </Box>
      )}
      <Box my={12}>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 3, md: 5, xl: 12 }}>
          {blogs.map((blog) => (
            <Blog key={blog.slug} blog={blog} />
          ))}
        </SimpleGrid>
      </Box>
    </MainLayout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllBlogFromCache();
  return {
    props: {
      blogs: posts,
    },
  };
};
