import React, { useEffect, useState } from "react"; // 1. Tambah useState, bgsd!
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import { X } from "lucide-react"; // 2. Buat tombol close modal
import Title from "../components/common/Title";
import { Link } from "react-router-dom";
import useLayananStore from "../store/useLayananStore";

const Products: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null); // State Modal

  const { products, fetchAllProducts, isLoading } = useLayananStore();

  // 3. Tarik data pas komponen di-mount
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  // 4. Filter data dari Store (Gak perlu useState tambahan buat filter)
  const simpanan = products.filter((p) => p.category === "simpanan");
  const pembiayaan = products.filter((p) => p.category === "pembiayaan");

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <Title>Produk | Mitra Hasanah</Title>
      <Container>
        {/* Header Section - Tetap sesuai kode lu */}
        <div className="mb-20 border-l-8 border-emerald-600 pl-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-tight">
            Instrumen Finansial <br />
            <span className="text-emerald-600">Berbasis Syariah.</span>
          </h1>
          <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">
            Dari Genuk untuk kesejahteraan ummat. Kami menyediakan berbagai opsi
            untuk menjaga amanah harta dan kebutuhan masa depan Anda.
          </p>
        </div>

        {/* Simpanan Section */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase italic">
              Produk Simpanan
            </h2>
            <div className="h-px grow bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {isLoading
              ? Array(simpanan.length || 5).fill(0).map((_, i) => (
                  <div
                    key={i}
                    className="group overflow-hidden bg-white dark:bg-slate-900 rounded-3xl shadow-xl flex flex-col animate-pulse">
                    {/* Skeleton Image Area */}
                    <div className="h-40 bg-slate-200 dark:bg-slate-800 relative">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                      {/* Skeleton Icon Box */}
                      <div className="absolute bottom-3 left-3 w-8 h-8 bg-slate-300 dark:bg-slate-700 rounded-lg"></div>
                    </div>

                    {/* Skeleton Content Area */}
                    <div className="p-5 grow space-y-3">
                      <div className="h-5 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-md italic"></div>
                      <div className="h-3 w-1/2 bg-emerald-100 dark:bg-emerald-900/30 rounded"></div>
                      <div className="space-y-2 pt-2">
                        <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                        <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                        <div className="h-3 w-2/3 bg-slate-100 dark:bg-slate-800 rounded"></div>
                      </div>
                    </div>

                    {/* Skeleton Button Area */}
                    <div className="p-5 pt-0">
                      <div className="w-full h-10 bg-slate-100 dark:bg-slate-800 rounded-xl"></div>
                    </div>
                  </div>
                ))
              : simpanan.reverse().map((item) => {
                  return (
                    <Card
                      key={item.id}
                      className="group overflow-hidden p-0 border-none shadow-xl bg-white dark:bg-slate-900 flex flex-col cursor-zoom-in"
                      onClick={() => setSelectedImg(item.image)} // 3. Click buat zoom
                    >
                      <div className="h-40 overflow-hidden relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-5 grow">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-tight italic">
                          {item.title}
                        </h3>
                        <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-[0.15em] mb-3">
                          {item.fullTitle}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                      <div className="p-5 pt-0 mt-auto">
                        <Link
                          to={`/produk/${item.id}`}
                          className="w-full inline-flex items-center justify-center gap-2 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-300 group/btn">
                          LIHAT DETAIL
                          <span className="group-hover/btn:translate-x-1 transition-transform">
                            →
                          </span>
                        </Link>
                      </div>
                    </Card>
                  );
                })}
          </div>
        </section>

        {/* Pembiayaan Section */}
        <section>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase italic">
              Layanan Pembiayaan
            </h2>
            <div className="h-px grow bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {isLoading
              ? Array(simpanan.length || 5).fill(0).map((_, i) => (
                  <div
                    key={i}
                    className="group overflow-hidden bg-white dark:bg-slate-900 rounded-3xl shadow-xl flex flex-col animate-pulse">
                    {/* Skeleton Image Area */}
                    <div className="h-40 bg-slate-200 dark:bg-slate-800 relative">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                      {/* Skeleton Icon Box */}
                      <div className="absolute bottom-3 left-3 w-8 h-8 bg-slate-300 dark:bg-slate-700 rounded-lg"></div>
                    </div>

                    {/* Skeleton Content Area */}
                    <div className="p-5 grow space-y-3">
                      <div className="h-5 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-md italic"></div>
                      <div className="h-3 w-1/2 bg-emerald-100 dark:bg-emerald-900/30 rounded"></div>
                      <div className="space-y-2 pt-2">
                        <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                        <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                        <div className="h-3 w-2/3 bg-slate-100 dark:bg-slate-800 rounded"></div>
                      </div>
                    </div>

                    {/* Skeleton Button Area */}
                    <div className="p-5 pt-0">
                      <div className="w-full h-10 bg-slate-100 dark:bg-slate-800 rounded-xl"></div>
                    </div>
                  </div>
                ))
              : pembiayaan.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="group bg-white dark:bg-slate-900 rounded-4xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 flex flex-col">
                      <div
                        className="h-48 overflow-hidden relative cursor-zoom-in"
                        onClick={() => setSelectedImg(item.image)} // 4. Click buat zoom
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-8 flex flex-col grow">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-4">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8 text-sm grow">
                          {item.desc}
                        </p>
                        <div className="mt-auto space-y-3">
                          {/* Primary Action: Ke Halaman Detail */}
                          <Link
                            to={`/produk/${item.id}`}
                            className="w-full inline-flex items-center justify-center gap-2 py-4 bg-emerald-600 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-emerald-700 transition-all duration-300 group/btn shadow-lg shadow-emerald-600/20">
                            LIHAT DETAIL PRODUK
                            <span className="group-hover/btn:translate-x-1 transition-transform">
                              →
                            </span>
                          </Link>

                          {/* Secondary Action: Langsung Ajukan */}
                          <button className="w-full py-3 text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.2em] border border-emerald-600/20 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl transition-all">
                            AJUKAN SEKARANG
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </section>

        {/* 5. MODAL COMPONENT - RAHASIA DAPUR, BRE! 🚬 */}
        {selectedImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedImg(null)}>
            <button
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
              onClick={() => setSelectedImg(null)}>
              <X size={32} />
            </button>
            <div
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl animate-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()} // Biar kaga close pas klik gambarnya, taik!
            >
              <img
                src={selectedImg}
                alt="Product Preview"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Products;
