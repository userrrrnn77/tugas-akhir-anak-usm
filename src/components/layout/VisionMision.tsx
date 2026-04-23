import React from 'react';
import Container from "./Container";

const VisionMision: React.FC = () => {
  const missions = [
    "Menerapkan pengelolaan KSPPS Berkah Mitra Hasanah secara profesional dan amanah sesuai prinsip syariah.",
    "Menjadi lembaga intermediasi keuangan dan perekonomian umat dengan menciptakan sarana penghimpunan dan penyaluran dana sesuai prinsip syariah.",
    "Menciptakan SDM yang handal dan berkompeten",
    "Meningkatkan produktifitas anggota, pengurus dan pengelola dengan kekuatan sumber daya insani dan management organisasi",
    "Meningkatkan kepercayaan masyarakat terhadap KSPPS Berkah Mitra Hasanah",
    "Menumbuh kembangkan sikap dan perilaku yang peduli terhadap umat dengan konsep baitul maal yang edukatif, produktif dan bernilai ibadah.",
    "Meningkatkan penghimpunan dana dari anggota",
    "Memberdayakan usaha mikro, kecil dan menengah sebagai wujud partisipasi dalam membangun ekonomi umat.",
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-slate-900 font-sans">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LEFT: VISI (Sticky Mode biar Elit) --- */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <span className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
                Visi Institusi
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 uppercase italic tracking-tighter leading-none">
                Menjadi <span className="text-emerald-600">Pilar</span> Ekonomi Syariah
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium italic border-l-4 border-emerald-500 pl-6">
                "Menjadikan KSPPS Berkah Mitra Hasanah sebagai koperasi simpan pinjam dan pembiayaan syariah yang sehat, profesional, terpercaya dan bermanfaat bagi umat sesuai dengan prinsip syariah."
              </p>
            </div>
          </div>

          {/* --- RIGHT: MISI (List Style Clean) --- */}
          <div className="lg:col-span-7">
            <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">
              Misi Strategis
            </span>
            <div className="space-y-10">
              {missions.map((misi, index) => (
                <div key={index} className="group flex gap-6">
                  <span className="text-2xl font-black text-slate-200 dark:text-slate-800 group-hover:text-emerald-500 transition-colors duration-300">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-snug group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default VisionMision;