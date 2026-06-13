// src/pages/UploadBukti.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import { useRegistrationStore } from "../store/useRegistrationStore";
import useLayananStore from "../store/useLayananStore";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import Title from "../components/common/Title";
import {
  CreditCard,
  Image as ImageIcon,
  UploadCloud,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";

const UploadBukti: React.FC = () => {
  const navigate = useNavigate();
  const { uploadBuktiTransfer, isLoading } = useLayananStore();
  const { formData, resetForm } = useRegistrationStore();

  const [ktpFile, setKtpFile] = useState<File | null>(null);
  const [transferFile, setTransferFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!ktpFile || !transferFile) {
      toast.error("Wajib mengunggah foto KTP dan Bukti Transfer, Bre!");
      return;
    }

    setIsUploading(true);

    try {
      const [uploadedKtp, uploadedTransfer] = await Promise.all([
        uploadToCloudinary(ktpFile),
        uploadToCloudinary(transferFile),
      ]);

      const payload = {
        registrationId: formData.nik,
        buktiTransfer: uploadedTransfer.secure_url as string,
        buktiKTP: uploadedKtp.secure_url as string,
      };

      const isSuccess = await uploadBuktiTransfer(payload);

      if (isSuccess) {
        resetForm();
        navigate("/success");
      }
    } catch (err) {
      console.error("Gagal mengunggah dokumen transaksi:", err);
      toast.error(
        "Terjadi kesalahan saat mengunggah berkas. Silakan coba lagi.",
      );
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center py-24 px-4">
      <Title>Upload Berkas Pendaftaran | Mitra Hasanah</Title>

      <Container>
        <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200/60 dark:border-slate-800 shadow-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>

          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight italic">
              Validasi Berkas
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">
              Unggah kelengkapan dokumen untuk mengaktifkan akun koperasi Anda.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1. FOTO KTP */}
            <div className="space-y-2">
              <label className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                Foto KTP Asli
              </label>
              <div className="p-6 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-950/50 flex flex-col items-center text-center relative group hover:border-emerald-500 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  required
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  onChange={(e) => setKtpFile(e.target.files?.[0] || null)}
                />
                <CreditCard
                  size={32}
                  className="text-slate-400 group-hover:text-emerald-500 transition-colors mb-2"
                />
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                  {ktpFile ? ktpFile.name : "Pilih atau Seret Foto KTP"}
                </span>
              </div>
              {ktpFile && (
                <div className="flex items-center gap-2 pl-2">
                  <ImageIcon size={14} className="text-emerald-500" />
                  <span className="text-[11px] text-emerald-600 font-bold uppercase">
                    KTP Siap Diunggah
                  </span>
                </div>
              )}
            </div>

            {/* 2. BUKTI TRANSFER */}
            <div className="space-y-2">
              <label className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                Bukti Transfer Setoran Awal
              </label>
              <div className="p-6 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-950/50 flex flex-col items-center text-center relative group hover:border-emerald-500 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  required
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  onChange={(e) => setTransferFile(e.target.files?.[0] || null)}
                />
                <UploadCloud
                  size={32}
                  className="text-slate-400 group-hover:text-emerald-500 transition-colors mb-2"
                />
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                  {transferFile
                    ? transferFile.name
                    : "Pilih atau Seret Bukti Transfer"}
                </span>
              </div>
              {transferFile && (
                <div className="flex items-center gap-2 pl-2">
                  <ImageIcon size={14} className="text-emerald-500" />
                  <span className="text-[11px] text-emerald-600 font-bold uppercase">
                    Bukti Transfer Siap
                  </span>
                </div>
              )}
            </div>

            <Button
              type="submit"
              className="w-full py-4 bg-emerald-600 font-black uppercase tracking-widest text-sm rounded-2xl shadow-lg shadow-emerald-500/20"
              isLoading={isUploading || isLoading}>
              Kirim Dokumen Pendaftaran 🚀
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UploadBukti;
