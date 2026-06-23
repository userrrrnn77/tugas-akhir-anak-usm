import React, { useEffect } from "react";
import { Link } from "react-router-dom"; 
import Card from "../ui/Card";
import useLayananStore from "../../store/useLayananStore";
import { Briefcase, Coins, Gem, Moon, ShieldCheck } from "lucide-react";

const ProductSection: React.FC = () => {
  const { products, fetchAllProducts, isLoading } = useLayananStore();

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const simpanan = products
    .filter((p) => p.category === "simpanan")
    .slice(0, 2);
  const pembiayaan = products
    .filter((p) => p.category === "pembiayaan")
    .slice(0, 2);

  const mergeProduct = [...simpanan, ...pembiayaan];

  return (
    <section className="py-20 bg-white dark:bg-slate-950" id="produk">
      <div className="text-center mb-16 px-4">
        <span className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
          Layanan Koperasi Elit
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">
          Layanan <span className="text-emerald-600">Finansial Unggulan</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          Wujudkan rencana masa depan Anda melalui instrumen keuangan syariah
          yang aman, transparan, dan penuh keberkahan. Mulai dari pengelolaan
          aset hingga pembiayaan produktif.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {isLoading
          ? Array.from({ length: 4 }).map((_, idx) => (
              <Card
                key={`skeleton-${idx}`}
                className="animate-pulse border-b-4 border-b-slate-100 dark:border-b-slate-800 p-6 flex flex-col">
                <div className="w-14 h-14 bg-slate-200 dark:bg-slate-800 rounded-2xl mb-6 shadow-sm" />
                <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-md w-3/4 mb-4" />
                <div className="h-4 bg-slate-100 dark:bg-slate-900 rounded-md w-full mb-2" />
                <div className="h-4 bg-slate-100 dark:bg-slate-900 rounded-md w-5/6 mb-6" />
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-md w-1/3 mt-auto" />
              </Card>
            ))
          : mergeProduct.map((item) => (
              <Card
                key={item.id}
                className="group hover:-translate-y-2 transition-all duration-300 border-b-4 border-b-slate-100 dark:border-b-slate-800 hover:border-b-emerald-500 shadow-sm hover:shadow-xl flex flex-col p-6">
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl flex items-center justify-center p-3 mb-6 shadow-md transform group-hover:rotate-6 transition-transform text-emerald-600 dark:text-emerald-400">
                  {(() => {
                    const iconId = item.id?.toLowerCase() || "";

                    if (iconId.includes("swk") || iconId.includes("wajib")) {
                      return <Briefcase className="w-7 h-7" />;
                    } else if (
                      iconId.includes("syariah") ||
                      iconId.includes("simpan")
                    ) {
                      return <ShieldCheck className="w-7 h-7" />;
                    } else if (
                      iconId.includes("emas") ||
                      iconId.includes("gem")
                    ) {
                      return <Gem className="w-7 h-7" />;
                    } else if (
                      iconId.includes("haji") ||
                      iconId.includes("umroh") ||
                      iconId.includes("moon")
                    ) {
                      return <Moon className="w-7 h-7" />;
                    } else {
                      return <Coins className="w-7 h-7" />;
                    }
                  })()}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tighter uppercase">
                  {item.title && item.title.length > 9
                    ? `${item.title.slice(0, 9)}...`
                    : item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {item.desc && item.desc.length > 75
                    ? `${item.desc.slice(0, 75)}...`
                    : item.desc}
                </p>

                <Link
                  to={`/produk/${item.id}`}
                  className="mt-auto inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest hover:text-emerald-700 transition-colors">
                  Lihat Selengkapnya
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </Card>
            ))}
      </div>
    </section>
  );
};

export default ProductSection;
