import React from "react";
import Head from "next/head";
import { Post } from "../../../types/Post";
import config from "../../../config/config";
import SchemaOrg from "./SchemaOrg";

type DataPage = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

type SeoProps = {
  dataPage?: DataPage;
  postData?: Post;
  isBlogPost?: boolean;
};

export default function Seo({ dataPage, postData, isBlogPost = false }: SeoProps) {
  const postMeta = dataPage || postData || undefined;

  const title = postMeta?.title || config.siteTitle;
  const description = postMeta?.description || config.siteDescription;
  const image = postData ? `${config.siteUrl}${postData?.thumbnail}` : config.siteLogo;

  const url = (postData ? `${config.siteUrl}/blog/${postData?.slug}` : undefined) || (dataPage?.url ? `${config.siteUrl}${dataPage.url}` : config.siteUrl);
  const date = isBlogPost ? postData?.date : undefined;

  return (
    <Head>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <link rel="canonical" href={url} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        date={date}
        siteUrl={config.siteUrl}
        authorName={config.authorName}
        defaultTitle={config.siteTitle}
      />
    </Head>
  );
}
