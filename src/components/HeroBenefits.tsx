import { ShieldCheck, Dumbbell, Target } from "lucide-react";

export default function HeroBenefits() {
  const benefits = [
    {
      num: "01",
      title: "EXPERT GUIDANCE",
      desc: "Structured biomechanical advice and dedicated training cues from passionate coaches.",
      icon: ShieldCheck,
    },
    {
      num: "02",
      title: "MODERN TRAINING",
      desc: "Comprehensive plate-loaded strength stations, free weights arena, and cardio studio.",
      icon: Dumbbell,
    },
    {
      num: "03",
      title: "GOAL-FOCUSED FITNESS",
      desc: "Targeted resistance and endurance protocols designed around your personal physical adaptations.",
      icon: Target,
    },
  ];

  return (
    <section className="relative bg-[#0A0C09] border-b border-white/[0.07] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.num}
                className="group relative flex items-start gap-4 p-6 sm:p-7 rounded-sm bg-zinc-950/70 backdrop-blur-xl border border-white/[0.07] hover:border-[#C8F169]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8),0_0_20px_-5px_rgba(200,241,105,0.15)]"
              >
                <span className="font-display text-3xl font-bold text-[#C8F169]/90 tracking-wider">
                  {b.num}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-[0.14em] text-white flex items-center gap-2 mb-1.5 group-hover:text-[#C8F169] transition-colors">
                    <span>{b.title}</span>
                    <Icon className="w-4 h-4 text-[#C8F169] transition-transform duration-300 group-hover:scale-110" />
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
