import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
// import { detailProducts } from "../constants/productDetail";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import { ChevronLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import Title from "../components/common/Title";
import useLayananStore from "../store/useLayananStore";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { activeProductDetail, fetchDetailProduct, isLoading } =
    useLayananStore();

  // 3. Fetch data detail berdasarkan ID dari URL
  useEffect(() => {
    if (id) {
      fetchDetailProduct(id);
    }
  }, [id, fetchDetailProduct]);

  // 4. Handle Loading
  if (isLoading) {
    return (
      <Container className="py-12 animate-pulse">
        {/* Skeleton Title & Deskripsi */}
        <div className="mb-12">
          <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded mb-8"></div>
          <div className="h-12 w-2/3 bg-slate-200 dark:bg-slate-800 rounded-xl mb-6"></div>
          <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded mb-2"></div>
          <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded mb-2"></div>
        </div>

        <div className="grid gap-12">
          {[1, 2].map((s) => (
            <div key={s} className="group">
              {/* Skeleton Subtitle Line */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px grow bg-slate-200 dark:bg-slate-800"></div>
                <div className="h-6 w-32 bg-slate-200 dark:bg-slate-800 rounded italic"></div>
              </div>

              {/* Skeleton Grid Items */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-20 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center p-4 gap-3">
                    <div className="w-5 h-5 bg-slate-200 dark:bg-slate-800 rounded-full shrink-0"></div>
                    <div className="space-y-2 w-full">
                      <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                      <div className="h-3 w-2/3 bg-slate-200 dark:bg-slate-800 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    );
  }

  // 5. Handle Kalo Data Kaga Ketemu
  if (!activeProductDetail) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6 text-center">
        <h1 className="text-3xl font-black text-slate-900 uppercase italic mb-4">
          Produk Ga Ketemu, Bre! ☕
        </h1>
        <Button onClick={() => navigate(-1)} variant="primary">
          <ChevronLeft className="mr-2" /> Balik Aja Bgsd
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24">
      <Title>{activeProductDetail.title}</Title>
      <Container>
        {/* Navigasi Balik */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-emerald-600 font-bold mb-12 hover:gap-2 transition-all group">
          <ChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          KEMBALI KE LAYANAN
        </button>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Sisi Kiri: Info Utama */}
          <div className="lg:col-span-7">
            <span className="text-emerald-600 font-black tracking-widest uppercase text-xs mb-4 block">
              SYARIAH FINANCIAL PRODUCT
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-none italic uppercase">
              {activeProductDetail.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-12 max-w-2xl">
              {activeProductDetail.description}
            </p>

            {/* Grid Sections */}
            <div className="grid gap-12">
              {activeProductDetail.sections.map((section, idx) => (
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
                <Button
                  onClick={() => ""}
                  className="w-full bg-white text-emerald-600 hover:bg-emerald-50 font-black py-6 rounded-2xl text-lg uppercase shadow-xl">
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
