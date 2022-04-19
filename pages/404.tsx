import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { PageLayout } from "../src/components/layout/PageLayout";
import Seo from "../src/components/SEO/SEO";

export default function Custom404() {
  const { asPath } = useRouter();
  return (
    <PageLayout>
      <Seo />
      <Box h={500}>
        <Text as="h1" fontSize="9xl" fontWeight="black" letterSpacing="widest">
          404
        </Text>
        <Text letterSpacing="wider" color="gray.500">
          {asPath}
        </Text>
        <Text as="h6" fontSize="3xl">
          PAGE NOT BE FOUND
        </Text>
        <Text as="p" fontSize="xl" color="gray.500">
          Sory, the page you are looking for is not found.
          <br />
          Are you sure you typed the correct URL?
        </Text>
        <Box my={7}>
          <Link href="/" passHref>
            <Button as="a" leftIcon={<ArrowForwardIcon />}>
              Go To Home
            </Button>
          </Link>
        </Box>
      </Box>
    </PageLayout>
  );
}
