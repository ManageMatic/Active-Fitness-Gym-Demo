import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";

interface HeroProps {
  onOpenTrialModal?: () => void;
  onExploreClick?: () => void;
}

export default function Hero({ onOpenTrialModal, onExploreClick }: HeroProps) {
  const handleScrollExplore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById("about");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#about");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#0A0C09] pt-24 sm:pt-28"
    >
      {/* Background Image Container with Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0.45 }}
          animate={{ scale: 1.02, opacity: 0.65 }}
          transition={{ duration: 3.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="/images/hero.webp"
            alt="Active Fitness Gym - Modern Luxury Training Arena in Surat"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Multi-layer Cinematic Shadows & Color Washes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C09] via-[#0A0C09]/60 to-[#0A0C09]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C09]/95 via-[#0A0C09]/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0A0C09_95%)]" />
      </div>

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-grain opacity-35" />

      {/* Main Hero Visual & Typography Block */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-4 sm:py-8 flex flex-col justify-center">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center gap-2.5 mb-3 sm:mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/65 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C8F169] animate-ping" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/90">
              ACTIVE FITNESS • SURAT
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-[#C8F169]" />
            <span className="tracking-wider uppercase">PARVAT GAM • 2ND FLOOR THE PALACE</span>
          </div>
        </motion.div>

        {/* Oversized Cinematic Display Headline with Wide Letter-Spacing */}
        <div className="mb-4 sm:mb-5 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-bold tracking-[0.06em] text-white uppercase leading-[0.92] select-none"
          >
            ACTIVATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              YOUR
            </span>{" "}
            <br />
            <span className="text-[#C8F169] drop-shadow-[0_0_35px_rgba(200,241,105,0.45)]">POTENTIAL.</span>
          </motion.h1>
        </div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-6 sm:mb-8"
        >
          {businessInfo.subTagline}
        </motion.p>

        {/* CTA Buttons - Guaranteed Above The Fold */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-md sm:max-w-none"
        >
          <button
            onClick={onOpenTrialModal}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 bg-[#C8F169] text-black font-display font-bold text-sm sm:text-base uppercase tracking-wider rounded-sm transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(200,241,105,0.4)] active:scale-95 cursor-pointer shadow-lg"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <button
            onClick={onExploreClick}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 hover:border-white/20 font-display font-medium text-sm sm:text-base uppercase tracking-wider rounded-sm transition-all duration-300 backdrop-blur-sm cursor-pointer active:scale-95"
          >
            <span>EXPLORE THE GYM</span>
            <span className="text-[#C8F169] transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Hero Bar with Location & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 border-t border-white/[0.08] bg-black/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#C8F169]" />
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium">
              📍 PARVAT GAM, SURAT
            </span>
          </div>

          <a
            href="#about"
            onClick={handleScrollExplore}
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span className="hidden sm:inline">SCROLL TO EXPLORE</span>
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C8F169] transition-colors">
              <ArrowDown className="w-3 h-3 text-[#C8F169] animate-bounce" />
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
