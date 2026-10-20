import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { FileText, ShieldCheck, Search, Terminal, Lock, Key } from "lucide-react";

export default function AuditLogsPage() {
  const { auditLogs } = useApp();
  const [filterAction, setFilterAction] = useState("All");

  const filteredLogs = auditLogs.filter(
    (log) => filterAction === "All" || log.action.includes(filterAction)
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="pb-2 border-b border-slate-200">
        <h2 className="text-xl sm:text-2xl font-bold text-[#002B49] font-display flex items-center gap-2">
          <FileText className="w-6 h-6 text-[#0077ED]" />
          <span>Cryptographic Audit &amp; Non-Repudiation Trail</span>
        </h2>
        <p className="text-xs text-slate-500">
          Append-only tamper-evident access log verifying every medical record query and identity resolution.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {["All", "READ", "LINK", "CREATE"].map((act) => (
          <button
            key={act}
            onClick={() => setFilterAction(act)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              filterAction === act
                ? "bg-[#0077ED] text-white shadow-xs"
                : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
            }`}
          >
            {act}
          </button>
        ))}
      </div>

      {/* Logs Table / Cards */}
      <div className="clinic-card overflow-hidden bg-white border border-slate-200 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 uppercase tracking-wider text-[10px] font-bold">
              <tr>
                <th className="py-3.5 px-4">Timestamp</th>
                <th className="py-3.5 px-4">Actor &amp; Role</th>
                <th className="py-3.5 px-4">Action</th>
                <th className="py-3.5 px-4">Target Resource</th>
                <th className="py-3.5 px-4">Verification Hash</th>
                <th className="py-3.5 px-4">Clinical Justification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap font-mono">
                    {log.timestamp}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-slate-900 font-bold">{log.actor}</div>
                    <div className="text-[11px] text-[#0077ED] font-semibold">{log.role}</div>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 font-bold border border-slate-200">
                      {log.action}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-emerald-700 font-bold whitespace-nowrap font-mono">
                    {log.resource}
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap font-mono">
                    <span className="bg-slate-100 px-2 py-1 rounded text-slate-700 text-[11px]">
                      {log.verificationHash}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 max-w-xs truncate">
                    {log.reason}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
