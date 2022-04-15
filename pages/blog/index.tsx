import React from "react";

import { Box, Button, FormControl, Input, InputGroup, InputLeftElement, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import MainLayout from "../../src/components/layout/MainLayout";
import Link from "next/link";
import { SearchIcon } from "@chakra-ui/icons";
import { Post } from "../../types/Post";
import Blog from "../../src/components/blogs/Blog";
import Seo from "../../src/components/SEO/SEO";
import { GetServerSideProps } from "next";

interface BlogProps {
  blogs: Post[];
}

const Index: React.FC<BlogProps> = (props) => {
  const { blogs } = props;

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
        <form method="GET">
          <FormControl display="flex" alignItems="center" justifyContent="start">
            <InputGroup my={12} display="flex" alignItems="center">
              <InputLeftElement pointerEvents="none" top="unset" pl={2}>
                <SearchIcon />
              </InputLeftElement>
              <Input name="search" placeholder="What you want to find ?" variant="outline" py={3} rounded="full" mr={7} size="xl" w="full" />
            </InputGroup>
            <Button type="submit">Search</Button>
          </FormControl>
        </form>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiUrl = `http://localhost:3000/api/blog`;

  // handle 404

  const search = ctx.query?.search as string;
  if (search && search.length > 0) {
    const res = await fetch(`${apiUrl}?search=${search}`);
    if (res.status === 404) {
      return {
        props: {
          blogs: [],
        },
      };
    }

    const data = await res.json();
    const blogs: Post[] = data.data;
    return {
      props: { blogs },
    };
  }

  const res = await fetch(apiUrl);
  const data = await res.json();
  const blogs: Post[] = data.data;
  return {
    props: { blogs },
  };
};
