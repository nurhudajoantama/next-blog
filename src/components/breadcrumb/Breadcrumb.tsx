import React from "react";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

function BreadcrumbEl({ href, children }: any) {
  return (
    <Link href={href} passHref>
      <BreadcrumbLink>{children}</BreadcrumbLink>
    </Link>
  );
}

export default function Breadcrumb_() {
  const router = useRouter();
  const { asPath } = router;
  const paths = asPath.replace(/^\//g, "").split("/");

  return (
    <Box my={3}>
      <Breadcrumb separator="/" color="gray.500">
        <BreadcrumbItem>
          <BreadcrumbEl href="/">Nurhuda</BreadcrumbEl>
        </BreadcrumbItem>
        {paths.map((path, index) => {
          if (index === 0) {
            return (
              <BreadcrumbItem>
                <BreadcrumbEl key={index} href={"/" + path}>
                  {path}
                </BreadcrumbEl>
              </BreadcrumbItem>
            );
          } else {
            let result = "";
            for (let resultIndex = 0; resultIndex <= index; resultIndex++) {
              result += "/" + paths[resultIndex];
            }
            return (
              <BreadcrumbItem>
                <BreadcrumbEl key={index} href={result}>
                  {path}
                </BreadcrumbEl>
              </BreadcrumbItem>
            );
          }
        })}
      </Breadcrumb>
    </Box>
  );
}
