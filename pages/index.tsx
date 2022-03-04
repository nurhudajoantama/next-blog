import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Center, Container, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import MainLayout from "../src/components/layout/MainLayout";
import { getAllPosts } from "../src/lib/post-api";
import { Post } from "../types/Post";
import About from "../src/components/home/About";
import LatestBlog from "../src/components/home/LatestBlog";
import Quotes from "../src/components/home/Quotes";
import { getAllPostCache } from "../src/lib/get-cache";
import Seo from "../src/components/SEO/SEO";

type IndexProps = {
  blogs: Post[];
};

export default function Index({ blogs }: IndexProps) {
  return (
    <MainLayout>
      <Seo />
      {/* Main title */}
      <Center p={3} borderBottom="4px" mb={12}>
        <Text as="h1" fontSize="6xl" fontWeight="black">
          Nurhuda Joantama Putra
        </Text>
      </Center>

      {/* About */}
      <Container maxW="container.md" mb={7}>
        <About />
      </Container>

      <Box>
        <Link href="#latest-blog" role="group">
          <IconButton
            aria-label="down-icon"
            icon={<ArrowDownIcon />}
            rounded="full"
            mr="3"
            _groupHover={{
              outline: "2px solid",
            }}
          />
          <Text as="span" fontSize="md">
            Latest Blog
          </Text>
        </Link>
      </Box>

      {/* Quotes */}
      <Box mt={5} mb={12}>
        <Quotes />
      </Box>

      {/* Latest Blog */}
      <Container maxW="container.lg" id="latest-blog" mb={20}>
        <LatestBlog blogs={blogs} />
      </Container>

      <Flex justifyContent="end">
        <NextLink href="/" passHref>
          <Flex
            as="a"
            align="center"
            _hover={{
              textDecoration: "underline",
            }}
          >
            Back To Top
            <IconButton
              aria-label="up-icon"
              icon={<ArrowUpIcon />}
              rounded="full"
              ml="3"
              _groupHover={{
                outline: "2px solid",
              }}
            />
          </Flex>
        </NextLink>
      </Flex>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const allBlogs = getAllPostCache();
  const blogs = allBlogs.slice(0, 3);
  return {
    props: {
      blogs,
    },
  };
}
