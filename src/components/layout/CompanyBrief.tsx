import React from "react";
import Container from "./Container";

const CompanyBrief: React.FC = () => {
  return (
    <>
      <section className="py-16 bg-gray-100 dark:bg-slate-900">
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
      <div className="py-16 bg-gray-100 dark:bg-slate-900">
        <Container>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-0.5 w-8 bg-emerald-500"></div>
              <span className="text-emerald-500 font-black text-xs tracking-[0.5em]">
                Our Identity
              </span>
              <div className="h-0.5 w-8 bg-emerald-500"></div>
            </div>

            <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white italic tracking-tighter leading-tight max-w-4xl">
              Kspps Berkah Mitra Hasanah
              <br className="hidden md:block" />
              <span className="text-emerald-600">
                Mitra usaha umat <br className="hidden md:block" />
              </span>
              Mitra pemberdayaan umat <br className="hidden md:block" />
              <span className="text-emerald-600">Cepat, Mudah, Amanah,</span> &
              Fleksibel
            </h2>

            <div className="mt-6 h-1 w-20 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CompanyBrief;
