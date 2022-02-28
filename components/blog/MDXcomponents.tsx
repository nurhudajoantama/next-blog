import { Divider, Image, ImageProps, Link, ListItem, ListItemProps, ListProps, LinkProps, OrderedList, Text, TextProps, UnorderedList, useColorModeValue, Box } from "@chakra-ui/react";

import QuoteIcon from "../icons/QuoteIcon";

function Blockquote(props: TextProps) {
  return (
    <Box px={3} py={5} my={3} rounded="md" bg={useColorModeValue("gray.300", "gray.700")}>
      <Box>
        <QuoteIcon fontSize="2xl" />
      </Box>
      <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, sunt!</Text>
    </Box>
  );
}

const components = {
  // Heading
  h1: (props: TextProps) => <Text as="h1" fontSize="3xl" fontWeight="bold" {...props} />,
  h2: (props: TextProps) => <Text as="h2" fontSize="2xl" fontWeight="bold" {...props} />,
  h3: (props: TextProps) => <Text as="h3" fontSize="xl" fontWeight="bold" {...props} />,
  h4: (props: TextProps) => <Text as="h4" fontSize="lg" fontWeight="bold" {...props} />,
  h5: (props: TextProps) => <Text as="h5" fontSize="md" fontWeight="bold" {...props} />,
  h6: (props: TextProps) => <Text as="h6" fontSize="md" {...props} />,

  // paragraph
  p: (props: TextProps) => <Text as="p" my={3} fontSize="md" letterSpacing="wide" lineHeight="7" {...props} />,

  // text
  em: (props: TextProps) => <Text as="i" fontSize="md" fontStyle="italic" {...props} />,
  strong: (props: TextProps) => <Text as="strong" fontSize="md" fontWeight="bold" {...props} />,

  // link
  a: (props: LinkProps) => <Link isExternal {...props} />,

  // divider
  hr: () => <Divider my={3} />,

  // list
  ol: (props: ListProps) => <OrderedList my={3} {...props} />,
  ul: (props: ListProps) => <UnorderedList my={3} {...props} />,
  li: (props: ListItemProps) => <ListItem {...props} />,

  // image
  img: (props: ImageProps) => <Image alt="image" {...props} />,

  // blockquote
  blockquote: (props: TextProps) => <Blockquote {...props} />,
};

export default components;
