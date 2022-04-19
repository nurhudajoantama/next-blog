import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeButton: React.FC = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton onClick={toggleColorMode} aria-label="Toggle theme" icon={useColorModeValue(<MoonIcon />, <SunIcon />)}></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default ColorModeButton;
