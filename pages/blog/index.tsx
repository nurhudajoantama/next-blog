import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import MainLayout from "../../components/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";

function Blog(props: any) {
  const { blog } = props;
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
          >
            {blog.title}
          </Text>
        </Box>
      </Box>
    </Link>
  );
}

export default function Index() {
  const mockBlogs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae eligendi ducimus blanditiis?",
      thumbnail: "/images/default.png",
      date: "2020-01-01",
      slug: "blog-1",
    },
    {
      id: 2,
      title: "Blog 12",
      thumbnail: "/images/default.png",
      date: "2020-01-01",
      slug: "blog-2",
    },
    {
      id: 3,
      title: "Blog 3",
      thumbnail: "/images/default.png",
      date: "2020-01-01",
      slug: "blog-3",
    },
    {
      id: 4,
      title: "Blog 4",
      thumbnail: "/images/default.png",
      date: "2020-01-01",
      slug: "blog-4",
    },
    {
      id: 5,
      title: "Blog 5",
      thumbnail: "/images/default.png",
      date: "2020-01-01",
      slug: "blog-5",
    },
  ];

  return (
    <MainLayout>
      <Box borderBottom="4px">
        <Text as="h1" fontSize="5xl" fontWeight="black" letterSpacing="widest">
          Blog
        </Text>
      </Box>
      <Box my={12}>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 3, md: 5, xl: 12 }}>
          {mockBlogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </SimpleGrid>
      </Box>
    </MainLayout>
  );
}
