"use client";

import { Users, Radio, Map, Award } from "lucide-react";

export default function StatsBanner() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Farmers",
    },
    {
      icon: Radio,
      value: "800+",
      label: "Water Sensors Installed",
    },
    {
      icon: Map,
      value: "1500+",
      label: "Acres Monitored",
    },
    {
      icon: Award,
      value: "15+",
      label: "Expert Aquaculturists",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#00c2e0] via-[#00b4d8] to-[#0096c7] text-white py-14 relative overflow-hidden shadow-lg">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center justify-center p-4 group">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 drop-shadow-sm">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-100 opacity-90">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
