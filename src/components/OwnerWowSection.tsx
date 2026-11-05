import { ArrowUpRight, Search, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

interface OwnerWowSectionProps {
  onOpenTrialModal?: () => void;
}

export default function OwnerWowSection({ onOpenTrialModal }: OwnerWowSectionProps) {
  const benefits = [
    {
      num: "01",
      title: "GET DISCOVERED",
      description:
        "Help people find Active Fitness when they search for a gym in Surat, Parvat Gam, or near Capital Square with high-converting search visibility.",
      icon: Search,
    },
    {
      num: "02",
      title: "SHOW YOUR BRAND",
      description:
        "Give your gym a premium, cinematic online identity that matches the high standard and energy of your physical facility.",
      icon: Sparkles,
    },
    {
      num: "03",
      title: "GENERATE LEADS",
      description:
        "Turn casual website visitors into confirmed free trial bookings, telephone calls, WhatsApp chats, and long-term memberships.",
      icon: TrendingUp,
    },
    {
      num: "04",
      title: "BUILD TRUST",
      description:
        "Showcase your modern training floor, diverse workout zones, structured programs, and verified 4.8-star member reputation.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#0A0C09] border-b border-white/[0.07] overflow-hidden">
      {/* Decorative background grid and glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[300px] bg-[#C8F169]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8F169]">
                CLIENT PRESENTATION PERSPECTIVE
              </span>
              <div className="h-[1px] w-12 bg-[#C8F169]/40" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-[0.08em] text-white leading-none">
              YOUR GYM. <br />
              <span className="text-[#C8F169]">YOUR DIGITAL PRESENCE.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            How this bespoke digital platform empowers Active Fitness to stand out in the Surat fitness market and scale member enrollment.
          </p>
        </div>

        {/* 4 Commercial Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.num}
                className="p-7 rounded-sm bg-zinc-950/70 backdrop-blur-xl border border-white/[0.07] hover:border-[#C8F169]/60 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-4xl font-bold text-white/20 group-hover:text-[#C8F169] transition-colors">
                      {b.num}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:text-[#C8F169] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase tracking-[0.08em] text-white mb-3">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.05] flex items-center text-[10px] font-bold tracking-widest uppercase text-[#C8F169]">
                  <span>GROWTH IMPACT</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Presentation CTA Banner */}
        <div className="p-8 sm:p-12 rounded-sm bg-zinc-950/80 backdrop-blur-2xl border border-[#C8F169]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_0_40px_rgba(200,241,105,0.15)]">
          <div>
            <h4 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-[0.08em] text-white mb-1">
              READY TO LAUNCH THIS EXPERIENCE FOR ACTIVE FITNESS?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              Engineered with clean React code, ready to connect custom domain, analytics, and CRM.
            </p>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C8F169] text-black font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-white transition-all duration-300 whitespace-nowrap shadow-lg shrink-0 cursor-pointer active:scale-95"
          >
            <span>BUILD THE ACTIVE FITNESS EXPERIENCE</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
