import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import MyBreadcrumb from "../src/components/breadcrumb/MyBreadcrumb";
import { PageLayout } from "../src/components/layout/PageLayout";
import Seo from "../src/components/SEO/SEO";

function AboutText() {
  return (
    <>
      <Text as="p" fontSize="md" lineHeight="7" letterSpacing="wide">
        Nama saya Nurhuda Joantama Putra, Saya adalah mahasiswa Teknik Informatika di Jakarta.
        <br />
        Saya senang dengan berbagai teknologi yang ada dan selalu ingin mempelajari sesuatu yang baru. Saya juga sangat senang mengatasi masalah dengan teknologi-teknologi.
        <br />
        Saat ini saya saya sangat tertarik dengan dunia data seperti <i>Machine Learning</i>, <i>artificial intelligence</i> serta hal lainnya yang berhubungan dengan data.
      </Text>
    </>
  );
}

export default function About() {
  return (
    <PageLayout
      seo={{
        dataPage: {
          title: "About - Nurhuda Joantama Putra",
          description: "About page of Nurhuda Joantama Putra",
          url: "/about",
        },
      }}
    >
      <Container maxW="container.md">
        <MyBreadcrumb />
        <Box py={2} borderBottom="4px" mb={7}>
          <Text as="h1" fontSize="5xl" fontWeight="bold">
            About
          </Text>
        </Box>
        <Box maxW="container.md">
          <AboutText />
        </Box>
      </Container>
    </PageLayout>
  );
}
