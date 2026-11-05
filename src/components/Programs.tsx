import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { programsData } from "@/data/programs";

interface ProgramsProps {
  onOpenTrialModal?: () => void;
}

export default function Programs({ onOpenTrialModal }: ProgramsProps) {
  return (
    <section id="programs" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#0A0C09] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8F169]">
                02 — PROPOSED CATEGORIES
              </span>
              <div className="h-[1px] w-12 bg-[#C8F169]/40" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-[0.08em] text-white leading-none">
              TRAIN WITH <br />
              <span className="text-[#C8F169]">PURPOSE.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-2">
              Proposed program categories tailored for client presentation to demonstrate how members will discover and explore training options.
            </p>
            <span className="text-[11px] text-[#C8F169] uppercase tracking-wider font-semibold">
              *Programs subject to Active Fitness confirmation
            </span>
          </div>
        </div>

        {/* 6 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programsData.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between bg-zinc-950/70 backdrop-blur-xl border border-white/[0.07] hover:border-[#C8F169]/50 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8),0_0_25px_-5px_rgba(200,241,105,0.15)]"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-60 w-full overflow-hidden bg-black">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 opacity-75 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-sm">
                  <span className="font-display text-xs font-bold tracking-widest text-[#C8F169]">
                    {prog.number}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#C8F169] block mb-1">
                    {prog.subtitle}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-[0.08em] text-white mb-3 group-hover:text-[#C8F169] transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                    {prog.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-white/[0.06]">
                    {prog.focus.map((item, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-[#C8F169]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA with animated arrow */}
                <button
                  onClick={onOpenTrialModal}
                  className="w-full inline-flex items-center justify-between py-3.5 px-4 bg-white/[0.04] group-hover:bg-[#C8F169] text-white group-hover:text-black font-display font-semibold uppercase tracking-wider text-xs rounded-sm transition-all duration-300 border border-white/[0.08] group-hover:border-[#C8F169] cursor-pointer"
                >
                  <span>INQUIRE ABOUT THIS PROGRAM</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
