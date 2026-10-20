import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ShieldCheck,
  ArrowRight,
  Activity,
  HeartPulse,
  Clock,
  Award,
  Users,
  PhoneCall,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden hero-navy-gradient text-white">
      {/* Subtle background ambient circles matching Image 1 */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0077ED]/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#38BDF8]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions (Antixor style) */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full hero-glass-pill shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-white uppercase">
                Trusted Care. Real-time Emergency Coordination
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.15]">
                World-Class Emergency Care{" "}
                <span className="text-[#38BDF8]">
                  for a Brighter Future
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                At ResQLink Emergency Hospital Network, we combine advanced identification,
                expert doctors, and compassionate coordination to give trauma patients
                the fastest, verified life-saving care.
              </p>
            </motion.div>

            {/* Antixor Dual Pill Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1"
            >
              <Link
                to="/dashboard"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0077ED] hover:bg-[#0066CC] text-white font-semibold text-sm shadow-[0_4px_20px_rgba(0,119,237,0.4)] hover:shadow-[0_6px_25px_rgba(0,119,237,0.55)] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Open Emergency Grid</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#modules"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <span>Our Departments</span>
              </a>
            </motion.div>

            {/* Antixor Bottom 4-Column Stat Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-2xl mx-auto lg:mx-0 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#38BDF8] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-display">&lt;18s</div>
                  <div className="text-[11px] text-slate-300">Triage ID Link</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#38BDF8] shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-display">50+</div>
                  <div className="text-[11px] text-slate-300">Expert Doctors</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#38BDF8] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-display">25K+</div>
                  <div className="text-[11px] text-slate-300">Patients Aided</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#38BDF8] shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-display">24/7</div>
                  <div className="text-[11px] text-slate-300">STAT Support</div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Doctor Image with Antixor Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Doctor Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-900 group">
                <img
                  src="/images/hero-doctor.jpg"
                  alt="Lead Emergency Physician"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient shadow on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001E36]/90 via-transparent to-transparent" />

                {/* Bottom caption on image */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                      Live Triage Center
                    </span>
                  </div>
                  <div className="text-lg font-bold font-display mt-0.5">
                    Dr. Sarah Lin, MD • Lead Trauma Specialist
                  </div>
                  <p className="text-xs text-slate-300">
                    St. Jude Emergency Center &amp; Regional Incident Response
                  </p>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-3 -right-3 sm:-right-5 z-20 hero-glass-card rounded-2xl p-3 sm:p-3.5 border border-white/20 shadow-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#0077ED] flex items-center justify-center text-white shadow-md">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Live Telemetry</div>
                  <div className="text-[10px] text-[#38BDF8] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    100% Signal Synced
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 -left-3 sm:-left-5 z-20 hero-glass-card rounded-2xl p-3 sm:p-3.5 border border-white/20 shadow-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">O- Neg Universal Match</div>
                  <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    94.6% Verified Match
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
