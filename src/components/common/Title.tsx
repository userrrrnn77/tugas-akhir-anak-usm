// src/components/common/Title.tsx
import * as pkg from "react-helmet-async";
import React from "react";

const { Helmet } = pkg;

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <Helmet>
      <title>{String(children)}</title>
      <meta
        name="description"
        content="Membangun ekonomi ummat yang berkelanjutan, adil, dan transparan. Cek layanan simpanan dan pembiayaan kami sekarang."
      />
    </Helmet>
  );
};

export default Title;
