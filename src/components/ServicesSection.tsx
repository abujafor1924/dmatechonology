"use client";

import { ArrowRight, Droplets, Utensils, Fan, Activity, LayoutDashboard, UserCheck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Water Quality Monitoring System",
      description: "Submersible IoT multi-sensor probes tracking Dissolved Oxygen, pH, Temperature, Salinity, and Ammonia 24/7.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop",
      badge: "Real-time Monitoring",
      icon: Droplets,
    },
    {
      title: "Smart Feeding Advisory",
      description: "AI-calculated feeding schedules that adjust based on fish biomass, growth rate, and daily water temperature.",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
      badge: "Feed Optimization",
      icon: Utensils,
    },
    {
      title: "Aeration Control System",
      description: "Automated electrical controller triggering pond paddle aerators dynamically when dissolved oxygen drops.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop",
      badge: "Automation",
      icon: Fan,
    },
    {
      title: "Fish Health Assessment",
      description: "Early water toxicity warning algorithms combined with diagnostic support from expert marine biologists.",
      image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?q=80&w=600&auto=format&fit=crop",
      badge: "Health Protection",
      icon: Activity,
    },
    {
      title: "IoT Farm Automation",
      description: "Centralized mobile dashboard and cloud backend for commercial fisheries managing multiple ponds across sites.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      badge: "Cloud Dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Aquaculture Consulting",
      description: "On-site pond engineering, soil/water chemical lab testing, and customized yield advisory for fish farmers.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
      badge: "Expert Support",
      icon: UserCheck,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#00c2e0] font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1 rounded-full mb-3 border border-cyan-200 inline-block shadow-sm">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1e3a] tracking-tight mb-4">
            Explore Our Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Comprehensive smart aquaculture solutions engineered to boost productivity, minimize fish loss, and maximize ROI.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#00c2e0] transition-all duration-300 flex flex-col group"
              >
                {/* Image Top with Floating Icon Badge */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Circular Badge on bottom right of image */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[#00c2e0] text-white flex items-center justify-center shadow-lg border-2 border-white">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Top Tag Badge */}
                  <span className="absolute top-3 left-3 bg-[#0d1e3a]/90 text-[#00c2e0] text-[11px] font-bold px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col items-start">
                  <h3 className="text-lg font-bold text-[#0d1e3a] mb-3 group-hover:text-[#00c2e0] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#00c2e0] hover:bg-[#00a8c2] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all group-hover:shadow-cyan-500/20"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
