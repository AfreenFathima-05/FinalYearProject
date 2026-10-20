import React from "react";
import { useApp } from "../../context/AppContext";
import { Radar, AlertTriangle, CheckCircle2, ShieldAlert, ArrowRight, Zap } from "lucide-react";

export default function SupportGapPage() {
  const { supportGaps, mitigateSupportGap } = useApp();

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="pb-2 border-b border-slate-200">
        <h2 className="text-xl sm:text-2xl font-bold text-[#002B49] font-display flex items-center gap-2">
          <Radar className="w-6 h-6 text-red-600" />
          <span>Support Gap Sentinel</span>
        </h2>
        <p className="text-xs text-slate-500">
          Autonomous rule-based monitoring engine identifying operational lag, unmet blood requests, and orphan victim states.
        </p>
      </div>

      <div className="space-y-4">
        {supportGaps.map((gap) => (
          <div
            key={gap.id}
            className="clinic-card p-6 space-y-4 bg-white border border-rose-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                  {gap.id}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Target: {gap.incidentId}
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 font-bold">
                  {gap.severity}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                Elapsed: {gap.timeElapsed}
              </span>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#002B49] font-display">
                {gap.gapType}
              </h3>
              <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                {gap.message}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-[#0077ED] flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  <span>Sentinel Recommended Action</span>
                </span>
                <p className="text-slate-600 font-medium">{gap.autoMitigationSuggestion}</p>
              </div>

              {gap.status.includes("Attention") ? (
                <button
                  onClick={() => mitigateSupportGap(gap.id)}
                  className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-sm transition-all shrink-0 self-start sm:self-auto flex items-center gap-1.5"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Execute Automated Mitigation</span>
                </button>
              ) : (
                <span className="text-xs text-emerald-700 flex items-center gap-1 font-bold shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Mitigation Active</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
