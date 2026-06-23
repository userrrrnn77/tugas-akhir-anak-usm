import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import logoMbuh from "../../assets/logo-mbuh.png";
import Button from "../ui/Button";
import { toast } from "sonner";
import { QRCodeSVG } from "qrcode.react";

const ZiswafSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const noRek = "4455559998";

  const waNumber = "6282138089198";
  const message = encodeURIComponent(
    `Assalamualaikum wr.wb, Admin KSPPS Mitra Hasanah, saya mau konfirmasi donasi yang baru saja saya transfer melalui rekening BSI. Mohon dibantu untuk proses pencatatannya ya, Syukron! 🙏✨`,
  );

  const qrisPayload =
    "00020101021126640017ID.CO.BANKBSI.WWW0118936004510000428653021000009302610303URE51440014ID.CO.QRIS.WWW0215ID20243497923640303URE5204839853033605802ID5918ULAZ MITRA HASANAH6008SEMARANG61055011763045009";

  const handleCopy = () => {
    navigator.clipboard.writeText(noRek);
    setCopied(true);
    toast.success("No. Rekening Berhasil Dicopy");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    /* REFACTOR COMPONENT CONTAINER: GANTI PAKE UTILITY DARK TAILWIND V4 */
    <div className="mt-56 p-8 md:p-20 bg-white dark:bg-dark-bg rounded-[3rem] md:rounded-[4rem] text-center relative overflow-hidden border border-slate-200 dark:border-white/5 shadow-xl transition-colors duration-300">
      {/* Background Glows Gaib */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/20 rounded-full -mr-32 -mt-32 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 dark:bg-primary-500/10 rounded-full -ml-32 -mb-32 blur-[100px]"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* LOGO MBUH - Spotlights */}
        <img
          src={logoMbuh}
          alt="Logo"
          className="relative z-10 h-24 md:h-28 w-auto object-contain drop-shadow-[0_0_35px_rgba(16,185,129,0.4)] hover:scale-110 transition-transform duration-500 ease-out cursor-pointer mb-8"
        />

        <div className="mb-12 flex flex-col items-center">
          <span className="text-primary-500 font-black text-xs md:text-sm uppercase tracking-[0.4em] italic mb-3">
            Salurkan ZISWAF Anda Melalui:
          </span>
          <h3 className="text-dark-bg dark:text-white text-xl md:text-3xl font-black uppercase tracking-tight max-w-2xl leading-tight transition-colors duration-300">
            ULAZ MKU BERKAH MITRA HASANAH
          </h3>
          <div className="h-px w-24 bg-primary-500/30 mt-6"></div>
        </div>

        {/* REFACTOR GRID BOX: REKENING VS QRIS GAIB */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mb-12 items-stretch text-left">
          {/* BOX KIRI: REKENING BSI BANK */}
          <div className="bg-slate-50 dark:bg-dark-card/40 backdrop-blur-xl p-6 md:p-8 rounded-4xl border border-slate-200 dark:border-white/10 flex flex-col justify-between transition-colors duration-300">
            <div>
              <p className="text-slate-500 dark:text-slate-400 uppercase text-[10px] font-black tracking-widest mb-6 block border-b border-slate-200 dark:border-white/5 pb-2">
                💳 METODE TRANSFER BANK
              </p>

              <div className="flex flex-col items-start gap-4 mt-4">
                <div className="w-full rounded-lg flex items-center overflow-hidden bg-white dark:bg-white/5 p-1.5 border border-slate-200 dark:border-white/10 shadow-sm">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bank_Syariah_Indonesia.svg/960px-Bank_Syariah_Indonesia.svg.png"
                    alt="BSI"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="w-full mt-2">
                  <label className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-2">
                    Nomor Rekening:
                  </label>
                  <div
                    onClick={handleCopy}
                    className="group cursor-pointer flex items-center justify-between bg-white dark:bg-slate-950/80 px-6 py-4 rounded-xl border border-slate-200 dark:border-primary-500/10 hover:border-primary-500 dark:hover:border-primary-500 shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
                    <span className="text-2xl md:text-3xl font-black text-dark-bg dark:text-white tracking-wider font-mono transition-colors duration-300">
                      {noRek}
                    </span>
                    {copied ? (
                      <Check className="text-primary-500 shrink-0" size={24} />
                    ) : (
                      <Copy
                        className="text-slate-400 dark:text-slate-500 group-hover:text-primary-500 shrink-0 transition-colors"
                        size={24}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 dark:border-white/5 pt-4">
              <p className="text-xs text-slate-400 dark:text-slate-500 uppercase font-bold tracking-wider">
                Atas Nama:
              </p>
              <p className="text-primary-600 dark:text-primary-500 font-black text-base md:text-lg tracking-tight mt-1 uppercase transition-colors duration-300">
                YMKU ULAZ BERKAH MITRA HASANAH
              </p>
            </div>
          </div>

          {/* BOX KANAN: QRIS SYSTEM (SINKRON TAILWIND V4 & ANTI GAGAL SCAN) */}
          <div className="bg-slate-50 dark:bg-dark-card/40 backdrop-blur-xl p-6 md:p-8 rounded-4xl border border-slate-200 dark:border-white/10 flex flex-col items-center justify-between text-center group transition-colors duration-300">
            <div className="w-full">
              <p className="text-slate-500 dark:text-slate-400 uppercase text-[10px] font-black tracking-widest mb-6 block border-b border-slate-200 dark:border-white/5 pb-2 text-left">
                📱 SCAN QRIS VEKTOR
              </p>

              {/* HEADER QRIS VERSI HTML PREMIUM */}
              <div className="flex justify-between items-center w-full px-2 mb-4">
                <div className="flex flex-col items-start">
                  <span className="text-dark-bg dark:text-white font-black text-lg tracking-tighter leading-none transition-colors duration-300">
                    QRIS
                  </span>
                  <span className="text-[7px] text-slate-500 dark:text-slate-400 uppercase tracking-tight mt-0.5 font-semibold">
                    Standar Pembayaran Nasional
                  </span>
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className="text-red-500 font-black text-xs tracking-widest italic">
                    GPN
                  </span>
                </div>
              </div>

              {/* DETAIL TEXT */}
              <div className="mb-6">
                <h4 className="text-dark-bg dark:text-white font-black text-base md:text-lg tracking-wide uppercase transition-colors duration-300">
                  ULAZ MITRA HASANAH
                </h4>
                <p className="text-slate-500 dark:text-slate-400 font-mono text-[10px] md:text-xs tracking-widest mt-1">
                  NMID : ID2024349792364
                </p>
              </div>

              {/* CONTAINER QR CODE SINKRON JELAS (ANTI GLITCH WARNA BALIK) */}
              <div className="relative bg-white p-4 rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-[1.04] w-48 h-48 mx-auto border border-slate-200 dark:border-white/10 flex items-center justify-center overflow-hidden">
                <QRCodeSVG
                  value={qrisPayload}
                  size={160}
                  bgColor={"#FFFFFF"} // Background wajib putih bersih mbot!
                  fgColor={"#0f172a"} // Kotak QR Code tetep Slate 900 biar kontras kamera HP melesat kencang!
                  level={"M"}
                  includeMargin={false}
                />
                {/* Efek Laserscan Ijo Khas Developer Dewa */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-primary-500 opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-1000 ease-in-out shadow-[0_0_12px_#10b981]"></div>
              </div>
            </div>

            <p className="mt-6 text-slate-500 dark:text-slate-400 text-[11px] font-medium max-w-xs leading-relaxed border-t border-slate-200 dark:border-white/5 pt-4 w-full">
              Dukung kemaslahatan umat sat-set via GoPay, OVO, Dana, LinkAja,
              atau Mobile Banking Anda.
            </p>
          </div>
        </div>

        {/* BUTTON WHATSAPP CTA PAKE PALETTE PRIMARY TAILWIND V4 */}
        <Button
          onClick={() =>
            window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank")
          }
          className="bg-primary-500 text-white px-12 md:px-16 py-5 rounded-2xl font-black text-lg md:text-xl hover:bg-primary-600 hover:scale-[1.03] transition-all shadow-[0_20px_50px_rgba(16,185,129,0.25)] uppercase italic tracking-tighter group w-full max-w-md border-none cursor-pointer">
          <span className="flex items-center justify-center gap-3">
            Konfirmasi via WhatsApp
            <svg
              className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ZiswafSection;
