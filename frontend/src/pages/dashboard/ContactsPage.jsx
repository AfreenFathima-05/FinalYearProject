import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { PhoneCall, ShieldCheck, Send, CheckCircle2, AlertCircle, Phone, User } from "lucide-react";

export default function ContactsPage() {
  const { medicalProfiles, addToast } = useApp();

  const handleNotifyContact = (name, phone) => {
    addToast(
      "Emergency Contact Alerted",
      `Encrypted arrival alert and hospital bay location dispatched via SMS to ${name} (${phone}).`,
      "success"
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="pb-2 border-b border-slate-200">
        <h2 className="text-xl sm:text-2xl font-bold text-[#002B49] font-display flex items-center gap-2">
          <PhoneCall className="w-6 h-6 text-amber-500" />
          <span>Emergency Contact Orchestration</span>
        </h2>
        <p className="text-xs text-slate-500">
          Multi-channel automated next-of-kin notifications with hospital location and zero panic-inducing misinformation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {medicalProfiles.map((p) => (
          <div
            key={p.resqId}
            className="clinic-card p-6 space-y-4 bg-white border border-slate-200"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono text-[#0077ED] font-bold">
                  {p.resqId}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">{p.fullName}</h3>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                Verified Kin Matrix
              </span>
            </div>

            <div className="space-y-3">
              {p.emergencyContacts.map((c, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <span>{c.name}</span>
                      <span className="text-[10px] text-slate-500">
                        ({c.relation})
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      {c.phone}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {c.notified ? (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Dispatched
                      </span>
                    ) : (
                      <button
                        onClick={() => handleNotifyContact(c.name, c.phone)}
                        className="px-3.5 py-1.5 rounded-full bg-[#0077ED] hover:bg-[#0066CC] text-white text-[10px] font-bold shadow-xs transition-all flex items-center gap-1"
                      >
                        <Send className="w-3 h-3" />
                        <span>Send Alert</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
