import { Helmet } from "react-helmet-async";

function SEO({ title, description, canonical }) {
  const siteUrl = "https://ayyapa-lens-react-hkte.vercel.app";

  const fullUrl = canonical
    ? `${siteUrl}${canonical}`
    : siteUrl;

  return (
    <Helmet>
      {/* Page Title */}
      <title>{title}</title>

      {/* Description */}
      <meta
        name="description"
        content={description}
      />

      {/* Search Engine Instructions */}
      <meta
        name="robots"
        content="index, follow"
      />

      {/* Canonical URL */}
      <link
        rel="canonical"
        href={fullUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={fullUrl}
      />

      <meta
        property="og:site_name"
        content="Ayyappa Lens"
      />
    </Helmet>
  );
}

export default SEO;