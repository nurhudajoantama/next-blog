import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { Post } from "../../../types/Post";
import Blog from "./Blog";
import Link from "next/link";

export default function LatestBlog({ blogs }: { blogs: Post[] }) {
  return (
    <Box>
      <Box borderBottom="2px" py={1} mb={7}>
        <Text
          as="h2"
          fontSize="3xl"
          fontWeight="bold"
          _hover={{
            color: "gray.500",
          }}
        >
          <Link href="/blog">Latest Blog</Link>
        </Text>
      </Box>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 3, xl: 7 }}>
          {blogs.map((blog, index) => (
            <Blog key={index} blog={blog} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
