import React from "react";
import { AnimationPage } from "../animation/AnimationPage";

export const PageLayout: React.FC = ({ children }) => {
  return <AnimationPage>{children}</AnimationPage>;
};
