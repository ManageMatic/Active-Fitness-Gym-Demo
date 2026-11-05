import { motion } from "framer-motion";

export default function Transformation() {
  const transformationPillars = [
    {
      id: "body-composition",
      title: "BODY COMPOSITION",
      subtitle: "Lean Muscle Retention & Fat Reduction",
      description:
        "Calibrated progressive resistance training paired with nutritional accountability, targeting visible physique definition and metabolic enhancement.",
      status: "DEMO TRANSFORMATION",
      image: "/images/transformations/trans-1.webp",
      metrics: ["Visually Enhanced Symmetry", "Reduced Body Fat Percentage", "Sustainable Habits"],
    },
    {
      id: "strength-evolution",
      title: "STRENGTH EVOLUTION",
      subtitle: "Compound Force Output & Structural Power",
      description:
        "Mastering the biomechanics of squats, deadlifts, and presses under progressive overload to build measurable, repeatable physical strength.",
      status: "DEMO TRANSFORMATION",
      image: "/images/transformations/trans-3.webp",
      metrics: ["Compound Lift Progression", "Joint & Tendon Durability", "Core Power"],
    },
    {
      id: "athletic-consistency",
      title: "DAILY CONSISTENCY",
      subtitle: "Mental Discipline & Vitality Routine",
      description:
        "Transforming workout frequency into an automatic daily discipline, fostering unwavering mental stamina, focus, and lifestyle longevity.",
      status: "DEMO TRANSFORMATION",
      image: "/images/transformations/trans-2.webp",
      metrics: ["Habitual Workout Adherence", "Enhanced Energy & Stamina", "Long-Term Health"],
    },
  ];

  return (
    <section id="transformation" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#0A0C09] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-[#C8F169]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8F169]">
              05 — TRANSFORMATION PHILOSOPHY
            </span>
            <div className="w-8 h-[1px] bg-[#C8F169]" />
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-[0.08em] text-white leading-none mb-4">
            YOUR PROGRESS. <br />
            <span className="text-[#C8F169]">YOUR STORY.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Real physical transformation requires consistency, smart progressive overload, and an environment that fuels your work ethic.
          </p>
        </div>

        {/* 3 Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformationPillars.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative bg-zinc-950/70 backdrop-blur-xl border border-white/[0.07] hover:border-[#C8F169]/60 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8),0_0_20px_-5px_rgba(200,241,105,0.15)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                {/* Demo Staging Ribbon */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/85 backdrop-blur-md border border-white/10 rounded-sm">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#C8F169]">
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#C8F169] block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-[0.08em] text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169]" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Disclaimer */}
        <p className="text-[11px] text-zinc-500 mt-8 text-center max-w-2xl mx-auto">
          *Visual transformation concepts for presentation demonstration. Verified Active Fitness member before/after case studies and testimonials will be showcased with client authorization.
        </p>
      </div>
    </section>
  );
}
