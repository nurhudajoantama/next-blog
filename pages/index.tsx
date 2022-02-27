import { ArrowDownIcon, ArrowForwardIcon, ArrowUpIcon, LinkIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Container, Flex, Grid, GridItem, IconButton, Link, SimpleGrid, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import MainLayout from "../components/layout/MainLayout";
import Image from "next/image";

function About() {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  return (
    <Box p={1}>
      <Box bgColor={bgColor} px={5} py={2} mb={3}>
        <Text as="h2" fontSize="3xl" fontWeight="bold">
          About Me
        </Text>
      </Box>
      <Box px={5} py={1}>
        <Text as="p" fontSize="md" mb={5} lineHeight="7" letterSpacing="wide" wordBreak="break-word">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eligendi repellendus ex impedit, architecto, ad eaque sunt necessitatibus soluta voluptate sint obcaecati ipsam facilis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Iure, eligendi repellendus ex impedit, architecto, ad eaque sunt necessitatibus soluta voluptate sint obcaecati ipsam facilis? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Iure, eligendi repellendus ex impedit, architecto, ad eaque sunt necessitatibus soluta voluptate sint obcaecati ipsam facilis?
        </Text>
        <Button rightIcon={<ArrowForwardIcon />}>Read More About Me</Button>
      </Box>
    </Box>
  );
}

function Blog({ blog }: any) {
  return (
    <NextLink href={`/blog/${blog.slug}`} passHref>
      <Box role="group" as="a">
        <Box
          _groupHover={{
            outline: "2px solid",
          }}
          p={0.5}
          rounded="lg"
        >
          <Box h={{ base: 200, sm: 340, md: 400, xl: 470 }} position="relative" rounded="lg" overflow="hidden">
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
    </NextLink>
  );
}

function LatestBlog() {
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
  ];
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
          <NextLink href="/blog">Latest Blog</NextLink>
        </Text>
      </Box>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 3, xl: 7 }}>
          {mockBlogs.map((blog, index) => (
            <Blog key={index} blog={blog} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

function Quotes() {
  return (
    <Box bg={useColorModeValue("gray.300", "gray.700")} px={12} py={24} rounded="lg">
      <Text
        as="h1"
        fontSize={{
          base: "3xl",
          lg: "6xl",
        }}
        fontWeight="bold"
        letterSpacing="wide"
      >
        Be better everyday, <br />
        everytime and everyplace.
      </Text>
    </Box>
  );
}

export default function Index() {
  return (
    <MainLayout>
      <Center p={3} borderBottom="4px" mb={12}>
        <Text as="h1" fontSize="6xl" fontWeight="black">
          Nurhuda Joantama Putra
        </Text>
      </Center>
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
      <Box mt={5} mb={12}>
        <Quotes />
      </Box>
      <Container maxW="container.lg" id="latest-blog" mb={20}>
        <LatestBlog />
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
