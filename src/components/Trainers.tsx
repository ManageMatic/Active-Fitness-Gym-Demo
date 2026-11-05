import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { trainersData } from "@/data/trainers";

export default function Trainers() {
  return (
    <section id="trainers" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#0A0C09] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8F169]">
                04 — COACHING CONCEPT
              </span>
              <div className="h-[1px] w-12 bg-[#C8F169]/40" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-[0.08em] text-white leading-none">
              MEET YOUR <br />
              <span className="text-[#C8F169]">TRAINING TEAM.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Personalized technique refinement, biomechanical cueing, and consistent accountability to keep training safe and progressive.
          </p>
        </div>

        {/* Demo Staging Notice */}
        <div className="mb-12 p-4 rounded-sm bg-zinc-950/80 backdrop-blur-xl border border-white/[0.07] flex items-start gap-3 max-w-3xl">
          <Info className="w-5 h-5 text-[#C8F169] shrink-0 mt-0.5" />
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            <strong className="text-white uppercase tracking-wider font-semibold">Demo Presentation Notice: </strong>
            Trainer cards below demonstrate profile architecture. Client-approved staff photos, verified names, and credentials will be integrated prior to production.
          </p>
        </div>

        {/* 4 Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainersData.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-zinc-950/70 backdrop-blur-xl border border-white/[0.07] hover:border-[#C8F169]/60 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8),0_0_20px_-5px_rgba(200,241,105,0.15)]"
            >
              {/* Portrait Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                <img
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.specialization}`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90" />

                {/* Status Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-sm">
                  <span className="text-[10px] tracking-widest uppercase text-[#C8F169] font-semibold">
                    {trainer.status}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-5 sm:p-6">
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#C8F169] block mb-1">
                  {trainer.specialization}
                </span>
                <h3 className="font-display text-xl font-bold uppercase tracking-[0.08em] text-white mb-2">
                  {trainer.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-5 font-light">
                  {trainer.bio}
                </p>

                {/* Focus Badges */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {trainer.highlights.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 bg-white/[0.04] border border-white/[0.06] rounded-sm text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
