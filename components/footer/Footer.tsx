import { Box, useColorModeValue, Container, Flex, Text, HStack, VStack, Spacer, Stack } from "@chakra-ui/react";
import Link from "next/link";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";

function FooterSocialIcon() {
  const socials = [
    {
      name: "Github",
      url: "https://github.com",
      icon: GithubIcon,
    },
    {
      name: "Instagram",
      url: "",
      icon: InstagramIcon,
    },
    {
      name: "Twitter",
      url: "",
      icon: TwitterIcon,
    },
  ];
  return (
    <HStack spacing={5}>
      {socials.map((social) => (
        <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
          <social.icon fontSize="xl" cursor="pointer" />
        </a>
      ))}
    </HStack>
  );
}

type FooterLink = {
  title: string;
  links: {
    name: string;
    url: string;
  }[];
};

const siteLink: FooterLink = {
  title: "Site Link",
  links: [
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "About",
      url: "/about",
    },
  ],
};
const gundarLink: FooterLink = {
  title: "Gundar Link",
  links: [
    {
      name: "Gunadarma Homepage",
      url: "https://gunadarma.ac.id",
    },
    {
      name: "Perpustakaan Gunadarma",
      url: "https://library.gunadarma.ac.id/",
    },
    {
      name: "LePKoM Gunadarma",
      url: "https://vm.lepkom.gunadarma.ac.id/",
    },
    {
      name: "Labti Gunadarma",
      url: "http://ti.lab.gunadarma.ac.id/",
    },
  ],
};

function LinkFooter({ link }: { link: FooterLink }) {
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

export default function Footer() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} py={12} mt={12}>
      <Container maxW="container.xl" borderTop="2px" pt={7}>
        <Flex direction={{ base: "column", md: "row" }} alignItems={{ base: "start", md: "center" }} justifyContent="space-between">
          <Box my={3} borderBottom="1px">
            <Text as="p" fontSize="md">
              &copy; Nurhuda Joantama Putra 2022
            </Text>
          </Box>
          <Spacer />
          <Box my={3}>
            <Stack direction={["column", "row"]} spacing={7} align="start" mr={12}>
              <LinkFooter link={gundarLink} />
              <LinkFooter link={siteLink} />
            </Stack>
          </Box>
          <Box alignSelf="start" my={3}>
            <FooterSocialIcon />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
