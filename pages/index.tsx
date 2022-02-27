import { ArrowDownIcon, ArrowForwardIcon, ArrowUpIcon, LinkIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Container, Flex, Grid, GridItem, IconButton, Link, SimpleGrid, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import MainLayout from "../components/layout/MainLayout";

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
    <NextLink href={blog.link} passHref>
      <Box as="a">
        <Box
          // border="1px"
          px={5}
          py={3}
          rounded="xl"
          cursor="pointer"
          _hover={{
            outline: "2px solid",
          }}
          role="group"
        >
          <Text as="h2" fontSize="xl" fontWeight="bold" mb={3}>
            {blog.title}
          </Text>
          <Text as="p" fontSize="md" mb={2}>
            {blog.description}
          </Text>
          <Text as="p" fontSize="sm" color="gray.500" mb={2}>
            {blog.date}
          </Text>
          <Text
            as="p"
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
            _groupHover={{
              textDecoration: "underline",
            }}
          >
            Read More <ArrowForwardIcon />
          </Text>
        </Box>
      </Box>
    </NextLink>
  );
}

function LatestBlog() {
  const blogMock = [
    {
      title: "Lorem ipsum dolor sit amet",
      date: "2020-01-01",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eligendi repellendus ex impedit, architecto, ad eaque sunt necessitatibus soluta voluptate sint obcaecati ipsam facilis?",
      link: "/blog/1",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      date: "2020-01-01",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eligendi repellendus ex impedit, architecto, ad eaque sunt necessitatibus soluta voluptate sint obcaecati ipsam facilis?",
      link: "/blog/1",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      date: "2020-01-01",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eligendi repellendus ex impedit, architecto, ad eaque sunt necessitatibus soluta voluptate sint obcaecati ipsam facilis?",
      link: "/blog/1",
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
        <Stack spacing={7}>
          {blogMock.map((blog, index) => (
            <Blog key={index} blog={blog} />
          ))}
        </Stack>
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
