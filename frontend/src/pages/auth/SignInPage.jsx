import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { Shield, Plus, Lock, ArrowRight, UserCheck, Stethoscope, Radio, CheckCircle } from "lucide-react";

export default function SignInPage() {
  const navigate = useNavigate();
  const { setCurrentUser, addToast } = useApp();

  const [email, setEmail] = useState("responder.lin@resqlink.gov");
  const [password, setPassword] = useState("••••••••••••");

  const handleLogin = (e) => {
    e.preventDefault();
    addToast(
      "Responder Session Authenticated",
      "Field credentials verified. Access token issued.",
      "success"
    );
    navigate("/dashboard");
  };

  const handleRoleQuickSelect = (roleData) => {
    setCurrentUser(roleData);
    addToast(
      `Logged in as ${roleData.name}`,
      `Role clearance: ${roleData.role} (${roleData.accessLevel})`,
      "info"
    );
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col justify-center items-center px-4 py-12 relative">
      {/* Subtle top navy header accent */}
      <div className="absolute top-0 left-0 right-0 h-44 bg-[#002440] -z-0" />

      <div className="w-full max-w-md relative z-10 space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#0077ED] flex items-center justify-center text-white shadow-md">
              <div className="relative flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
                <Plus className="w-3 h-3 text-white absolute font-bold" />
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white font-display">
              ResQ<span className="text-[#38BDF8]">Link</span>
            </span>
          </Link>
          <h2 className="text-xl font-bold text-white font-display">
            Responder &amp; Clinician Portal
          </h2>
          <p className="text-xs text-slate-300">
            Authorized Field EMTs, ER Trauma Physicians &amp; Dispatch Personnel
          </p>
        </div>

        {/* Clean White Auth Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-6">
          
          {/* Demonstration Notice */}
          <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200/80 text-xs text-slate-700">
            <strong className="text-[#0077ED] block font-semibold mb-0.5">
              Academic Review Demo Mode:
            </strong>
            Select any simulated responder profile below for 1-click evaluation access:
          </div>

          {/* Quick Select Buttons */}
          <div className="space-y-2.5">
            <button
              onClick={() =>
                handleRoleQuickSelect({
                  name: "EMT-P Sarah Lin",
                  role: "Lead Field Paramedic",
                  unit: "Paramedic Unit 08",
                  badge: "ALS-4402",
                  accessLevel: "Field Emergency Tier 2",
                  avatar:
                    "https://images.unsplash.com/photo-1594824813565-3882776c5b96?w=150&auto=format&fit=crop&q=80",
                })
              }
              className="w-full p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-300 text-left transition-all flex items-center justify-between text-xs group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-100 text-[#0077ED]">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 group-hover:text-[#0077ED] transition-colors">
                    EMT-P Sarah Lin
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Lead Field Paramedic (Tier 2 Field Clearance)
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0077ED] group-hover:translate-x-0.5 transition-all" />
            </button>

            <button
              onClick={() =>
                handleRoleQuickSelect({
                  name: "Dr. Aris Thorne",
                  role: "Trauma Attending Physician",
                  unit: "St. Jude Trauma Bay 1",
                  badge: "DOC-9912",
                  accessLevel: "Full Clinical Tier 4",
                  avatar:
                    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
                })
              }
              className="w-full p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200 hover:border-emerald-300 text-left transition-all flex items-center justify-between text-xs group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Dr. Aris Thorne
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Trauma Attending Physician (Full Clinical Tier 4)
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
            </button>

            <button
              onClick={() =>
                handleRoleQuickSelect({
                  name: "Captain Marcus Vance",
                  role: "Regional Dispatch Commander",
                  unit: "Central 911/112 Hub",
                  badge: "DISP-001",
                  accessLevel: "Operations Command",
                  avatar:
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
                })
              }
              className="w-full p-3 rounded-2xl bg-slate-50 hover:bg-amber-50/60 border border-slate-200 hover:border-amber-300 text-left transition-all flex items-center justify-between text-xs group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    Capt. Marcus Vance
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Dispatch Commander (Regional Operations HQ)
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 group-hover:translate-x-0.5 transition-all" />
            </button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-[10px] uppercase font-bold tracking-wider text-slate-400 absolute">
              or credentials sign in
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Responder ID / Email Address
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0077ED] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Security Enclave PIN / Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0077ED] focus:bg-white transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#0077ED] hover:bg-[#0066CC] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Authenticate to Operations Grid</span>
            </button>
          </form>

          <div className="text-center pt-2">
            <Link
              to="/"
              className="text-xs font-medium text-slate-500 hover:text-[#0077ED] transition-colors"
            >
              ← Return to ResQLink Hospital Home
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
