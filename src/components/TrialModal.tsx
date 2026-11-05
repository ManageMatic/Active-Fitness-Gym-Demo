import { useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "Morning (6 AM - 10 AM)",
    fitnessGoal: "General Fitness",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Mobile number is required";
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number";
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
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-zinc-950 border border-white/10 rounded-sm p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#C8F169]/20 border border-[#C8F169]/40 flex items-center justify-center mx-auto mb-4 text-[#C8F169]">
              <CheckCircle className="w-9 h-9" />
            </div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#C8F169] block mb-1">
              TRIAL REQUEST RECEIVED
            </span>
            <h3 className="font-display text-3xl font-bold uppercase tracking-[0.08em] text-white mb-2">
              SESSION RESERVED.
            </h3>
            <p className="text-sm text-zinc-400 max-w-sm mx-auto mb-6 font-light">
              This demo form is ready to be connected to Active Fitness&apos;s lead system. A trainer will reach out to confirm your scheduled trial slot!
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-white text-black font-display font-semibold uppercase tracking-wider text-xs rounded-sm hover:bg-[#C8F169] transition-colors cursor-pointer active:scale-95"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C8F169] block mb-1">
                COMPLIMENTARY PASS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-[0.08em] text-white">
                BOOK A FREE TRIAL SESSION.
              </h3>
              <p className="text-xs text-zinc-400 mt-1 font-light">
                Experience the atmosphere and equipment firsthand at 2nd Floor, The Palace, Parvat Gam.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Yash Patel"
                  className={`w-full px-4 py-2.5 bg-[#0A0C09] border rounded-sm text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#C8F169] transition-colors ${
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

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-2.5 bg-[#0A0C09] border rounded-sm text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#C8F169] transition-colors ${
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0A0C09] border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[#C8F169] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0A0C09] border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[#C8F169] transition-colors"
                  >
                    <option value="Morning (6 AM - 10 AM)">Morning (6 AM - 10 AM)</option>
                    <option value="Afternoon (11 AM - 4 PM)">Afternoon (11 AM - 4 PM)</option>
                    <option value="Evening (5 PM - 10 PM)">Evening (5 PM - 10 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                  Primary Fitness Goal
                </label>
                <select
                  value={formData.fitnessGoal}
                  onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0A0C09] border border-white/10 rounded-sm text-white text-sm focus:outline-none focus:border-[#C8F169] transition-colors"
                >
                  <option value="General Fitness">General Fitness & Health</option>
                  <option value="Build Muscle">Build Muscle & Hypertrophy</option>
                  <option value="Fat Loss">Fat Loss & Conditioning</option>
                  <option value="Strength Training">Pure Compound Strength</option>
                  <option value="Personal Training Inquiry">Personal Training Guidance</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#C8F169] text-black font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-white transition-colors shadow-lg disabled:opacity-50 cursor-pointer active:scale-95"
                >
                  {isSubmitting ? "CONFIRMING..." : "CONFIRM FREE TRIAL BOOKING"}
                </button>
              </div>

              <p className="text-[10px] text-zinc-500 text-center">
                *Active Fitness Gym will contact you to confirm the time slot. No payment required.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
