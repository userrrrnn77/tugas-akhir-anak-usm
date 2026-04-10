import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galeryImages } from "../assets/image/galery";
import { X } from "lucide-react";
import Title from "../components/common/Title";

const Galery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-5 pt-24">
        <Title>Mitra Hasanah | Galery</Title>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8 italic uppercase tracking-tighter">
          Galeri <span className="text-emerald-600">Dokumentasi</span>
        </h1>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galeryImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="break-inside-avoid">
              <img
                src={img.src}
                alt={img.alt}
                onClick={() => setSelectedImg(img.src)}
                className="w-full rounded-2xl cursor-zoom-in hover:opacity-90 transition-opacity border-4 border-white dark:border-slate-900 shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL ZOOM - FIX NO MABOK! */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setSelectedImg(null)}>
            <div
              className="relative max-w-5xl w-full flex justify-center"
              onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute -top-12 right-0 text-white hover:text-emerald-500 transition-colors"
                onClick={() => setSelectedImg(null)}>
                <X size={32} />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedImg}
                className="max-h-[85vh] rounded-xl shadow-2xl object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galery;
