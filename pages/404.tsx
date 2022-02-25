import { Box, Text } from "@chakra-ui/react";
import MainLayout from "../components/layout/MainLayout";

export default function Custom404() {
  return (
    <MainLayout>
      <Box h={450}>
        <Text as="h1" fontSize="9xl" fontWeight="black" letterSpacing="widest">
          404
        </Text>
        <Text as="h6" fontSize="3xl">
          PAGE NOT BE FOUND
        </Text>
        <Text as="p" fontSize="xl" color="gray.500">
          Sory, the page you are looking for is not found.
          <br />
          Are you sure you typed the correct URL?
        </Text>
      </Box>
    </MainLayout>
  );
}
