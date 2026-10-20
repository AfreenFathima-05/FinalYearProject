import React, { createContext, useContext, useState, useMemo } from "react";
import {
  INITIAL_INCIDENTS,
  INITIAL_UNKNOWN_VICTIMS,
  INITIAL_MEDICAL_PROFILES,
  INITIAL_BLOOD_REQUESTS,
  INITIAL_FUNDRAISING,
  INITIAL_HOSPITAL_HANDOVERS,
  INITIAL_VOLUNTEER_NETWORK,
  INITIAL_SUPPORT_GAPS,
  INITIAL_AUDIT_LOGS,
} from "../services/mockData";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [incidents, setIncidents] = useState(INITIAL_INCIDENTS);
  const [unknownVictims, setUnknownVictims] = useState(INITIAL_UNKNOWN_VICTIMS);
  const [medicalProfiles] = useState(INITIAL_MEDICAL_PROFILES);
  const [bloodRequests, setBloodRequests] = useState(INITIAL_BLOOD_REQUESTS);
  const [fundraising] = useState(INITIAL_FUNDRAISING);
  const [hospitalHandovers, setHospitalHandovers] = useState(INITIAL_HOSPITAL_HANDOVERS);
  const [volunteers] = useState(INITIAL_VOLUNTEER_NETWORK);
  const [supportGaps, setSupportGaps] = useState(INITIAL_SUPPORT_GAPS);
  const [auditLogs, setAuditLogs] = useState(INITIAL_AUDIT_LOGS);

  // Active user / responder session (Demo Role)
  const [currentUser, setCurrentUser] = useState({
    name: "EMT-P Sarah Lin",
    role: "Lead Field Paramedic",
    unit: "Paramedic Unit 08",
    badge: "ALS-4402",
    accessLevel: "Field Emergency Tier 2",
    avatar: "https://images.unsplash.com/photo-1594824813565-3882776c5b96?w=150&auto=format&fit=crop&q=80",
  });

  // Global search & filters
  const [searchQuery, setSearchQuery] = useState("");
  const [incidentFilter, setIncidentFilter] = useState("All");

  // Toast feedback notifications
  const [toasts, setToasts] = useState([
    {
      id: "toast-1",
      title: "ResQLink Core Online",
      description: "Encrypted biometric continuity & telemetry sync active.",
      type: "info",
      timestamp: Date.now(),
    },
  ]);

  const addToast = (title, description, type = "success") => {
    const id = "toast-" + Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type, timestamp: Date.now() }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Actions: Add new incident
  const createIncident = (newIncidentData) => {
    const newId = `INC-2026-0${Math.floor(893 + Math.random() * 90)}`;
    const createdIncident = {
      id: newId,
      title: newIncidentData.title || "Emergency Incident Reported",
      location: newIncidentData.location || "Central Corridor",
      coordinates: newIncidentData.coordinates || "12.9716° N, 77.5946° E",
      severity: newIncidentData.severity || "Critical",
      status: "Active",
      timestamp: "Just now",
      reportedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " IST",
      victimsTotal: Number(newIncidentData.victimsTotal) || 1,
      victimsUnidentified: Number(newIncidentData.victimsUnidentified) || 0,
      responderUnit: currentUser.unit,
      destinationHospital: newIncidentData.destinationHospital || "St. Jude Trauma & Emergency Institute",
      triageCategory: newIncidentData.severity === "Critical" ? "Red - Immediate" : "Yellow - Urgent",
      description: newIncidentData.description || "Reported via emergency dispatcher.",
      assignedStaff: currentUser.name,
      vitalsSummary: "Vitals intake logged by responder. Telemetry streaming.",
      supportRequirements: newIncidentData.supportRequirements || ["Triage Assessment Active"],
    };

    setIncidents((prev) => [createdIncident, ...prev]);

    // Add audit log
    const auditEntry = {
      id: `AUD-${Math.floor(11000 + Math.random() * 900)}`,
      timestamp: new Date().toLocaleTimeString() + " IST",
      actor: `${currentUser.name} (${currentUser.badge})`,
      role: currentUser.role,
      action: "CREATE_INCIDENT",
      resource: newId,
      deviceFingerprint: "Secure Field Tablet #08",
      verificationHash: "0x" + Math.random().toString(16).substring(2, 10).toUpperCase(),
      reason: "Responder on-scene incident initiation",
    };
    setAuditLogs((prev) => [auditEntry, ...prev]);

    addToast(
      "Emergency Incident Created",
      `${newId} has been registered and broadcast to regional ER trauma grid.`,
      "success"
    );

    return createdIncident;
  };

  // Action: Link unknown victim identity
  const linkVictimIdentity = (tempId, candidate) => {
    setUnknownVictims((prev) =>
      prev.map((v) =>
        v.tempId === tempId
          ? {
              ...v,
              status: "Identity Linked",
              linkedProfile: candidate,
            }
          : v
      )
    );

    // Update incident unknown victim count
    setIncidents((prev) =>
      prev.map((inc) => {
        if (inc.victimsUnidentified > 0) {
          return { ...inc, victimsUnidentified: Math.max(0, inc.victimsUnidentified - 1) };
        }
        return inc;
      })
    );

    // Add audit log
    const auditEntry = {
      id: `AUD-${Math.floor(11000 + Math.random() * 900)}`,
      timestamp: new Date().toLocaleTimeString() + " IST",
      actor: `${currentUser.name} (${currentUser.badge})`,
      role: currentUser.role,
      action: "LINK_VERIFIED_IDENTITY",
      resource: `${tempId} -> ${candidate.personId}`,
      deviceFingerprint: "Secure Biometric Mesh Terminal",
      verificationHash: "0x" + Math.random().toString(16).substring(2, 10).toUpperCase(),
      reason: "Confirmed 94.6% confidence biometric match with photographic verification",
    };
    setAuditLogs((prev) => [auditEntry, ...prev]);

    addToast(
      "Victim Identity Successfully Linked",
      `${tempId} securely matched to ${candidate.name} (${candidate.bloodGroup}). Medical profile unlocked.`,
      "success"
    );
  };

  // Action: Request urgent blood
  const requestBlood = (bloodType, units, hospital, incidentId) => {
    const reqId = `BLD-REQ-${Math.floor(403 + Math.random() * 80)}`;
    const newReq = {
      id: reqId,
      incidentId: incidentId || "INC-2026-0891",
      bloodType: bloodType || "O- Negative",
      unitsNeeded: Number(units) || 2,
      unitsPledged: 0,
      urgency: "Immediate (STAT)",
      hospital: hospital || "St. Jude Trauma Center",
      department: "Trauma Bay Urgent Care",
      timeRemaining: "45 mins",
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " IST",
      status: "Pending",
      matchedDonors: [
        { name: "Blood Bank Central Logistics", distance: "En route dispatch", eta: "15 mins", phone: "+91 80 5541 2234" }
      ],
    };
    setBloodRequests((prev) => [newReq, ...prev]);
    addToast(
      "Blood Request Broadcasted",
      `STAT Request for ${units} units of ${bloodType} dispatched to regional donor network.`,
      "urgent"
    );
  };

  // Action: Mitigate Support Gap
  const mitigateSupportGap = (gapId) => {
    setSupportGaps((prev) =>
      prev.map((g) =>
        g.id === gapId
          ? { ...g, status: "Mitigation Dispatched", message: "Mitigation in progress: priority dispatch initiated." }
          : g
      )
    );
    addToast(
      "Support Gap Mitigation Active",
      "Priority automated workflow dispatched to resolve bottleneck.",
      "info"
    );
  };

  // Computed dashboard metrics
  const stats = useMemo(() => {
    const total = incidents.length;
    const active = incidents.filter((i) => i.status === "Active").length;
    const unidentified = unknownVictims.filter((v) => v.status !== "Identity Linked").length;
    const pendingBlood = bloodRequests.filter((b) => b.status !== "Fulfilled").length;
    const pendingHandovers = hospitalHandovers.filter((h) => h.status !== "Completed").length;
    const activeGaps = supportGaps.filter((g) => g.status.includes("Attention")).length;

    return {
      total,
      active,
      unidentified,
      pendingBlood,
      pendingHandovers,
      activeGaps,
    };
  }, [incidents, unknownVictims, bloodRequests, hospitalHandovers, supportGaps]);

  const value = {
    incidents,
    unknownVictims,
    medicalProfiles,
    bloodRequests,
    fundraising,
    hospitalHandovers,
    volunteers,
    supportGaps,
    auditLogs,
    currentUser,
    setCurrentUser,
    searchQuery,
    setSearchQuery,
    incidentFilter,
    setIncidentFilter,
    toasts,
    addToast,
    removeToast,
    createIncident,
    linkVictimIdentity,
    requestBlood,
    mitigateSupportGap,
    stats,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
