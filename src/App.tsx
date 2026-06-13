import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import About from "./pages/About";
import Products from "./pages/Products";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import * as pkg from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeProvider";
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./components/common/ScrollToTop";
import Galery from "./pages/Galery";
import BaitulMaal from "./pages/BaitulMaal";
import { Toaster } from "sonner";
import { useEffect } from "react";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import UploadBukti from "./pages/UploadBukti";

const { HelmetProvider } = pkg;

const App = () => {
  useEffect(() => {
    if (window.location.hash === "#register") {
      setTimeout(() => {
        document
          .getElementById("register")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Toaster position="top-center" richColors closeButton />
        <Router>
          <ScrollToTop />
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/success" element={<Success />} />
              <Route path="/tentang" element={<About />} />
              <Route path="/produk" element={<Products />} />
              <Route path="/galery" element={<Galery />} />
              <Route path="/baitul-maal" element={<BaitulMaal />} />
              <Route path="/produk/:id" element={<ProductDetail />} />
              <Route path="/upload-transaction" element={<UploadBukti />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<NewsDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
