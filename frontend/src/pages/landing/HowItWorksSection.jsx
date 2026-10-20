import React, { useState } from "react";
import {
  AlertTriangle,
  UserX,
  Fingerprint,
  FileHeart,
  Ambulance,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Incident Initiation & Geo-Triage",
      tag: "Field Dispatch",
      icon: AlertTriangle,
      color: "#EF4444",
      bgLight: "bg-red-50",
      description:
        "Emergency responders or hospital dispatch units log the incident in seconds. GPS coordinates establish an instant perimeter and alert regional trauma centers.",
      stats: "< 12s Response Time",
      points: [
        "Instant geo-fencing within 250m perimeter",
        "Trauma Level 1 alerts broadcasted to receiving ER",
        "Paramedic telemetry channels synchronized",
      ],
    },
    {
      step: "02",
      title: "Unknown Victim Registration",
      tag: "Biometric & Physical Markers",
      icon: UserX,
      color: "#0284C7",
      bgLight: "bg-sky-50",
      description:
        "Unconscious or non-communicative victims are tagged with an ephemeral cryptographic ID (e.g. UNK-9021). Tattoos, clothing, and physical traits are securely indexed.",
      stats: "4 Markers Verified",
      points: [
        "Ephemeral identifier linked without personal identity leaks",
        "Visual markers indexed to field registry",
        "Continuous vitals monitoring attached to slot",
      ],
    },
    {
      step: "03",
      title: "Biometric Match & Authorization",
      tag: "Civil Registry Verification",
      icon: Fingerprint,
      color: "#10B981",
      bgLight: "bg-emerald-50",
      description:
        "Facial vectors and fingerprints are cross-matched against authorized records. Once verified, records are linked via cryptographic validation.",
      stats: "94.6% Confidence Link",
      points: [
        "Confirmed identity: Vikram R. Deshmukh",
        "Blood type flagged: O- Negative STAT",
        "Automated encrypted merge executed",
      ],
    },
    {
      step: "04",
      title: "EHR Decryption & Hospital Handover",
      tag: "Zero-Knowledge Disclosure",
      icon: Ambulance,
      color: "#0077ED",
      bgLight: "bg-blue-50",
      description:
        "Field EMTs receive life-critical data (allergies, blood type). Full surgical history streams directly into the receiving hospital ER prior to arrival.",
      stats: "Pre-arrival EHR Synced",
      points: [
        "Penicillin anaphylaxis warning active",
        "ER trauma team prepared with matching blood",
        "Digital signature finalized on patient handover",
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FFFFFF] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header - Inspired by Image 2 "How Your Personalized Plan Is Built" */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0077ED] text-xs font-semibold uppercase tracking-wider">
            <span>• CLINICAL WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B49] font-display tracking-tight">
            How Your Emergency Care Is Built
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our end-to-end clinical protocol ensures zero loss of critical vitals and patient
            history between the emergency site and the hospital operating room.
          </p>
        </div>

        {/* GeneX Style 4-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#F0F7FF] border-2 border-[#0077ED] shadow-md -translate-y-1"
                    : "bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                      Step {s.step}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl ${s.bgLight} flex items-center justify-center`}
                    >
                      <Icon className="w-4 h-4" style={{ color: s.color }} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#002B49] leading-snug">
                      {s.title}
                    </h3>
                    <div className="text-[11px] font-semibold text-[#0077ED] mt-1">
                      {s.tag}
                    </div>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                    ✓ {s.stats}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Detailed Simulation Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F0F7FF] border border-[#BAE6FD] shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wider font-bold text-[#0077ED]">
                Active Demonstration Phase: Step {steps[activeStep].step}
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#002B49]">
                {steps[activeStep].title} — Operational Verification
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                Every action taken in this step is immutably timestamped on the hospital
                emergency ledger for complete accountability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#modules"
                className="px-5 py-2.5 rounded-full bg-[#0077ED] hover:bg-[#0066CC] text-white text-xs font-semibold text-center transition-all shadow-sm"
              >
                Inspect Department
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-blue-200/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {steps[activeStep].points.map((pt, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-white border border-blue-100 flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0077ED] shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-slate-800">{pt}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
