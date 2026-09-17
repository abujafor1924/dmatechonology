"use client";

import { useState } from "react";
import { Droplets, Phone, Mail, MapPin, Send, Globe, Share2, ArrowRight } from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative bg-[#081225] text-white pt-16 pb-8 overflow-hidden">
      
      {/* Top Wave SVG Divider */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none opacity-20 pointer-events-none">
        <svg
          className="relative block w-full h-8 text-[#00c2e0]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-cyan-900/40">
          
          {/* Column 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-10 h-10 rounded-lg bg-[#00c2e0] flex items-center justify-center text-white shadow-md">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  DMA <span className="text-[#00c2e0]">Aqua Agro</span>
                </span>
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest -mt-1">
                  Smart Aquaculture Ltd
                </span>
              </div>
            </a>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
              Pioneering smart AIoT water quality monitoring systems and automated aeration controls to protect fish farms and maximize yield across Bangladesh.
            </p>

            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00c2e0]" />
                <span>+880 1700-000000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00c2e0]" />
                <span>info@dmaaquaagro.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#00c2e0]" />
                <span>Tech Tower, Dhaka - 1212, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5 border-l-2 border-[#00c2e0] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-medium">
              <li><a href="#home" className="hover:text-[#00c2e0] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#00c2e0]" /> Home</a></li>
              <li><a href="#about" className="hover:text-[#00c2e0] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#00c2e0]" /> About Us</a></li>
              <li><a href="#features" className="hover:text-[#00c2e0] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#00c2e0]" /> Features</a></li>
              <li><a href="#services" className="hover:text-[#00c2e0] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#00c2e0]" /> Services</a></li>
              <li><a href="#pricing" className="hover:text-[#00c2e0] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#00c2e0]" /> Pricing</a></li>
              <li><a href="#contact" className="hover:text-[#00c2e0] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#00c2e0]" /> Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5 border-l-2 border-[#00c2e0] pl-3">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-medium">
              <li><a href="#services" className="hover:text-[#00c2e0] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#00c2e0]" /> Water Quality Monitoring</a></li>
              <li><a href="#services" className="hover:text-[#00c2e0] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#00c2e0]" /> AI Smart Feeding Advisory</a></li>
              <li><a href="#services" className="hover:text-[#00c2e0] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#00c2e0]" /> Aeration Automation Switch</a></li>
              <li><a href="#services" className="hover:text-[#00c2e0] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#00c2e0]" /> Fish Disease Diagnostic</a></li>
              <li><a href="#services" className="hover:text-[#00c2e0] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#00c2e0]" /> IoT Cloud Farm Dashboard</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5 border-l-2 border-[#00c2e0] pl-3">
              Newsletter
            </h4>
            <p className="text-gray-300 text-xs leading-relaxed mb-4">
              Subscribe to get latest smart aquaculture tips, sensor updates, and weather advisories directly.
            </p>

            {subscribed && (
              <p className="text-xs text-[#00c2e0] font-bold mb-2">✓ Subscribed successfully!</p>
            )}

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0d1e3a] border border-cyan-800 focus:outline-none focus:border-[#00c2e0] text-xs text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#00c2e0] hover:bg-[#00a8c2] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright & Social Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 <strong className="text-white">DMA Aqua Agro Ltd</strong>. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-[#0d1e3a] text-gray-300 hover:text-[#00c2e0] hover:bg-cyan-950 flex items-center justify-center transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#0d1e3a] text-gray-300 hover:text-[#00c2e0] hover:bg-cyan-950 flex items-center justify-center transition-colors">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
