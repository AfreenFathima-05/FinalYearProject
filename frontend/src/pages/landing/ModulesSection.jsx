import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldAlert,
  UserCheck,
  FileHeart,
  Droplets,
  PhoneCall,
  Ambulance,
  Radar,
  Coins,
  ArrowRight,
  CheckCircle,
  Stethoscope,
  Heart,
  Activity,
  Layers,
  Sparkles,
} from "lucide-react";

export default function ModulesSection() {
  const departments = [
    {
      id: "incidents",
      title: "Incident Command",
      sub: "Emergency Triage",
      desc: "Real-time dispatch, GPS geofencing, and multi-casualty tracking.",
      icon: ShieldAlert,
      color: "#EF4444",
      bgLight: "bg-rose-50",
      borderLight: "border-rose-100",
      textDark: "text-rose-600",
      link: "/dashboard/incidents",
    },
    {
      id: "unknown-victims",
      title: "Unknown Victim ID",
      sub: "Biometric Matching",
      desc: "Marker indexing, tattoo/clothing hashes, and facial vector linkage.",
      icon: UserCheck,
      color: "#0284C7",
      bgLight: "bg-sky-50",
      borderLight: "border-sky-100",
      textDark: "text-sky-600",
      link: "/dashboard/unknown-victims",
    },
    {
      id: "medical-profiles",
      title: "Medical Records",
      sub: "EHR Continuity",
      desc: "Role-tiered access to blood groups, drug allergies, and past surgeries.",
      icon: FileHeart,
      color: "#10B981",
      bgLight: "bg-emerald-50",
      borderLight: "border-emerald-100",
      textDark: "text-emerald-600",
      link: "/dashboard/medical-profiles",
    },
    {
      id: "blood-support",
      title: "STAT Blood Support",
      sub: "Rare Deficit Match",
      desc: "Automated deficit matching and STAT courier alerts for rare units.",
      icon: Droplets,
      color: "#E11D48",
      bgLight: "bg-red-50",
      borderLight: "border-red-100",
      textDark: "text-red-600",
      link: "/dashboard/blood-support",
    },
    {
      id: "contacts",
      title: "Emergency Relatives",
      sub: "Next-of-Kin Mesh",
      desc: "Automated verified notification to next-of-kin with zero panic.",
      icon: PhoneCall,
      color: "#F59E0B",
      bgLight: "bg-amber-50",
      borderLight: "border-amber-100",
      textDark: "text-amber-600",
      link: "/dashboard/contacts",
    },
    {
      id: "handover",
      title: "Hospital Handover",
      sub: "EMT to Trauma Center",
      desc: "Pre-arrival vitals streaming (BP, HR, SpO2) directly to ER trauma bays.",
      icon: Ambulance,
      color: "#0077ED",
      bgLight: "bg-blue-50",
      borderLight: "border-blue-100",
      textDark: "text-[#0077ED]",
      link: "/dashboard/handover",
    },
  ];

  return (
    <section id="modules" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Top Split: Antixor Departments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Heading & Department Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0077ED] text-xs font-semibold uppercase tracking-wider">
              <span>• OUR DEPARTMENTS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B49] font-display tracking-tight leading-tight">
              Specialized Care Across Key Departments
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed">
              From general emergency medicine to advanced trauma surgery, our specialized
              clinical modules coordinate emergency teams with modern technology and
              zero informational delays.
            </p>

            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#002440] hover:bg-[#00335A] text-white font-semibold text-sm transition-all shadow-sm"
            >
              <span>View All Departments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Quick hospital assurance */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-600">
                <strong className="text-slate-900 block font-semibold">
                  Zero Data Misplacement Guarantee
                </strong>
                All victim data is cryptographically anchored and audited under HIPAA standards.
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Department Cards Grid (Antixor style) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <Link
                  key={dept.id}
                  to={dept.link}
                  className="clinic-card p-5 group flex flex-col justify-between hover:border-[#BAE6FD]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-xl ${dept.bgLight} ${dept.borderLight} border flex items-center justify-center transition-transform group-hover:scale-110`}
                      >
                        <Icon className="w-5 h-5" style={{ color: dept.color }} />
                      </div>
                      <span className="text-[10px] font-semibold text-slate-400 group-hover:text-[#0077ED] transition-colors">
                        {dept.sub}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#0077ED] transition-colors">
                        {dept.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {dept.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0077ED]">
                    <span>Access Portal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>

        {/* Bottom Feature Banners (Matching Image 1: Nurse care & Surgery Theatre) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          
          {/* Card 1: Comprehensive Medical Services with Nurse Photo */}
          <div className="clinic-card overflow-hidden bg-white p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2 space-y-4">
              <span className="text-xs font-semibold text-[#0077ED] uppercase tracking-wider">
                • OUR SERVICES
              </span>
              <h3 className="text-2xl font-bold text-[#002B49] font-display">
                Comprehensive Emergency Services
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We offer a wide range of emergency identification and medical handover protocols
                under one roof, ensuring patients get the right care at the right time.
              </p>
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0077ED] hover:text-[#0066CC]"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-sm aspect-4/3">
              <img
                src="/images/nurse-care.jpg"
                alt="Compassionate Medical Care"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 2: Advanced Technology with Surgery Photo */}
          <div className="clinic-card overflow-hidden bg-white p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-sm aspect-4/3 order-2 md:order-1">
              <img
                src="/images/surgery-theatre.jpg"
                alt="Modern Surgery Theatre"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4 order-1 md:order-2">
              <h3 className="text-2xl font-bold text-[#002B49] font-display">
                Advanced Technology for Better Outcomes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We use the latest medical technology and coordinated telemetry to deliver
                accurate diagnosis and emergency triage.
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077ED]" />
                  <span>Modern Field Triage &amp; ER Bays</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077ED]" />
                  <span>Advanced Biometric Diagnostic Equipment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077ED]" />
                  <span>Zero-Knowledge Digital Health Records</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0077ED]" />
                  <span>Minimally Invasive Handover Protocols</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
