import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, Plus, PhoneCall, Lock, ArrowRight, Menu, X, HeartPulse } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Emergency Modules", href: "#modules" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Live Telemetry", href: "#support-preview" },
    { name: "Why ResQLink", href: "#trust-privacy" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#002440]/95 backdrop-blur-md border-b border-white/10 transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Antixor Hospital style */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0077ED] flex items-center justify-center shadow-[0_4px_14px_rgba(0,119,237,0.4)] group-hover:bg-[#0066CC] transition-all">
            <div className="relative flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
              <Plus className="w-3 h-3 text-white absolute font-bold" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white font-display">
                ResQ<span className="text-[#38BDF8]">Link</span>
              </span>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-white/15 text-white tracking-wide border border-white/20">
                Hospital Grid
              </span>
            </div>
            <p className="text-[11px] text-slate-300 font-normal hidden sm:block">
              Emergency Identification &amp; Care Continuity
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-200 hover:text-white transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#38BDF8]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-2 text-xs text-slate-300 border-r border-white/15 pr-5">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#38BDF8]">
              <PhoneCall className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] uppercase text-slate-400">Emergency Dispatch</div>
              <div className="font-semibold text-white">911 / 112 STAT</div>
            </div>
          </div>

          <Link
            to="/signin"
            className="text-sm font-medium text-slate-200 hover:text-white px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Lock className="w-4 h-4 text-[#38BDF8]" />
            <span>Sign In</span>
          </Link>

          <Link
            to="/dashboard"
            className="btn-medical-primary flex items-center gap-2 text-sm shadow-[0_4px_16px_rgba(0,119,237,0.35)]"
          >
            <span>Open Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            to="/dashboard"
            className="text-xs font-semibold bg-[#0077ED] text-white px-3.5 py-1.5 rounded-full flex items-center gap-1"
          >
            <span>Portal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-white/10 bg-[#002440] px-6 py-5 space-y-4 shadow-xl"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-200 hover:text-white py-1.5"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                to="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-medium text-white bg-white/10 rounded-xl"
              >
                Sign In to ResQ Responder Portal
              </Link>
              <Link
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold text-white bg-[#0077ED] rounded-full shadow-md"
              >
                Open Operational Dashboard
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
