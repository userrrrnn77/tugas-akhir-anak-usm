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

import { StepDataPribadi, StepPekerjaan, StepKonfirmasi } from "./Steps";
import { useRegistrationStore } from "../store/useRegistrationStore";
import { toast } from "sonner"; // Atau pake alert biasa kalo kaga ada sonner

const Home: React.FC = () => {
  // const [currentStep, setCurrentStep] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0); // State Carousel

  const { currentStep, nextStep, prevStep, submitForm, isLoading, formData } =
    useRegistrationStore();

  const steps = ["Data Diri", "Pekerjaan", "Selesai"];

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

  const handleAction = async () => {
    if (currentStep === steps.length) {
      // 🛡️ Validasi dikit sebelum kirim, bgsd!
      if (!formData.isAgreed) {
        return toast.error("Ceklis dulu persetujuannya, taik!");
      }

      const result = await submitForm(); // yang ini bre home line 44
      if (result.success) {
        toast.success(result.message); // toastnya ga muncul bre,
        // Ntar lu arahin ke page 'Success' atau apa kek
      } else {
        toast.error(result.message);
      }
    } else {
      nextStep();
    }
  };

  // Logic Auto-slide biar kaga kaku, bgsd!
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

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

        {/* SECTION SLOGAN PERUSAHAAN - THE MIDDLE BRIDGE */}
        <div className="py-16 bg-white dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
          <Container>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-0.5 w-8 bg-emerald-500"></div>
                <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.5em]">
                  Our Identity
                </span>
                <div className="h-0.5 w-8 bg-emerald-500"></div>
              </div>

              <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-tight max-w-4xl">
                Kspps Mitra usaha umat, <br className="hidden md:block" />
                <span className="text-emerald-600">
                  cepat, mudah, amanah,
                </span>{" "}
                dan fleksibel
              </h2>

              <div className="mt-6 h-1 w-20 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
            </div>
          </Container>
        </div>

        <ProductSection />

        <Container>
          <Card
            className="max-w-3xl mx-auto shadow-2xl border-t-4 border-t-emerald-600 rounded-3xl p-8"
            id="register">
            <Stepper currentStep={currentStep} steps={steps} />

            <div className="mt-12 min-h-75 flex flex-col items-center">
              {/* 🚀 CONDITIONAL RENDERING: Di sini intinya, Bre! */}
              {currentStep === 1 && <StepDataPribadi />}
              {currentStep === 2 && <StepPekerjaan />}
              {currentStep === 3 && <StepKonfirmasi />}
            </div>

            <div className="mt-12 flex justify-between border-t border-slate-100 dark:border-slate-800 pt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1 || isLoading}>
                Kembali
              </Button>

              <Button
                onClick={handleAction}
                disabled={isLoading}
                className={
                  currentStep === steps.length
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : ""
                }>
                {isLoading
                  ? "Sabar Bre..."
                  : currentStep === steps.length
                    ? "Kirim Pendaftaran"
                    : "Lanjut"}
              </Button>
            </div>
          </Card>
        </Container>
      </main>
    </div>
  );
};

export default Home;
