import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "system",
  fonts: {
    body: "lato, sans-serif",
    heading: "lato, sans-serif",
  },
});

export default theme;
