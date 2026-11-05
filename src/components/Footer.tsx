import { Link } from "react-router-dom";
import { Phone, MapPin, Navigation, ArrowUpRight } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";
import { InstagramIcon } from "./SocialSection";
import logoWhite from "@/assets/brand/active-fitness-logo-white.png";

const quickLinks = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Programs", href: "/programs" },
  { name: "Facilities", href: "/#facilities" },
  { name: "Trainers", href: "/#trainers" },
  { name: "Membership", href: "/membership" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0C09] text-zinc-400 border-t border-white/[0.07] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.07]">
          {/* Brand Info & Official Logo */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-3.5 mb-5 group inline-flex">
                <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                  <img
                    src={logoWhite}
                    alt="Active Fitness Official Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-bold tracking-[0.08em] text-white">
                    ACTIVE <span className="text-[#C8F169]">FITNESS</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-semibold">
                    SURAT • GUJARAT
                  </span>
                </div>
              </Link>

              <p className="font-display text-lg text-white uppercase tracking-[0.12em] mb-3">
                {businessInfo.brandPhrases[0]}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed mb-6 font-light">
                A premium fitness and strength center in Parvat Gam, Surat. Designed for dedicated athletes,
                progressive overload, and real physical adaptation.
              </p>
            </div>

            {/* Social & Contact Icons */}
            <div className="flex items-center gap-3">
              <a
                href={businessInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-zinc-950/70 border border-white/10 flex items-center justify-center text-white hover:text-[#C8F169] hover:border-[#C8F169] transition-colors"
                aria-label="Active Fitness Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-zinc-950/70 border border-white/10 flex items-center justify-center text-white hover:text-[#C8F169] hover:border-[#C8F169] transition-colors"
                aria-label="Active Fitness Google Maps"
              >
                <Navigation className="w-4 h-4" />
              </a>
              <a
                href={`tel:${businessInfo.phoneClean}`}
                className="w-10 h-10 rounded-sm bg-zinc-950/70 border border-white/10 flex items-center justify-center text-white hover:text-[#C8F169] hover:border-[#C8F169] transition-colors"
                aria-label="Call Active Fitness"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-xs uppercase tracking-wider text-zinc-400 hover:text-[#C8F169] transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact Information */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">
              LOCATION &amp; CONTACT
            </h4>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8F169] shrink-0 mt-0.5" />
                <div className="text-zinc-300 leading-relaxed font-light">
                  <p className="font-semibold text-white">The Palace (2nd Floor)</p>
                  <p>Opposite Capital Square</p>
                  <p>Parvat Gam, Shakti Nagar, Surat 395010</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-4 h-4 text-[#C8F169] shrink-0" />
                <div>
                  <a
                    href={`tel:${businessInfo.phoneClean}`}
                    className="text-white hover:text-[#C8F169] transition-colors font-semibold"
                  >
                    {businessInfo.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <InstagramIcon className="w-4 h-4 text-[#C8F169] shrink-0" />
                <div>
                  <a
                    href={businessInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#C8F169] transition-colors"
                  >
                    {businessInfo.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={businessInfo.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#C8F169] hover:underline uppercase tracking-wider font-semibold"
                >
                  <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Privacy & Presentation Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4 font-light">
          <p>© 2026 Active Fitness Gym. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms &amp; Conditions</span>
          </div>
          <p className="text-center sm:text-right">
            Website concept demo — final content subject to Active Fitness approval.
          </p>
        </div>
      </div>
    </footer>
  );
}
