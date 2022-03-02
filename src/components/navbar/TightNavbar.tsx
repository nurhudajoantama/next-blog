import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Text, useDisclosure, Box } from "@chakra-ui/react";
import Link from "next/link";
import ColorModeButton from "./ColorModeButton";
import { NavLink } from "./Navbar";

export default function TightNavbar({ links }: { links: NavLink[] }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
            <VStack align="start" spacing={5} as="ul" listStyleType="none">
              {links.map((link) => (
                <Box as="li" key={link.name}>
                  <Text as="span" fontSize="md">
                    <Link href={link.url}>{link.name}</Link>
                  </Text>
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
