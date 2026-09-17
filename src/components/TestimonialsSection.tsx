"use client";

import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Before installing DMA Aqua Agro sensors, night-time DO drops caused heavy fish loss twice a year. Now, the automated phone calls wake me up immediately when oxygen falls. Zero fish mortality this season!",
      author: "Hafizur Rahman",
      role: "Commercial Tilapia Farmer",
      location: "Mymensingh, Bangladesh",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
      stars: 5,
    },
    {
      quote:
        "The AI Feed Advisory has saved us over 35% on feed costs across our 12 shrimp ponds. The mobile app in Bangla is super simple for my farm workers to follow every day.",
      author: "Biplob Hossain",
      role: "Shrimp Fishery Owner",
      location: "Satkhira, Bangladesh",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      stars: 5,
    },
    {
      quote:
        "DMA Aqua Agro's automated aerator switch saves us thousands in electricity bills by running aerators only when needed. The tech support team is always available.",
      author: "Kazi Nurul Islam",
      role: "Biofloc & Pond Owner",
      location: "Jessore, Bangladesh",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#0d1e3a] text-white relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00c2e0]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#00c2e0] font-bold text-xs uppercase tracking-widest bg-[#00c2e0]/10 px-3.5 py-1 rounded-full mb-3 border border-[#00c2e0]/30 inline-block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            What Our Clients <span className="text-[#00c2e0]">Say</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            See how smart IoT monitoring is revolutionizing commercial aquaculture for fish farmers across Bangladesh.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#112240] rounded-2xl p-8 border border-cyan-500/20 shadow-xl hover:border-[#00c2e0] transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Quote Icon */}
              <div className="mb-6 flex justify-between items-center">
                <div className="w-12 h-12 rounded-xl bg-[#00c2e0]/20 flex items-center justify-center text-[#00c2e0]">
                  <Quote className="w-6 h-6 rotate-180" />
                </div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic mb-8 flex-1">
                "{item.quote}"
              </p>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-cyan-900/40">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#00c2e0]"
                />
                <div>
                  <h4 className="font-bold text-sm text-white group-hover:text-[#00c2e0] transition-colors">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-[#00c2e0] font-semibold">{item.role}</p>
                  <p className="text-[10px] text-gray-400">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
