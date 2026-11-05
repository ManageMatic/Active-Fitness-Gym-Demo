export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  brandPhrases: string[];
  address: string;
  landmark: string;
  area: string;
  cityState: string;
  pincode: string;
  country: string;
  phone: string;
  phoneDisplay: string;
  phoneClean: string;
  instagram: string;
  instagramHandle: string;
  maps: string;
  rating: number;
  reviewCount: number;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

export const businessInfo: BusinessInfo = {
  name: "Active Fitness Gym",
  shortName: "Active Fitness",
  tagline: "Activate Your Potential",
  subTagline: "Train with purpose. Build strength. Become the strongest version of yourself.",
  brandPhrases: [
    "ACTIVATE YOUR POTENTIAL.",
    "TRAIN. TRANSFORM. REPEAT.",
    "MOVE WITH PURPOSE.",
    "STRONGER STARTS HERE.",
    "YOUR GOAL. YOUR GRIND.",
  ],
  address:
    "2nd Floor, The Palace, opposite Capital Square, Parvat Gam, Shakti Nagar, Surat, Gujarat 395010",
  landmark: "Opposite Capital Square",
  area: "Parvat Gam, Shakti Nagar",
  cityState: "Surat, Gujarat",
  pincode: "395010",
  country: "India",
  phone: "+91 76001 61118",
  phoneDisplay: "+91 76001 61118",
  phoneClean: "917600161118",
  instagram: "https://www.instagram.com/activee_fitness/",
  instagramHandle: "@activee_fitness",
  maps: "https://maps.app.goo.gl/JM6XdpbvhiDtRV7y9",
  rating: 4.8,
  reviewCount: 193,
  hours: {
    monday: "5:00 AM - 10:00 PM",
    tuesday: "5:00 AM - 10:00 PM",
    wednesday: "5:00 AM - 10:00 PM",
    thursday: "5:00 AM - 10:00 PM",
    friday: "5:00 AM - 10:00 PM",
    saturday: "5:00 AM - 9:00 PM (Approx - to be confirmed)",
    sunday: "Hours to be confirmed",
  },
};
