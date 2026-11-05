import { Star, MessageSquareQuote, ExternalLink } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";

export default function Reviews() {
  const reviewPlaceholders = [
    {
      id: "rev-1",
      tag: "STRENGTH & WORKOUT FLOOR",
      placeholderText: "Real member reviews and verified Google feedback will appear here.",
      subText: "Google Business Review Integration Ready",
    },
    {
      id: "rev-2",
      tag: "COACHING & ATMOSPHERE",
      placeholderText: "Member testimonial to be integrated upon client approval.",
      subText: "Active Fitness Community Member",
    },
    {
      id: "rev-3",
      tag: "FACILITY & EQUIPMENT",
      placeholderText: "Client-approved testimonials coming soon for public display.",
      subText: "Verified Gym Member",
    },
  ];

  return (
    <section id="reviews" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#0A0C09] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Banner Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-8 p-8 sm:p-10 rounded-sm bg-zinc-950/80 backdrop-blur-2xl border border-white/[0.08] shadow-2xl">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8F169]">
                VERIFIED PUBLIC RATING
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-[0.08em] text-white mb-2">
              WHAT MEMBERS SAY.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              Current public listing metrics on Google Maps for Active Fitness Gym, Parvat Gam, Surat.
            </p>
          </div>

          {/* Rating Metric Card */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-8">
            <div>
              <div className="flex items-center gap-1.5 mb-1 text-[#C8F169]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C8F169] text-[#C8F169]" />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-wider">
                  {businessInfo.rating}
                </span>
                <span className="text-xs sm:text-sm text-zinc-400">/ 5.0 Rating</span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mt-1">
                Based on {businessInfo.reviewCount}+ Google Reviews
              </span>
            </div>

            <a
              href={businessInfo.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-display font-semibold uppercase tracking-wider text-xs rounded-sm hover:bg-[#C8F169] hover:text-black transition-colors whitespace-nowrap shadow-md active:scale-95"
            >
              <span>VIEW GOOGLE REVIEWS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3 Ethical Review Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewPlaceholders.map((rev) => (
            <div
              key={rev.id}
              className="p-7 rounded-sm bg-zinc-950/70 backdrop-blur-xl border border-white/[0.07] hover:border-[#C8F169]/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <MessageSquareQuote className="w-8 h-8 text-[#C8F169]/40 mb-4" />
                <p className="text-sm sm:text-base text-zinc-300 italic font-light mb-6 min-h-[50px]">
                  &ldquo;{rev.placeholderText}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-display font-bold uppercase tracking-wider text-white block">
                    {rev.tag}
                  </span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                    {rev.subText}
                  </span>
                </div>
                <div className="px-2 py-0.5 rounded-sm bg-white/[0.04] border border-white/10 text-[9px] text-zinc-400 uppercase tracking-widest">
                  PENDING REVIEW
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
