import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useRegistrationStore } from "../store/useRegistrationStore";
import Title from "../components/common/Title";
import { CheckCircle2, MessageSquare, Home } from "lucide-react"; // Pake Lucide biar cakep, bgsd!

const Success: React.FC = () => {
  const navigate = useNavigate();
  const { resetForm, formData } = useRegistrationStore();

  const handleBack = () => {
    resetForm();
    navigate("/");
  };

  // 🚀 Logic WA Sat-Set: Langsung bawa nama biar CS kaga bingung
  const waNumber = "6282138089198"; // Nomor Genuk sesuai Footer lu tadi
  const message = encodeURIComponent(
    `Halo Admin KSPPS Mitra Hasanah, saya ${formData.fullName || "Nasabah"}. Saya baru saja melakukan pendaftaran online melalui website. Mohon bantuannya untuk proses verifikasi selanjutnya, Bre! 🙏`,
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
      <Title>Pendaftaran Berhasil | Mitra Hasanah</Title>

      <Container>
        <div className="max-w-2xl mx-auto">
          <Card className="relative overflow-hidden border-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-center">
            {/* Aksesoris Background dikit biar kaga kaku, jembot! */}
            <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>

            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 animate-pulse"></div>
                <CheckCircle2
                  size={100}
                  className="text-emerald-500 relative z-10"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight uppercase italic">
              Alhamdulillah, <br />
              <span className="text-emerald-600">Berhasil Masuk!</span>
            </h1>

            <div className="space-y-4 mb-10">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Data pendaftaran{" "}
                <span className="font-bold text-slate-900 dark:text-white underline decoration-emerald-500">
                  {formData.fullName || "Anda"}
                </span>{" "}
                sudah kami terima di sistem.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-800/50">
                <p className="text-sm text-emerald-800 dark:text-emerald-400 font-medium">
                  Selanjutnya, silakan konfirmasi ke Admin kami melalui WhatsApp
                  untuk mempercepat proses verifikasi data Anda.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() =>
                  window.open(
                    `https://wa.me/${waNumber}?text=${message}`,
                    "_blank",
                  )
                }
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-2xl flex items-center justify-center gap-3 text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-emerald-500/20">
                <MessageSquare size={24} />
                Hubungi Admin (WA)
              </Button>

              <Button
                variant="outline"
                onClick={handleBack}
                className="px-8 py-6 rounded-2xl flex items-center justify-center gap-3 text-lg font-bold border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                <Home size={24} />
                Beranda
              </Button>
            </div>
          </Card>

          <p className="mt-8 text-center text-slate-400 text-sm font-medium uppercase tracking-[0.2em]">
            KSPPS Berkah Mitra Hasanah • {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Success;
