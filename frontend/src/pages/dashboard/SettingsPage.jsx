import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { Settings, Server, Shield, Key, RefreshCw, CheckCircle2 } from "lucide-react";

export default function SettingsPage() {
  const { currentUser, addToast } = useApp();
  const [apiEndpoint, setApiEndpoint] = useState("http://localhost:8000/api/v1");
  const [testingHealth, setTestingHealth] = useState(false);

  const handleTestHealth = async () => {
    setTestingHealth(true);
    try {
      const res = await fetch(`${apiEndpoint}/health`);
      if (res.ok) {
        const data = await res.json();
        addToast("FastAPI Backend Connected", `Service: ${data.service} (Status: ${data.status})`, "success");
      } else {
        addToast("Backend Health Check", "FastAPI server returned non-200 or not running yet.", "info");
      }
    } catch (err) {
      addToast(
        "Backend Standby Mode",
        "FastAPI dev server at localhost:8000 is currently idle. Running on frontend mock engine.",
        "info"
      );
    } finally {
      setTestingHealth(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="pb-2 border-b border-slate-200">
        <h2 className="text-xl sm:text-2xl font-bold text-[#002B49] font-display flex items-center gap-2">
          <Settings className="w-6 h-6 text-[#0077ED]" />
          <span>System Settings &amp; API Configuration</span>
        </h2>
        <p className="text-xs text-slate-500">
          Terminal configuration, backend API integration parameters, and cryptographic keys.
        </p>
      </div>

      <div className="clinic-card p-6 sm:p-8 space-y-6 bg-white border border-slate-200">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <div className="p-2.5 rounded-xl bg-blue-50 text-[#0077ED]">
            <Server className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">FastAPI Backend Bridge</h3>
            <p className="text-xs text-slate-500">
              Connect the frontend UI to your local or deployed FastAPI service.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Backend REST API Base URL
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={apiEndpoint}
                onChange={(e) => setApiEndpoint(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-900 focus:outline-none focus:border-[#0077ED] focus:bg-white transition-all"
              />
              <button
                onClick={handleTestHealth}
                disabled={testingHealth}
                className="px-5 py-2.5 rounded-full bg-[#0077ED] text-white text-xs font-bold hover:bg-[#0066CC] transition-all flex items-center gap-1.5 shrink-0 shadow-xs"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${testingHealth ? "animate-spin" : ""}`} />
                <span>Test /health</span>
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
            <div className="flex items-center justify-between text-slate-600">
              <span>Active Responder Terminal:</span>
              <span className="text-slate-900 font-bold">{currentUser.name} ({currentUser.badge})</span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>Assigned Access Role:</span>
              <span className="text-emerald-700 font-bold">{currentUser.role}</span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>Enclave Encryption Cipher:</span>
              <span className="text-[#0077ED] font-mono font-semibold">AES-256-GCM / TLS 1.3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
