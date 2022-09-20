import { motion } from "framer-motion";
import React from "react";

interface AnimatedSectionProps {
  delay?: number;
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay }}>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
