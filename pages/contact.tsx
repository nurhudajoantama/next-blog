import React from "react";
import { Box, Container, Flex, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import GithubIcon from "../src/components/icons/GithubIcon";
import InstagramIcon from "../src/components/icons/InstagramIcon";
import TwitterIcon from "../src/components/icons/TwitterIcon";
import LinkedinIcon from "../src/components/icons/LinkedinIcon";
import FacebookIcon from "../src/components/icons/FacebookIcon";
import MyBreadcrumb from "../src/components/breadcrumb/MyBreadcrumb";
import { PageLayout } from "../src/components/layout/PageLayout";
import AnimatedSection from "../src/components/animation/AnimatedSection";

const socials = [
  {
    name: "Github",
    url: "https://github.com/nurhudajoantama",
    desc: "nurhudajoantama",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nurhudajoantama",
    desc: "nurhudajoantama",
    icon: LinkedinIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/nurhudajoantama",
    desc: "@nurhudajoantama",
    icon: InstagramIcon,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/JoantamaP",
    desc: "@JoantamaP",
    icon: TwitterIcon,
  },
  {
    name: "Facebook",
    url: "https://web.facebook.com/nurhudajoantama",
    desc: "nurhudajoantama",
    icon: FacebookIcon,
  },
];

export default function Contact() {
  return (
    <PageLayout
      seo={{
        dataPage: {
          title: "Contact - Nurhuda Joantama Putra",
          description: "Contact page of Nurhuda Joantama Putra",
          url: "/contact",
        },
      }}
    >
      <Container maxW="container.md">
        <MyBreadcrumb />
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={7} py={3} rounded="md">
          <Text as="h1" fontSize="4xl" fontWeight="bold" letterSpacing="wider">
            Contact
          </Text>
        </Box>
        <Box ml={7} borderLeft="2px" pl={5} pt={12} pb={2} mb={24}>
          <VStack spacing={9} align="start">
            {socials.map((social, index) => (
              <AnimatedSection key={social.name} delay={index / 10}>
                <a href={social.url} role="group" target="_blank" rel="noreferrer">
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
              </AnimatedSection>
            ))}
          </VStack>
        </Box>
      </Container>
    </PageLayout>
  );
}
