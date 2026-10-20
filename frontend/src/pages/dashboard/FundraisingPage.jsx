import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { Coins, ShieldCheck, Heart, User, CheckCircle2, ArrowRight } from "lucide-react";

export default function FundraisingPage() {
  const { fundraising, addToast } = useApp();
  const [campaigns, setCampaigns] = useState(fundraising);

  const handleSimulateDonation = (campaignId) => {
    setCampaigns((prev) =>
      prev.map((c) =>
        c.id === campaignId
          ? {
              ...c,
              collectedAmount: c.collectedAmount + 2500,
              donorsCount: c.donorsCount + 1,
            }
          : c
      )
    );
    addToast(
      "Simulated Relief Contribution Recorded",
      `₹2,500 contribution deposited directly to hospital escrow account. Zero administrative fee deducted.`,
      "success"
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="pb-2 border-b border-slate-200">
        <h2 className="text-xl sm:text-2xl font-bold text-[#002B49] font-display flex items-center gap-2">
          <Coins className="w-6 h-6 text-emerald-600" />
          <span>Verified Hospital Relief Workflow</span>
        </h2>
        <p className="text-xs text-slate-500">
          Zero-fraud emergency medical crowdfunding certified by treating hospital authorities and disbursed directly to billing escrows.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {campaigns.map((c) => {
          const progressPercent = Math.min(
            100,
            Math.round((c.collectedAmount / c.targetAmount) * 100)
          );

          return (
            <div
              key={c.id}
              className="clinic-card p-6 sm:p-7 space-y-5 bg-white border border-slate-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    {c.id}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {c.incidentId}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {c.status}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#002B49] font-display">
                  {c.title}
                </h3>
                <div className="text-xs text-slate-500 mt-1">
                  Beneficiary: <strong className="text-slate-800">{c.beneficiaryName}</strong> • {c.hospital}
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {c.reason}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-900 font-bold">
                    ₹{c.collectedAmount.toLocaleString()} of ₹{c.targetAmount.toLocaleString()}
                  </span>
                  <span className="text-emerald-700 font-bold">{progressPercent}% Funded</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-emerald-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="text-[11px] text-slate-500 flex justify-between">
                  <span>{c.donorsCount} Verified Donors</span>
                  <span className="text-emerald-700 font-medium">Direct-to-Billing Escrow</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                <div className="text-slate-500">
                  Certified By: <strong className="text-slate-800">{c.verifiedBy}</strong>
                </div>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>

              <button
                onClick={() => handleSimulateDonation(c.id)}
                className="w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Simulate ₹2,500 Direct Relief Contribution</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
