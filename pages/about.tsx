import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import MainLayout from "../components/layout/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <Container maxW="container.md">
        <Breadcrumb />
        <Box py={2} borderBottom="4px" mb={7}>
          <Text as="h1" fontSize="5xl" fontWeight="bold">
            About
          </Text>
        </Box>
        <Box maxW="container.md">
          <Text as="p" fontSize="md" lineHeight="7" letterSpacing="wide">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo aspernatur porro doloremque. Earum culpa asperiores commodi vel deleniti minus vitae necessitatibus perferendis odit amet!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo aspernatur porro doloremque. Earum culpa asperiores commodi vel deleniti minus vitae necessitatibus perferendis odit amet!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo aspernatur porro doloremque. Earum culpa asperiores commodi vel deleniti minus vitae necessitatibus perferendis odit amet!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo aspernatur porro doloremque. Earum culpa asperiores commodi vel deleniti minus vitae necessitatibus perferendis odit amet!
          </Text>
        </Box>
      </Container>
    </MainLayout>
  );
}
