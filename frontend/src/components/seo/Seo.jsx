import Head from "next/head";

const Seo = ({
  title = "Emulador Bomba de Infusión Plum A+",
  description = "Simulador web de bomba de infusión Hospira Plum A+ para fines educativos.",
  url = "http://localhost:3000",
  image = "/og-image.png",
  author = "Victor Hugo Peinado ",
  keywords = "bomba infusion, emulador, hospira, Plum A+",
  children,
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: title,
    description: description,
    operatingSystem: "Web",
    applicationCategory: "EducationalApplication",
    author: {
      "@type": "Person",
      name: author,
    },
    url: url,
    image: image,
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta httpEquiv="content-language" content="es" />


      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Emulador Plum A+" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {children}
    </Head>
  );
};

export default Seo;
