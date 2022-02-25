import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Grid, GridItem, SimpleGrid, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import Link from "next/link";
import MainLayout from "../components/layout/MainLayout";

function About() {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  return (
    <Box mt={7} rounded="lg" pb={4}>
      <Box bgColor={bgColor} px={5} py={1} mb={3}>
        <Text as="h2" fontSize="3xl" fontWeight="bold">
          About Me
        </Text>
      </Box>
      <Box px={5} py={1}>
        <Text as="p" fontSize="md" mb={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eligendi repellendus ex impedit, architecto, ad eaque sunt necessitatibus soluta voluptate sint obcaecati ipsam facilis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Iure, eligendi repellendus ex impedit, architecto, ad eaque sunt necessitatibus soluta voluptate sint obcaecati ipsam facilis? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Iure, eligendi repellendus ex impedit, architecto, ad eaque sunt necessitatibus soluta voluptate sint obcaecati ipsam facilis?
        </Text>
        <Button rightIcon={<ArrowForwardIcon />}>Read More</Button>
      </Box>
    </Box>
  );
}

function Blog({ blog }: any) {
  return (
    <Link href={blog.link} passHref>
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
          <Text as="h2" fontSize="xl" fontWeight="bold" mb={3} _peerHover={{ textDecoration: "underline" }}>
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
    </Link>
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
        <Text as="h2" fontSize="3xl" fontWeight="bold">
          Latest Blog
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

export default function Index() {
  return (
    <MainLayout>
      <Center p={3} borderBottom="4px" mb={12}>
        <Text as="h1" fontSize="6xl" fontWeight="black">
          Nurhuda Joantama Putra
        </Text>
      </Center>
      <SimpleGrid columns={{ sm: 1, lg: 3 }} gap={12} my={3}>
        <GridItem>
          <About />
        </GridItem>
        <GridItem colSpan={2}>
          <LatestBlog />
        </GridItem>
      </SimpleGrid>
    </MainLayout>
  );
}
