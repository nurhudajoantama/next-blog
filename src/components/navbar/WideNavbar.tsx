import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import ColorModeButton from "./ColorModeButton";
import { NavLink } from "./Navbar";

export default function WideNavbar({ links }: { links: NavLink[] }) {
  return (
    <Flex alignItems="center" as="ul" listStyleType="none">
      {links.map((link) => (
        <Box as="li" key={link.name}>
          <Text as="span" fontSize="md" mx={3}>
            <Link href={link.url}>{link.name}</Link>
          </Text>
        </Box>
      ))}
      <ColorModeButton ml={7} />
    </Flex>
  );
}
