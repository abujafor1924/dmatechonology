"use client";

import { Globe, Share2, Mail } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Md. Jafor Iqbal",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Dr. Tanvir Ahmed",
      role: "Chief Aquaculture Specialist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Rafiqul Islam",
      role: "Lead AIoT Hardware Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#00c2e0] font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1 rounded-full mb-3 border border-cyan-200 inline-block shadow-sm">
            OUR TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1e3a] tracking-tight mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Engineers, marine biologists, and innovators working together to secure aquaculture productivity.
          </p>
        </div>

        {/* 3 Team Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#00c2e0] transition-all duration-300 group flex flex-col items-center text-center"
            >
              {/* Image Container */}
              <div className="relative w-full h-72 overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e3a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  {/* Social Icons on Hover */}
                  <div className="flex items-center gap-3">
                    <a href="#" className="w-9 h-9 rounded-full bg-white text-[#00c2e0] flex items-center justify-center hover:bg-[#00c2e0] hover:text-white transition-colors">
                      <Globe className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-white text-[#00c2e0] flex items-center justify-center hover:bg-[#00c2e0] hover:text-white transition-colors">
                      <Share2 className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-white text-[#00c2e0] flex items-center justify-center hover:bg-[#00c2e0] hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 w-full">
                <h3 className="text-lg font-extrabold text-[#0d1e3a] mb-1 group-hover:text-[#00c2e0] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#00c2e0] uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
