import { ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";

export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function SocialSection() {
  const socialCards = [
    {
      id: "social-1",
      image: "/images/facilities/strength-floor.webp",
      caption: "Push harder than yesterday if you want a different tomorrow. The energy inside Active Fitness is unmatched.",
    },
    {
      id: "social-2",
      image: "/images/programs/strength.webp",
      caption: "Compound lifts, heavy iron, and pure discipline. Activate your potential daily.",
    },
    {
      id: "social-3",
      image: "/images/facilities/cardio-zone.webp",
      caption: "Endurance cardio deck illuminated in dark crimson. Ready for the evening conditioning wave?",
    },
    {
      id: "social-4",
      image: "/images/facilities/free-weights.webp",
      caption: "The dumbbell deck calibrated for serious hypertrophy and symmetrical development.",
    },
  ];

  return (
    <section id="social" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#0A0C09] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <InstagramIcon className="w-4 h-4 text-[#C8F169]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8F169]">
                SOCIAL COMMUNITY
              </span>
              <div className="h-[1px] w-12 bg-[#C8F169]/40" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-[0.08em] text-white leading-none">
              FOLLOW THE <br />
              <span className="text-[#C8F169]">ACTIVE LIFE.</span>
            </h2>
            <a
              href={businessInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-sm sm:text-base font-semibold text-zinc-400 hover:text-[#C8F169] transition-colors"
            >
              <span>{businessInfo.instagramHandle}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <a
            href={businessInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#C8F169] to-[#B9E85D] text-black font-display font-semibold uppercase tracking-wider text-sm rounded-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(200,241,105,0.3)] self-start md:self-auto active:scale-95"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>FOLLOW {businessInfo.instagramHandle}</span>
          </a>
        </div>

        {/* 4 Social Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {socialCards.map((card) => (
            <a
              key={card.id}
              href={businessInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-sm overflow-hidden border border-white/[0.08] bg-zinc-950/70 hover:border-[#C8F169]/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={card.image}
                alt="Active Fitness Instagram Post"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5">
                <div className="flex items-center justify-between text-white text-xs">
                  <span className="font-display tracking-widest text-[#C8F169]">ACTIVE FITNESS</span>
                  <InstagramIcon className="w-4 h-4 text-white" />
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-200 line-clamp-3 leading-snug">
                  {card.caption}
                </p>
                <div className="flex items-center gap-3 text-white/80 text-[11px]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#C8F169] fill-[#C8F169]" />
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-white" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-[11px] text-zinc-500 mt-4 text-center">
          *Demonstrative Instagram preview layout. Real member reels and posts stream directly from {businessInfo.instagramHandle}.
        </p>
      </div>
    </section>
  );
}
