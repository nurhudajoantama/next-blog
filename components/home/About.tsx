import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useColorModeValue, Box, Button, Text } from "@chakra-ui/react";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eligendi repellendus ex impedit, architecto, ad eaque sunt necessitatibus soluta voluptate sint obcaecati ipsam facilis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Iure, eligendi repellendus ex impedit, architecto, ad eaque sunt necessitatibus soluta voluptate sint obcaecati ipsam facilis? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Iure, eligendi repellendus ex impedit, architecto, ad eaque sunt necessitatibus soluta voluptate sint obcaecati ipsam facilis?
        </Text>
        <Button rightIcon={<ArrowForwardIcon />}>Read More About Me</Button>
      </Box>
    </Box>
  );
}
