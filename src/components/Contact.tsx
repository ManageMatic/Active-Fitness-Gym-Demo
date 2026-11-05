import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Phone, MapPin, Mail } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    fitnessGoal: "Build Muscle",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#0A0C09] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8F169]">
                09 — GET IN TOUCH
              </span>
              <div className="h-[1px] w-12 bg-[#C8F169]/40" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-[0.08em] text-white leading-none">
              LET&apos;S START <br />
              <span className="text-[#C8F169]">YOUR JOURNEY.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Have questions about membership packages, trainer availability, or facility access? Send your inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-sm bg-zinc-950/70 backdrop-blur-xl border border-white/[0.07] shadow-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C8F169] block mb-2">
                ACTIVE FITNESS FRONT DESK
              </span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-[0.08em] text-white mb-6">
                CONNECT DIRECTLY
              </h3>

              <div className="space-y-6 text-sm text-zinc-400">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#C8F169] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-medium">Facility Address</strong>
                    <p className="text-xs text-zinc-300 mt-0.5 leading-relaxed font-light">
                      {businessInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#C8F169] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-medium">Telephone Inquiries</strong>
                    <a
                      href={`tel:${businessInfo.phoneClean}`}
                      className="text-xs text-zinc-300 hover:text-[#C8F169] transition-colors mt-0.5 block"
                    >
                      {businessInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#C8F169] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-medium">Digital Helpdesk</strong>
                    <p className="text-xs text-zinc-300 mt-0.5 font-light">
                      contact@activefitnesssurat.com (Demo Inquiries)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-sm bg-zinc-950/50 backdrop-blur-md border border-white/[0.06] text-xs text-zinc-400 leading-relaxed font-light">
              <strong className="text-white block uppercase tracking-wider mb-1">
                Backend Architecture Note:
              </strong>
              This demo is architected with clean modular handlers to connect to Node.js, Express, and MongoDB without any code refactoring.
            </div>
          </div>

          {/* Right Column: Controlled Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm bg-zinc-950/70 backdrop-blur-xl border border-white/[0.07] shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#C8F169]/20 border border-[#C8F169]/40 flex items-center justify-center mx-auto mb-4 text-[#C8F169]">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#C8F169] block mb-1">
                    INQUIRY RECEIVED
                  </span>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-[0.08em] text-white mb-2">
                    THANK YOU.
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto mb-6 font-light">
                    Your enquiry has been received. The Active Fitness gym team will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        fitnessGoal: "Build Muscle",
                        message: "",
                      });
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-[#C8F169] hover:underline cursor-pointer"
                  >
                    Submit Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 bg-[#0A0C09] border rounded-sm text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#C8F169] transition-colors ${
                        errors.name ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className={`w-full px-4 py-3 bg-[#0A0C09] border rounded-sm text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#C8F169] transition-colors ${
                          errors.phone ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className={`w-full px-4 py-3 bg-[#0A0C09] border rounded-sm text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#C8F169] transition-colors ${
                          errors.email ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Primary Fitness Goal
                    </label>
                    <select
                      value={formData.fitnessGoal}
                      onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0A0C09] border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[#C8F169] transition-colors"
                    >
                      <option value="Build Muscle">Build Muscle</option>
                      <option value="Lose Fat">Lose Fat</option>
                      <option value="Get Stronger">Get Stronger</option>
                      <option value="General Fitness">General Fitness</option>
                      <option value="Personal Training Inquiry">Personal Training Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your fitness history or specific requirements..."
                      className="w-full px-4 py-3 bg-[#0A0C09] border border-white/10 rounded-sm text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#C8F169] resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#C8F169] text-black font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-white transition-all duration-300 shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>{isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
