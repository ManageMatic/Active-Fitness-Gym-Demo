import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { membershipPlans } from "@/data/memberships";

interface MembershipProps {
  onOpenModal: (planId?: string) => void;
}

export default function Membership({ onOpenModal }: MembershipProps) {
  return (
    <section id="membership" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#0A0C09] border-b border-white/[0.07] overflow-hidden">
      {/* Background Atmosphere Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img
          src="/images/membership.webp"
          alt="Active Fitness Gym Membership Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C09] via-[#0A0C09]/90 to-[#0A0C09]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-[#C8F169]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8F169]">
              06 — MEMBERSHIP PLANS
            </span>
            <div className="w-8 h-[1px] bg-[#C8F169]" />
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-[0.08em] text-white mb-4 leading-none">
            YOUR COMMITMENT. <br />
            <span className="text-[#C8F169]">YOUR REWARD.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
            Transparent access structures designed for serious progression. Contact our front desk for confirmed rates, seasonal offers, and multi-month savings.
          </p>
        </div>

        {/* 4 Membership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {membershipPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-sm p-7 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl ${
                plan.popular
                  ? "bg-zinc-900/90 border-2 border-[#C8F169] shadow-[0_0_35px_rgba(200,241,105,0.25)] lg:-translate-y-2"
                  : "bg-zinc-950/70 border border-white/[0.07] hover:border-white/20 hover:shadow-xl"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-[#C8F169] text-black font-display font-bold text-[11px] uppercase tracking-widest rounded-sm shadow-md whitespace-nowrap">
                  {plan.badge || "MOST POPULAR"}
                </div>
              )}

              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 block mb-1">
                  {plan.duration}
                </span>
                <h3 className="font-display text-3xl font-bold uppercase tracking-[0.08em] text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-light min-h-[38px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="py-5 px-3 mb-6 bg-[#0A0C09] rounded-sm border border-white/[0.06] text-center">
                  <span className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#C8F169] block">
                    {plan.priceDisplay}
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider mt-1 block">
                    Inquire at facility
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">
                    INCLUDED BENEFITS
                  </p>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#C8F169] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onOpenModal(plan.id)}
                  className={`w-full py-3.5 text-center font-display font-bold uppercase tracking-wider text-xs sm:text-sm rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                    plan.popular
                      ? "bg-[#C8F169] text-black hover:bg-white shadow-[0_0_20px_rgba(200,241,105,0.3)]"
                      : "bg-white/[0.06] hover:bg-white text-white hover:text-black border border-white/10"
                  }`}
                >
                  <span>ENQUIRE NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Notice */}
        <div className="p-4 rounded-sm bg-zinc-950/80 backdrop-blur-xl border border-white/[0.06] text-center max-w-2xl mx-auto">
          <p className="text-xs text-zinc-400 font-light">
            <strong className="text-white">Notice: </strong> Exact pricing and seasonal promo discounts are confirmed directly by Active Fitness staff upon inquiry or facility visit.
          </p>
        </div>
      </div>
    </section>
  );
}
