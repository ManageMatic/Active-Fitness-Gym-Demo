export interface GalleryPhoto {
  id: string;
  title: string;
  category: "TRAINING" | "EQUIPMENT" | "INTERIOR" | "COMMUNITY";
  src: string;
  caption: string;
}

export const galleryData: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Main Performance Arena",
    category: "INTERIOR",
    src: "/images/about.webp",
    caption:
      "Atmospheric luxury gym interior with dramatic architectural lighting and dedicated lifting bays.",
  },
  {
    id: "gal-2",
    title: "Biomechanical Strength Floor",
    category: "EQUIPMENT",
    src: "/images/facilities/strength-floor.webp",
    caption:
      "Heavy-duty plate-loaded machines and multi-station strength towers designed for precise muscular isolation.",
  },
  {
    id: "gal-3",
    title: "High-Cadence Conditioning Studio",
    category: "INTERIOR",
    src: "/images/programs/group-fitness.webp",
    caption:
      "Dynamic conditioning arena engineered for explosive group workouts and athletic performance drills.",
  },
  {
    id: "gal-4",
    title: "Guided Athletic Coaching",
    category: "TRAINING",
    src: "/images/programs/personal-training.webp",
    caption:
      "One-on-one personal training, biomechanical form correction, and progressive overload tracking.",
  },
  {
    id: "gal-5",
    title: "Compound Heavy Barbell Pull",
    category: "TRAINING",
    src: "/images/programs/strength.webp",
    caption:
      "Athlete executing controlled heavy deadlift with chalk dust under dramatic atmospheric spotlights.",
  },
  {
    id: "gal-6",
    title: "Free Weight Dumbbell Arena",
    category: "EQUIPMENT",
    src: "/images/facilities/free-weights.webp",
    caption:
      "Pristine racks of commercial dumbbells and multi-angle adjustable incline/flat benches.",
  },
  {
    id: "gal-7",
    title: "Precision Lat Pull-Down Machine",
    category: "TRAINING",
    src: "/images/hero.webp",
    caption:
      "Biomechanical cable tower movement targeting latissimus dorsi with smooth resistance curve.",
  },
  {
    id: "gal-8",
    title: "Treadmill Endurance Deck",
    category: "EQUIPMENT",
    src: "/images/facilities/cardio-zone.webp",
    caption:
      "Commercial treadmills with illuminated ambient runner lines and heart-rate monitoring.",
  },
  {
    id: "gal-9",
    title: "Functional Turf Sprint Lane",
    category: "COMMUNITY",
    src: "/images/facilities/functional-turf.webp",
    caption:
      "Turf track equipped with push sleds, kettlebells, and plyo boxes for high-intensity athletic conditioning.",
  },
  {
    id: "gal-10",
    title: "Dedicated Coaching & Mentorship",
    category: "TRAINING",
    src: "/images/trainers/trainer-2.webp",
    caption:
      "Personalized trainer form correction and technique cues during training sets.",
  },
  {
    id: "gal-11",
    title: "Post-Workout Athletic Stance",
    category: "COMMUNITY",
    src: "/images/membership.webp",
    caption:
      "Dedicated member reflecting after an intense training session inside the facility.",
  },
  {
    id: "gal-12",
    title: "Uncompromising Lifting Standards",
    category: "COMMUNITY",
    src: "/images/final-cta.webp",
    caption:
      "The relentless pursuit of physical performance and daily consistency.",
  },
];
