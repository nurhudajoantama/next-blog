import React from "react";
import { AnimationPage } from "../animation/AnimationPage";
import Seo, { SeoProps } from "../SEO/SEO";

interface PageLayoutProps {
  seo?: SeoProps;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, seo = {} }) => {
  return (
    <>
      <Seo {...seo} />
      <AnimationPage>{children}</AnimationPage>
    </>
  );
};
