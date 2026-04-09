import React from "react";
import Container from "./Container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {/* Brand Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              KSPPS Mitra Hasanah
            </h3>
            <p className="text-sm leading-relaxed">
              Melayani masyarakat dengan prinsip syariah sejak tahun 2003 di
              wilayah Genuk, Semarang, dan sekitarnya.
            </p>
          </div>

          {/* Office Info */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Kantor Pusat
            </h4>
            <p className="text-sm">
              Jl. Raya Genuk No. XX
              <br />
              Kec. Genuk, Kota Semarang
              <br />
              Jawa Tengah, Indonesia
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Kontak Kami
            </h4>
            <p className="text-sm">WhatsApp: +62 8XX XXXX XXXX</p>
            <p className="text-sm">Email: info@mitrahasanah.com</p>
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
