import React, { useState, useEffect } from "react"; // Tambah useEffect, bgsd!
import Container from "../components/layout/Container";
import Stepper from "../components/form/Stepper";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import ProductSection from "../components/layout/ProductSection";
import Title from "../components/common/Title";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Buat navigasi, taik!
import { carousel } from "../assets/image/carousel";
import CompanyBrief from "../components/layout/CompanyBrief";

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0); // State Carousel

  const steps = ["Data Diri", "Alamat", "Pekerjaan", "Selesai"];

  // Dummy Data Carousel - Taruh di constants ntar kalo udah rapi, Bre!
  const slides = [
    {
      image: carousel.img1,
      title: "Solusi Keuangan Syariah",
    },
    {
      image: carousel.img2,
      title: "Pemberdayaan UMKM",
    },
  ];

  // Logic Auto-slide biar kaga kaku, bgsd!
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <Title>Mitra Hasanah | KSPPS Berkah Mitra Hasanah</Title>
      <main className="grow py-12">
        <Container>
          {/* CAROUSEL SECTION - BIAR MEWAH, JEMBOT! 🚬 */}
          <div className="relative w-full h-75 md:h-112.5 mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl group">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === activeSlide ? "opacity-100" : "opacity-0"
                }`}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY TEKS & SLOGAN PERUSAHAAN */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-12 md:p-20">
                  <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4 leading-none">
                    {slide.title}
                  </h1>
                  {/* INI SLOGANNYA, BRE! */}
                  <p className="text-emerald-400 font-bold text-lg md:text-xl uppercase tracking-[0.2em] italic">
                    Kspps Mitra usaha umat, cepat mudah, amanah, dan fleksibel
                  </p>
                </div>
              </div>
            ))}

            {/* Navigasi Carousel */}
            <div className="absolute bottom-8 right-8 flex gap-3 z-10">
              <button
                onClick={() =>
                  setActiveSlide((prev) =>
                    prev === 0 ? slides.length - 1 : prev - 1,
                  )
                }
                className="p-3 bg-white/10 hover:bg-emerald-600 backdrop-blur-md rounded-full transition-all text-white border border-white/20">
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() =>
                  setActiveSlide((prev) =>
                    prev === slides.length - 1 ? 0 : prev + 1,
                  )
                }
                className="p-3 bg-white/10 hover:bg-emerald-600 backdrop-blur-md rounded-full transition-all text-white border border-white/20">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === activeSlide ? "w-8 bg-emerald-500" : "w-2 bg-white/30"}`}
                />
              ))}
            </div>
          </div>
        </Container>

        <CompanyBrief />

        <ProductSection />

        <Container>
          <Card
            className="max-w-3xl mx-auto shadow-2xl border-t-4 border-t-emerald-600 rounded-3xl"
            id="register">
            <Stepper currentStep={currentStep} steps={steps} />
            <div className="mt-12 min-h-75 flex flex-col justify-center items-center">
              <div className="text-center">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic">
                  Tahap {currentStep}: {steps[currentStep - 1]}
                </h2>
                <p className="text-slate-500 mt-2 font-medium">
                  Sedang menyiapkan form pendaftaran, tunggu sebentar Bre! ☕
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-between border-t border-slate-100 dark:border-slate-800 pt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}>
                Kembali
              </Button>
              <Button onClick={nextStep}>
                {currentStep === steps.length ? "Kirim Pendaftaran" : "Lanjut"}
              </Button>
            </div>
          </Card>
        </Container>
      </main>
    </div>
  );
};

export default Home;
