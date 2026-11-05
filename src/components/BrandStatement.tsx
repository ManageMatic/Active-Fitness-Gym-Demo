import { motion } from "framer-motion";

export default function BrandStatement() {
  const headlineWords = ["THIS", "IS", "WHERE", "DISCIPLINE", "BECOMES", "RESULTS."];

  return (
    <section
      id="brand-statement"
      className="relative py-14 sm:py-20 bg-[#0A0C09] border-b border-white/[0.07] overflow-hidden"
    >
      {/* Background ambient lighting subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C8F169]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Brand Kicker */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-8 h-[1px] bg-[#C8F169]" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C8F169]">
            PHILOSOPHY &amp; ETHOS
          </span>
          <div className="w-8 h-[1px] bg-[#C8F169]" />
        </div>

        {/* Oversized Animated Headline with Wide Letter Spacing */}
        <div className="max-w-5xl mx-auto mb-10">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-[0.09em] text-white leading-[1.02] flex flex-wrap justify-center gap-x-3 sm:gap-x-5 gap-y-1 sm:gap-y-2">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={word === "RESULTS." ? "text-[#C8F169] drop-shadow-[0_0_25px_rgba(200,241,105,0.4)]" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed"
        >
          Whether you&apos;re stepping into a gym for the first time or pushing toward your next personal best,
          Active Fitness is built around one idea — <strong className="text-white font-medium">helping you train with purpose.</strong>
        </motion.p>

        {/* Gym Wall Quote Highlight - Glassmorphic Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 inline-block px-7 py-3.5 rounded-full bg-zinc-950/80 backdrop-blur-xl border border-white/10 text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-300 shadow-xl"
        >
          <span className="text-[#C8F169]">“PUSH HARDER THAN YESTERDAY</span> IF YOU WANT A DIFFERENT TOMORROW”
        </motion.div>
      </div>
    </section>
  );
}
