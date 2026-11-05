export interface Program {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  focus: string[];
}

export const programsData: Program[] = [
  {
    id: "strength-training",
    number: "01",
    title: "STRENGTH TRAINING",
    subtitle: "Raw Power & Progressive Resistance",
    description:
      "Structured resistance training focusing on compound barbell movements, functional strength, and progressive overload to build enduring power.",
    image: "/images/programs/strength.webp",
    focus: ["Compound Lifts", "Progressive Overload", "Structural Integrity"],
  },
  {
    id: "muscle-building",
    number: "02",
    title: "MUSCLE BUILDING",
    subtitle: "Hypertrophy & Physical Symmetry",
    description:
      "Targeted hypertrophy routines with optimal time under tension, isolating muscle groups through biomechanically aligned selectorized machinery.",
    image: "/images/programs/muscle.webp",
    focus: ["Time Under Tension", "Balanced Symmetry", "Hypertrophy Protocols"],
  },
  {
    id: "weight-management",
    number: "03",
    title: "WEIGHT MANAGEMENT",
    subtitle: "Metabolic Rate & Lean Definition",
    description:
      "High-output metabolic conditioning combined with calibrated resistance sessions engineered to accelerate caloric burn while preserving lean tissue.",
    image: "/images/programs/weight-loss.webp",
    focus: ["Metabolic Conditioning", "Fat Loss Science", "Sustainable Habits"],
  },
  {
    id: "personal-training",
    number: "04",
    title: "PERSONAL TRAINING",
    subtitle: "1-on-1 Dedicated Mentorship",
    description:
      "Direct coaching from certified trainers focusing on lifting technique, injury prevention, accountability, and customized training regimens.",
    image: "/images/programs/personal-training.webp",
    focus: ["Form Correction", "Tailored Roadmap", "Accountability"],
  },
  {
    id: "group-fitness",
    number: "05",
    title: "GROUP FITNESS",
    subtitle: "High-Energy Athletic Community",
    description:
      "Fast-paced conditioning sessions, circuit drills, and functional challenges surrounded by members who push each other past limits.",
    image: "/images/programs/group-fitness.webp",
    focus: ["Agility & Stamina", "Community Drive", "High Calorie Burn"],
  },
  {
    id: "general-fitness",
    number: "06",
    title: "GENERAL FITNESS",
    subtitle: "Daily Vitality & Longevity",
    description:
      "A balanced training approach for working professionals and fitness enthusiasts looking to move better, maintain energy, and stay healthy.",
    image: "/images/programs/general-fitness.webp",
    focus: ["Cardiovascular Health", "Joint Mobility", "Daily Energy"],
  },
];
