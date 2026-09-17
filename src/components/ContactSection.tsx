"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Radio, ShieldCheck, HeartHandshake, Headphones, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const quickFeatures = [
    { icon: Radio, title: "Real-time Monitoring", text: "24/7 sensor data streaming" },
    { icon: ShieldCheck, title: "Water Quality Test", text: "On-site lab diagnostic" },
    { icon: HeartHandshake, title: "AI Feed Advisory", text: "Biomass yield calculation" },
    { icon: Headphones, title: "24/7 Support", text: "Instant technical help" },
  ];

  return (
    <section id="contact" className="relative bg-white text-gray-800">
      
      {/* Dark Gray CTA Banner (Top of Contact Section matching screenshot) */}
      <div className="bg-[#1f2937] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              We Provide Best Services For Smart Aquaculture Conditions
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-1">
              Connect with our technical team today to upgrade your fish farm with AIoT sensors.
            </p>
          </div>
          <a
            href="#contact-form"
            className="px-8 py-3.5 rounded-full bg-[#00c2e0] hover:bg-[#00a8c2] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-cyan-500/20 transition-all shrink-0"
          >
            Contact Us Now
          </a>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6 lg:px-8" id="contact-form">
        
        {/* 4 Quick Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center gap-4 hover:border-cyan-300 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#e6f9fc] text-[#00c2e0] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0d1e3a]">{feat.title}</h4>
                  <p className="text-xs text-gray-500">{feat.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Split Layout: Image Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop"
                alt="DMA Aqua Agro Contact"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="mt-6 bg-[#0d1e3a] text-white p-6 rounded-2xl shadow-lg border border-cyan-500/30">
              <h4 className="font-bold text-sm text-[#00c2e0] uppercase tracking-wider mb-3">Head Office</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                DMA Aqua Agro Ltd.<br />
                Tech Hub, Innovation Tower, Suite 402,<br />
                Dhaka - 1212, Bangladesh
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-xl">
            <span className="text-[#00c2e0] font-bold text-xs uppercase tracking-widest bg-cyan-50 px-3.5 py-1 rounded-full mb-3 border border-cyan-200 inline-block">
              GET IN TOUCH
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d1e3a] mb-2">
              Send Us A Message
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-8">
              Fill out the form below and our aquaculture IoT specialist will contact you within 24 hours.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you! Your message has been sent successfully. We will call you back shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Md. Abdul Karim"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00c2e0] focus:border-transparent text-sm bg-gray-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. karim@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00c2e0] focus:border-transparent text-sm bg-gray-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 1700-000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00c2e0] focus:border-transparent text-sm bg-gray-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pricing Query / Sensor Installation"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00c2e0] focus:border-transparent text-sm bg-gray-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your fish pond size, location, and requirement..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00c2e0] focus:border-transparent text-sm bg-gray-50/50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#00c2e0] hover:bg-[#00a8c2] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
