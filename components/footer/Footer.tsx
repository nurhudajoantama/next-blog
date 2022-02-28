import { Box, useColorModeValue, Container, Flex, Center } from "@chakra-ui/react";
import Copyright from "./Copyright";
import FooterSocialIcon from "./FooterSocialIcon";
import LinksFooters from "./LinksFooters";

export default function Footer() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} py={12} mt={12}>
      <Container maxW="container.xl" borderTop="2px" pt={7}>
        {/* First Line */}
        <Flex direction={{ base: "column", md: "row" }} alignItems={{ base: "start", md: "center" }} justifyContent="space-between">
          {/* Footers Links */}
          <Box my={3}>
            <LinksFooters />
          </Box>
          {/* Social Media */}
          <Box alignSelf="start" my={3}>
            <FooterSocialIcon />
          </Box>
        </Flex>
        {/* Second Line */}
        <Center>
          {/* Copyright */}
          <Copyright />
        </Center>
      </Container>
    </Box>
  );
}
