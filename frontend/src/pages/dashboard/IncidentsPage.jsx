import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import {
  ShieldAlert,
  Plus,
  Filter,
  Search,
  MapPin,
  Clock,
  Ambulance,
  HeartPulse,
  ArrowRight,
  X,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import CreateIncidentModal from "../../components/forms/CreateIncidentModal";

export default function IncidentsPage() {
  const { incidents, searchQuery } = useApp();
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Filter incidents based on tab status and search query
  const filteredIncidents = incidents.filter((inc) => {
    const matchesFilter = filterStatus === "All" || inc.status === filterStatus;
    const matchesSearch =
      !searchQuery ||
      inc.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inc.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Create Modal */}
      <CreateIncidentModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#002B49] font-display flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-red-600" />
            <span>Emergency Incident Management</span>
          </h2>
          <p className="text-xs text-slate-500">
            Real-time geofenced incident dispatch, casualty counts, and hospital routing.
          </p>
        </div>

        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-sm transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Report New Incident</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {["All", "Active", "Triaged", "Hospitalized", "Resolved"].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 ${
              filterStatus === status
                ? "bg-[#0077ED] text-white shadow-xs"
                : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Incidents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredIncidents.map((inc) => (
          <div
            key={inc.id}
            onClick={() => setSelectedIncident(inc)}
            className="clinic-card p-5 flex flex-col justify-between space-y-4 cursor-pointer relative group bg-white"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
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
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0077ED] transition-colors">
                  {inc.title}
                </h3>
                <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{inc.location}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {inc.description}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500">
                <div>
                  <span className="text-[9px] uppercase font-semibold text-slate-400 block">Casualties</span>
                  <span className="text-slate-800 font-bold">
                    {inc.victimsTotal} Total ({inc.victimsUnidentified} Unidentified)
                  </span>
                </div>
                <div>
                  <span className="text-[9px] uppercase font-semibold text-slate-400 block">Status</span>
                  <span className="text-emerald-700 font-bold">{inc.status}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#0077ED] pt-1 font-semibold">
                <span className="text-[10px] text-slate-400 font-normal">
                  {inc.timestamp}
                </span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Detail <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredIncidents.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3 shadow-xs">
          <ShieldAlert className="w-10 h-10 text-slate-400 mx-auto opacity-50" />
          <h4 className="text-sm font-semibold text-slate-800">No incidents found</h4>
          <p className="text-xs text-slate-500">
            Try adjusting your search query or status filter.
          </p>
        </div>
      )}

      {/* Incident Detail Modal / Drawer */}
      {selectedIncident && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-7 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#0077ED] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  {selectedIncident.id}
                </span>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    selectedIncident.severity === "Critical"
                      ? "bg-red-50 text-red-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {selectedIncident.severity} Triage
                </span>
              </div>
              <button
                onClick={() => setSelectedIncident(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#002B49] font-display">
                {selectedIncident.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0077ED]" />
                <span>
                  {selectedIncident.location} ({selectedIncident.coordinates})
                </span>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="text-[10px] uppercase font-bold text-slate-500">
                Field Description
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {selectedIncident.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                  Reported At
                </span>
                <span className="text-slate-800 font-bold">
                  {selectedIncident.reportedAt}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                  Assigned Unit
                </span>
                <span className="text-slate-800 font-bold">
                  {selectedIncident.responderUnit}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                  Receiving Hospital
                </span>
                <span className="text-emerald-700 font-bold truncate block">
                  {selectedIncident.destinationHospital}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1.5">
              <div className="text-[10px] uppercase font-bold text-[#0077ED]">
                Live Vitals Stream
              </div>
              <p className="text-xs text-slate-800 font-mono">
                {selectedIncident.vitalsSummary}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedIncident(null)}
                className="px-6 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
