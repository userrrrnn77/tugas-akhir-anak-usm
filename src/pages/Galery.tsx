import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Play, PlayCircle, X } from "lucide-react";
import Title from "../components/common/Title";
import useLayananStore from "../store/useLayananStore";

const Galery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const { galleries, isLoading, fetchAllGalleries } = useLayananStore();

  useEffect(() => {
    fetchAllGalleries();
  }, [fetchAllGalleries]);

  // Pisahin yang foto ama yang video, mbot!
  const photos = galleries.filter(
    (item) => item.type === "image" || !item.type,
  );
  const videos = galleries.filter((item) => item.type === "video");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-5 pt-24">
      <Title>Mitra Hasanah | Galery</Title>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8 italic uppercase tracking-tighter">
          Galeri <span className="text-emerald-600">Dokumentasi</span>
        </h1>

        <div className="space-y-12">
          {/* --- SECTION FOTO --- */}
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 dark:text-white">
              <Camera size={20} className="text-indigo-500" /> Galeri Foto
            </h2>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {isLoading
                ? [1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="break-inside-avoid w-full rounded-2xl bg-slate-200 dark:bg-slate-800 animate-pulse"
                      style={{ height: `${[200, 300, 250, 350][i % 4]}px` }}
                    />
                  ))
                : photos.map((img) => (
                    <motion.div key={img._id} className="break-inside-avoid">
                      <img
                        src={img.src}
                        alt={img.publicId}
                        onClick={() => setSelectedImg(img.src)}
                        className="w-full rounded-2xl cursor-zoom-in hover:scale-[1.02] transition-transform border-4 border-white dark:border-slate-900 shadow-lg"
                      />
                    </motion.div>
                  ))}
            </div>
          </section>

          {/* --- SECTION VIDEO --- */}
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 dark:text-white">
              <PlayCircle size={20} className="text-red-500" /> Mabes Cinema
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {isLoading
                ? [1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-video w-full rounded-3xl bg-slate-200 dark:bg-slate-800 animate-pulse"
                    />
                  ))
                : videos.map((vid) => (
                    <motion.div
                      key={vid._id}
                      className="relative group rounded-3xl overflow-hidden shadow-xl">
                      <video
                        src={vid.src}
                        className="w-full aspect-video object-cover cursor-pointer"
                        muted
                        playsInline
                        onMouseOver={(e) =>
                          (e.target as HTMLVideoElement).play()
                        }
                        onMouseOut={(e) => {
                          const v = e.target as HTMLVideoElement;
                          v.pause();
                          v.currentTime = 0;
                        }}
                        onClick={() => setSelectedImg(vid.src)}
                      />
                      <div className="absolute bottom-4 left-4 p-2 bg-black/40 backdrop-blur-md rounded-full text-white pointer-events-none">
                        <Play size={16} fill="white" />
                      </div>
                    </motion.div>
                  ))}
            </div>
          </section>
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

              {/* 🔥 SMART PREVIEW LOGIC */}
              {selectedImg.match(/\.(mp4|webm|ogg|mov)$/i) ||
              galleries.find((i) => i.src === selectedImg)?.type === "video" ? (
                <motion.video
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  src={selectedImg}
                  className="max-h-[85vh] w-full rounded-xl shadow-2xl object-contain bg-black"
                  controls
                  autoPlay
                />
              ) : (
                <motion.img
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  src={selectedImg}
                  className="max-h-[85vh] rounded-xl shadow-2xl object-contain"
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galery;
