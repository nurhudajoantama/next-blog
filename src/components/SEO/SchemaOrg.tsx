import React from "react";

type SchemaOrgProps = {
  authorName: string;
  siteUrl: string;
  date?: string;
  defaultTitle: string;
  description: string;
  image: string;
  isBlogPost: boolean;
  title: string;
  url: string;
};

export default function SchemaOrg({ authorName, siteUrl, date, defaultTitle, description, image, isBlogPost, title, url }: SchemaOrgProps) {
  const baseSchema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
      alternateName: defaultTitle,
    },
  ];

  const schema = isBlogPost
    ? [
        ...baseSchema,
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url,
          name: title,
          alternateName: defaultTitle,
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image,
          },
          description,
          author: {
            "@type": "Person",
            name: authorName,
          },
          mainEntityOfPage: {
            "@type": "WebSite",
            "@id": siteUrl,
          },
          date,
        },
      ]
    : baseSchema;

  return (
    <>
      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </>
  );
}
