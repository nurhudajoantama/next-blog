import { useColorModeValue, Box, HStack, Text } from "@chakra-ui/react";
import { Post } from "../../../types/Post";
import Link from "next/link";
import Image from "next/image";

export default function Blog({ blog }: { blog: Post }) {
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
