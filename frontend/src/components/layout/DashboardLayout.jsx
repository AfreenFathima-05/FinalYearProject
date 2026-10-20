import React, { useState } from "react";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import {
  Shield,
  Plus,
  LayoutDashboard,
  ShieldAlert,
  UserCheck,
  FileHeart,
  PhoneCall,
  Droplets,
  Coins,
  Ambulance,
  Users,
  Radar,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  User,
  LogOut,
  Menu,
  X,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import CreateIncidentModal from "../forms/CreateIncidentModal";
import ToastContainer from "../feedback/ToastContainer";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, searchQuery, setSearchQuery, stats } = useApp();

  const navItems = [
    { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
    {
      name: "Emergency Incidents",
      path: "/dashboard/incidents",
      icon: ShieldAlert,
      badge: stats.active > 0 ? `${stats.active} Active` : null,
      badgeColor: "bg-red-500 text-white font-bold",
    },
    {
      name: "Unknown Victims",
      path: "/dashboard/unknown-victims",
      icon: UserCheck,
      badge: stats.unidentified > 0 ? `${stats.unidentified}` : null,
      badgeColor: "bg-amber-500 text-white font-bold",
    },
    { name: "Medical Profiles", path: "/dashboard/medical-profiles", icon: FileHeart },
    { name: "Emergency Contacts", path: "/dashboard/contacts", icon: PhoneCall },
    {
      name: "Blood Assistance",
      path: "/dashboard/blood-support",
      icon: Droplets,
      badge: stats.pendingBlood > 0 ? `${stats.pendingBlood} STAT` : null,
      badgeColor: "bg-red-500 text-white font-bold",
    },
    { name: "Relief Funding", path: "/dashboard/fundraising", icon: Coins },
    {
      name: "Hospital Handover",
      path: "/dashboard/handover",
      icon: Ambulance,
      badge: stats.pendingHandovers > 0 ? `${stats.pendingHandovers}` : null,
      badgeColor: "bg-[#0077ED] text-white font-bold",
    },
    { name: "Volunteer Network", path: "/dashboard/volunteers", icon: Users },
    {
      name: "Support Gap Monitor",
      path: "/dashboard/gaps",
      icon: Radar,
      badge: stats.activeGaps > 0 ? `${stats.activeGaps} Gaps` : null,
      badgeColor: "bg-rose-500 text-white font-bold",
    },
    { name: "Audit Logs", path: "/dashboard/audit", icon: FileText },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
  ];

  const getPageTitle = () => {
    const item = navItems.find((n) => n.path === location.pathname);
    return item ? item.name : "Dashboard";
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 flex">
      {/* Toast Feedback */}
      <ToastContainer />

      {/* New Incident Modal */}
      <CreateIncidentModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      {/* Sidebar - Desktop (Antixor Hospital Deep Navy Theme) */}
      <aside
        className={`hidden md:flex flex-col bg-[#002440] text-white transition-all duration-300 relative z-30 shrink-0 shadow-lg ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10 bg-[#001E36]">
          <Link to="/" className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-[#0077ED] flex items-center justify-center shrink-0 shadow-sm text-white">
              <Shield className="w-4 h-4" />
            </div>
            {!collapsed && (
              <div className="whitespace-nowrap">
                <span className="text-base font-bold text-white font-display">
                  ResQ<span className="text-[#38BDF8]">Link</span>
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 block -mt-1 font-semibold">
                  Hospital Grid
                </span>
              </div>
            )}
          </Link>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto py-3 px-2.5 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all group relative ${
                  isActive
                    ? "bg-[#0077ED] text-white shadow-sm font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
                title={collapsed ? item.name : undefined}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                  }`}
                />
                {!collapsed && (
                  <span className="truncate flex-1">{item.name}</span>
                )}
                {!collapsed && item.badge && (
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Sidebar Footer User Info */}
        <div className="p-3 border-t border-white/10 bg-[#001E36]">
          <div
            className={`flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10 ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-8 h-8 rounded-lg object-cover border border-white/20 shrink-0"
            />
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-white truncate">
                  {currentUser.name}
                </div>
                <div className="text-[10px] text-emerald-400 truncate font-medium">
                  ● {currentUser.role}
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Bar - Clean White Hospital Header */}
        <header className="h-16 bg-white border-b border-slate-200/90 px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0 z-20 shadow-xs">
          
          {/* Left: Mobile menu toggle + Breadcrumb & Page Title */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <div className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                <Link to="/" className="hover:text-[#0077ED] transition-colors">
                  ResQLink
                </Link>
                <span>/</span>
                <span className="text-slate-800 font-semibold">{getPageTitle()}</span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-[#002B49] font-display truncate">
                {getPageTitle()}
              </h1>
            </div>
          </div>

          {/* Center: Search Input */}
          <div className="hidden sm:flex items-center flex-1 max-w-xs relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search incidents, victims, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0077ED] focus:bg-white transition-all"
            />
          </div>

          {/* Right: Actions & User Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Quick Create Incident Button */}
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="px-3.5 py-1.5 rounded-full bg-[#EF4444] hover:bg-red-600 text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Incident</span>
            </button>

            {/* Notification Bell */}
            <Link
              to="/dashboard/gaps"
              className="relative p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="Support Gaps &amp; Alerts"
            >
              <Bell className="w-4 h-4" />
              {stats.activeGaps > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
              )}
            </Link>

            {/* Quick Role Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 border border-slate-200 transition-colors bg-white shadow-2xs"
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-7 h-7 rounded-lg object-cover border border-slate-200"
                />
                <div className="hidden lg:block text-left text-xs leading-none">
                  <div className="font-semibold text-slate-900">{currentUser.name}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{currentUser.unit}</div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-xl p-2 z-50 text-xs">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      Switch Demo Role
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentUser({
                        name: "EMT-P Sarah Lin",
                        role: "Lead Field Paramedic",
                        unit: "Paramedic Unit 08",
                        badge: "ALS-4402",
                        accessLevel: "Field Emergency Tier 2",
                        avatar:
                          "https://images.unsplash.com/photo-1594824813565-3882776c5b96?w=150&auto=format&fit=crop&q=80",
                      });
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors"
                  >
                    <div className="font-semibold text-slate-900">EMT-P Sarah Lin</div>
                    <div className="text-[10px] text-slate-500">Lead Field Paramedic (Tier 2)</div>
                  </button>
                  <button
                    onClick={() => {
                      setCurrentUser({
                        name: "Dr. Aris Thorne",
                        role: "Trauma Attending Physician",
                        unit: "St. Jude Trauma Bay 1",
                        badge: "DOC-9912",
                        accessLevel: "Full Clinical Tier 4",
                        avatar:
                          "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
                      });
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors"
                  >
                    <div className="font-semibold text-slate-900">Dr. Aris Thorne</div>
                    <div className="text-[10px] text-slate-500">Trauma Attending (Tier 4)</div>
                  </button>
                  <button
                    onClick={() => {
                      setCurrentUser({
                        name: "Captain Marcus Vance",
                        role: "Regional Dispatch Commander",
                        unit: "Central 911/112 Hub",
                        badge: "DISP-001",
                        accessLevel: "Operations Command",
                        avatar:
                          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
                      });
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors"
                  >
                    <div className="font-semibold text-slate-900">Capt. Marcus Vance</div>
                    <div className="text-[10px] text-slate-500">Dispatch Commander</div>
                  </button>
                  <div className="border-t border-slate-100 my-1" />
                  <Link
                    to="/"
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 text-slate-600 flex items-center justify-between"
                  >
                    <span>Exit to Public Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#002440] text-white p-4 border-b border-white/10 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium ${
                    isActive ? "bg-[#0077ED] text-white" : "text-slate-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        )}

        {/* Scrollable Main Workspace */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#F8FAFC]">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
