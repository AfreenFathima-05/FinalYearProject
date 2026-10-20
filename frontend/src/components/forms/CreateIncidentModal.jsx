import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { X, AlertTriangle, ShieldAlert, Plus, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CreateIncidentModal({ isOpen, onClose }) {
  const { createIncident } = useApp();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    severity: "Critical",
    victimsTotal: 1,
    victimsUnidentified: 1,
    destinationHospital: "St. Jude Trauma & Emergency Institute",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.title.trim()) errs.title = "Incident title is required";
    if (!formData.location.trim()) errs.location = "Incident location or GPS coordinates required";
    if (formData.victimsTotal < 1) errs.victimsTotal = "At least 1 victim must be recorded";
    if (formData.victimsUnidentified > formData.victimsTotal) {
      errs.victimsUnidentified = "Cannot exceed total victims";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      createIncident(formData);
      setIsSubmitting(false);
      onClose();
      setFormData({
        title: "",
        location: "",
        severity: "Critical",
        victimsTotal: 1,
        victimsUnidentified: 1,
        destinationHospital: "St. Jude Trauma & Emergency Institute",
        description: "",
      });
      setErrors({});
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-7 relative overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-50 text-red-600">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Create Emergency Incident
              </h3>
              <p className="text-xs text-slate-500">
                Broadcast to regional trauma grid &amp; geofence response units
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Incident Name / Nature of Hazard *
            </label>
            <input
              type="text"
              placeholder="e.g. Multi-Vehicle Collision at Highway 47"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0077ED] focus:bg-white transition-all ${
                errors.title ? "border-red-400" : "border-slate-200"
              }`}
            />
            {errors.title && (
              <span className="text-[11px] text-red-600 mt-1 block">
                {errors.title}
              </span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Geographic Location / Landmark *
            </label>
            <input
              type="text"
              placeholder="e.g. Expressway Mile 42 North Corridor"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0077ED] focus:bg-white transition-all ${
                errors.location ? "border-red-400" : "border-slate-200"
              }`}
            />
            {errors.location && (
              <span className="text-[11px] text-red-600 mt-1 block">
                {errors.location}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Triage Severity Level
              </label>
              <select
                value={formData.severity}
                onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0077ED] focus:bg-white transition-all"
              >
                <option value="Critical">Critical (Immediate Triage)</option>
                <option value="High">High (Urgent Triage)</option>
                <option value="Moderate">Moderate (Delayed)</option>
                <option value="Low">Low (Minor)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Designated Trauma Center
              </label>
              <select
                value={formData.destinationHospital}
                onChange={(e) =>
                  setFormData({ ...formData, destinationHospital: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0077ED] focus:bg-white transition-all"
              >
                <option value="St. Jude Trauma & Emergency Institute">
                  St. Jude Trauma Center
                </option>
                <option value="City General Burn & Trauma Wing">
                  City General Hospital
                </option>
                <option value="Apex Memorial Specialty Center">
                  Apex Memorial
                </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Total Casualties / Victims
              </label>
              <input
                type="number"
                min="1"
                value={formData.victimsTotal}
                onChange={(e) =>
                  setFormData({ ...formData, victimsTotal: Number(e.target.value) })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0077ED] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Unidentified (Needs Tagging)
              </label>
              <input
                type="number"
                min="0"
                max={formData.victimsTotal}
                value={formData.victimsUnidentified}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    victimsUnidentified: Number(e.target.value),
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0077ED] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Initial Paramedic Observations / Field Notes
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Passenger trapped under dashboard. Breathing shallow, suspected pneumothorax."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0077ED] focus:bg-white transition-all"
            />
          </div>

          {/* Actions */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
            >
              {isSubmitting ? (
                <span>Broadcasting Incident...</span>
              ) : (
                <>
                  <ShieldAlert className="w-4 h-4" />
                  <span>Initiate Incident &amp; Alert ER</span>
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
