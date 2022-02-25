import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  useColorModeValue,
  Container,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
  IconButton,
  Stack,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import ColorModeButton from "./ColorModeButton";

export default function Navbar() {
  const navs = [
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>
            <Text as="h6" fontSize="xl" fontWeight="bold">
              <Link href="/">Nurhuda</Link>
            </Text>
          </Box>
          <Box
            display={{
              base: "none",
              md: "block",
            }}
          >
            <Flex alignItems="center">
              {navs.map((nav) => (
                <Text key={nav.name} as="span" fontSize="md" mx={3}>
                  <Link href={nav.url}>{nav.name}</Link>
                </Text>
              ))}
              <ColorModeButton ml={7} />
            </Flex>
          </Box>
          <Box
            display={{
              base: "block",
              md: "none",
            }}
          >
            <ColorModeButton />
            <IconButton aria-label="menu" icon={<HamburgerIcon />} onClick={onOpen} ml={3}>
              Open
            </IconButton>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Nurhuda</DrawerHeader>

                <DrawerBody>
                  <VStack align="start" spacing={5}>
                    {navs.map((nav) => (
                      <Text key={nav.name} as="span" fontSize="md">
                        <Link href={nav.url}>{nav.name}</Link>
                      </Text>
                    ))}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
