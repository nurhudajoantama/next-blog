import React from "react";
import { Box, Flex, HStack, IconButton, Input, InputGroup, InputLeftElement, InputRightAddon, InputRightElement, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import MainLayout from "../../components/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "@chakra-ui/icons";
import { getAllPosts, Post } from "../../lib/api";

function Blog({ blog }: { blog: Post }) {
  const tagBgColor = useColorModeValue("gray.200", "gray.700");
  return (
    <Link href={`/blog/${blog.slug}`} passHref>
      <Box role="group" as="a">
        <Box
          _groupHover={{
            outline: "2px solid",
          }}
          p={0.5}
          rounded="lg"
        >
          <Box h={{ base: 250, sm: 370, md: 470, xl: 520 }} position="relative" rounded="lg" overflow="hidden">
            <Image src={blog.thumbnail} alt={blog.title} layout="fill" objectFit="cover" />
          </Box>
        </Box>
        <Box mx={1} mt={7} mb={5}>
          <Text fontSize="md" color="gray.500">
            {blog.date}
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            _groupHover={{
              textDecoration: "underline",
            }}
            mb={3}
          >
            {blog.title}
          </Text>
          <HStack spacing={2}>
            {blog.tags.map((tag) => (
              <Box key={tag} px={2} py={0.5} rounded="sm" bg={tagBgColor}>
                <Text fontSize="sm">{tag}</Text>
              </Box>
            ))}
          </HStack>
        </Box>
      </Box>
    </Link>
  );
}

type BlogProps = {
  blogs: Post[];
};

export default function Index({ blogs }: BlogProps) {
  return (
    <MainLayout>
      <Box px={7} py={10} rounded="lg" bg={useColorModeValue("gray.100", "gray.700")}>
        <Text as="h1" fontSize="5xl" fontWeight="black" letterSpacing="widest">
          <Link href="/blog">Blog</Link>
        </Text>
        <InputGroup my={12} display="flex" alignItems="center">
          <InputLeftElement pointerEvents="none" top="unset" pl={2}>
            <SearchIcon />
          </InputLeftElement>
          <Input placeholder="What you want to find ?" variant="outline" py={3} rounded="full" size="xl" w={450} />
        </InputGroup>
      </Box>
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
