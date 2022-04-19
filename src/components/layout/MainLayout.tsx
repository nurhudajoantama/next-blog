import { Container } from "@chakra-ui/react";
import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Seo from "../SEO/SEO";

type MainLayoutProps = {
  children: React.ReactNode;
};
export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Seo />
      <Navbar />
      <Container maxW="container.xl" pt={7}>
        {props.children}
      </Container>
      <Footer />
    </>
  );
}
