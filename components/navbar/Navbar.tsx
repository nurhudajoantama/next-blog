import { Box, Flex, useColorModeValue, Container, Text } from "@chakra-ui/react";
import Link from "next/link";
import ColorModeButton from "./ColorModeButton";

export default function Nav() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>
            <Text as="h6" fontSize="xl" fontWeight="bold">
              <Link href="/">Nurhuda</Link>
            </Text>
          </Box>
          <Box>
            <Flex alignItems="center">
              <Text as="span" fontSize="md" mx={7}>
                <Link href="/blog">Blog</Link>
              </Text>
              <ColorModeButton ml={7} />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
