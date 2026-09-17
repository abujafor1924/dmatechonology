"use client";

import { Activity, Cpu, Sliders, Smartphone, ArrowRight } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Activity,
      title: "Real-time Water Monitoring",
      description:
        "Continuous 24/7 tracking of Dissolved Oxygen (DO), pH, Temperature, Salinity, and Ammonia with instant SMS & app alerts.",
    },
    {
      icon: Cpu,
      title: "AI Disease & Feed Advisory",
      description:
        "Smart AI algorithms calculate precise feeding schedules and warn against water toxicity to reduce feed waste up to 30%.",
    },
    {
      icon: Sliders,
      title: "Automated Aerator Control",
      description:
        "Remote & automated activation of paddle aerators and oxygen pumps based on live water parameters to save power.",
    },
    {
      icon: Smartphone,
      title: "Smart Mobile App",
      description:
        "Intuitive mobile application in Bangla & English for multi-pond management, historical charts, and expert support.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#e6f9fc]/60 text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#00c2e0] font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1 rounded-full mb-3 border border-cyan-200 inline-block shadow-sm">
            FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1e3a] tracking-tight mb-4">
            Our Awesome Features Of Smart Mobile App
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Empowering aquaculture farmers across Bangladesh with real-time data, instant alerts, and smart AI insights.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl border border-cyan-100/80 hover:border-[#00c2e0] transition-all duration-300 flex flex-col items-start group hover:-translate-y-1.5"
              >
                {/* Circular Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-[#e6f9fc] text-[#00c2e0] flex items-center justify-center mb-6 group-hover:bg-[#00c2e0] group-hover:text-white transition-colors duration-300 shadow-inner">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-[#0d1e3a] mb-3 group-hover:text-[#00c2e0] transition-colors">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                  {feature.description}
                </p>

                {/* Read More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-bold text-[#00c2e0] hover:text-[#00a8c2] uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
