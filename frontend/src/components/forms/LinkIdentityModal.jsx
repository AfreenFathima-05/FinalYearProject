import React from "react";
import { useApp } from "../../context/AppContext";
import { X, Fingerprint, CheckCircle2, ShieldCheck, AlertCircle, UserCheck } from "lucide-react";
import { motion } from "motion/react";

export default function LinkIdentityModal({ victim, isOpen, onClose }) {
  const { linkVictimIdentity } = useApp();

  if (!isOpen || !victim) return null;

  const candidate = victim.matchCandidates?.[0];

  const handleConfirmLink = () => {
    if (candidate) {
      linkVictimIdentity(victim.tempId, candidate);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-7 space-y-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-[#0077ED]">
              <Fingerprint className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Biometric Identity Linkage Handshake
              </h3>
              <p className="text-xs text-slate-500">
                Merging Provisional Record: <span className="font-mono text-[#0077ED] font-semibold">{victim.tempId}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Left: Provisional Unknown Record */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                Field Intake
              </span>
              <span className="text-xs font-mono font-bold text-slate-700">{victim.tempId}</span>
            </div>
            <div className="text-xs space-y-1.5 text-slate-600">
              <div><strong className="text-slate-800">Est. Age:</strong> {victim.estimatedAge}</div>
              <div><strong className="text-slate-800">Gender:</strong> {victim.estimatedGender}</div>
              <div><strong className="text-slate-800">Location:</strong> {victim.locationFound}</div>
            </div>
            <div className="pt-2 border-t border-slate-200">
              <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">
                Field Physical Markers
              </div>
              <ul className="text-xs space-y-1 text-slate-800">
                {victim.physicalMarkers?.slice(0, 2).map((m, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#0077ED]">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: National Identity Candidate */}
          {candidate ? (
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  Matched Candidate
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                  {candidate.matchConfidence}% Match
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={candidate.photoUrl}
                  alt={candidate.name}
                  className="w-12 h-12 rounded-xl object-cover border border-slate-200"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">{candidate.name}</div>
                  <div className="text-xs text-slate-500 font-mono">{candidate.personId}</div>
                  <div className="text-[11px] text-[#0077ED] font-bold mt-0.5">
                    Blood Group: {candidate.bloodGroup}
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-blue-100 text-xs text-slate-600 space-y-1">
                <div><strong className="text-slate-800">Allergies:</strong> {candidate.criticalAllergies}</div>
                <div><strong className="text-slate-800">Contact:</strong> {candidate.emergencyContact}</div>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center text-center p-6 text-xs text-slate-500">
              <AlertCircle className="w-8 h-8 text-amber-500 mb-2" />
              <span>Searching registry vectors. No high-confidence match candidate yet.</span>
            </div>
          )}

        </div>

        {/* Warning / Audit disclaimer */}
        <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 flex items-start gap-3 text-xs text-slate-600">
          <ShieldCheck className="w-5 h-5 text-[#0077ED] shrink-0 mt-0.5" />
          <p>
            Executing this match executes an irreversible cryptographic merge of the patient's
            vitals stream into their verified health record and un-redacts emergency allergies to treating EMTs.
          </p>
        </div>

        {/* Actions */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Cancel
          </button>
          {candidate && (
            <button
              onClick={handleConfirmLink}
              className="px-6 py-2.5 rounded-full bg-[#0077ED] hover:bg-[#0066CC] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              <span>Verify &amp; Unlock Medical Continuity</span>
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
