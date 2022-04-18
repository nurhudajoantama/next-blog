import { useColorModeValue, Box, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "../../../../types/Post";

export default function Blog({ blog }: { blog: Post }) {
  const tagBgColor = useColorModeValue("gray.200", "gray.700");
  return (
    <Link href={`/blog/${blog.slug}`} passHref>
      <Box role="group" as="a">
        <Box
          _groupHover={{
            outline: "2px solid gray",
          }}
          rounded="sm"
        >
          <Box h={{ base: 220, md: 250, xl: 300 }} position="relative" rounded="sm" overflow="hidden">
            <Image src={blog.thumbnail} alt={blog.title} layout="fill" objectFit="cover" />
          </Box>
        </Box>
        <Box mx={1} mt={4} mb={5}>
          <Text fontSize="sm" color="gray.500">
            {blog.date}
          </Text>
          <Text
            fontSize="lg"
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
