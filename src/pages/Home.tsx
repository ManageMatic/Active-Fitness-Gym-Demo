import Hero from "@/components/Hero";
import HeroBenefits from "@/components/HeroBenefits";
import BrandStatement from "@/components/BrandStatement";
import About from "@/components/About";
import GoalSelector from "@/components/GoalSelector";
import Programs from "@/components/Programs";
import Facilities from "@/components/Facilities";
import Trainers from "@/components/Trainers";
import Transformation from "@/components/Transformation";
import Membership from "@/components/Membership";
import FreeTrialCTA from "@/components/FreeTrialCTA";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import SocialSection from "@/components/SocialSection";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import OwnerWowSection from "@/components/OwnerWowSection";
import FinalCTASection from "@/components/FinalCTASection";


interface HomeProps {
  onOpenTrialModal: () => void;
  onOpenMembershipModal: (planId?: string) => void;
}

export default function Home({ onOpenTrialModal, onOpenMembershipModal }: HomeProps) {
  const scrollToFacilities = () => {
    const elem = document.getElementById("facilities");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero onOpenTrialModal={onOpenTrialModal} onExploreClick={scrollToFacilities} />

      {/* 2. Hero Business Benefits CTA */}
      <HeroBenefits />

      {/* 3. Dramatic Brand Statement */}
      <BrandStatement />

      {/* 4. About Active Fitness */}
      <About onOpenTrialModal={onOpenTrialModal} />

      {/* 5. Interactive Fitness Goal Selector */}
      <GoalSelector onOpenTrialModal={onOpenTrialModal} />

      {/* 6. Proposed Programs Showcase */}
      <Programs onOpenTrialModal={onOpenTrialModal} />

      {/* 7. Facilities & Spaces */}
      <Facilities />

      {/* 8. Trainers Coaching Concept */}
      <Trainers />

      {/* 9. Transformation Philosophy */}
      <Transformation />

      {/* 10. Membership Tiers */}
      <Membership onOpenModal={onOpenMembershipModal} />

      {/* 11. Free Trial CTA */}
      <FreeTrialCTA onOpenTrialModal={onOpenTrialModal} />

      {/* 12. Photography Gallery with Lightbox */}
      <Gallery />

      {/* 13. Public Reviews & Ratings */}
      <Reviews />

      {/* 14. Instagram Social Life */}
      <SocialSection />

      {/* 15. Exact Location & Operating Hours */}
      <Location />

      {/* 16. Contact Form */}
      <Contact />

      {/* 17. Client Presentation Owner-Wow Section */}
      <OwnerWowSection onOpenTrialModal={onOpenTrialModal} />

      {/* 18. Final Call to Action */}
      <FinalCTASection onOpenTrialModal={onOpenTrialModal} />
    </div>
  );
}
