import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useColorModeValue, Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function About() {
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
          Nama saya Nurhuda Joantama Putra, Saya adalah mahasiswa Teknik Informatika di Jakarta.
          <br />
          Saya senang dengan berbagai teknologi yang ada dan selalu ingin mempelajari sesuatu yang baru. Saya juga sangat senang mengatasi masalah dengan teknologi-teknologi.
        </Text>
        <Link href="/about" passHref>
          <Button rightIcon={<ArrowForwardIcon />}>Read More About Me</Button>
        </Link>
      </Box>
    </Box>
  );
}
