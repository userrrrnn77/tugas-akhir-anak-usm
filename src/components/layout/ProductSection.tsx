import React from "react";
import { PRODUCTS } from "../../constants/products";
import Card from "../ui/Card";

const ProductSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950" id="produk">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 italic uppercase">
          Layanan Unggulan Kami 🚀
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto italic">
          Pilih solusi finansial syariah yang paling pas buat kebutuhan lu, Bre!
          Dari simpanan harian sampe modal usaha, semua ada!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {PRODUCTS.map((item) => (
          <Card
            key={item.id}
            className="hover:-translate-y-2 transition-transform duration-300 border-b-4 border-b-slate-200 hover:border-b-emerald-500">
            <div
              className={`w-14 h-14 ${item.color} text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tighter">
              {item.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {item.desc}
            </p>
            <button className="mt-6 text-emerald-600 font-bold text-xs uppercase tracking-widest hover:text-emerald-700 flex items-center gap-2 group">
              Selengkapnya
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
