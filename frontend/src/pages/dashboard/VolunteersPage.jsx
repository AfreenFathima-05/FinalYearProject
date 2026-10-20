import React from "react";
import { useApp } from "../../context/AppContext";
import { Users, ShieldCheck, MapPin, Phone, CheckCircle2, UserCheck } from "lucide-react";

export default function VolunteersPage() {
  const { volunteers, addToast } = useApp();

  const handleDispatchVolunteer = (name) => {
    addToast(
      "Volunteer Responder Dispatched",
      `Encrypted GPS mission vector sent to ${name}. Responded within 30 seconds.`,
      "success"
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="pb-2 border-b border-slate-200">
        <h2 className="text-xl sm:text-2xl font-bold text-[#002B49] font-display flex items-center gap-2">
          <Users className="w-6 h-6 text-[#0077ED]" />
          <span>Certified First Responder Volunteer Mesh</span>
        </h2>
        <p className="text-xs text-slate-500">
          Coordination network for CPR-certified civilians, off-duty clinicians, and priority blood couriers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteers.map((v) => (
          <div
            key={v.id}
            className="clinic-card p-6 flex flex-col justify-between space-y-4 bg-white border border-slate-200"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#0077ED]">
                  {v.id}
                </span>
                <span
                  className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                    v.status.includes("On Scene")
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-blue-50 text-[#0077ED] border border-blue-200"
                  }`}
                >
                  {v.status}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900">{v.name}</h3>
                <div className="text-xs font-semibold text-[#0077ED] mt-0.5">{v.role}</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                <div className="text-[10px] uppercase font-bold text-slate-400">
                  Certifications
                </div>
                <div className="text-slate-800 font-semibold">{v.certifications}</div>
                <div className="text-[11px] text-slate-500 pt-1 flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#0077ED]" />
                  <span>{v.distance}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">{v.phone}</span>
              <button
                onClick={() => handleDispatchVolunteer(v.name)}
                className="px-3.5 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-[#0077ED] text-xs font-bold transition-colors"
              >
                Dispatch Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
