import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { galleryData } from "@/data/gallery";

const categories = ["ALL", "TRAINING", "EQUIPMENT", "INTERIOR", "COMMUNITY"] as const;

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    selectedCategory === "ALL"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % filteredPhotos.length : 0
      );
    }
  }, [activeLightboxIndex, filteredPhotos.length]);

  const prevImage = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : 0
      );
    }
  }, [activeLightboxIndex, filteredPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#0A0C09] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8F169]">
                07 — FACILITY PHOTOGRAPHY
              </span>
              <div className="h-[1px] w-12 bg-[#C8F169]/40" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-[0.08em] text-white leading-none">
              INSIDE <br />
              <span className="text-[#C8F169]">ACTIVE FITNESS.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#A7A7A7] font-light leading-relaxed">
            A cinematic visual showcase highlighting our high-performance training floor, modern equipment bays, and athletic discipline.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/[0.08] pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-sm text-xs font-display font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#C8F169] text-black shadow-[0_0_15px_rgba(200,241,105,0.3)]"
                  : "bg-[#111111] text-[#A7A7A7] hover:text-white border border-white/[0.06] hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/[0.08] hover:border-[#C8F169]/70 bg-[#111111] transition-all duration-300 shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169]" />
                  <span className="text-[9px] font-bold tracking-widest uppercase text-white">
                    {photo.category}
                  </span>
                </div>

                {/* Hover Reveal Card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                  <div className="self-end p-2 bg-black/60 rounded-full border border-white/20 text-white">
                    <Maximize2 className="w-4 h-4 text-[#C8F169]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#C8F169] block mb-0.5">
                      {photo.category}
                    </span>
                    <h4 className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                      {photo.title}
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && filteredPhotos[activeLightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8"
          >
            {/* Top Bar */}
            <div className="w-full max-w-6xl flex items-center justify-between text-white border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-widest text-[#C8F169] uppercase">
                  {filteredPhotos[activeLightboxIndex].category}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-sm font-display uppercase tracking-wider text-white">
                  {filteredPhotos[activeLightboxIndex].title}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-[#A7A7A7] font-mono">
                  {activeLightboxIndex + 1} / {filteredPhotos.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="p-2 hover:bg-white/10 rounded-full text-white hover:text-[#C8F169] transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Central Lightbox Image */}
            <div className="relative w-full max-w-5xl h-[62vh] sm:h-[72vh] my-auto flex items-center justify-center">
              <img
                src={filteredPhotos[activeLightboxIndex].src}
                alt={filteredPhotos[activeLightboxIndex].title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Bottom Controls */}
            <div className="w-full max-w-6xl flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={prevImage}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 rounded-sm text-xs font-display uppercase tracking-wider transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 text-[#C8F169]" />
                <span className="hidden sm:inline">PREVIOUS</span>
              </button>

              <p className="text-xs text-[#A7A7A7] text-center max-w-lg hidden sm:block truncate px-4">
                {filteredPhotos[activeLightboxIndex].caption}
              </p>

              <button
                onClick={nextImage}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 rounded-sm text-xs font-display uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span className="hidden sm:inline">NEXT</span>
                <ChevronRight className="w-4 h-4 text-[#C8F169]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
