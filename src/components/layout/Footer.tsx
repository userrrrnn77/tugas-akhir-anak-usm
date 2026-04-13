import React from "react";
import Container from "./Container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
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
              Jl. Wolter Monginsidi No.39,
              <br />
              Genuksari, Kec. Genuk, Kota Semarang,
              <br />
              Jawa Tengah 50117
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Kantor Cabang
            </h4>
            <p className="text-sm">
              Jl. Puri Dinar Asri Raya No.1,
              <br />
              Meteseh, Kec. Tembalang, Kota Semarang,
              <br />
              Jawa Tengah 50271
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Kontak Kami
            </h4>
            <p className="text-sm">WhatsApp Genuk: +62 821-3808-9198</p>
            <p className="text-sm">WhatsApp Meteseh: +62 856-4085-4490</p>
            <p className="text-sm">Email: berkahmitraHasanah123@gmail.com</p>
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
