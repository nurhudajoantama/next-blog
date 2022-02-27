import { Text, TextProps } from "@chakra-ui/react";

const components = {
  h1: (props: TextProps) => <Text as="h1" fontSize="5xl" {...props} />,
};

export default components;
