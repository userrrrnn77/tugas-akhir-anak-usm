import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import Button from "../ui/Button";
import { Menu, X, Sun, Moon } from "lucide-react"; // Import icon jembot! 🚬
import { useTheme } from "../../hooks/useTheme";
import logoNav from "../../assets/logoBMH.png";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors ${
      isActive
        ? "text-emerald-600 dark:text-emerald-400"
        : "text-slate-600 dark:text-slate-400 hover:text-emerald-600"
    }`;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tentang", path: "/tentang" },
    { name: "Produk", path: "/produk" },
    { name: "Baitul Maal", path: "/baitul-maal" },
    { name: "Galery", path: "/galery" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-40 h-10 rounded-lg flex items-center justify-center font-bold text-white text-xl">
              <img src={logoNav} alt="" />
            </div>
          </NavLink>

          {/* Menu Desktop - Hidden di Mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkStyle}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                onClick={() =>
                  document
                    .getElementById("register")
                    ?.scrollIntoView({ behavior: "smooth" })
                }>
                Daftar Sekarang
              </Button>
            </div>

            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-slate-300" />
              )}
            </button>

            {/* Hamburger Button - Muncul cuma di Mobile */}
            <button
              className="md:hidden p-2 text-slate-600 dark:text-slate-400"
              onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={`block py-2 ${linkStyle({ isActive: false })}`} // logic style disesuaikan
                onClick={() => setIsOpen(false)} // Tutup menu pas diklik
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 sm:hidden">
              <Button
                variant="primary"
                className="w-full"
                onClick={(e) => {
                  e.preventDefault(); // Stop semua aksi default
                  e.stopPropagation(); // Stop event biar kaga lari ke parent

                  console.log("KLIK MASUK, BRE! AMAN!");

                  setIsOpen(false);

                  // Pake window.location.assign biar maksa pindah kalau navigate bapuk
                  if (window.location.pathname !== "/") {
                    window.location.assign("/#register");
                  } else {
                    const el = document.getElementById("register");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    } else {
                      console.log("Elemen #register KAGA ADA bgsd!");
                    }
                  }
                }}>
                Daftar Sekarang
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
