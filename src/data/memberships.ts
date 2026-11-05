export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  priceDisplay: string;
  popular?: boolean;
  badge?: string;
  description: string;
  features: string[];
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: "monthly",
    name: "MONTHLY",
    duration: "1 Month Access",
    priceDisplay: "PRICE ON REQUEST",
    description: "Flexible month-to-month training access for individuals testing their gym routine.",
    features: [
      "Full Gym Floor Access",
      "Strength & Free Weights Arena",
      "Cardio Deck & Spin Corridor",
      "Locker & Shower Facility",
      "Initial Fitness Assessment",
    ],
  },
  {
    id: "quarterly",
    name: "QUARTERLY",
    duration: "3 Months Access",
    priceDisplay: "PRICE ON REQUEST",
    description: "Ideal foundation period to establish discipline, build habit, and measure physical progress.",
    features: [
      "All Monthly Access Privileges",
      "Periodic Progress & Weight Review",
      "Customized Routine Structure",
      "Trainer Floor Support",
      "Complimentary Guest Pass (1x)",
    ],
  },
  {
    id: "half-yearly",
    name: "HALF YEARLY",
    duration: "6 Months Access",
    priceDisplay: "PRICE ON REQUEST",
    description: "Structured commitment designed for substantial body recomposition and strength development.",
    features: [
      "All Quarterly Access Privileges",
      "Bi-Monthly Form & Metric Check-in",
      "Nutrition & Dietary Guidance",
      "Priority Floor Guidance",
      "Complimentary Guest Passes (2x)",
    ],
  },
  {
    id: "yearly",
    name: "YEARLY",
    duration: "12 Months Access",
    priceDisplay: "PRICE ON REQUEST",
    popular: true,
    badge: "MOST POPULAR",
    description: "The ultimate lifestyle commitment for dedicated athletes striving for long-term transformation.",
    features: [
      "Full 365 Days Facility Access",
      "Comprehensive Fitness Screening",
      "Personalized Goal-Oriented Plan",
      "Quarterly Coach Assessments",
      "Exclusive Member Locker Privileges",
      "Maximum Value & Priority Support",
    ],
  },
];
