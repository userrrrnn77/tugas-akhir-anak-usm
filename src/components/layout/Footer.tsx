import React from "react";
import Container from "./Container";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    // 🛠️ FIX BG & TEXT: Light mode pake slate-100 & text abu gelap, Dark mode balik ke slate-900 & text slate-400
    <footer className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-12 border-t border-slate-300 dark:border-slate-800 transition-colors duration-300">
      <Container>
        {/* LAYOUT GRID UTAMA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold transition-colors duration-300">
              KSPPS Berkah Mitra Hasanah
            </h3>
            <p className="text-sm leading-relaxed">
              Melayani masyarakat dengan prinsip syariah sejak tahun 2003 di
              wilayah Genuk, Semarang, dan sekitarnya.
            </p>
          </div>

          {/* Office Info - Pusat */}
          <div className="space-y-4">
            <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-wider text-sm transition-colors duration-300">
              Kantor Pusat
            </h4>
            <p className="text-sm leading-relaxed">
              Jl. Wolter Monginsidi No.39,
              <br />
              Genuksari, Kec. Genuk, Kota Semarang,
              <br />
              Jawa Tengah 50117
            </p>
          </div>

          {/* Office Info - Cabang */}
          <div className="space-y-4">
            <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-wider text-sm transition-colors duration-300">
              Kantor Cabang
            </h4>
            <p className="text-sm leading-relaxed">
              Jl. Puri Dinar Asri Raya,
              <br />
              Ruko No. 4 Kel. Meteseh, Kec. Tembalang, Kota Semarang
              <br />
              Jawa Tengah 50271
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-wider text-sm transition-colors duration-300">
              Kontak Kami
            </h4>
            <div className="space-y-2 text-sm">
              <p>WhatsApp Genuk: +62 821-3808-9198</p>
              <p>WhatsApp Meteseh: +62 856-4085-4490</p>
              <p>Email: berkahmitraHasanah123@gmail.com</p>
            </div>

            {/* SOSMED DENGAN WARNA HOVER & CARD SINKRON */}
            <div className="pt-2">
              <h5 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-3 transition-colors duration-300">
                Media Sosial
              </h5>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/kspps.berkahmitrahasanah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-200 shadow-xs">
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="https://www.instagram.com/mitrahasanahkoperasisyariah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-200 shadow-xs">
                  <FaInstagram size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@KSPPSBERKAHMITRAHASANAH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-200 shadow-xs">
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT LINE */}
        <div className="mt-12 pt-8 border-t border-slate-300 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-500 transition-colors duration-300">
          <p>
            © {new Date().getFullYear()} KSPPS Berkah Mitra Hasanah. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
