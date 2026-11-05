import { ArrowUpRight, Navigation } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";

interface FinalCTASectionProps {
  onOpenTrialModal?: () => void;
}

export default function FinalCTASection({ onOpenTrialModal }: FinalCTASectionProps) {
  return (
    <section className="relative py-36 sm:py-48 bg-[#0A0C09] border-b border-white/[0.07] overflow-hidden">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/final-cta.webp"
          alt="Active Fitness Gym Athletic Transformation"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C09] via-[#0A0C09]/75 to-[#0A0C09]" />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/75 border border-white/10 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#C8F169]" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-white/90">
            MAKE THE COMMITMENT
          </span>
        </div>

        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-[0.08em] text-white leading-[0.9] mb-6">
          YOUR STRONGER SELF <br />
          <span className="text-[#C8F169] drop-shadow-[0_0_30px_rgba(200,241,105,0.4)]">STARTS HERE.</span>
        </h2>

        <p className="max-w-xl text-base sm:text-xl text-zinc-400 font-light leading-relaxed mb-10">
          Your journey begins with one decision. Visit us at The Palace, Parvat Gam and begin your transformation today.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C8F169] text-black font-display font-bold text-base sm:text-lg uppercase tracking-wider rounded-sm hover:bg-white hover:shadow-[0_0_30px_rgba(200,241,105,0.4)] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <a
            href={businessInfo.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 font-display font-semibold text-base sm:text-lg uppercase tracking-wider rounded-sm transition-all duration-300 backdrop-blur-sm active:scale-95"
          >
            <Navigation className="w-4 h-4 text-[#C8F169]" />
            <span>VISIT ACTIVE FITNESS</span>
          </a>
        </div>
      </div>
    </section>
  );
}
