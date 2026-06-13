// src/pages/News.tsx
import React, { useEffect, useState } from "react";
import Container from "../components/layout/Container";
import Title from "../components/common/Title";
import useLayananStore, { type INews } from "../store/useLayananStore";
import { ArrowRight, Calendar, Search, Newspaper } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface ImageCollageProps {
  images: string[];
  altText: string;
}

const ImageCollage: React.FC<ImageCollageProps> = ({ images, altText }) => {
  const total = images.length;

  if (total === 0) {
    return (
      <div className="w-full aspect-video bg-slate-200 dark:bg-slate-800 flex items-center justify-center rounded-2xl">
        <Newspaper className="w-12 h-12 text-slate-400" />
      </div>
    );
  }

  if (total === 1) {
    return (
      <div className="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={images[0]}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  if (total === 2) {
    return (
      <div className="grid grid-cols-2 gap-1.5 w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={images[0]}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <img
          src={images[1]}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  if (total === 3) {
    return (
      <div className="grid grid-cols-3 gap-1.5 w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
        <div className="col-span-2 h-full">
          <img
            src={images[0]}
            alt={altText}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="grid grid-rows-2 gap-1.5 h-full">
          <img
            src={images[1]}
            alt={altText}
            className="w-full h-full object-cover"
          />
          <img
            src={images[2]}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-1.5 w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
      <div className="w-full h-full">
        <img
          src={images[0]}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-1.5 h-full">
        <img
          src={images[1]}
          alt={altText}
          className="w-full h-full object-cover"
        />
        <img
          src={images[2]}
          alt={altText}
          className="w-full h-full object-cover"
        />
        <div className="relative w-full h-full">
          <img
            src={images[3]}
            alt={altText}
            className="w-full h-full object-cover brightness-75"
          />
          {total > 4 && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-black text-sm backdrop-blur-xs">
              +{total - 3} FOTO
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const News: React.FC = () => {
  const { newsList, fetchAllNews, isLoading } = useLayananStore();
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const navigate = useNavigate()

  const categories = ["Semua", "Berita Koperasi", "Artikel", "Pengumuman"];

  useEffect(() => {
    fetchAllNews();
  }, [fetchAllNews]);

  const handleReadMore = (slug: string) => {
    toast.info(`Membuka artikel: ${slug}`);
    navigate(`/news/${slug}`) //nyusrug aja sekalian taik, 
  };

  // Filter lokal di sisi client untuk keindahan interaksi UI
  const filteredNews = newsList.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen relative transition-colors duration-300">
      <Title>Artikel & Berita | Mitra Hasanah</Title>

      <Container>
        {/* HEADER SECTION (MENGIKUTI TEMA UTAMA MITRA HASANAH) */}
        <div className="max-w-4xl mb-16 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-emerald-600"></div>
            <span className="text-emerald-600 font-black tracking-[0.3em] uppercase text-xs">
              Information & Media Center
            </span>
          </div>
          <h1 className="flex flex-col tracking-tighter leading-none uppercase italic">
            <span className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white">
              Kabar Berita
            </span>
            <span className="text-xl md:text-2xl font-bold text-secondary-500 dark:text-emerald-600 tracking-[0.2em] md:tracking-[0.5em] mt-2 ml-1">
              Edukasi & Informasi
            </span>
            <div className="h-2 w-32 bg-emerald-500/30 mt-4 rounded-full mb-8"></div>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-medium leading-relaxed border-l-4 border-emerald-500 pl-6">
            Menyajikan kumpulan laporan kegiatan resmi koperasi, edukasi
            finansial syariah, dan pengumuman penting bagi para nasabah.
          </p>
        </div>

        {/* CONTROLS SECTION: SEARCH & FILTER BAR */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          {/* Search Input */}
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            <input
              type="text"
              placeholder="Cari berita atau artikel..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 text-slate-800 dark:text-slate-100 transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? "bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-emerald-500/50"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN ARTICLES GRID SECTION */}
        {isLoading ? (
          /* SKELETON LOADING GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-100 dark:border-slate-800 space-y-4 animate-pulse">
                <div className="w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
                <div className="h-4 w-1/3 bg-slate-200 dark:bg-slate-800 rounded"></div>
                <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded"></div>
                <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded"></div>
              </div>
            ))}
          </div>
        ) : filteredNews.length === 0 ? (
          /* EMPTY STATE */
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xs">
            <Newspaper className="w-16 h-16 mx-auto text-slate-300 dark:text-slate-700 mb-4" />
            <p className="text-lg font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight">
              Data Berita Masih Kosong
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Tidak ada berita atau artikel yang cocok dengan filter Anda.
            </p>
          </div>
        ) : (
          /* ACTUAL NEWS LIST RENDERING */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item: INews) => (
              <article
                key={item._id}
                className="group flex flex-col justify-between p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300">
                <div className="space-y-4">
                  {/* Photo Collage Section Wrapper */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <ImageCollage images={item.images} altText={item.title} />

                    {/* Floating Category Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md">
                      <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Metadata: Date Block */}
                  <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-semibold pl-1">
                    <Calendar className="w-4 h-4 text-secondary-600 dark:text-emerald-600" />
                    <span>
                      {new Date(item.createdAt).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight italic line-clamp-2 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors pl-1">
                    {item.title}
                  </h3>

                  {/* Short Summary (Excerpt) */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 font-medium leading-relaxed pl-1">
                    {item.excerpt}
                  </p>
                </div>

                {/* Card CTA Footer Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex justify-end">
                  <button
                    onClick={() => handleReadMore(item.slug)}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-secondary-600 dark:text-emerald-500" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default News;
