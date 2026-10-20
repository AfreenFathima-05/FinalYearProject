import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import {
  ShieldAlert,
  UserCheck,
  Droplets,
  Ambulance,
  Radar,
  ArrowRight,
  Clock,
  MapPin,
  Plus,
  AlertTriangle,
  Fingerprint,
  CheckCircle2,
  TrendingUp,
  Activity,
  HeartPulse,
} from "lucide-react";
import CreateIncidentModal from "../../components/forms/CreateIncidentModal";
import RequestBloodModal from "../../components/forms/RequestBloodModal";

export default function DashboardOverview() {
  const {
    incidents,
    unknownVictims,
    bloodRequests,
    hospitalHandovers,
    supportGaps,
    stats,
    mitigateSupportGap,
  } = useApp();

  const [isIncidentModalOpen, setIsIncidentModalOpen] = useState(false);
  const [isBloodModalOpen, setIsBloodModalOpen] = useState(false);

  // Status metrics cards
  const kpiCards = [
    {
      title: "Total Incidents",
      value: stats.total,
      change: "+2 last 2h",
      icon: ShieldAlert,
      color: "#0077ED",
      bgLight: "bg-blue-50",
      link: "/dashboard/incidents",
    },
    {
      title: "Active Emergencies",
      value: stats.active,
      change: "Critical Triage",
      icon: Activity,
      color: "#EF4444",
      bgLight: "bg-red-50",
      link: "/dashboard/incidents",
    },
    {
      title: "Unidentified Victims",
      value: stats.unidentified,
      change: "Needs Linkage",
      icon: UserCheck,
      color: "#F59E0B",
      bgLight: "bg-amber-50",
      link: "/dashboard/unknown-victims",
    },
    {
      title: "STAT Blood Requests",
      value: stats.pendingBlood,
      change: "O- Neg Priority",
      icon: Droplets,
      color: "#E11D48",
      bgLight: "bg-rose-50",
      link: "/dashboard/blood-support",
    },
    {
      title: "Hospital Handovers",
      value: stats.pendingHandovers,
      change: "Inbound St. Jude",
      icon: Ambulance,
      color: "#10B981",
      bgLight: "bg-emerald-50",
      link: "/dashboard/handover",
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Modals */}
      <CreateIncidentModal
        isOpen={isIncidentModalOpen}
        onClose={() => setIsIncidentModalOpen(false)}
      />
      <RequestBloodModal
        isOpen={isBloodModalOpen}
        onClose={() => setIsBloodModalOpen(false)}
      />

      {/* Welcome & Quick Action Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0077ED] text-[11px] font-semibold border border-blue-200 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Regional Incident Command Stream Online</span>
          </div>
          <h2 className="text-2xl font-bold text-[#002B49] font-display">
            Emergency Operations Command
          </h2>
          <p className="text-xs text-slate-500">
            Real-time multi-agency coordination between emergency field responders,
            trauma bays, and blood networks.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setIsIncidentModalOpen(true)}
            className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-sm transition-all flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Incident</span>
          </button>

          <Link
            to="/dashboard/unknown-victims"
            className="px-4 py-2 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-2xs"
          >
            <Fingerprint className="w-3.5 h-3.5 text-[#0077ED]" />
            <span>Match Victim</span>
          </Link>

          <button
            onClick={() => setIsBloodModalOpen(true)}
            className="px-4 py-2 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-2xs"
          >
            <Droplets className="w-3.5 h-3.5 text-rose-500" />
            <span>Request Blood</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Row (Clean Antixor/GeneX Clinic Card Style) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpiCards.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <Link
              key={idx}
              to={kpi.link}
              className="clinic-card p-4 sm:p-5 flex flex-col justify-between space-y-3 group bg-white"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 truncate">
                  {kpi.title}
                </span>
                <div
                  className={`p-2 rounded-xl ${kpi.bgLight} flex items-center justify-center`}
                >
                  <Icon className="w-4 h-4" style={{ color: kpi.color }} />
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#002B49] font-display">
                  {kpi.value}
                </div>
                <div
                  className="text-[11px] font-semibold mt-1 truncate"
                  style={{ color: kpi.color }}
                >
                  {kpi.change}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Support Gap Sentinel Alerts Banner */}
      {supportGaps.length > 0 && (
        <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Radar className="w-5 h-5 text-red-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-red-800">
                Support Gap Sentinel: {supportGaps.length} Actionable Bottlenecks Detected
              </span>
            </div>
            <Link
              to="/dashboard/gaps"
              className="text-xs font-semibold text-[#0077ED] hover:underline flex items-center gap-1"
            >
              <span>View Sentinel Console</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {supportGaps.map((gap) => (
              <div
                key={gap.id}
                className="p-3.5 rounded-xl bg-white border border-rose-100 flex flex-col justify-between space-y-2 shadow-2xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-red-600 font-bold uppercase">
                      [{gap.incidentId}] • {gap.gapType}
                    </span>
                    <p className="text-xs text-slate-800 mt-0.5 font-medium">{gap.message}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 shrink-0 font-medium">
                    {gap.timeElapsed}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px]">
                  <span className="text-slate-500 truncate mr-2">
                    {gap.autoMitigationSuggestion}
                  </span>
                  <button
                    onClick={() => mitigateSupportGap(gap.id)}
                    className="px-3 py-1 rounded-full bg-blue-50 hover:bg-blue-100 text-[#0077ED] text-[10px] font-bold shrink-0 transition-colors"
                  >
                    Auto-Mitigate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Grid: Active Incidents & Handover Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Active Incidents (Col 8) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#002B49] font-display flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              <span>Active Emergency Incidents</span>
            </h3>
            <Link
              to="/dashboard/incidents"
              className="text-xs font-semibold text-[#0077ED] hover:underline flex items-center gap-1"
            >
              <span>View All ({incidents.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {incidents.slice(0, 3).map((inc) => (
              <div
                key={inc.id}
                className="clinic-card p-5 space-y-3.5 bg-white"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-[#0077ED]">
                      {inc.id}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        inc.severity === "Critical"
                          ? "bg-red-50 text-red-700 border border-red-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {inc.severity}
                    </span>
                    <span className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full font-medium">
                      {inc.status}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {inc.timestamp}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900">{inc.title}</h4>
                  <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{inc.location}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Casualties</span>
                    <span className="text-slate-800 font-bold">
                      {inc.victimsTotal} total ({inc.victimsUnidentified} unidentified)
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Lead Unit</span>
                    <span className="text-slate-800 font-bold">{inc.responderUnit}</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Destination</span>
                    <span className="text-emerald-700 font-bold truncate block">
                      {inc.destinationHospital}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Handover & STAT Blood Feeds (Col 4) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Inbound Handovers Card */}
          <div className="clinic-card p-5 space-y-4 bg-white">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Ambulance className="w-4 h-4 text-[#0077ED]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Inbound ER Handovers
                </h4>
              </div>
              <Link
                to="/dashboard/handover"
                className="text-[11px] font-semibold text-[#0077ED] hover:underline"
              >
                View
              </Link>
            </div>

            <div className="space-y-3">
              {hospitalHandovers.slice(0, 2).map((h) => (
                <div
                  key={h.id}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">
                      {h.ambulanceUnit}
                    </span>
                    <span className="text-[10px] font-bold text-[#0077ED] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                      ETA {h.etaMinutes}m
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-600">
                    Patient: <strong className="text-slate-800">{h.patientName}</strong>
                    <br />
                    Vitals: BP {h.vitals.bloodPressure} • HR {h.vitals.heartRate} bpm • SpO2 {h.vitals.spO2}
                  </div>

                  <div className="pt-1.5 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-500">
                    <span>Bay: {h.traumaBay}</span>
                    <span className="text-emerald-700 font-semibold">{h.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Urgent Blood Requests Card */}
          <div className="clinic-card p-5 space-y-4 bg-white">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-rose-500" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  STAT Blood Requests
                </h4>
              </div>
              <Link
                to="/dashboard/blood-support"
                className="text-[11px] font-semibold text-[#0077ED] hover:underline"
              >
                View
              </Link>
            </div>

            <div className="space-y-2.5">
              {bloodRequests.slice(0, 2).map((br) => (
                <div
                  key={br.id}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-rose-600">
                      {br.bloodType} ({br.unitsNeeded} units)
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700">
                      {br.urgency}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-600 truncate">
                    {br.hospital}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Matched Donors Alerted: {br.matchedDonorsCount}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
