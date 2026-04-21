import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Title from "../components/common/Title";
import useLayananStore from "../store/useLayananStore";

const Galery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const { galleries, isLoading, fetchAllGalleries } = useLayananStore();

  useEffect(() => {
    fetchAllGalleries();
  }, [fetchAllGalleries]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-5 pt-24">
      <Title>Mitra Hasanah | Galery</Title>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8 italic uppercase tracking-tighter">
          Galeri <span className="text-emerald-600">Dokumentasi</span>
        </h1>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {isLoading
            ? [1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="break-inside-avoid w-full rounded-2xl bg-slate-200 dark:bg-slate-800 animate-pulse border-4 border-white dark:border-slate-900 shadow-lg"
                  style={{ height: `${[200, 300, 250, 400][i % 4]}px` }}>
                  <div className="w-full h-full bg-linear-to-b from-transparent via-white/5 to-transparent animate-shimmer"></div>
                </div>
              ))
            : galleries.map((img) => (
                <motion.div
                  key={img._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="break-inside-avoid">
                  <img
                    src={img.src}
                    alt={img.publicId}
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
