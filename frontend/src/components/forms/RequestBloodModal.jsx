import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { X, Droplets, Flame, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export default function RequestBloodModal({ isOpen, onClose }) {
  const { requestBlood, incidents } = useApp();

  const [bloodType, setBloodType] = useState("O- Negative");
  const [units, setUnits] = useState(2);
  const [hospital, setHospital] = useState("St. Jude Trauma Center");
  const [incidentId, setIncidentId] = useState(incidents[0]?.id || "INC-2026-0891");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    requestBlood(bloodType, units, hospital, incidentId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-7 space-y-5"
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-50 text-red-600">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Broadcast STAT Blood Request
              </h3>
              <p className="text-xs text-slate-500">
                Dispatches urgent alert to certified regional donors
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Required Blood Group / Component *
            </label>
            <select
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all font-semibold"
            >
              <option value="O- Negative">O- Negative (Universal STAT Priority)</option>
              <option value="O+ Positive">O+ Positive</option>
              <option value="A- Negative">A- Negative</option>
              <option value="A+ Positive">A+ Positive</option>
              <option value="B- Negative">B- Negative</option>
              <option value="B+ Positive">B+ Positive</option>
              <option value="AB- Negative">AB- Negative</option>
              <option value="AB+ Positive">AB+ Positive</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Units Required
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Attached Incident
              </label>
              <select
                value={incidentId}
                onChange={(e) => setIncidentId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all"
              >
                {incidents.map((inc) => (
                  <option key={inc.id} value={inc.id}>
                    {inc.id}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Receiving Hospital &amp; Trauma Bay
            </label>
            <input
              type="text"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all"
            />
          </div>

          <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-800">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              STAT requests automatically notify certified donors within a 5km radius via
              emergency SMS and push channels.
            </span>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
            >
              <Droplets className="w-4 h-4" />
              <span>Broadcast Request</span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
