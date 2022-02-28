import { VStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FooterLink } from "./LinksFooters";

export default function LinkFooter({ link }: { link: FooterLink }) {
  return (
    <VStack align="start">
      <Text fontSize="md" fontWeight="bold">
        {link.title}
      </Text>
      {link.links.map((link) => (
        <Link key={link.name} href={link.url}>
          {link.name}
        </Link>
      ))}
    </VStack>
  );
}
