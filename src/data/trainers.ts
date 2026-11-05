export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  status: string;
  bio: string;
  image: string;
  highlights: string[];
}

export const trainersData: Trainer[] = [
  {
    id: "trainer-1",
    name: "TRAINER NAME",
    specialization: "Strength & Conditioning",
    status: "DEMO PROFILE",
    bio: "Focuses on barbell mechanics, posterior chain strength, athletic power development, and injury prevention.",
    image: "/images/trainers/trainer-1.webp",
    highlights: ["Powerlifting Technique", "Barbell Mechanics", "Injury Prevention"],
  },
  {
    id: "trainer-2",
    name: "TRAINER NAME",
    specialization: "Weight Management",
    status: "DEMO PROFILE",
    bio: "Guides metabolic conditioning protocols, body recomposition, sustainable nutritional habits, and endurance.",
    image: "/images/trainers/trainer-2.webp",
    highlights: ["Body Recomposition", "Metabolic Conditioning", "Lifestyle Guidance"],
  },
  {
    id: "trainer-3",
    name: "TRAINER NAME",
    specialization: "Muscle Building",
    status: "DEMO PROFILE",
    bio: "Specializes in muscle hypertrophy, isolated machine movements, progressive volume overload, and physique symmetry.",
    image: "/images/trainers/trainer-3.webp",
    highlights: ["Hypertrophy Science", "Symmetry Development", "Advanced Cueing"],
  },
  {
    id: "trainer-4",
    name: "TRAINER NAME",
    specialization: "Functional Fitness",
    status: "DEMO PROFILE",
    bio: "Leads functional turf training, agility drills, core conditioning, and mobility improvement for all fitness levels.",
    image: "/images/trainers/trainer-4.webp",
    highlights: ["Turf Training", "Mobility & Core", "Athletic Agility"],
  },
];
