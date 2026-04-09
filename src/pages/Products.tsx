import React, { useState } from "react"; // 1. Tambah useState, bgsd!
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import { PRODUCTS_DATA } from "../constants/products";
import type { LucideProps } from "lucide-react";
import { X } from "lucide-react"; // 2. Buat tombol close modal
import Title from "../components/common/Title";
import { Link } from "react-router-dom";

const Products: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null); // State Modal

  const simpanan = PRODUCTS_DATA.filter((p) => p.category === "simpanan");
  const pembiayaan = PRODUCTS_DATA.filter((p) => p.category === "pembiayaan");

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <Title>Mitra Hasanah | Produk</Title>
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
            {simpanan.map((item) => (
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
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="p-1.5 bg-emerald-600 rounded-lg text-white shadow-lg">
                      {React.cloneElement(
                        item.icon as React.ReactElement<LucideProps>,
                        { size: 14 },
                      )}
                    </div>
                  </div>
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
            ))}
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
            {pembiayaan.map((item) => (
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
                  <div className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-slate-900/90 rounded-2xl text-emerald-600 backdrop-blur-sm">
                    {React.cloneElement(
                      item.icon as React.ReactElement<LucideProps>,
                      { size: 24 },
                    )}
                  </div>
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
            ))}
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
