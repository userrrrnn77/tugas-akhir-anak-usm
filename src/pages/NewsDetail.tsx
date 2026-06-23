// src/pages/NewsDetail.tsx
import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import Title from "../components/common/Title";
import useLayananStore, { type INews } from "../store/useLayananStore";
import { Calendar, ArrowLeft, Newspaper, Eye } from "lucide-react";

const NewsDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const {
    activeNewsDetail,
    newsList,
    fetchNewsDetailBySlug,
    fetchAllNews,
    isLoading,
  } = useLayananStore();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalImgSrc, setModalImgSrc] = useState<string>("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slug) {
      fetchNewsDetailBySlug(slug);
    }

    if (newsList.length === 0) {
      fetchAllNews();
    }
  }, [slug, fetchNewsDetailBySlug, fetchAllNews, newsList.length]);

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      setModalOpen(false);
      setModalImgSrc("");
    }
  };

  const sidebarArticles = newsList
    .filter((item) => item.slug !== slug)
    .slice(0, 4);

  if (isLoading || !activeNewsDetail) {
    return (
      <div className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen animate-pulse">
        <Container>
          <div className="h-6 w-24 bg-slate-200 dark:bg-slate-800 rounded-lg mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="h-12 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
              <div className="h-6 w-1/4 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
              <div className="w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-3xl"></div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded"></div>
              </div>
            </div>
            <div className="hidden lg:block space-y-6">
              <div className="h-8 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
              <div className="h-24 w-full bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen relative transition-colors duration-300 selection:bg-emerald-500 selection:text-white">
      <Title>{activeNewsDetail.title} | Mitra Hasanah</Title>

      <Container>
        {/* BUTTON BACK TO MEDIA CENTER */}
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-500 mb-8 hover:text-emerald-500 transition-colors cursor-pointer">
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Berita</span>
        </button>

        {/* MAIN TWO-COLUMN GRID SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* KOLOM KIRI: KONTEN UTAMA JURNAL (2/3 LEBAR) */}
          <main className="lg:col-span-2 space-y-8">
            {/* Header Artikel */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-md text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                  {activeNewsDetail.category}
                </span>
                <div className="h-px w-8 bg-slate-200 dark:bg-slate-800"></div>
                <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs font-bold">
                  <Calendar className="w-4 h-4 text-secondary-600 dark:text-emerald-600" />
                  <span>
                    {new Date(activeNewsDetail.createdAt).toLocaleDateString(
                      "id-ID",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      },
                    )}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight italic leading-tight">
                {activeNewsDetail.title}
              </h1>

              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium italic border-l-4 border-secondary-500 pl-4 leading-relaxed">
                "{activeNewsDetail.excerpt}"
              </p>
            </div>

            {/* INTERACTIVE PHOTO COLLAGE GRID IN DETAIL PAGE */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-900 p-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {activeNewsDetail.images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setModalImgSrc(img);
                      setModalOpen(true);
                    }}
                    className={`relative cursor-pointer overflow-hidden rounded-2xl group/zoom aspect-video ${
                      activeNewsDetail.images.length === 1
                        ? "md:col-span-2"
                        : ""
                    }`}>
                    <img
                      src={img}
                      alt={`Dokumentasi ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all flex items-center justify-center group/icon">
                      <div className="opacity-0 group-hover/zoom:opacity-100 bg-white/20 backdrop-blur-md p-3 rounded-full transition-all scale-70 group-hover/zoom:scale-100 border border-white/30">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TEXT CONTENT BERITA UTUH */}
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-medium space-y-6 whitespace-pre-line pl-1">
              {activeNewsDetail.content}
            </div>
          </main>

          {/* KOLOM KANAN: SIDEBAR ARTIKEL TERBARU (1/3 LEBAR) */}
          <aside className="space-y-6 lg:sticky lg:top-24 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
              <Newspaper className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
              <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight italic">
                Artikel Terbaru
              </h2>
            </div>

            {sidebarArticles.length === 0 ? (
              <p className="text-sm text-slate-400 italic">
                Tidak ada artikel lain saat ini.
              </p>
            ) : (
              <div className="space-y-5">
                {sidebarArticles.map((article: INews) => (
                  <div
                    key={article._id}
                    onClick={() => navigate(`/news/${article.slug}`)}
                    className="group cursor-pointer flex gap-4 items-center p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-950 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                    {/* Thumbnail cilik sidebar */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800">
                      <img
                        src={article.images[0]}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Judul & Detail Tanggal */}
                    <div className="space-y-1 overflow-hidden">
                      <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-widest block">
                        {article.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight italic line-clamp-2 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-semibold">
                        {new Date(article.createdAt).toLocaleDateString(
                          "id-ID",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </Container>

      {/* --- THE MASTER MODAL VIEW CONTROLLERS (IMAGE VIEWER FULLSCREEN) --- */}
      <div
        ref={modalRef}
        onClick={closeModal}
        className={`fixed inset-0 z-9999 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center transition-all duration-500 ${
          modalOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
        <div className="w-full max-w-5xl p-4 relative">
          <button
            onClick={() => {
              setModalOpen(false);
              setModalImgSrc("");
            }}
            className="absolute -top-12 right-4 text-white/50 hover:text-white flex items-center gap-2 font-black uppercase tracking-[0.3em] text-xs transition-all cursor-pointer">
            [ Tutup Gambar ]
          </button>
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black flex items-center justify-center">
            {modalOpen && (
              <img
                src={modalImgSrc}
                alt="Fullscreen Preview"
                className="w-full max-h-[80vh] object-contain animate-in zoom-in-95 duration-300"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
