import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";
import Fonts from "../src/styles/Fonts";

import "../src/styles/global.css";
import MainLayout from "../src/components/layout/MainLayout";
import MainAnimationPage from "../src/components/animation/MainAnimationPage";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <MainAnimationPage>
          <Fonts />
          <Component {...pageProps} />
        </MainAnimationPage>
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
