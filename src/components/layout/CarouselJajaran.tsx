import { useState } from "react";
import { MANAGEMENT_DATA } from "../../constants/management";
import { User, ChevronLeft, ChevronRight } from "lucide-react";

const CarouselJajaran = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? MANAGEMENT_DATA.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === MANAGEMENT_DATA.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="w-full min-h-150 relative overflow-hidden bg-slate-100 dark:bg-dark-bg py-16 px-4 flex flex-col items-center justify-center transition-colors duration-500 group/carousel mb-28">
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none mix-blend-overlay bg-[radial-gradient(#059669_1px,transparent_1px)] bg-size[16px_16px]"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-6xl relative z-10 flex flex-col items-center px-2 md:px-12">
        {MANAGEMENT_DATA.map((section, sectionIdx) => {
          const isActive = sectionIdx === currentIndex;

          return (
            <div
              key={section.key}
              className={`w-full flex flex-col items-center transition-all duration-700 ease-in-out absolute top-0 left-0 transform ${
                isActive
                  ? "opacity-100 translate-x-0 relative pointer-events-auto"
                  : "opacity-0 translate-x-12 absolute pointer-events-none"
              }`}>
              <h2 className="text-4xl md:text-5xl font-black text-dark-bg dark:text-white tracking-widest text-center uppercase mb-12 italic drop-shadow-sm transition-colors duration-300">
                {section.title}
              </h2>

              <div className="flex flex-wrap gap-8 w-full max-w-5xl justify-center items-center">
                {section.members.map((member, idx) => (
                  <div
                    key={`${section.key}-${idx}`}
                    className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-white dark:bg-dark-card/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-4xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute bottom-0 inset-x-0 h-1.5 bg-linear-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-4xl"></div>

                    <div className="w-36 h-48 rounded-2xl overflow-hidden mb-5 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-white/5 shadow-inner flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500 text-slate-300 dark:text-slate-700">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <User className="w-16 h-16 stroke-[1.5] transition-colors duration-300 group-hover:text-primary-500/40" />
                      )}
                    </div>

                    <h3 className="text-dark-bg dark:text-white font-black text-base md:text-lg tracking-tight leading-tight transition-colors duration-300 min-h-10 flex items-center">
                      {member.name}
                    </h3>

                    <p className="text-primary-600 dark:text-primary-500 font-black text-[11px] uppercase tracking-widest mt-3 bg-primary-50 dark:bg-primary-950/40 px-4 py-1.5 rounded-full transition-all duration-300 group-hover:bg-primary-500 group-hover:text-white">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <button
          onClick={handlePrev}
          className="absolute -left-2.5 md:left-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-dark-bg dark:text-white active:scale-95 shadow-lg md:opacity-0 md:group-hover/carousel:opacity-100 md:-translate-x-4 md:group-hover/carousel:translate-x-0 transition-all duration-300 cursor-pointer"
          aria-label="Previous slide">
          <ChevronLeft size={24} className="stroke-3" />
        </button>

        {/* 🛠️ FIX PANAH KANAN: NONGOL PERKASA DI HP DAN DESKTOP */}
        <button
          onClick={handleNext}
          className="absolute -right-2.5 md:right-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-dark-bg dark:text-white active:scale-95 shadow-lg md:opacity-0 md:group-hover/carousel:opacity-100 md:translate-x-4 md:group-hover/carousel:translate-x-0 transition-all duration-300 cursor-pointer"
          aria-label="Next slide">
          <ChevronRight size={24} className="stroke-3" />
        </button>
      </div>

      <div className="flex items-center gap-3 mt-16 relative z-20">
        {MANAGEMENT_DATA.map((_, idx) => (
          <button
            key={`dot-${idx}`}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? "w-8 bg-primary-500 shadow-[0_0_10px_#10b981]"
                : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselJajaran;
