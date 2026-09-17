"use client";

import { CheckCircle2, Droplets, Award, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Image with Floating Logo Badge */}
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group-hover:shadow-cyan-500/20 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop"
                alt="DMA Aqua Agro Fish Farming Cages"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>

            {/* Top Left Floating Brand Badge (Exact match to image badge) */}
            <div className="absolute top-6 left-6 z-10 bg-[#0d1e3a]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#00c2e0]/40 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00c2e0] flex items-center justify-center text-white font-bold">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white tracking-wide">DMA AQUA AGRO</h4>
                <p className="text-[11px] text-[#00c2e0] font-medium">AIoT Aquaculture Pioneer</p>
              </div>
            </div>

            {/* Bottom Right Counter Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-cyan-100 hidden sm:flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-[#00c2e0]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-[#0d1e3a]">40%+</span>
                <p className="text-xs text-gray-500 font-semibold">Yield Increase Rate</p>
              </div>
            </div>
          </div>

          {/* Right Side: Text & Content */}
          <div className="flex flex-col items-start">
            <span className="text-[#00c2e0] font-bold text-xs uppercase tracking-widest bg-cyan-50 px-3.5 py-1 rounded-full mb-3 border border-cyan-200">
              ABOUT US
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1e3a] tracking-tight leading-tight mb-6">
              DMA Aqua Agro Ltd
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              <strong className="text-gray-900">DMA Aqua Agro Ltd</strong> is a premier smart aquaculture technology company operating at the intersection of AI, Internet of Things (IoT), and commercial fish farming in Bangladesh.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Our mission is to eliminate risk from fish farming by providing continuous, automated water parameter tracking (Dissolved Oxygen, pH, Temperature, Salinity, Ammonia), AI-driven feed optimization advisory, and early disease prevention systems.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
              <div className="flex items-center gap-2.5 text-sm text-gray-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#00c2e0] shrink-0" />
                <span>Real-Time Sensor Alerts</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#00c2e0] shrink-0" />
                <span>Automated Aerator Control</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#00c2e0] shrink-0" />
                <span>30%+ Feed Cost Reduction</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#00c2e0] shrink-0" />
                <span>24/7 Aquaculture Advisory</span>
              </div>
            </div>

            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#00c2e0] hover:bg-[#00a8c2] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-cyan-500/20 transition-all"
            >
              Explore Solution
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
