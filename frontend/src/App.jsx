import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

// Pages
import LandingPage from "./pages/landing/LandingPage";
import SignInPage from "./pages/auth/SignInPage";
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import IncidentsPage from "./pages/dashboard/IncidentsPage";
import UnknownVictimsPage from "./pages/dashboard/UnknownVictimsPage";
import MedicalProfilesPage from "./pages/dashboard/MedicalProfilesPage";
import ContactsPage from "./pages/dashboard/ContactsPage";
import BloodSupportPage from "./pages/dashboard/BloodSupportPage";
import FundraisingPage from "./pages/dashboard/FundraisingPage";
import HandoverPage from "./pages/dashboard/HandoverPage";
import VolunteersPage from "./pages/dashboard/VolunteersPage";
import SupportGapPage from "./pages/dashboard/SupportGapPage";
import AuditLogsPage from "./pages/dashboard/AuditLogsPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import NotFoundPage from "./pages/not-found/NotFoundPage";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Responder Sign-In */}
          <Route path="/signin" element={<SignInPage />} />

          {/* Protected Operational Dashboard */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="incidents" element={<IncidentsPage />} />
            <Route path="unknown-victims" element={<UnknownVictimsPage />} />
            <Route path="medical-profiles" element={<MedicalProfilesPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="blood-support" element={<BloodSupportPage />} />
            <Route path="fundraising" element={<FundraisingPage />} />
            <Route path="handover" element={<HandoverPage />} />
            <Route path="volunteers" element={<VolunteersPage />} />
            <Route path="gaps" element={<SupportGapPage />} />
            <Route path="audit" element={<AuditLogsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
