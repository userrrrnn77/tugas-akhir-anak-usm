import React, { useState, useEffect, useCallback } from "react";
import Container from "../components/layout/Container";
import Stepper from "../components/form/Stepper";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import ProductSection from "../components/layout/ProductSection";
import Title from "../components/common/Title";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CompanyBrief from "../components/layout/CompanyBrief";
import {
  StepDataPribadi,
  StepPekerjaan,
  StepKonfirmasi,
  BarcodeAndNorek,
} from "./Steps";
import { useRegistrationStore } from "../store/useRegistrationStore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import VisionMision from "../components/layout/VisionMision";
import useLayananStore from "../store/useLayananStore";

const Home: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const navigate = useNavigate();

  const { currentStep, nextStep, prevStep, submitForm, isLoading, formData } =
    useRegistrationStore();

  const { fetchAllCarousel, carousels } = useLayananStore();

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) =>
      carousels.length === 0 ? 0 : prev === carousels.length - 1 ? 0 : prev + 1,
    );
  }, [carousels.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) =>
      carousels.length === 0 ? 0 : prev === 0 ? carousels.length - 1 : prev - 1,
    );
  }, [carousels.length]);

  const steps = ["Data Diri", "Pekerjaan", "Ahli Waris", "Selesai"];

  const handleAction = async () => {
    if (currentStep === steps.length) {
      if (!formData.isAgreed) {
        return toast.error("Ceklis dulu persetujuannya, Kak");
      }

      const result = await submitForm();
      if (result.success) {
        toast.success(result.message);

        const dataObj = result as Record<string, unknown>;
        const extractedId =
          typeof dataObj.registeredId === "string"
            ? dataObj.registeredId
            : typeof dataObj.id === "string"
              ? dataObj.id
              : "";

        navigate("/upload-transaction", {
          state: {
            state: { registrationId: extractedId },
          },
        });
      } else {
        toast.error(result.message);
      }
    } else {
      nextStep();
    }
  };

  useEffect(() => {
    fetchAllCarousel();
  }, [fetchAllCarousel]);

  // Logic Auto-slide biar kaga kaku,
  useEffect(() => {
    if (carousels.length <= 1) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [carousels.length, nextSlide]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <Title>
        Mitra Hasanah | KSPPS Berkah Mitra Hasanah - Finansial Syariah
      </Title>
      <main className="grow py-12">
        <Container>
          <div className="relative w-full h-75 md:h-112.5 mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl group">
            {carousels.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === activeSlide ? "opacity-100" : "opacity-0"
                }`}>
                <img
                  src={slide.image} // Pastiin di API fieldnya 'image'
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Navigasi Carousel - Pake fungsi yang udah kita bikin */}
            <div className="absolute bottom-8 right-8 flex gap-3 z-10">
              <button onClick={prevSlide} className="...">
                {" "}
                <ChevronLeft size={24} />{" "}
              </button>
              <button onClick={nextSlide} className="...">
                {" "}
                <ChevronRight size={24} />{" "}
              </button>
            </div>

            {/* Indicators - Pake carouselData.map */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {carousels.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeSlide ? "w-8 bg-emerald-500" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </Container>

        <VisionMision />

        <CompanyBrief />

        <ProductSection />

        <Container id="register">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
              Langkah Awal Keberkahan
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 uppercase italic tracking-tighter">
              Bergabung Menjadi{" "}
              <span className="text-emerald-600">Anggota</span> KSPPS Berkah
              Mitra Hasanah
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">
              Daftarkan diri Anda sekarang untuk mendapatkan akses layanan
              finansial syariah yang
              <span className="text-slate-900 dark:text-white font-bold">
                {" "}
                Adil, Transparan, dan Amanah.
              </span>{" "}
              Proses mudah, cepat, dan sesuai dengan prinsip syariah.
            </p>

            {/* AMUNISI TAMBAHAN DARI BOSNYA FAJAR YANG SUDAH DI-UPGRADE BIAR GAK KELIATAN KASTA GEMBEL */}
            <div className="inline-block bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-xl p-4 text-left max-w-xl mx-auto backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 bg-emerald-600 text-white rounded-full p-1 text-[10px] font-bold h-5 w-5 flex items-center justify-center shrink-0">
                  ✓
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-0.5 uppercase tracking-wider text-[10px]">
                    Persyaratan Anggota KSPPS Berkah Mitra Hasanah:
                  </span>
                  Membayar{" "}
                  <span className="font-bold text-slate-900 dark:text-white">
                    setoran wajib sebesar Rp18.000
                  </span>{" "}
                  dan{" "}
                  <span className="font-bold text-slate-900 dark:text-white">
                    setoran pokok sebesar Rp20.000
                  </span>{" "}
                  yang disetorkan secara bersamaan di awal pendaftaran.
                </p>
              </div>
            </div>
          </div>
          <Card className="max-w-3xl mx-auto shadow-2xl border-t-4 border-t-emerald-600 rounded-3xl p-8">
            <Stepper currentStep={currentStep} steps={steps} />

            <div className="mt-12 min-h-75 flex flex-col items-center">
              {/* 🚀 CONDITIONAL RENDERING: Di sini intinya, Bre! */}
              {currentStep === 1 && <StepDataPribadi />}
              {currentStep === 2 && <StepPekerjaan />}
              {currentStep === 3 && <StepKonfirmasi />}
              {currentStep === 4 && <BarcodeAndNorek />}
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
