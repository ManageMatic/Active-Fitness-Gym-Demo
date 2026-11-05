import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Check } from "lucide-react";

interface GoalSelectorProps {
  onSelectGoal?: (goal: string) => void;
  onOpenTrialModal?: () => void;
}

interface GoalData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  recommended: string[];
  focusAreas: string[];
  workoutSplit: string;
  image: string;
}

export default function GoalSelector({ onOpenTrialModal }: GoalSelectorProps) {
  const [selectedGoalId, setSelectedGoalId] = useState("build-muscle");

  const goals: GoalData[] = [
    {
      id: "build-muscle",
      name: "BUILD MUSCLE",
      tagline: "Hypertrophy, Structural Density & Physique Symmetry",
      description:
        "Structured training designed around progressive resistance, calibrated mechanical tension, and consistent volume overload across targeted muscle groups.",
      recommended: ["Muscle Building", "Strength Training", "Personal Training"],
      focusAreas: ["Compound Movements", "Time Under Tension", "High Protein Nutrition Guidance"],
      workoutSplit: "4 to 5 Days / Week • Upper/Lower or Push-Pull-Legs",
      image: "/images/programs/muscle.webp",
    },
    {
      id: "lose-fat",
      name: "LOSE FAT",
      tagline: "Metabolic Conditioning & Lean Muscle Preservation",
      description:
        "High-density circuit resistance, cardio acceleration, and caloric expenditure strategies engineered to maximize fat loss while preserving vital athletic muscle tissue.",
      recommended: ["Weight Management", "Group Fitness", "Cardio Conditioning"],
      focusAreas: ["High-Intensity Conditioning", "Metabolic Circuits", "Caloric Deficit Guidance"],
      workoutSplit: "3 to 5 Days / Week • Full Body Circuits & Steady Cardio",
      image: "/images/programs/weight-loss.webp",
    },
    {
      id: "get-stronger",
      name: "GET STRONGER",
      tagline: "Raw Central Nervous System Power & Heavy Compound Mastery",
      description:
        "Lifting heavy iron with precision form. Emphasizes the foundational squat, bench press, deadlift, and overhead press with structured periodization.",
      recommended: ["Strength Training", "Personal Training", "Biomechanical Screening"],
      focusAreas: ["Barbell Mechanics", "Maximal Force Output", "Progressive Overload Tracking"],
      workoutSplit: "3 to 4 Days / Week • Pure Compound Power Focus",
      image: "/images/programs/strength.webp",
    },
    {
      id: "improve-fitness",
      name: "IMPROVE FITNESS",
      tagline: "Daily Functional Stamina, Mobility & Heart Health",
      description:
        "A holistic athletic regimen designed to optimize aerobic capacity, joint health, functional movement, and daily vitality for active working individuals.",
      recommended: ["General Fitness", "Cardio Deck", "Functional Turf Training"],
      focusAreas: ["VO2 Max Elevation", "Joint Longevity & Flexibility", "Core Stability"],
      workoutSplit: "3 to 4 Days / Week • Balanced Cardio & Resistance",
      image: "/images/programs/general-fitness.webp",
    },
  ];

  const currentGoal = goals.find((g) => g.id === selectedGoalId) || goals[0];

  return (
    <section id="goal-selector" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#0A0C09] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-[#C8F169]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8F169]">
              INTERACTIVE GOAL SELECTOR
            </span>
            <div className="w-8 h-[1px] bg-[#C8F169]" />
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-[0.08em] text-white leading-none mb-4">
            WHAT ARE YOU <br />
            <span className="text-[#C8F169]">TRAINING FOR?</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Select your primary objective to uncover recommended programs and tailored training methodologies.
          </p>
        </div>

        {/* 4 Interactive Goal Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {goals.map((goal) => {
            const isSelected = goal.id === selectedGoalId;
            return (
              <button
                key={goal.id}
                onClick={() => setSelectedGoalId(goal.id)}
                className={`p-5 sm:p-6 rounded-sm text-left transition-all duration-300 relative border cursor-pointer ${
                  isSelected
                    ? "bg-zinc-900/90 border-[#C8F169] shadow-[0_0_25px_rgba(200,241,105,0.2)] -translate-y-0.5"
                    : "bg-zinc-950/60 backdrop-blur-xl border-white/[0.07] hover:border-white/20 text-zinc-400"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[11px] font-bold tracking-widest uppercase ${
                      isSelected ? "text-[#C8F169]" : "text-zinc-500"
                    }`}
                  >
                    TARGET
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#C8F169] animate-pulse" />}
                </div>
                <h3
                  className={`font-display text-lg sm:text-xl font-bold uppercase tracking-[0.1em] ${
                    isSelected ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {goal.name}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Dynamic Animated Content Panel */}
        <div className="relative rounded-sm overflow-hidden border border-white/[0.08] bg-zinc-950/80 backdrop-blur-2xl min-h-[460px] shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGoal.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 h-full"
            >
              {/* Left Details Pane */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8F169]/15 border border-[#C8F169]/30 rounded-sm mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-[#C8F169]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C8F169]">
                      RECOMMENDED FOCUS
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-[0.08em] text-white mb-3">
                    {currentGoal.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C8F169] font-semibold tracking-wider uppercase mb-6">
                    {currentGoal.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8 font-light">
                    {currentGoal.description}
                  </p>

                  {/* Recommended Programs Pill Badges */}
                  <div className="mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 block mb-3">
                      RECOMMENDED PROGRAMS AT ACTIVE FITNESS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentGoal.recommended.map((prog, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1.5 rounded-sm bg-white/[0.05] border border-white/10 text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5"
                        >
                          <Check className="w-3.5 h-3.5 text-[#C8F169]" />
                          <span>{prog}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Split recommendation */}
                  <div className="p-3.5 rounded-sm bg-[#0A0C09] border border-white/[0.06] text-xs text-zinc-400">
                    <strong className="text-white uppercase tracking-wider font-semibold">Suggested Cadence: </strong>
                    {currentGoal.workoutSplit}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenTrialModal}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C8F169] text-black font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(200,241,105,0.3)] cursor-pointer active:scale-95"
                  >
                    <span>START TRAINING FOR {currentGoal.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider">
                    Free consultation included
                  </span>
                </div>
              </div>

              {/* Right Visual Image */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-black">
                <img
                  src={currentGoal.image}
                  alt={currentGoal.name}
                  className="w-full h-full object-cover object-center scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent lg:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent hidden lg:block" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
