import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface FacilityZone {
  id: string;
  name: string;
  headline: string;
  description: string;
  features: string[];
  image: string;
}

export default function Facilities() {
  const [activeZone, setActiveZone] = useState("strength");

  const zones: FacilityZone[] = [
    {
      id: "strength",
      name: "STRENGTH",
      headline: "BIOMECHANICAL STRENGTH TRAINING FLOOR",
      description:
        "Modern training equipment arranged across dedicated biomechanical lifting bays with shock-absorbing rubber flooring and spacious layout.",
      features: [
        "Selectorized upper & lower body machines",
        "Plate-loaded presses & compound stations",
        "Impact-resistant industrial rubber tiling",
        "High-definition mirror walls with linear illumination",
      ],
      image: "/images/facilities/strength-floor.webp",
    },
    {
      id: "cardio",
      name: "CARDIO",
      headline: "HIGH-PERFORMANCE CARDIO & ENDURANCE SUITE",
      description:
        "Modern endurance cardiovascular machinery and high-cadence training decks engineered for sustained stamina and peak cardiovascular output.",
      features: [
        "Commercial sprint treadmills & cross-trainers",
        "High-cadence indoor cycle ergometers",
        "Direct ambient climate-controlled air flow",
        "Integrated telemetry and heart-rate tracking",
      ],
      image: "/images/facilities/cardio-zone.webp",
    },
    {
      id: "free-weights",
      name: "FREE WEIGHTS",
      headline: "FREE WEIGHTS & OLYMPIC BENCHES",
      description:
        "Modern training equipment with comprehensive commercial dumbbell racks, flat/incline/decline adjustable benches, and Olympic barbell lifting zones.",
      features: [
        "Extensive commercial dumbbell pairs",
        "Multi-angle adjustable lifting benches",
        "Olympic barbells and calibrated bumper plates",
        "Heavy-duty squat & rack support",
      ],
      image: "/images/facilities/free-weights.webp",
    },
    {
      id: "functional",
      name: "FUNCTIONAL",
      headline: "FUNCTIONAL MOVEMENT & AGILITY TURF",
      description:
        "Modern training equipment including weighted sleds, turf sprint track, kettlebell racks, and agility platforms for high-performance athletic training.",
      features: [
        "Synthetic turf sprint & push sled lane",
        "Kettlebell collection for functional power",
        "Plyometric jump boxes & medicine balls",
        "Multi-grip pull-up and suspension rigs",
      ],
      image: "/images/facilities/functional-turf.webp",
    },
  ];

  const currentZone = zones.find((z) => z.id === activeZone) || zones[0];

  return (
    <section id="facilities" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#0A0C09] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8F169]">
                03 — FACILITY &amp; SPACES
              </span>
              <div className="h-[1px] w-12 bg-[#C8F169]/40" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-[0.08em] text-white leading-none">
              BUILT FOR YOUR <br />
              <span className="text-[#C8F169]">NEXT LEVEL.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Equipped with modern training equipment, atmospheric ceiling neon fixtures, and dedicated training zones at Parvat Gam.
          </p>
        </div>

        {/* 4 Horizontal Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {zones.map((zone) => {
            const isSelected = zone.id === activeZone;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                className={`p-4 rounded-sm text-left transition-all duration-300 border cursor-pointer relative ${
                  isSelected
                    ? "bg-zinc-900/90 border-[#C8F169] shadow-[0_0_20px_rgba(200,241,105,0.2)] -translate-y-0.5"
                    : "bg-zinc-950/60 backdrop-blur-xl border-white/[0.07] hover:border-white/20 text-zinc-400"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[11px] font-bold tracking-widest uppercase ${
                      isSelected ? "text-[#C8F169]" : "text-zinc-500"
                    }`}
                  >
                    ZONE
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169] animate-pulse" />}
                </div>
                <h3
                  className={`font-display text-base sm:text-lg font-bold uppercase tracking-[0.1em] ${
                    isSelected ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {zone.name}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Zone Display Card */}
        <div className="relative rounded-sm overflow-hidden border border-white/[0.08] bg-zinc-950/80 backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 min-h-[500px] shadow-2xl">
          {/* Main Visual Image */}
          <div className="lg:col-span-8 relative min-h-[360px] lg:min-h-full overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentZone.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <img
                  src={currentZone.image}
                  alt={currentZone.headline}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent lg:hidden" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-950 hidden lg:block" />

            {/* Amenity Badge */}
            <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8F169]" />
              <span className="text-[10px] font-bold tracking-widest text-white uppercase">
                PREMIUM FACILITY AMENITY
              </span>
            </div>
          </div>

          {/* Details & Specs Pane */}
          <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between bg-zinc-950/90">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C8F169] block mb-2">
                ZONE SPECIFICATIONS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-[0.08em] text-white mb-4">
                {currentZone.headline}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8 font-light">
                {currentZone.description}
              </p>

              {/* Bullet Features */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <p className="text-[11px] font-bold tracking-widest uppercase text-zinc-500">
                  STANDARD FEATURES
                </p>
                {currentZone.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C8F169] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/[0.08] mt-8 flex items-center justify-between text-xs text-zinc-400">
              <span className="tracking-wider uppercase">Active Fitness • 2nd Floor</span>
              <span className="text-white font-medium">Parvat Gam, Surat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
