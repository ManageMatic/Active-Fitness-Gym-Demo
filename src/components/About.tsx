import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface AboutProps {
  onOpenTrialModal?: () => void;
}

export default function About({ onOpenTrialModal }: AboutProps) {
  const serviceConcepts = [
    {
      title: "Fitness Assessment",
      status: "Initial movement screening and baseline metrics",
    },
    {
      title: "One-to-One Training",
      status: "Details to be confirmed by Active Fitness",
    },
    {
      title: "Group Training",
      status: "Details to be confirmed by Active Fitness",
    },
    {
      title: "Nutrition Guidance",
      status: "Details to be confirmed by Active Fitness",
    },
  ];

  return (
    <section id="about" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#0A0C09] border-b border-white/[0.07] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8F169]">
            01 — ABOUT ACTIVE FITNESS
          </span>
          <div className="h-[1px] w-12 bg-[#C8F169]/40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Gym Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/[0.08] group shadow-2xl bg-zinc-950">
              <img
                src="/images/about.webp"
                alt="Active Fitness Gym - Athletic Strength Training Facility"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C09] via-transparent to-transparent opacity-80" />

              {/* Floating Real Location Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-zinc-950/85 backdrop-blur-xl border border-white/10 rounded-sm shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8F169] block mb-1">
                  FACILITY HIGHLIGHT
                </span>
                <p className="text-xs sm:text-sm font-medium text-white/95">
                  2nd Floor, The Palace, Opp. Capital Square, Parvat Gam, Surat.
                </p>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#C8F169] pointer-events-none" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C8F169] block mb-2">
              ACTIVE FITNESS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.08em] text-white leading-[1.02] mb-6">
              MORE THAN A WORKOUT. <br />
              <span className="text-[#C8F169]">A DAILY STANDARD.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#F0F0F3] font-normal leading-relaxed mb-6">
              Built for people who want to move better, train harder and make fitness part of their lifestyle.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8 font-light">
              At Active Fitness, we believe in training with intent. Located on the 2nd floor of The Palace in Parvat Gam,
              our facility blends modern biomechanic equipment, motivating ambient neon architecture, and a supportive community.
            </p>

            {/* Service Concepts */}
            <div className="space-y-3 mb-10 pt-4 border-t border-white/[0.08]">
              {serviceConcepts.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-4 p-3.5 rounded-sm bg-zinc-950/70 backdrop-blur-xl border border-white/[0.07] hover:border-[#C8F169]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C8F169] shrink-0" />
                    <span className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-white">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[11px] text-zinc-400 text-right font-light">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black font-display font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-[#C8F169] hover:text-black transition-all duration-300 shadow-lg active:scale-95"
              >
                <span>DISCOVER ACTIVE FITNESS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenTrialModal}
                className="inline-flex items-center gap-1.5 text-sm uppercase tracking-wider font-semibold text-white hover:text-[#C8F169] transition-colors py-2 cursor-pointer"
              >
                <span>BOOK TRIAL SESSION</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
