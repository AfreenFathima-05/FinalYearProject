import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import {
  UserCheck,
  Fingerprint,
  Tag,
  ShieldCheck,
  AlertCircle,
  Clock,
  ArrowRight,
  Search,
} from "lucide-react";
import LinkIdentityModal from "../../components/forms/LinkIdentityModal";

export default function UnknownVictimsPage() {
  const { unknownVictims, searchQuery } = useApp();
  const [selectedVictim, setSelectedVictim] = useState(null);
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);

  const filteredVictims = unknownVictims.filter((v) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      v.tempId.toLowerCase().includes(q) ||
      v.incidentId.toLowerCase().includes(q) ||
      v.physicalMarkers?.some((m) => m.toLowerCase().includes(q))
    );
  });

  const handleOpenLinkModal = (victim) => {
    setSelectedVictim(victim);
    setIsLinkModalOpen(true);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Link Identity Modal */}
      <LinkIdentityModal
        victim={selectedVictim}
        isOpen={isLinkModalOpen}
        onClose={() => setIsLinkModalOpen(false)}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#002B49] font-display flex items-center gap-2">
            <Fingerprint className="w-6 h-6 text-[#0077ED]" />
            <span>Unknown Victim Identification Mesh</span>
          </h2>
          <p className="text-xs text-slate-500">
            Ephemeral indexing of physical markers, facial vectors, and cross-registry candidate matching.
          </p>
        </div>

        <div className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0077ED] self-start sm:self-auto">
          <span>Multi-Vector Biometric Fusion</span>
        </div>
      </div>

      {/* Victims Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVictims.map((v) => {
          const isLinked = v.status === "Identity Linked";
          const candidate = v.matchCandidates?.[0];

          return (
            <div
              key={v.tempId}
              className={`clinic-card p-6 flex flex-col justify-between space-y-5 bg-white ${
                isLinked ? "border-emerald-200" : "border-slate-200"
              }`}
            >
              <div className="space-y-4">
                {/* Header status row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-slate-900 font-mono">
                      {v.tempId}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {v.incidentId}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isLinked
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-amber-50 text-amber-700 border border-amber-200"
                    }`}
                  >
                    {v.status}
                  </span>
                </div>

                {/* Patient basics */}
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div>
                    <span className="text-[9px] uppercase font-semibold text-slate-400 block">Est. Demographics</span>
                    <span className="text-slate-800 font-bold">
                      {v.estimatedGender}, {v.estimatedAge}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-semibold text-slate-400 block">Intake Time</span>
                    <span className="text-slate-800 font-bold">{v.registeredAt}</span>
                  </div>
                </div>

                {/* Physical Markers Tags */}
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5 flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#0077ED]" />
                    <span>Physical Markers &amp; Tattoos</span>
                  </div>
                  <div className="space-y-1">
                    {v.physicalMarkers?.map((marker, i) => (
                      <div
                        key={i}
                        className="text-xs text-slate-700 flex items-start gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-100"
                      >
                        <span className="text-[#0077ED] text-sm leading-none">•</span>
                        <span>{marker}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Candidate or Resolved Banner */}
                {isLinked ? (
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1 text-xs">
                    <div className="text-[10px] font-bold uppercase text-emerald-700 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified &amp; Merged</span>
                    </div>
                    <div className="font-bold text-slate-900">
                      {v.linkedProfile?.name} ({v.linkedProfile?.personId})
                    </div>
                    <div className="text-[11px] text-[#0077ED] font-semibold">
                      Blood Group: {v.linkedProfile?.bloodGroup}
                    </div>
                  </div>
                ) : candidate ? (
                  <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-[#0077ED]">
                        High-Confidence Candidate
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                        {candidate.matchConfidence}% Match
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <img
                        src={candidate.photoUrl}
                        alt={candidate.name}
                        className="w-9 h-9 rounded-lg object-cover border border-slate-200"
                      />
                      <div>
                        <div className="font-bold text-slate-900">{candidate.name}</div>
                        <div className="text-[11px] text-slate-500 font-mono">
                          {candidate.personId}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-400 text-center">
                    Awaiting Vector Linkage...
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-100">
                {isLinked ? (
                  <div className="w-full py-2.5 text-center text-xs font-bold text-emerald-700 bg-emerald-50 rounded-full">
                    Record Consolidated
                  </div>
                ) : (
                  <button
                    onClick={() => handleOpenLinkModal(v)}
                    className="w-full py-2.5 rounded-full bg-[#0077ED] hover:bg-[#0066CC] text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Fingerprint className="w-3.5 h-3.5" />
                    <span>Review &amp; Merge Identity</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
