const DOMAIN = 'https://edgewa.re';
const SITE_NAME = 'edgewa.re';

type HeadOpenGraphProps = {
  pageTitle: string;
  path: string;
  description: string;
};

export const HeadOpenGraph = ({ path, pageTitle, description }: HeadOpenGraphProps) => {
  const pageUrl = `${DOMAIN}/${path}`;
  const ogImageUrl = `${DOMAIN}/images/og/og-image-${path === '' ? 'home' : path}.jpg?v3`;

  return (
    <>
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@EdgewareDAO" />
      <meta property="twitter:domain" content={SITE_NAME} />
      <meta property="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </>
  );
};
