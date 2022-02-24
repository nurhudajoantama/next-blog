import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>;
}
