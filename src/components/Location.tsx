import { MapPin, Phone, Navigation, ExternalLink } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";
import OpeningHours from "./OpeningHours";

export default function Location() {
  return (
    <section id="location" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#0A0C09] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8F169]">
                08 — FACILITY LOCATION
              </span>
              <div className="h-[1px] w-12 bg-[#C8F169]/40" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-[0.08em] text-white leading-none">
              FIND <br />
              <span className="text-[#C8F169]">ACTIVE FITNESS.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Conveniently situated on the 2nd Floor of The Palace, opposite Capital Square in Parvat Gam / Shakti Nagar, Surat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details & Hours */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Address Card */}
            <div className="p-7 sm:p-8 rounded-sm bg-zinc-950/70 backdrop-blur-xl border border-white/[0.07] shadow-2xl">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#C8F169] block mb-2">
                EXACT GYM ADDRESS
              </span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-[0.08em] text-white mb-4">
                ACTIVE FITNESS GYM
              </h3>

              <div className="flex items-start gap-3.5 mb-6 text-sm text-zinc-400">
                <MapPin className="w-5 h-5 text-[#C8F169] shrink-0 mt-1" />
                <div className="leading-relaxed font-light">
                  <p className="text-white font-medium">2nd Floor, The Palace</p>
                  <p>Opposite Capital Square</p>
                  <p>Parvat Gam, Shakti Nagar</p>
                  <p>Surat, Gujarat 395010, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 mb-6 pt-4 border-t border-white/[0.06] text-sm text-zinc-400">
                <Phone className="w-5 h-5 text-[#C8F169] shrink-0" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">
                    Direct Phone Line
                  </span>
                  <a
                    href={`tel:${businessInfo.phoneClean}`}
                    className="text-white font-display text-lg tracking-wider hover:text-[#C8F169] transition-colors"
                  >
                    {businessInfo.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Action Buttons: GET DIRECTIONS & CALL NOW */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
                <a
                  href={businessInfo.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#C8F169] text-black font-display font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-white transition-colors shadow-md active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={`tel:${businessInfo.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white/[0.05] hover:bg-white/10 text-white border border-white/10 font-display font-semibold uppercase tracking-wider text-xs rounded-sm transition-colors active:scale-95"
                >
                  <Phone className="w-4 h-4 text-[#C8F169]" />
                  <span>CALL NOW</span>
                </a>
              </div>
            </div>

            {/* Opening Hours Widget */}
            <OpeningHours />
          </div>

          {/* Right Visual Map Presentation */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative rounded-sm overflow-hidden border border-white/[0.08] bg-zinc-950/70 h-[480px] shadow-2xl">
              {/* High-contrast Google Maps embed iframe */}
              <iframe
                title="Active Fitness Gym Location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.082711681283!2d72.86877!3d21.1895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fbcbcbcbcbd%3A0x123456789abcdef!2sThe%20Palace%2C%20Parvat%20Gam%2C%20Surat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale invert opacity-75 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Navigation Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/85 backdrop-blur-md border border-white/15 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xl">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8F169] block">
                    GOOGLE MAPS NAVIGATION
                  </span>
                  <p className="text-xs font-semibold text-white">
                    Opp. Capital Square, Parvat Gam, Surat
                  </p>
                </div>
                <a
                  href={businessInfo.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C8F169] text-black font-display font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-white transition-colors shadow-md shrink-0 active:scale-95"
                >
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <p className="text-[11px] text-zinc-500 text-center">
              Parking space and lift access available at The Palace complex for gym members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
