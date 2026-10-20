import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, ArrowLeft, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col items-center justify-center p-4 text-center">
      <div className="p-4 rounded-3xl bg-red-50 border border-red-200 mb-4 text-red-600">
        <ShieldAlert className="w-10 h-10" />
      </div>
      <h1 className="text-4xl font-extrabold text-[#002B49] font-display">
        404 - Page Not Found
      </h1>
      <p className="text-sm text-slate-500 max-w-md mt-2">
        The requested medical coordination link or resource is not available in the active registry.
      </p>
      <div className="mt-6 flex items-center gap-3">
        <Link
          to="/"
          className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-2 hover:bg-slate-50"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/dashboard"
          className="btn-medical-primary text-xs flex items-center gap-2"
        >
          <span>Emergency Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
