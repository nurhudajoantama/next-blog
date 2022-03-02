import { Box, useColorModeValue, Text } from "@chakra-ui/react";
import QuoteIcon from "../icons/QuoteIcon";

export default function Quotes() {
  return (
    <Box bg={useColorModeValue("gray.300", "gray.700")} px={12} pb={24} pt={20} rounded="lg">
      <Box>
        <QuoteIcon fontSize="4xl" />
      </Box>
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
