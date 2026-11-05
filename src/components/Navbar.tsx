import { useState, useEffect } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";
import logoWhite from "@/assets/brand/active-fitness-logo-white.png";

interface NavbarProps {
  onOpenMembershipModal?: () => void;
  onOpenTrialModal?: () => void;
}

export default function Navbar({ onOpenMembershipModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#hero" },
    { name: "ABOUT", href: "#about" },
    { name: "PROGRAMS", href: "#programs" },
    { name: "FACILITIES", href: "#facilities" },
    { name: "TRAINERS", href: "#trainers" },
    { name: "MEMBERSHIP", href: "#membership" },
    { name: "GALLERY", href: "#gallery" },
    { name: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("/#", "").replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${targetId}`);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0C09]/95 backdrop-blur-xl border-b border-white/[0.08] py-2 sm:py-3 shadow-2xl"
          : "bg-gradient-to-b from-[#0A0C09]/90 via-[#0A0C09]/50 to-transparent py-2 sm:py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Official Uploaded Active Fitness Identity */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex items-center gap-3 focus:outline-none cursor-pointer"
          aria-label="Active Fitness Gym Home"
        >
          <div className="relative w-10 h-10 sm:w-13 sm:h-13 flex items-center justify-center shrink-0">
            <img
              src={logoWhite}
              alt="Active Fitness Official Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.08em] text-white leading-none">
              ACTIVE <span className="text-[#C8F169]">FITNESS</span>
            </span>
            <span className="text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-semibold mt-1">
              SURAT • GUJARAT
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs uppercase tracking-[0.16em] font-medium text-zinc-400 hover:text-white transition-colors duration-200 relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#C8F169] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button (Arrow removed, clean & bold) */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenMembershipModal}
            className="bg-[#C8F169] text-black font-display font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-2.5 rounded-sm transition-all duration-300 hover:bg-white hover:text-black shadow-[0_0_20px_rgba(200,241,105,0.35)] active:scale-95 cursor-pointer"
          >
            JOIN NOW
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white hover:border-[#C8F169]/50 hover:text-[#C8F169] focus:outline-none transition-colors cursor-pointer"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full h-[calc(100dvh-56px)] sm:h-[calc(100dvh-76px)] bg-[#0A0C09]/[0.98] backdrop-blur-2xl border-t border-white/[0.08] flex flex-col justify-between px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] overflow-y-auto overscroll-contain animate-in slide-in-from-top-4 duration-300 z-50">
          <nav className="flex flex-col" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group font-display text-xl sm:text-2xl uppercase tracking-[0.08em] text-[#EAEAEA] hover:text-[#C8F169] transition-colors py-3.5 border-b border-white/[0.07] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="h-4 w-4 text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-[#C8F169]" aria-hidden="true" />
              </a>
            ))}
          </nav>

          <div className="pt-5 mt-5 border-t border-white/[0.08] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenMembershipModal) onOpenMembershipModal();
              }}
              className="w-full text-center bg-[#C8F169] text-black font-display font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-[0_0_20px_rgba(200,241,105,0.2)] text-base active:scale-[0.98] cursor-pointer"
            >
              JOIN ACTIVE FITNESS
            </button>
            <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-1.5 pt-1 text-xs text-zinc-400">
              <a href={`tel:${businessInfo.phone}`} className="hover:text-white transition-colors">{businessInfo.phoneDisplay}</a>
              <span>Parvat Gam, Surat</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
