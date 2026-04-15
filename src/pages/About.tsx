import React from "react";
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import Title from "../components/common/Title";
import { carousel } from "../assets/image/carousel";

const About: React.FC = () => {
  const values = [
    {
      title: "Keadilan",
      desc: "Sistem bagi hasil murni yang membagi risiko dan keuntungan secara proporsional sesuai syariat.",
    },
    {
      title: "Inklusivitas",
      desc: "Membuka akses layanan keuangan bagi pelaku usaha mikro yang selama ini tidak terjangkau perbankan.",
    },
    {
      title: "Transparansi",
      desc: "Setiap transaksi dan pengelolaan dana dilakukan secara terbuka untuk menjaga amanah anggota.",
    },
  ];

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <Title>Tentang Kami | Mitra Hasanah</Title>
      <Container>
        {/* Header - Visi & Misi Strategis  tolong benernin ini bre, dia minta dikasih gambar kantor utama disini njir taik */}

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-28">
          {/* Sisi Kiri: Narasi */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <span className="text-emerald-600 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Institutional Profile
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-none italic uppercase">
              Membangun Ekonomi <br />
              <span className="text-emerald-600">Ummat Berkelanjutan.</span>
            </h1>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-l-8 border-emerald-500 shadow-xl">
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic">
                "KSPPS Berkah Mitra Hasanah bukan sekadar lembaga keuangan. Kami
                adalah ekosistem pemberdayaan yang lahir dari rahim ekonomi
                kerakyatan di Semarang untuk menghadirkan keadilan finansial
                tanpa riba."
              </p>
            </div>
          </div>

          {/* Sisi Kanan: Gambar Kantor (Permintaan Anak USM, Taik!) */}
          <div className="lg:w-1/2 order-1 lg:order-2 w-full">
            <div className="relative group">
              {/* Dekorasi Belakang Gambar */}
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>

              {/* Frame Gambar Kantor */}
              <div className="relative aspect-4/3 overflow-hidden rounded-[2.5rem] border-4 border-white dark:border-slate-800 shadow-2xl">
                <img
                  src={carousel.img1}
                  alt="Kantor Utama Mitra Hasanah"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                {/* Label Badge Kantor */}
                <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                  <p className="text-white text-xs font-black uppercase tracking-widest">
                    Main Office
                  </p>
                  <p className="text-emerald-400 text-[10px] font-bold">
                    Genuk, Semarang City
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values - Bagian Berdaging */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {values.map((v, i) => (
            <div
              key={i}
              className="group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500 transition-all duration-500">
              <div className="text-3xl mb-6">0{i + 1}</div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4 uppercase italic tracking-tighter">
                {v.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Milestone Sejarah - Lebih Formal */}
        <div className="mb-28">
          <div className="flex items-end justify-between mb-12 border-b border-slate-200 dark:border-slate-800 pb-6">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
              Evolusi Institusi
            </h2>
            <span className="text-slate-400 font-bold text-sm">SINCE 2003</span>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="group">
                <h3 className="text-4xl font-black text-emerald-600 mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  2003
                </h3>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Fondasi Awal (KSU)
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Inisiasi pembentukan Koperasi Serba Usaha (KSU) Mitra Hasanah
                  pada 28 Juli 2003 sebagai respon atas terbatasnya akses
                  permodalan bagi UMKM di wilayah Semarang Utara.
                </p>
              </div>
              <div className="group">
                <h3 className="text-4xl font-black text-emerald-600 mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  2015
                </h3>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Transformasi Syariah (KSPPS)
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Rebranding dan transformasi legal menjadi KSPPS pada 23
                  Desember 2015, mempertegas komitmen operasional berbasis
                  kepatuhan syariah murni.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img src={carousel.img2} alt="" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 p-8 rounded-2xl text-white font-bold shadow-xl">
                <p className="text-sm uppercase tracking-widest opacity-80">
                  Legalitas
                </p>
                <p className="text-xl">Kemenkop UKM RI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategi Jemput Bola - Narasi Profesional */}
        <Card className="bg-slate-900 dark:bg-slate-900 border-none shadow-2xl overflow-hidden ">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-20">
              <h2 className="text-4xl font-black text-secondary-500 dark:text-white mb-8 uppercase tracking-tighter italic leading-none">
                Model Layanan <br />{" "}
                <span className="text-black dark:text-emerald-500">
                  Proaktif & Humanis.
                </span>
              </h2>
              <p className="text-black dark:text-slate-300 text-lg leading-relaxed mb-8">
                Memahami karakteristik mobilitas pelaku usaha, kami
                mengimplementasikan strategi{" "}
                <span className="text-primary-600 dark:text-white font-bold underline decoration-emerald-500 underline-offset-8">
                  "Mobile Transaction Service"
                </span>
                . Kami memitigasi kendala jarak dan waktu dengan mendatangi
                lokasi anggota secara presisi, memastikan efisiensi transaksi
                tetap terjaga tanpa mengganggu produktivitas bisnis Anda.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 bg-primary-600 dark:bg-slate-800 flex items-center justify-center text-xs font-bold">
                      P{i}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-primary-500 dark:text-slate-400">
                  Didukung oleh tim field officer berpengalaman.
                </p>
              </div>
            </div>
            <div className=" p-12 flex flex-col justify-between relative min-h-125 overflow-hidden">
              {/* MAPS BACKGROUND - INI BIAR RESPONSIF & BISA DARK MODE, JEMBOT! */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4730813059473!2d110.47807967605245!3d-6.953387668077527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f2dde5f664e7%3A0x3bd37b19580d223!2sBmt%20Mitra%20Hasanah!5e0!3m2!1sid!2sid!4v1775757716399!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0 opacity-40 grayscale contrast-125 dark:invert dark:hue-rotate-180 transition-all duration-700"
                  loading="lazy"></iframe>
                {/* Overlay biar tulisan tetep kebaca, kaga ketutup peta, taik! */}
                {/* <div className="absolute inset-0 bg-emerald-600/60 dark:bg-slate-900/40"></div> */}
              </div>

              {/* CONTENT - TULISAN TETEP DI DEPAN (Z-10) */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase italic mb-4 text-primary-500 dark:text-white">
                    Central Office
                  </h3>
                  <p className="text-primary-500 dark:text-emerald-50 text-lg font-medium drop-shadow-md">
                    Jl. Wolter Monginsidi No.39, <br /> Genuk, Kota Semarang,
                    50117
                  </p>
                </div>

                <div className="pt-12 border-t border-emerald-500/50">
                  <p className="text-4xl font-black italic tracking-tighter text-primary-500 dark:text-white">
                    MITRA HASANAH
                  </p>
                  <p className="text-xs tracking-[0.4em] font-bold opacity-70 text-primary-500 dark:text-emerald-100">
                    SYARIAH FINANCIAL SERVICES
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default About;
