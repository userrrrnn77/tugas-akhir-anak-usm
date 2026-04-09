import React from "react";
import { useParams, Link } from "react-router-dom";
import { detailProducts } from "../constants/productDetail";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import { ChevronLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import Title from "../components/common/Title";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = detailProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <h1 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic">
          Produk Ga Ketemu, Bre! ☕
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24">
        <Title>
            {product.title}
        </Title>
      <Container>
        {/* Navigasi Balik */}
        <Link
          to="/produk"
          className="inline-flex items-center text-emerald-600 font-bold mb-12 hover:gap-2 transition-all group">
          <ChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          KEMBALI KE LAYANAN
        </Link>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Sisi Kiri: Info Utama */}
          <div className="lg:col-span-7">
            <span className="text-emerald-600 font-black tracking-widest uppercase text-xs mb-4 block">
              SYARIAH FINANCIAL PRODUCT
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-none italic uppercase">
              {product.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-12 max-w-2xl">
              {product.description}
            </p>

            {/* Grid Sections */}
            <div className="grid gap-12">
              {product.sections.map((section, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px grow bg-slate-200 dark:bg-slate-800"></div>
                    <h2 className="text-lg font-black text-slate-400 uppercase tracking-widest shrink-0 italic">
                      {section.subtitle}
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500 transition-colors">
                        <CheckCircle2
                          size={18}
                          className="text-emerald-600 mt-1 shrink-0"
                        />
                        <p className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sisi Kanan: CTA Card Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="p-8 md:p-12 bg-emerald-600 rounded-[2.5rem] shadow-2xl shadow-emerald-600/20 text-white relative overflow-hidden">
              {/* Aksen Background */}
              <ShieldCheck className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 rotate-12" />

              <h3 className="text-3xl font-black mb-6 uppercase italic leading-tight">
                Mulai Berkah <br />
                Hari Ini.
              </h3>
              <p className="text-emerald-50 mb-10 font-medium opacity-90 leading-relaxed">
                Daftar sekarang sebagai anggota dan nikmati layanan keuangan
                syariah yang adil, transparan, dan profesional.
              </p>

              <Link to="/#register">
                <Button className="w-full bg-white text-emerald-600 hover:bg-emerald-50 font-black py-6 rounded-2xl text-lg uppercase shadow-xl">
                  DAFTAR SEKARANG
                </Button>
              </Link>

              <p className="text-center mt-8 text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                KSPPS Berkah Mitra Hasanah
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
