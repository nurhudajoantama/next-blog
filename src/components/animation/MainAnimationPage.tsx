import React from "react";
import { AnimatePresence } from "framer-motion";

interface MainAnimationPageProps {
  children: React.ReactNode;
}

const MainAnimationPage: React.FC<MainAnimationPageProps> = ({ children }) => {
  return (
    <AnimatePresence
      mode="wait"
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
