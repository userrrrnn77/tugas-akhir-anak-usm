import React from "react";
import { useNavigate } from "react-router-dom";
import { useRegistrationStore } from "../../store/useRegistrationStore";
import { toast } from "react-hot-toast";
import Container from "./Container";
import Button from "../ui/Button";
import Stepper from "../form/Stepper";
import {
  StepDataPribadi,
  StepKonfirmasi,
  StepPekerjaan,
} from "../../pages/Steps";

const RegistrationLayout: React.FC = () => {
  const navigate = useNavigate();
  const { currentStep, nextStep, prevStep, submitForm, isLoading, formData } =
    useRegistrationStore();

  const steps = ["Data Diri", "Pekerjaan", "Selesai"];

  const handleAction = async () => {
    if (currentStep === steps.length) {
      // 🛡️ Validasi maut lu, Bre!
      if (!formData.isAgreed) {
        return toast.error("Ceklis dulu persetujuannya, taik!");
      }

      const result = await submitForm();
      if (result.success) {
        toast.success(result.message);
        navigate("/success");
      } else {
        toast.error(result.message);
      }
    } else {
      nextStep();
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-950 font-sans min-h-screen flex items-center">
      <Container>
        {/* --- HEADER: KONSISTEN AMA COMPANYBRIEF --- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
            Formulir Keanggotaan
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase italic tracking-tighter">
            Mulai Langkah <span className="text-emerald-600">Berkah</span>{" "}
            Bersama Kami
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            Isi data diri Anda dengan{" "}
            <span className="text-slate-900 dark:text-white font-bold text-base">
              BENAR & AMANAH.
            </span>{" "}
            Proses ini merupakan tahap awal verifikasi menjadi bagian dari
            keluarga besar KSPPS Berkah Mitra Hasanah.
          </p>
        </div>

        {/* --- FORM CARD: THE CORE LOGIC --- */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card shadow-2xl border-t-4 border-t-emerald-600 rounded-3xl p-8 md:p-12">
            <Stepper currentStep={currentStep} steps={steps} />

            <div className="mt-14 min-h-87.5 flex flex-col justify-center">
              {/* 🚀 CONDITIONAL RENDERING */}
              {currentStep === 1 && <StepDataPribadi />}
              {currentStep === 2 && <StepPekerjaan />}
              {currentStep === 3 && <StepKonfirmasi />}
            </div>

            <div className="mt-14 flex flex-col md:flex-row justify-between gap-4 border-t border-slate-100 dark:border-slate-800 pt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1 || isLoading}
                className="w-full md:w-auto px-8 rounded-xl font-bold uppercase tracking-wider text-xs h-12 order-2 md:order-1">
                Kembali
              </Button>

              <Button
                onClick={handleAction}
                disabled={isLoading}
                className={`w-full md:w-auto px-10 rounded-xl font-bold uppercase tracking-wider text-xs h-12 transition-all duration-300 order-1 md:order-2 ${
                  currentStep === steps.length
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/30"
                    : "bg-slate-900 dark:bg-emerald-600 text-white"
                }`}>
                {isLoading
                  ? "Sabar Bre..."
                  : currentStep === steps.length
                    ? "Kirim Pendaftaran"
                    : "Lanjut"}
              </Button>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
              Security Verified & Syariah Compliant System
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RegistrationLayout;
