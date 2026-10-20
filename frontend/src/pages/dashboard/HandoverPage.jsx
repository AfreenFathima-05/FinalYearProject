import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import {
  Ambulance,
  CheckCircle2,
  Clock,
  HeartPulse,
  Activity,
  FileCheck,
  ShieldCheck,
  User,
} from "lucide-react";

export default function HandoverPage() {
  const { hospitalHandovers, addToast } = useApp();
  const [handovers, setHandovers] = useState(hospitalHandovers);

  const toggleChecklist = (handoverId, itemIndex) => {
    setHandovers((prev) =>
      prev.map((h) => {
        if (h.id === handoverId) {
          const updatedChecklist = [...h.checklist];
          updatedChecklist[itemIndex].verified = !updatedChecklist[itemIndex].verified;
          return { ...h, checklist: updatedChecklist };
        }
        return h;
      })
    );
  };

  const handleCompleteHandover = (handoverId) => {
    setHandovers((prev) =>
      prev.map((h) =>
        h.id === handoverId ? { ...h, status: "Completed" } : h
      )
    );
    addToast(
      "Hospital Handover Completed",
      `Patient care custody successfully transferred to Receiving Attending MD. Handover token signed.`,
      "success"
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="pb-2 border-b border-slate-200">
        <h2 className="text-xl sm:text-2xl font-bold text-[#002B49] font-display flex items-center gap-2">
          <Ambulance className="w-6 h-6 text-[#0077ED]" />
          <span>Hospital Handover &amp; Trauma Bay Intake</span>
        </h2>
        <p className="text-xs text-slate-500">
          Continuous vitals trend streaming from ambulance telemetry directly into receiving hospital EHR.
        </p>
      </div>

      {/* Handovers List */}
      <div className="space-y-6">
        {handovers.map((h) => (
          <div
            key={h.id}
            className="clinic-card p-6 sm:p-8 space-y-6 bg-white"
          >
            {/* Top metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#0077ED] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {h.id}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    Incident: {h.incidentId}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#002B49] font-display mt-2">
                  {h.paramedicUnit} → {h.destinationHospital}
                </h3>
                <div className="text-xs text-slate-500">
                  Lead Paramedic: <strong className="text-slate-800">{h.paramedicName}</strong> • Attending: <strong className="text-slate-800">{h.receivingDoctor}</strong>
                </div>
              </div>

              <div className="text-right self-start sm:self-auto">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    h.status === "Completed"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-blue-50 text-[#0077ED] border border-blue-200"
                  }`}
                >
                  {h.status}
                </span>
                <div className="text-[11px] text-slate-500 mt-1 font-medium">
                  Arrival: {h.estimatedArrival}
                </div>
              </div>
            </div>

            {/* Vitals History Trend Cards */}
            <div className="space-y-2">
              <div className="text-xs uppercase font-bold text-slate-500">
                In-Transit Vitals Progression (Field Telemetry)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {h.vitalsHistory?.map((v, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2"
                  >
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-[#0077ED]">T-Check {v.time} IST</span>
                      <span className="text-slate-500 font-semibold">GCS: {v.gcs}/15</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div>
                        <span className="text-[9px] text-slate-400 block font-semibold">HR</span>
                        <span className="font-bold text-rose-600">{v.hr}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-400 block font-semibold">BP</span>
                        <span className="font-bold text-slate-800">{v.bp}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-400 block font-semibold">SpO2</span>
                        <span className="font-bold text-emerald-600">{v.spo2}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Handover Checklist */}
            <div className="space-y-3 pt-2">
              <div className="text-xs uppercase font-bold text-slate-500">
                Mandatory Mutual Handover Checklist (Click to verify)
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {h.checklist?.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => toggleChecklist(h.id, idx)}
                    className={`p-3 rounded-xl border flex items-center justify-between text-xs cursor-pointer transition-colors ${
                      item.verified
                        ? "bg-emerald-50 border-emerald-200 text-emerald-800 font-semibold"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span className="pr-2">{item.item}</span>
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ${
                        item.verified ? "text-emerald-600" : "text-slate-300"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-[11px] text-slate-500 font-medium">
                Digital Sign-Off Protocol: Dual ResQ-ECDSA Key Handshake
              </div>
              {h.status !== "Completed" ? (
                <button
                  onClick={() => handleCompleteHandover(h.id)}
                  className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Execute Mutual Digital Handover Signature</span>
                </button>
              ) : (
                <span className="text-xs text-emerald-700 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Handover Completed &amp; Archived in Hospital EHR</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
