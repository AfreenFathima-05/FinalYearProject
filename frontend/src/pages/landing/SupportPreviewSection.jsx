import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Droplets,
  Ambulance,
  Coins,
  ShieldCheck,
  Activity,
  Clock,
  MapPin,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  HeartPulse,
  UserCheck,
  Building2,
  Calendar,
} from "lucide-react";

export default function SupportPreviewSection() {
  const [activeTab, setActiveTab] = useState("blood");

  const doctors = [
    {
      name: "Dr. Sarah Collins",
      title: "Lead Trauma Cardiologist",
      dept: "Emergency Cardiac Care",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80",
    },
    {
      name: "Dr. James Wilson",
      title: "Orthopedic Trauma Surgeon",
      dept: "Surgical Resuscitation",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80",
    },
    {
      name: "Dr. Emily Carter",
      title: "Pediatric Emergency Lead",
      dept: "Critical Pediatric ICU",
      image: "https://images.unsplash.com/photo-1594824813565-3882776c5b96?w=400&auto=format&fit=crop&q=80",
    },
    {
      name: "Dr. Michael Brown",
      title: "Chief Flight Surgeon",
      dept: "Air Ambulance & Dispatch",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section id="support-preview" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Antixor Section: Meet Our Expert Doctors */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#0077ED] uppercase tracking-wider">
                • OUR CLINICAL SPECIALISTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B49] font-display">
                Meet Our Expert Responders &amp; Clinicians
              </h2>
              <p className="text-slate-600 text-sm max-w-xl">
                Our board-certified emergency physicians, flight surgeons, and trauma nurses are
                ready 24/7 to receive and treat complex casualties.
              </p>
            </div>

            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#002440] hover:bg-[#00335A] text-white text-xs font-semibold self-start sm:self-auto transition-all"
            >
              <span>View All Medical Staff</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 Doctor Cards - Directly from Image 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, idx) => (
              <div
                key={idx}
                className="clinic-card overflow-hidden bg-white group hover:shadow-lg transition-all"
              >
                <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-bold text-[#0077ED] border border-blue-100">
                    Active on Grid
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-[#0077ED] transition-colors">
                      {doc.name}
                    </h3>
                    <div className="text-xs font-medium text-[#0077ED]">
                      {doc.title}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {doc.dept}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      to="/dashboard"
                      className="w-full py-2 rounded-xl bg-slate-50 hover:bg-[#0077ED] hover:text-white text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>Request Handover</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Antixor Section: Modern Hospital Architecture & Live Telemetry Strip */}
        <div className="clinic-card overflow-hidden bg-white p-6 sm:p-10 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Modern Hospital Building Showcase */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-16/10 relative group">
                <img
                  src="/images/hospital-building.jpg"
                  alt="Modern Hospital Emergency Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001E36]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-xs uppercase tracking-wider font-semibold text-sky-300">
                    Level 1 Trauma Center Infrastructure
                  </div>
                  <h3 className="text-xl font-bold font-display mt-0.5">
                    A Modern Hospital Built for Better Health
                  </h3>
                </div>
              </div>

              {/* Bottom 3-column stats */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="text-lg font-bold text-[#002B49] font-display">10+</div>
                  <div className="text-[11px] text-slate-500">Connected Hubs</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="text-lg font-bold text-[#0077ED] font-display">25K+</div>
                  <div className="text-[11px] text-slate-500">Transfers</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="text-lg font-bold text-emerald-600 font-display">100+</div>
                  <div className="text-[11px] text-slate-500">ICU Bed Links</div>
                </div>
              </div>
            </div>

            {/* Right: Clean Operational Telemetry Preview */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-semibold">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>Real-Time Operational Telemetry</span>
                </div>
                <h3 className="text-2xl font-bold text-[#002B49]">
                  Live Emergency Coordination Feed
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Select a live coordination channel to monitor real-time triage data
                  between ambulances and regional trauma centers.
                </p>
              </div>

              {/* Clean Tabs */}
              <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
                <button
                  onClick={() => setActiveTab("blood")}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "blood"
                      ? "bg-white text-rose-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Droplets className="w-3.5 h-3.5" />
                  <span>STAT Blood</span>
                </button>
                <button
                  onClick={() => setActiveTab("handover")}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "handover"
                      ? "bg-white text-[#0077ED] shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Ambulance className="w-3.5 h-3.5" />
                  <span>ER Handover</span>
                </button>
                <button
                  onClick={() => setActiveTab("fundraising")}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "fundraising"
                      ? "bg-white text-emerald-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Coins className="w-3.5 h-3.5" />
                  <span>Relief Fund</span>
                </button>
              </div>

              {/* Tab Panel: Clean white card with data */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                {activeTab === "blood" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800">
                        STAT Urgent Deficit: O- Negative
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold">
                        Courier Dispatched (ETA 11 min)
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed">
                      Treating Hospital: <strong className="text-slate-900">St. Jude Trauma Bay 1</strong>
                      <br />
                      Patient: <span className="font-mono text-slate-800">UNK-9021 (Pending Linkage)</span>
                      <br />
                      Units Requested: 4 Units Whole Blood PRBCs
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs flex items-center justify-between">
                      <span className="text-slate-600">Certified Donors Alerted:</span>
                      <span className="font-bold text-[#0077ED]">18 in 3km Radius</span>
                    </div>
                  </div>
                )}

                {activeTab === "handover" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800">
                        Pre-Arrival Telemetry: Unit ALS-08
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-[#0077ED] text-[10px] font-bold">
                        En Route (ETA 4 min)
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 rounded-lg bg-white border border-slate-200">
                        <div className="text-slate-400 text-[10px]">Blood Pressure</div>
                        <div className="font-bold text-slate-900">118/76</div>
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-200">
                        <div className="text-slate-400 text-[10px]">Heart Rate</div>
                        <div className="font-bold text-rose-600">104 bpm</div>
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-200">
                        <div className="text-slate-400 text-[10px]">SpO2</div>
                        <div className="font-bold text-emerald-600">98%</div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-500">
                      Receiving Team: Dr. Aris Thorne (Trauma Attending)
                    </div>
                  </div>
                )}

                {activeTab === "fundraising" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800">
                        Hospital Direct Escrow Relief
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                        100% Verified
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed">
                      Case: Uninsured Highway Multi-Vehicle Trauma Care
                      <br />
                      Escrow Target: ₹7,50,000 • Verified Disbursed: ₹6,67,500
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-500 h-2 rounded-full w-[89%]" />
                    </div>
                    <div className="text-[11px] text-slate-500 flex justify-between">
                      <span>89% Funded</span>
                      <span>Disbursed directly to Hospital Accounts</span>
                    </div>
                  </div>
                )}

                <Link
                  to="/dashboard"
                  className="w-full py-2.5 rounded-xl bg-[#0077ED] hover:bg-[#0066CC] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>Launch Live Control Stream</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
