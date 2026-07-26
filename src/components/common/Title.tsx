// src/components/common/Title.tsx
import * as pkg from "react-helmet-async";
import React from "react";

const { Helmet } = pkg;

const SITE_URL = "https://mitra-hasanah.com";
const DEFAULT_DESCRIPTION =
  "Membangun ekonomi ummat yang berkelanjutan, adil, dan transparan. Cek layanan simpanan dan pembiayaan kami sekarang.";

interface TitleProps {
  children: React.ReactNode;
  /** Deskripsi khusus halaman ini (opsional, fallback ke deskripsi default) */
  description?: string;
  /** Path relatif halaman ini, contoh: "/produk" atau "/produk/123" (opsional, fallback ke "/") */
  path?: string;
}

const Title = ({ children, description, path }: TitleProps) => {
  const title = String(children);
  const desc = description ?? DEFAULT_DESCRIPTION;
  const url = `${SITE_URL}${path ?? "/"}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:url" content={url} />
    </Helmet>
  );
};

export default Title;
