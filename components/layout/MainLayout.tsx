import { Container } from "@chakra-ui/react";
import React from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};
export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" pt={7}>
        {props.children}
      </Container>
      <Footer />
    </>
  );
}
