import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import TrialModal from "@/components/TrialModal";
import MembershipModal from "@/components/MembershipModal";
import Home from "@/pages/Home";

// Page transition wrapper
function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function AppContent() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [defaultMembershipPlan, setDefaultMembershipPlan] = useState<string | undefined>(undefined);

  const openTrialModal = () => setTrialModalOpen(true);
  const closeTrialModal = () => setTrialModalOpen(false);

  const openMembershipModal = (planId?: string) => {
    setDefaultMembershipPlan(planId);
    setMembershipModalOpen(true);
  };
  const closeMembershipModal = () => setMembershipModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0A0C09] text-[#EAEAEA] font-body selection:bg-[#C8F169]/30 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        onOpenMembershipModal={() => openMembershipModal()}
        onOpenTrialModal={openTrialModal}
      />

      {/* Main Page Routes */}
      <main>
        <PageTransition>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenTrialModal={openTrialModal}
                  onOpenMembershipModal={openMembershipModal}
                />
              }
            />
            {/* Fallback - redirect all unmatched routes back to home */}
            <Route
              path="*"
              element={
                <Home
                  onOpenTrialModal={openTrialModal}
                  onOpenMembershipModal={openMembershipModal}
                />
              }
            />
          </Routes>
        </PageTransition>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp / Call) */}
      <FloatingActions />

      {/* Global Modals */}
      <TrialModal isOpen={trialModalOpen} onClose={closeTrialModal} />
      <MembershipModal
        isOpen={membershipModalOpen}
        onClose={closeMembershipModal}
        defaultPlan={defaultMembershipPlan}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
