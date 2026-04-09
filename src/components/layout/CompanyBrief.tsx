import React from "react";
import Container from "./Container";

const CompanyBrief: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 mb-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
            Sekilas Institusi
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 uppercase italic tracking-tighter">
            Dedikasi Syariah Sejak{" "}
            <span className="text-emerald-600">2003</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            <span className="text-slate-900 dark:text-white font-bold">
              KSPPS Berkah Mitra Hasanah
            </span>{" "}
            berpusat di Genuk, Semarang. Kami berawal dari KSU Mitra Hasanah
            yang didirikan pada{" "}
            <span className="underline decoration-emerald-500 decoration-2 underline-offset-4">
              28 Juli 2003
            </span>
            . Pada 23 Desember 2015, kami bertransformasi menjadi KSPPS untuk
            menyesuaikan dengan regulasi undang-undang perkoperasian syariah
            guna menghadirkan layanan finansial yang lebih amanah.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CompanyBrief;
