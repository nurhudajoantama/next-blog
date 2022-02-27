import { Box, Container, HStack, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import QuoteIcon from "../../components/icons/QuoteIcon";
import MainLayout from "../../components/layout/MainLayout";

export default function Example() {
  const blog = {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae eligendi ducimus blanditiis?",
    thumbnail: "/images/default.png",
    date: "2020-01-01",
    slug: "blog-1",
    tags: ["tag1", "tag2"],
  };
  const tagBgColor = useColorModeValue("gray.200", "gray.700");

  return (
    <MainLayout>
      <Container maxW="container.md" mt={12} mb={7}>
        <Box>
          <Text fontSize="3xl" fontWeight="bold">
            {blog.title}
          </Text>
          <Text color="gray.500">{blog.date}</Text>
        </Box>
      </Container>
      <Container maxW="container.lg" mb={5}>
        <Box position="relative" w="auto" h={600} rounded="md" overflow="hidden">
          <Image src={blog.thumbnail} alt="example" layout="fill" objectFit="cover" />
        </Box>
      </Container>
      <Container maxW="container.md">
        <Box>
          <HStack spacing={3} mb={7}>
            {blog.tags.map((tag) => (
              <Box key={tag} px={4} py={0.5} rounded="sm" bg={tagBgColor}>
                <Text>{tag}</Text>
              </Box>
            ))}
          </HStack>
          <Box>
            <Text as="h1" fontSize="3xl" fontWeight="bold">
              Heading 1
            </Text>
            <Text as="h2" fontSize="2xl" fontWeight="bold">
              Heading 2
            </Text>
            <Text as="h3" fontSize="xl" fontWeight="bold">
              Heading 3
            </Text>
            <Text as="h4" fontSize="lg" fontWeight="bold">
              Heading 4
            </Text>
            <Text as="h5" fontSize="lg">
              Heading 5
            </Text>

            <Text as="p" fontSize="lg">
              <i>Halo</i>
              <b>Hola</b>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloribus molestias deserunt quia, vitae laboriosam corporis, sit odit perspiciatis qui labore accusantium obcaecati
              hic pariatur placeat quisquam. Laudantium, atque est.
            </Text>

            <Box px={3} py={5} my={3} rounded="md" bg={useColorModeValue("gray.300", "gray.700")}>
              <Box>
                <QuoteIcon fontSize="2xl" />
              </Box>
              <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, sunt!</Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  );
}
