import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import {
  Droplets,
  Plus,
  Clock,
  MapPin,
  Ambulance,
  Phone,
  Flame,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import RequestBloodModal from "../../components/forms/RequestBloodModal";

export default function BloodSupportPage() {
  const { bloodRequests, addToast } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAcknowledgeDonor = (reqId, donorName) => {
    addToast(
      "Courier Dispatch Verified",
      `Priority transit clearance confirmed for ${donorName}. Traffic police escort notified.`,
      "success"
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <RequestBloodModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#002B49] font-display flex items-center gap-2">
            <Droplets className="w-6 h-6 text-red-600" />
            <span>Urgent Blood Assistance Pipeline</span>
          </h2>
          <p className="text-xs text-slate-500">
            STAT donor broadcast, hospital blood bank deficit matching, and cold-chain courier tracking.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-sm transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Broadcast STAT Request</span>
        </button>
      </div>

      {/* Requests List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {bloodRequests.map((req) => (
          <div
            key={req.id}
            className="clinic-card p-6 space-y-5 bg-white border border-slate-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                  {req.id}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {req.incidentId}
                </span>
              </div>
              <span
                className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                  req.status === "Fulfilled"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {req.status}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#002B49] font-display">
                  {req.bloodType}
                </h3>
                <div className="text-xs text-slate-500 mt-0.5">
                  Target: <strong className="text-slate-800">{req.hospital}</strong> ({req.department})
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-red-600 font-display">
                  {req.unitsPledged} / {req.unitsNeeded}
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase">
                  Units Pledged
                </div>
              </div>
            </div>

            {/* Matched Couriers */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="text-xs uppercase font-bold text-slate-500">
                Matched En Route Donors &amp; Couriers
              </div>
              {req.matchedDonors?.map((donor, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-bold text-slate-900">{donor.name}</div>
                    <div className="text-[11px] text-slate-500">
                      {donor.distance} • {donor.phone}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                      ETA {donor.eta}
                    </span>
                    <button
                      onClick={() => handleAcknowledgeDonor(req.id, donor.name)}
                      className="px-3 py-1 rounded-full bg-blue-50 hover:bg-blue-100 text-[#0077ED] text-[10px] font-bold transition-colors"
                    >
                      Acknowledge
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Urgency: <strong className="text-slate-700">{req.urgency}</strong></span>
              <span className="text-red-600 font-bold">Golden Window: {req.timeRemaining}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
