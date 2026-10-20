import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Plus,
  Phone,
  Mail,
  MapPin,
  Clock,
  HeartPulse,
  ExternalLink,
} from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-[#001C33] text-slate-300 pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Columns - Directly from Image 1 Antixor Hospital Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0077ED] flex items-center justify-center text-white shadow-md">
                <div className="relative flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                  <Plus className="w-3 h-3 text-white absolute font-bold" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  ResQ<span className="text-[#38BDF8]">Link</span>
                </span>
                <span className="text-xs text-slate-400 block -mt-0.5">
                  Hospital Emergency Grid
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Better Care. Faster Response. Healthier Tomorrow.
              ResQLink unites emergency field responders, trauma hospital bays, and verified
              donor registries into a reliable life-saving network.
            </p>

            {/* Social Icons matching Image 1 */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0077ED] hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a
                href="#twitter"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0077ED] hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#linkedin"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0077ED] hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.46 1.46 0 1 0 0-2.92 1.46 1.46 0 0 0 0 2.92m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                </svg>
              </a>
              <a
                href="#instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0077ED] hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home Portal
                </Link>
              </li>
              <li>
                <Link to="/dashboard/incidents" className="hover:text-white transition-colors">
                  Emergency Incidents
                </Link>
              </li>
              <li>
                <Link to="/dashboard/unknown-victims" className="hover:text-white transition-colors">
                  Unknown Victims
                </Link>
              </li>
              <li>
                <Link to="/dashboard/blood-support" className="hover:text-white transition-colors">
                  Blood Support Pipeline
                </Link>
              </li>
              <li>
                <Link to="/dashboard/handover" className="hover:text-white transition-colors">
                  Hospital Handover
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/dashboard/medical-profiles" className="hover:text-white transition-colors">
                  Medical Record Continuity
                </Link>
              </li>
              <li>
                <Link to="/dashboard/contacts" className="hover:text-white transition-colors">
                  Emergency Contact Mesh
                </Link>
              </li>
              <li>
                <Link to="/dashboard/volunteers" className="hover:text-white transition-colors">
                  Certified First Responders
                </Link>
              </li>
              <li>
                <Link to="/dashboard/gaps" className="hover:text-white transition-colors">
                  Support Gap Sentinel
                </Link>
              </li>
              <li>
                <Link to="/dashboard/audit" className="hover:text-white transition-colors">
                  Audit Trail &amp; Ledger
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (Image 1 style) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span className="text-white font-medium">+1 800 737 7546</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>emergency@resqlink.health</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Regional Trauma Command, St. Jude</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>24/7 STAT Field Coverage</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 ResQLink Hospital Network. All rights reserved. Built for CSE Capstone Evaluation.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#security" className="hover:text-slate-300 transition-colors">
              HIPAA Compliance
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
