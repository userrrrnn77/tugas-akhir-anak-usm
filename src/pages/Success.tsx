import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useRegistrationStore } from "../store/useRegistrationStore";

const Success: React.FC = () => {
  const navigate = useNavigate();
  const { resetForm } = useRegistrationStore();

  const handleBack = () => {
    resetForm(); // Bersihin brankas LocalStorage lu, bgsd! 😹
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center py-20">
      <Container>
        <Card className="max-w-lg mx-auto text-center border-t-8 border-t-emerald-600 shadow-2xl">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
            PENDAFTARAN BERHASIL! 🎉
          </h1>
          <p className="text-slate-600 mb-8">
            Data Anda sudah tersimpan di sistem KSPPS Mitra Hasanah. Tim kami
            akan segera menghubungi Anda melalui WhatsApp untuk proses
            verifikasi selanjutnya.
          </p>

          <div className="flex flex-col gap-3">
            <Button
              variant="primary"
              onClick={() =>
                window.open("https://wa.me/628123456789", "_blank")
              }>
              Hubungi CS via WhatsApp
            </Button>
            <Button variant="outline" onClick={handleBack}>
              Kembali ke Beranda
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Success;
