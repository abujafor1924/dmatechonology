"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Menu, X, Droplets, Share2, Globe } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top Notification Bar */}
      <div className="bg-[#0d1e3a] text-gray-200 text-xs py-2 px-4 border-b border-cyan-900/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left Contact Info */}
          <div className="flex items-center space-x-6">
            <a href="tel:+8801700000000" className="flex items-center gap-1.5 hover:text-[#00c2e0] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#00c2e0]" />
              <span>+880 1700-000000</span>
            </a>
            <a href="mailto:info@dmaaquaagro.com" className="flex items-center gap-1.5 hover:text-[#00c2e0] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#00c2e0]" />
              <span>info@dmaaquaagro.com</span>
            </a>
            <div className="flex items-center gap-1.5 text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-[#00c2e0]" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Right Hours & Socials */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#00c2e0]" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400 border-l border-gray-700 pl-4">
              <a href="#" className="hover:text-[#00c2e0] transition-colors"><Globe className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-[#00c2e0] transition-colors"><Share2 className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white text-gray-900 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3.5 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#00c2e0] to-[#0077b6] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Droplets className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#0d1e3a]">
                DMA <span className="text-[#00c2e0]">Aqua Agro</span>
              </span>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest -mt-1">
                Smart Aquaculture Ltd
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-gray-700">
            <a href="#home" className="text-[#00c2e0] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#00c2e0] transition-colors">About Us</a>
            <a href="#features" className="hover:text-[#00c2e0] transition-colors">Features</a>
            <a href="#services" className="hover:text-[#00c2e0] transition-colors">Services</a>
            <a href="#pricing" className="hover:text-[#00c2e0] transition-colors">Pricing</a>
            <a href="#team" className="hover:text-[#00c2e0] transition-colors">Team</a>
            <a href="#testimonials" className="hover:text-[#00c2e0] transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-[#00c2e0] transition-colors">Contact</a>
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#00c2e0] hover:bg-[#00a8c2] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Get Started
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#00c2e0] focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-3 font-semibold text-sm text-gray-700 shadow-xl">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#00c2e0]">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#00c2e0]">About Us</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#00c2e0]">Features</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#00c2e0]">Services</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#00c2e0]">Pricing</a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#00c2e0]">Team</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#00c2e0]">Testimonials</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#00c2e0]">Contact</a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center mt-4 w-full py-3 rounded-lg bg-[#00c2e0] text-white font-bold text-xs uppercase tracking-wider"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
