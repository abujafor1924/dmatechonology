"use client";

import { CheckCircle2, ShieldAlert, Zap, Layers, Award } from "lucide-react";

export default function SolutionSection() {
  const points = [
    "Continuous DO, pH, Temperature & Salinity Monitoring",
    "Automated Aeration & Smart Feeding Pump Control",
    "Early Warning System for Water Contamination & Disease",
    "Yield Optimization & 30%+ Feed Cost Reduction",
    "24/7 Expert Aquaculture Support & On-Site Consultation",
  ];

  return (
    <section className="py-20 bg-white text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Pond Image with Badge */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
                alt="Controlled Fish Farming Solution"
                className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0d1e3a]/80 via-transparent to-transparent opacity-80" />
            </div>

            {/* Top Left Floating Brand Badge */}
            <div className="absolute top-6 left-6 z-10 bg-[#0d1e3a]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#00c2e0]/40 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00c2e0] flex items-center justify-center text-white font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white tracking-wide">DMA AQUA SOLUTION</h4>
                <p className="text-[11px] text-[#00c2e0] font-medium">Smart Controlled Farming</p>
              </div>
            </div>
          </div>

          {/* Right Side: Text & Checklists */}
          <div className="flex flex-col items-start order-1 lg:order-2">
            <span className="text-[#00c2e0] font-bold text-xs uppercase tracking-widest bg-cyan-50 px-3.5 py-1 rounded-full mb-3 border border-cyan-200">
              WHAT WE DO
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1e3a] tracking-tight leading-tight mb-6">
              Controlled Fish Farming Get Aqua Solution
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              Our end-to-end AIoT ecosystem combines waterproof sensor nodes, automated electrical relays, and cloud AI analytics to convert high-risk traditional fish ponds into scientific, highly profitable smart fisheries.
            </p>

            {/* Checklist Items */}
            <div className="space-y-4 mb-8 w-full">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100 hover:border-cyan-200 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#00c2e0] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-gray-800">{pt}</span>
                </div>
              ))}
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#00c2e0] hover:bg-[#00a8c2] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-cyan-500/20 transition-all"
            >
              Get Pricing Plans
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
