"use client";

import { ShieldCheck, Cpu, PhoneCall, TrendingUp, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "24/7 Real-Time Water Alert",
      text: "Instant phone call and SMS alerts the exact minute dissolved oxygen levels drop, preventing sudden fish die-offs.",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Feed Savings",
      text: "Stop overfeeding and water pollution. Our AI algorithm optimizes feed schedules based on real biomass metabolic rates.",
    },
    {
      icon: PhoneCall,
      title: "Direct Specialist Support",
      text: "Get direct consultation from experienced marine biologists and aquaculturists to troubleshoot water quality issues.",
    },
  ];

  return (
    <section className="py-20 bg-[#e6f9fc]/50 text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Reasons */}
          <div className="flex flex-col items-start">
            <span className="text-[#00c2e0] font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1 rounded-full mb-3 border border-cyan-200 inline-block shadow-sm">
              WHY CHOOSE US
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1e3a] tracking-tight leading-tight mb-6">
              We Provide The Best AI & AIoT Water Monitoring Tech For Smart Aquaculture
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              Fish farming in Bangladesh has historically suffered from unpredicted water contamination and night-time oxygen drops. DMA Aqua Agro brings scientific precision and automation directly to your pond.
            </p>

            {/* List of Reasons */}
            <div className="space-y-6 w-full mb-8">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white shadow-sm border border-cyan-100 hover:border-[#00c2e0] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#e6f9fc] text-[#00c2e0] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0d1e3a] text-base mb-1">{r.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{r.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#00c2e0] hover:bg-[#00a8c2] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-cyan-500/20 transition-all"
            >
              Get Free Consultation
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop"
                alt="Why Choose DMA Aqua Agro"
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e3a]/80 via-transparent to-transparent opacity-70" />
            </div>

            {/* Bottom floating badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-cyan-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-[#00c2e0]" />
                <div>
                  <h4 className="font-bold text-sm text-[#0d1e3a]">Proven High ROI</h4>
                  <p className="text-xs text-gray-500">Payback achieved within first harvest cycle</p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#00c2e0] bg-cyan-50 px-3 py-1 rounded-full">
                99.8% Uptime
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
