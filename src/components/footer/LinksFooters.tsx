import { Stack } from "@chakra-ui/react";
import LinkFooter from "./LinkFooter";

export type FooterLink = {
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

export default function LinksFooters() {
  return (
    <Stack direction={["column", "row"]} spacing={7} align="start" mr={12}>
      <LinkFooter link={gundarLink} />
      <LinkFooter link={siteLink} />
    </Stack>
  );
}
