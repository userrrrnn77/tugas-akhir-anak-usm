import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import Button from "../ui/Button";
import { Menu, X, Sun, Moon } from "lucide-react"; // Import icon jembot! 🚬
import { useTheme } from "../../hooks/useTheme";

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
    { name: "Galery", path: "/galery" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-emerald-600/20">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwniKfpeS2y-BjxmDbbNIMMvsNMxejIYvwMQ-CGGp1RbRhW6aPnLtwVKd9fW_7xGDnEyz_9fpfJ15CRvwGiHnFwXSsyYhaOnnJJzRJ5D2G1LyjmDUFefVYXr5paIjElg/s220/cover+perpres.jpg"
                alt=""
              />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white hidden sm:block tracking-tighter">
              Mitra Hasanah
            </span>
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
                onClick={() => {
                  setIsOpen(false);
                  document
                    .getElementById("register")
                    ?.scrollIntoView({ behavior: "smooth" });
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
