import React from "react";
import { Box, Container, Flex, HStack, Link, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import MainLayout from "../components/layout/MainLayout";
import GithubIcon from "../components/icons/GithubIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import FacebookIcon from "../components/icons/FacebookIcon";

const socials = [
  {
    name: "Github",
    url: "https://github.com",
    desc: "nurhudajoantama",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "",
    desc: "nurhudajoantama",
    icon: LinkedinIcon,
  },
  {
    name: "Instagram",
    url: "",
    desc: "@nurhudajoantama",
    icon: InstagramIcon,
  },
  {
    name: "Twitter",
    url: "",
    desc: "@JoantamaP",
    icon: TwitterIcon,
  },
  {
    name: "Facebook",
    url: "",
    desc: "nurhudajoantama",
    icon: FacebookIcon,
  },
];

export default function Contact() {
  return (
    <MainLayout>
      <Container maxW="container.md">
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={7} py={3} rounded="md">
          <Text as="h1" fontSize="4xl" fontWeight="bold" letterSpacing="wider">
            Contact
          </Text>
        </Box>
        <Box ml={7} borderLeft="2px" pl={5} pt={12} pb={2} mb={24}>
          <VStack spacing={9} align="start">
            {socials.map((social) => (
              <a key={social.name} href={social.url} role="group" target="_blank" rel="noreferrer">
                <Flex>
                  <social.icon
                    fontSize="5xl"
                    cursor="pointer"
                    _groupHover={{
                      color: "blue.500",
                    }}
                  />
                  <Box ml={5}>
                    <Text as="p">{social.name}</Text>
                    <Text as="p" color="gray.500" textDecoration="none">
                      {social.desc}
                    </Text>
                  </Box>
                </Flex>
              </a>
            ))}
          </VStack>
        </Box>
      </Container>
    </MainLayout>
  );
}
