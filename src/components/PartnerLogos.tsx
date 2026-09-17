"use client";

import { Droplets, Shield, Cpu, Anchor, Globe, Sparkles } from "lucide-react";

export default function PartnerLogos() {
  const partners = [
    { icon: Droplets, name: "AquaTech Alliance" },
    { icon: Shield, name: "Fisheries Research Board" },
    { icon: Cpu, name: "Smart AgTech BD" },
    { icon: Anchor, name: "Ocean IoT Labs" },
    { icon: Globe, name: "EcoFish Global" },
    { icon: Sparkles, name: "Biofloc Innovators" },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
          Trusted By Leading Aquaculture Organizations & Fisheries
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 p-3 rounded-xl hover:bg-cyan-50 transition-colors group"
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#00c2e0] transition-colors" />
                <span className="text-xs font-extrabold text-gray-600 group-hover:text-[#0d1e3a] tracking-tight">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
