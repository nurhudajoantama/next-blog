import { Button, Text } from "@chakra-ui/react";
import MainLayout from "../components/layout/MainLayout";

function index() {
  return (
    <MainLayout>
      <Text as="h1" fontSize="6xl" fontWeight="black">
        Nurhuda
        <br />
        Joantama
        <br />
        Putra
      </Text>
      <Button size="lg" rounded="full">
        Read Blog
      </Button>
    </MainLayout>
  );
}

export default index;
