import React from "react";
import { useApp } from "../../context/AppContext";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertCircle, Info, Flame, X } from "lucide-react";

export default function ToastContainer() {
  const { toasts, removeToast } = useApp();

  const getIcon = (type) => {
    switch (type) {
      case "urgent":
        return <Flame className="w-5 h-5 text-red-600 animate-pulse" />;
      case "error":
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case "info":
        return <Info className="w-5 h-5 text-[#0077ED]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
    }
  };

  const getBorderColor = (type) => {
    switch (type) {
      case "urgent":
      case "error":
        return "border-red-200 bg-white";
      case "info":
        return "border-blue-200 bg-white";
      default:
        return "border-emerald-200 bg-white";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={`pointer-events-auto p-4 rounded-2xl border shadow-xl flex items-start gap-3 ${getBorderColor(
              toast.type
            )}`}
          >
            <div className="mt-0.5 shrink-0">{getIcon(toast.type)}</div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-slate-900 tracking-wide">
                {toast.title}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                {toast.description}
              </p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-slate-700 transition-colors shrink-0 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
