import { Clock, AlertCircle } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";

export default function OpeningHours() {
  const schedule = [
    { day: "Monday", hours: businessInfo.hours.monday },
    { day: "Tuesday", hours: businessInfo.hours.tuesday },
    { day: "Wednesday", hours: businessInfo.hours.wednesday },
    { day: "Thursday", hours: businessInfo.hours.thursday },
    { day: "Friday", hours: businessInfo.hours.friday },
    { day: "Saturday", hours: businessInfo.hours.saturday },
    { day: "Sunday", hours: businessInfo.hours.sunday, highlight: true },
  ];

  return (
    <div className="p-6 sm:p-7 rounded-sm bg-zinc-950/70 backdrop-blur-xl border border-white/[0.07]">
      <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-white/[0.06]">
        <Clock className="w-5 h-5 text-[#C8F169]" />
        <div>
          <h4 className="font-display text-base font-bold uppercase tracking-[0.1em] text-white">
            OPERATING HOURS
          </h4>
          <span className="text-[11px] text-zinc-400">Weekly Gym Floor Timings</span>
        </div>
      </div>

      <div className="space-y-2.5 text-xs">
        {schedule.map((item) => (
          <div
            key={item.day}
            className={`flex items-center justify-between py-1 border-b border-white/[0.04] last:border-0 ${
              item.highlight ? "text-[#C8F169] font-medium" : "text-zinc-300"
            }`}
          >
            <span className="font-medium">{item.day}</span>
            <span className={item.highlight ? "text-[#C8F169] font-bold" : "text-zinc-400"}>
              {item.hours}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[10px] text-zinc-400 font-light">
        <AlertCircle className="w-3.5 h-3.5 text-[#C8F169] shrink-0" />
        <span>Sunday schedule and holiday hours subject to Active Fitness confirmation.</span>
      </div>
    </div>
  );
}
