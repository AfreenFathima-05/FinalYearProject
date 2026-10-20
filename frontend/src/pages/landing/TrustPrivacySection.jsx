import React from "react";
import {
  Users,
  Building,
  Heart,
  PhoneCall,
  Star,
  ShieldCheck,
  Lock,
  FileCheck2,
  CheckCircle,
} from "lucide-react";

export default function TrustPrivacySection() {
  const advantages = [
    {
      title: "Expert Medical Team",
      desc: "Board-certified trauma physicians, ER nurses, and flight EMTs on 24/7 standby.",
      icon: Users,
      color: "#0077ED",
      bg: "bg-blue-50",
    },
    {
      title: "State-of-the-Art Network",
      desc: "Direct digital integration with regional trauma centres, blood banks, and ER bays.",
      icon: Building,
      color: "#0284C7",
      bg: "bg-sky-50",
    },
    {
      title: "Patient-Centered Privacy",
      desc: "Zero-knowledge tiered disclosure. Personal records decrypted only by authorized staff.",
      icon: Heart,
      color: "#10B981",
      bg: "bg-emerald-50",
    },
    {
      title: "24/7 Emergency Support",
      desc: "Continuous automated deficit monitoring and priority emergency dispatch mesh.",
      icon: PhoneCall,
      color: "#F59E0B",
      bg: "bg-amber-50",
    },
  ];

  return (
    <section id="trust-privacy" className="py-20 md:py-28 bg-[#FFFFFF] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Antixor Section: Why Choose ResQLink? */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0077ED] text-xs font-semibold uppercase tracking-wider">
            <span>• OUR ADVANTAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B49] font-display tracking-tight">
            Why Choose ResQLink Network?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are committed to delivering the highest quality emergency care coordination
            with medical expertise, strict patient privacy, and clinical innovation.
          </p>
        </div>

        {/* 4 Advantage Cards (Antixor style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="clinic-card p-6 text-center space-y-4 flex flex-col items-center justify-start hover:border-[#BAE6FD]"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${adv.bg} flex items-center justify-center`}
                >
                  <Icon className="w-7 h-7" style={{ color: adv.color }} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  {adv.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Antixor Section: What Patients & Families Say (Testimonial Card) */}
        <div className="clinic-card p-8 sm:p-12 bg-gradient-to-r from-blue-50/50 via-white to-sky-50/50 border border-blue-100 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-xs font-bold text-[#0077ED] uppercase tracking-wider">
              • PATIENT &amp; RESPONDER STORIES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002B49] font-display">
              What Our Hospital Partners &amp; Patients Say
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Real stories from field EMTs and families whose lives were saved when minutes
              decided everything.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm max-w-md space-y-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
              "The care and speed my family received through ResQLink was exceptional.
              The trauma team had our father's blood type and surgical history ready before the
              ambulance even pulled into the hospital bay."
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                alt="Emma Wilson"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-xs font-bold text-slate-900">Emma Wilson</div>
                <div className="text-[11px] text-slate-500">Trauma Patient Relative • London</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
