import React from "react";
import { Link } from "react-router-dom"; // Import Link buat navigasi sat-set
import { PRODUCTS } from "../../constants/products";
import Card from "../ui/Card";

const ProductSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950" id="produk">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">
          Layanan <span className="text-emerald-600">Finansial Unggulan</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Wujudkan rencana masa depan Anda melalui instrumen keuangan syariah
          yang aman, transparan, dan penuh keberkahan. Mulai dari pengelolaan
          aset hingga pembiayaan produktif.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {PRODUCTS.map((item) => (
          <Card
            key={item.id}
            className="group hover:-translate-y-2 transition-all duration-300 border-b-4 border-b-slate-100 dark:border-b-slate-800 hover:border-b-emerald-500 shadow-sm hover:shadow-xl">
            <div
              className={`w-14 h-14 ${item.color} text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-md transform group-hover:rotate-6 transition-transform`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tighter">
              {item.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {item.desc}
            </p>

            {/* GANTI BUTTON JADI LINK, BRE! */}
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
