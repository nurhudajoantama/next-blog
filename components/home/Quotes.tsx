import { Box, useColorModeValue, Text } from "@chakra-ui/react";

export default function Quotes() {
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
