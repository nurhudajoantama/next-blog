import { Box, Flex, useColorModeValue, Container, Text } from "@chakra-ui/react";
import Link from "next/link";

import TightNavbar from "./TightNavbar";
import WideNavbar from "./WideNavbar";

export type NavLink = {
  name: string;
  url: string;
};

const navLinks: NavLink[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export default function Navbar() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* left side title or logo */}
          <Box>
            <Text as="h6" fontSize="xl" fontWeight="bold">
              <Link href="/">Nurhuda</Link>
            </Text>
          </Box>

          {/* for wide device  */}
          <Box
            display={{
              base: "none",
              md: "block",
            }}
          >
            <WideNavbar links={navLinks} />
          </Box>

          {/* for small device using drawer */}
          <Box
            display={{
              base: "block",
              md: "none",
            }}
          >
            <TightNavbar links={navLinks} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
