import { HStack } from "@chakra-ui/react";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";

export default function FooterSocialIcon() {
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
    <>
      <HStack spacing={5}>
        {socials.map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
            <social.icon
              fontSize="2xl"
              cursor="pointer"
              _hover={{
                color: "blue.500",
              }}
            />
          </a>
        ))}
      </HStack>
    </>
  );
}
