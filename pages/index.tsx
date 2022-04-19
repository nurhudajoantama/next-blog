import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Center, Container, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Post } from "../types/Post";
import About from "../src/components/home/About";
import LatestBlog from "../src/components/home/LatestBlog";
import Quotes from "../src/components/home/Quotes";
import { getAllBlogFromCache } from "../src/lib/get-cache";
import Seo from "../src/components/SEO/SEO";
import AnimatedSection from "../src/components/animation/AnimatedSection";

type IndexProps = {
  blogs: Post[];
};

export default function Index({ blogs }: IndexProps) {
  return (
    <>
      <Seo />
      {/* Main title */}
      <AnimatedSection delay={0.1}>
        <Center p={3} borderBottom="4px" mb={12}>
          <Text as="h1" fontSize="6xl" fontWeight="black">
            Nurhuda Joantama Putra
          </Text>
        </Center>
      </AnimatedSection>

      {/* About */}
      <AnimatedSection delay={0.15}>
        <Container maxW="container.md" mb={7}>
          <About />
        </Container>
      </AnimatedSection>

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
      <AnimatedSection delay={0.2}>
        <Box mt={5} mb={12}>
          <Quotes />
        </Box>
      </AnimatedSection>

      {/* Latest Blog */}
      <AnimatedSection delay={0.25}>
        <Container maxW="container.lg" id="latest-blog" mb={20}>
          <LatestBlog blogs={blogs} />
        </Container>
      </AnimatedSection>

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
    </>
  );
}

export async function getStaticProps() {
  const blogs = getAllBlogFromCache(4);
  return {
    props: {
      blogs,
    },
  };
}
