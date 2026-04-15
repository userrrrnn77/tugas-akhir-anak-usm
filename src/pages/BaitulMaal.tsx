import React, { useState, useRef } from "react";
import Container from "../components/layout/Container";
import { BAITUL_MAAL_PROGRAMS } from "../constants/baitulMaal";
import Title from "../components/common/Title";

const BaitulMaal: React.FC = () => {
  // --- STATE & REF (THE WIZARD MODAL LOGIC) ---
  const [playState, setPlayState] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");
  const [modalType, setModalType] = useState<"video" | "image">("video");
  const modalRef = useRef<HTMLDivElement>(null);

  // --- HANDLER: TUTUP MODAL ---
  const closeModal = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      setPlayState(false);
      setModalContent("");
    }
  };

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen relative selection:bg-emerald-500 selection:text-white">
      <Title>Baitul Maal | Mitra Hasanah</Title>
      <Container>
        {/* HEADER SECTION */}

        <div className="max-w-4xl mb-24 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-emerald-600"></div>
            <span className="text-emerald-600 font-black tracking-[0.3em] uppercase text-xs">
              Social & Spiritual Responsibility
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.9] uppercase italic">
            Baitul Maal <br />
            <span className="text-secondary-500 dark:text-emerald-600 underline decoration-emerald-500/30">
              Hasanah.
            </span>
          </h1>
          {/* HEADER SECTION WRAPPER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            {/* DESKRIPSI UTAMA */}
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-medium leading-relaxed border-l-4 border-emerald-500 pl-6">
              Mengelola amanah Ziswaf dengan transparansi radikal dan penyaluran
              yang presisi, menghadirkan senyum di setiap sudut kota.
            </p>
          </div>
        </div>
        {/* PROGRAMS LIST */}
        <div className="space-y-40">
          {BAITUL_MAAL_PROGRAMS.map((program, index) => (
            <div
              key={program.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-16 lg:gap-24 items-center`}>
              {/* SISI VISUAL (ATAS BAWAH MODE) */}
              <div className="w-full lg:w-3/5 relative group">
                <div className="absolute -inset-6 bg-emerald-500/5 rounded-[4rem] -rotate-2 group-hover:rotate-1 transition-transform duration-1000"></div>

                <div className="relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] border-8 border-white dark:border-slate-800 bg-slate-200 group/card">
                  {/* WRAPPER MULTI-CONTENT (SEKARANG PAKE FLEX COL, BRE!) */}
                  <div className="flex flex-col gap-2 bg-slate-100 dark:bg-slate-800 p-2">
                    {/* 1. GAMBAR BERDIRI SENDIRI (ATAS-BAWAH) */}
                    <div className="flex flex-col gap-2">
                      {program.images.map((img, i) => (
                        <div
                          key={i}
                          className="relative cursor-pointer overflow-hidden aspect-video group/zoom rounded-2xl"
                          onClick={() => {
                            setModalType("image");
                            setModalContent(img);
                            setPlayState(true);
                          }}>
                          <img
                            src={img}
                            alt={program.title}
                            className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all flex items-center justify-center">
                            <div className="opacity-0 group-hover/zoom:opacity-100 bg-white/20 backdrop-blur-md p-4 rounded-full transition-all scale-50 group-hover/zoom:scale-100 border border-white/30">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 2. VIDEO DI BAWAH GAMBAR */}
                    {program.videoUrl && program.videoUrl.length > 0 && (
                      <div
                        className="relative cursor-pointer aspect-video overflow-hidden bg-black rounded-2xl"
                        onClick={() => {
                          setModalType("video");
                          setModalContent(program.videoUrl![0]);
                          setPlayState(true);
                        }}>
                        <img
                          src={program.images[0]}
                          alt="Video Thumbnail"
                          className="w-full h-full object-cover opacity-60 transition-all duration-700 group-hover/card:scale-110"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/card:bg-black/40 transition-all duration-500">
                          <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-2xl scale-100 group-hover/card:scale-110 transition-all duration-500 z-10">
                            <svg
                              className="w-8 h-8 fill-current ml-1"
                              viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Badge Floating */}
                  <div className="absolute top-8 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-2 rounded-full shadow-xl z-20">
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                      {program.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* SISI KONTEN */}
              <div className="w-full lg:w-2/5">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-emerald-500 font-black text-4xl italic opacity-30">
                    0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter uppercase italic leading-none">
                  {program.title}
                </h2>
                {program.tagline && (
                  <p className="text-emerald-600 font-bold mb-6 italic text-lg leading-snug">
                    "{program.tagline}"
                  </p>
                )}
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                  {program.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-4">
                  {program.features?.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-emerald-500/50 transition-all group/feat">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover/feat:bg-emerald-600 group-hover/feat:text-white transition-all">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="font-bold text-slate-700 dark:text-slate-300 italic tracking-tight uppercase text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-56 p-12 md:p-24 bg-slate-900 rounded-[4rem] text-center relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full -mr-32 -mt-32 blur-[120px]"></div>
          <div className="relative z-10">

          <div className="mb-10 flex flex-col items-center">
              <span className="text-secondary-500 dark:text-emerald-500 font-black text-sm md:text-lg uppercase tracking-[0.4em] italic mb-4">
                "Melahirkan Amal Sholeh disetiap peristiwa"
              </span>
              <div className="h-px w-24 bg-emerald-500/30"></div>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.8]">
              Siap Menjadi <br />{" "}
              <span className="text-emerald-500 text-6xl md:text-9xl tracking-tighter">
                BAGIAN BAIK?
              </span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
              "Setiap rupiah yang Anda titipkan adalah nafas baru bagi mereka
              yang membutuhkan. Transparan, tepat sasaran, dan mengalirkan
              keberkahan yang tak terputus."
            </p>
            <button className="bg-emerald-600 text-white px-16 py-6 rounded-2xl font-black text-xl hover:bg-emerald-500 hover:scale-105 transition-all shadow-[0_20px_50px_rgba(16,185,129,0.3)] uppercase italic tracking-tighter group">
              <span className="flex items-center gap-3">
                Tunaikan Sekarang
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* --- THE MASTER MODAL --- */}
      <div
        className={`fixed inset-0 z-9999 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center transition-all duration-700 ${
          playState ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        ref={modalRef}
        onClick={closeModal}>
        <div className="w-full max-w-6xl p-6 relative group/modal">
          <button
            onClick={() => {
              setPlayState(false);
              setModalContent("");
            }}
            className="absolute -top-16 right-6 text-white/50 hover:text-white flex items-center gap-2 font-black uppercase tracking-[0.3em] text-xs transition-all">
            [ Close Viewer ]
          </button>
          <div className="w-full h-full rounded-4xl overflow-hidden shadow-[0_0_100px_rgba(16,185,129,0.1)] border border-white/10 bg-black flex items-center justify-center">
            {playState &&
              (modalType === "video" ? (
                <video
                  src={modalContent}
                  autoPlay
                  controls
                  className="w-full max-h-[85vh] object-contain"
                />
              ) : (
                <img
                  src={modalContent}
                  alt="Full Preview"
                  className="w-full max-h-[85vh] object-contain animate-in zoom-in duration-500"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaitulMaal;
