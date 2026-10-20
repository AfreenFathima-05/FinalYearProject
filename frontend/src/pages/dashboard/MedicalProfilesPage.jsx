import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import {
  FileHeart,
  ShieldCheck,
  AlertTriangle,
  Heart,
  Droplet,
  Pill,
  Lock,
  Eye,
  KeyRound,
  User,
  Phone,
} from "lucide-react";

export default function MedicalProfilesPage() {
  const { medicalProfiles, currentUser } = useApp();
  const [selectedProfile, setSelectedProfile] = useState(medicalProfiles[0]);
  const [viewRole, setViewRole] = useState("Paramedic"); // Paramedic (Tier 2) or Physician (Tier 4)

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header with Role Simulator Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#002B49] font-display flex items-center gap-2">
            <FileHeart className="w-6 h-6 text-emerald-600" />
            <span>Emergency Medical Information Continuity</span>
          </h2>
          <p className="text-xs text-slate-500">
            Cryptographically sealed emergency health records with zero-knowledge role disclosure.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200 self-start sm:self-auto">
          <span className="text-[10px] uppercase font-bold text-slate-400 px-2">
            Simulate View:
          </span>
          <button
            onClick={() => setViewRole("Paramedic")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              viewRole === "Paramedic"
                ? "bg-[#0077ED] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Field Paramedic (Tier 2)
          </button>
          <button
            onClick={() => setViewRole("Physician")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              viewRole === "Physician"
                ? "bg-emerald-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            ER Trauma Doctor (Tier 4)
          </button>
        </div>
      </div>

      {/* Main Layout: Patient Selector + Clinical Record Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Profiles List (Col 4) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs uppercase font-bold text-slate-400">
            Verified Medical Profiles ({medicalProfiles.length})
          </div>

          {medicalProfiles.map((p) => {
            const isSelected = selectedProfile?.resqId === p.resqId;
            return (
              <div
                key={p.resqId}
                onClick={() => setSelectedProfile(p)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-50/70 border-[#0077ED] shadow-sm"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#0077ED]">
                    {p.resqId}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    Verified
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mt-1.5">{p.fullName}</h4>
                <div className="text-xs text-slate-500 mt-0.5">{p.dob}</div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                    Blood: {p.bloodGroup}
                  </span>
                  <span className="text-slate-500 text-[11px] font-medium">
                    {p.criticalAllergies.length} Critical Allergies
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Profile Detailed Clinical Sheet (Col 8) */}
        <div className="lg:col-span-8">
          {selectedProfile && (
            <div className="clinic-card p-6 sm:p-8 space-y-6 bg-white border border-slate-200">
              
              {/* Profile Top Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#0077ED] font-bold">
                      {selectedProfile.resqId}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 border border-emerald-200 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {selectedProfile.verificationLevel}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002B49] font-display mt-1">
                    {selectedProfile.fullName}
                  </h3>
                  <div className="text-xs text-slate-500">
                    DOB: {selectedProfile.dob} • Gender: {selectedProfile.gender}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-red-50 border border-red-100 text-center self-start sm:self-auto">
                  <div className="text-[9px] uppercase font-bold text-red-700">
                    BLOOD GROUP &amp; RH
                  </div>
                  <div className="text-2xl font-black text-red-600 font-display mt-0.5">
                    {selectedProfile.bloodGroup}
                  </div>
                  <div className="text-[10px] text-slate-500 font-semibold">
                    {selectedProfile.rhFactor}
                  </div>
                </div>
              </div>

              {/* CRITICAL ALLERGIES ALERT SECTION */}
              <div className="rounded-2xl bg-red-50/70 border border-red-200 p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>Critical Pharmacological Contraindications &amp; Allergies</span>
                </div>
                <div className="space-y-2">
                  {selectedProfile.criticalAllergies.map((alg, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-red-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs shadow-2xs"
                    >
                      <div>
                        <strong className="text-slate-900 font-bold text-sm">
                          {alg.allergen}
                        </strong>
                        <span className="text-slate-500 ml-2 font-medium">({alg.notes})</span>
                      </div>
                      <span className="text-red-700 font-bold text-[11px] bg-red-50 px-2 py-0.5 rounded-full self-start sm:self-auto border border-red-200">
                        {alg.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chronic Conditions & Directives */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="text-[10px] uppercase font-bold text-[#0077ED] flex items-center gap-1.5">
                    <Pill className="w-3.5 h-3.5" />
                    <span>Chronic Diagnoses &amp; Medications</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    {selectedProfile.chronicConditions.map((c, i) => (
                      <div key={i} className="pb-1.5 border-b border-slate-200/60 last:border-0">
                        <div className="font-bold text-slate-900">{c.condition}</div>
                        <div className="text-slate-500 text-[11px]">
                          Rx: {c.medication}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="text-[10px] uppercase font-bold text-emerald-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Advance Directives &amp; Consent</span>
                  </div>
                  <div className="text-xs space-y-2 text-slate-600">
                    <div>
                      <span className="text-slate-900 font-semibold">Directive: </span>
                      {selectedProfile.advanceDirective}
                    </div>
                    <div className="text-emerald-700 font-bold flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 fill-emerald-100" />
                      <span>Organ Donor: Registered &amp; Consented</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Role-Gated Tier 4 Section: Doctor Only */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-500">
                    Tier 4 Surgical &amp; Insurance Ledger (Doctor Clearance Required)
                  </span>
                  {viewRole === "Physician" ? (
                    <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                      <Eye className="w-3 h-3" /> Decrypted for Dr. Thorne
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-amber-700 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Redacted in Field Mode
                    </span>
                  )}
                </div>

                {viewRole === "Physician" ? (
                  <div className="text-xs text-slate-800 space-y-1 pt-1 font-medium">
                    <div>Surgical History: {selectedProfile.surgicalHistory}</div>
                    <div className="text-slate-500">
                      Insurance Policy: {selectedProfile.insuranceProvider}
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 italic">
                    Field paramedic credentials authorized for Emergency Triage items only.
                    Comprehensive hospital history encrypted until trauma bay handover.
                  </div>
                )}
              </div>

              {/* Verified Emergency Contacts */}
              <div className="space-y-2 pt-2">
                <div className="text-xs uppercase font-bold text-slate-500">
                  Authorized Emergency Contacts
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProfile.emergencyContacts.map((contact, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-bold text-slate-900">{contact.name}</div>
                        <div className="text-[11px] text-slate-500">
                          {contact.relation} • {contact.phone}
                        </div>
                      </div>
                      <span
                        className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                          contact.notified
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {contact.notified ? "Notified" : "Standby"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
