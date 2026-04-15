import React from "react";
import Container from "./Container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <Container>
        {/* 🛠️ LAYOUT FIX: Pake 1 kolom (mobile), 2 kolom (tablet), 4 kolom (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold">
              KSPPS Mitra Hasanah
            </h3>
            <p className="text-sm leading-relaxed">
              Melayani masyarakat dengan prinsip syariah sejak tahun 2003 di
              wilayah Genuk, Semarang, dan sekitarnya.
            </p>
          </div>

          {/* Office Info - Pusat */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">
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
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">
              Kantor Cabang
            </h4>
            <p className="text-sm leading-relaxed">
              Jl. Puri Dinar Asri Raya No.1,
              <br />
              Meteseh, Kec. Tembalang, Kota Semarang,
              <br />
              Jawa Tengah 50271
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">
              Kontak Kami
            </h4>
            <div className="space-y-2 text-sm">
              <p>WhatsApp Genuk: +62 821-3808-9198</p>
              <p>WhatsApp Meteseh: +62 856-4085-4490</p>
              <p>Email: berkahmitraHasanah123@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
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
