import React from "react";
import { AnimatePresence } from "framer-motion";

const MainAnimationPage: React.FC = ({ children }) => {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={true}
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      {children}
    </AnimatePresence>
  );
};

export default MainAnimationPage;
