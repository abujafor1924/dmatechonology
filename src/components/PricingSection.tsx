"use client";

import { Check, X, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "BASIC",
      price: "৳ 4,999",
      period: "/ month",
      nodes: "1 Pond Monitoring Unit",
      popular: false,
      features: [
        { name: "DO, pH & Temp Sensor", included: true },
        { name: "Daily SMS Alerts", included: true },
        { name: "Mobile App Access", included: true },
        { name: "Automated Aerator Relay", included: false },
        { name: "AI Feed Advisory", included: false },
        { name: "24/7 Specialist Call", included: false },
      ],
    },
    {
      name: "PRO PLAN",
      price: "৳ 14,999",
      period: "/ month",
      nodes: "Up to 5 Pond Units",
      popular: true,
      features: [
        { name: "DO, pH, Temp & Salinity", included: true },
        { name: "Real-time SMS & Push Alerts", included: true },
        { name: "Mobile App & Web Dashboard", included: true },
        { name: "Automated Aerator Relay", included: true },
        { name: "AI Feed Advisory", included: true },
        { name: "24/7 Specialist Call", included: true },
      ],
    },
    {
      name: "ENTERPRISE",
      price: "৳ 29,999",
      period: "/ month",
      nodes: "Unlimited Pond Nodes",
      popular: false,
      features: [
        { name: "Full Sensor Suite + Lab Tests", included: true },
        { name: "Real-time SMS & Push Alerts", included: true },
        { name: "Multi-User Cloud Dashboard", included: true },
        { name: "Automated Aerator & Pump Relay", included: true },
        { name: "AI Feed & Disease Advisory", included: true },
        { name: "Dedicated Agronomist & On-Site", included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#00c2e0] font-bold text-xs uppercase tracking-widest bg-cyan-50 px-3.5 py-1 rounded-full mb-3 border border-cyan-200 inline-block">
            PRICING PLAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1e3a] tracking-tight mb-4">
            Get Your Pricing Plans
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Transparent and affordable smart aquaculture packages for independent fish farmers and commercial fisheries.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden bg-white transition-all duration-300 flex flex-col relative ${
                plan.popular
                  ? "shadow-2xl border-2 border-[#00c2e0] md:-translate-y-3"
                  : "shadow-lg border border-gray-200 hover:border-cyan-300"
              }`}
            >
              {/* Top Banner for Popular Plan */}
              {plan.popular && (
                <div className="bg-[#00c2e0] text-white text-center py-1.5 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>MOST POPULAR CHOICE</span>
                </div>
              )}

              {/* Header */}
              <div className="p-8 text-center bg-gray-50/50 border-b border-gray-100">
                <span className="text-xs font-extrabold text-[#00c2e0] tracking-widest uppercase">
                  {plan.name}
                </span>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-extrabold text-[#0d1e3a] tracking-tight">{plan.price}</span>
                  <span className="text-xs font-semibold text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-xs text-gray-500 font-semibold mt-2">{plan.nodes}</p>
              </div>

              {/* Feature List */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center text-xs sm:text-sm">
                      {feat.included ? (
                        <Check className="w-5 h-5 text-[#00c2e0] mr-3 shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mr-3 shrink-0" />
                      )}
                      <span className={feat.included ? "text-gray-700 font-medium" : "text-gray-400 line-through"}>
                        {feat.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md ${
                    plan.popular
                      ? "bg-[#00c2e0] hover:bg-[#00a8c2] text-white shadow-cyan-500/20"
                      : "bg-[#0d1e3a] hover:bg-[#112240] text-white"
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Matrix Table Preview */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 overflow-x-auto">
          <h4 className="text-center font-bold text-[#0d1e3a] mb-6 text-sm sm:text-base uppercase tracking-wider">
            Plan Feature Comparison Matrix
          </h4>
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b border-gray-200 text-xs font-extrabold text-[#0d1e3a] uppercase">
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4 text-center">Basic</th>
                <th className="py-3 px-4 text-center text-[#00c2e0]">Pro</th>
                <th className="py-3 px-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm divide-y divide-gray-200 text-gray-700">
              <tr>
                <td className="py-3 px-4 font-semibold">Dissolved Oxygen (DO) Sensor</td>
                <td className="py-3 px-4 text-center text-[#00c2e0]">✓</td>
                <td className="py-3 px-4 text-center text-[#00c2e0]">✓</td>
                <td className="py-3 px-4 text-center text-[#00c2e0]">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">pH & Water Temperature Sensor</td>
                <td className="py-3 px-4 text-center text-[#00c2e0]">✓</td>
                <td className="py-3 px-4 text-center text-[#00c2e0]">✓</td>
                <td className="py-3 px-4 text-center text-[#00c2e0]">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Salinity & Ammonia Tracking</td>
                <td className="py-3 px-4 text-center text-red-400">✕</td>
                <td className="py-3 px-4 text-center text-[#00c2e0]">✓</td>
                <td className="py-3 px-4 text-center text-[#00c2e0]">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Automated Paddle Aerator Switch</td>
                <td className="py-3 px-4 text-center text-red-400">✕</td>
                <td className="py-3 px-4 text-center text-[#00c2e0]">✓</td>
                <td className="py-3 px-4 text-center text-[#00c2e0]">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">AI Feed Optimization Engine</td>
                <td className="py-3 px-4 text-center text-red-400">✕</td>
                <td className="py-3 px-4 text-center text-[#00c2e0]">✓</td>
                <td className="py-3 px-4 text-center text-[#00c2e0]">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Dedicated Marine Biologist Support</td>
                <td className="py-3 px-4 text-center text-red-400">✕</td>
                <td className="py-3 px-4 text-center text-red-400">✕</td>
                <td className="py-3 px-4 text-center text-[#00c2e0]">✓</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
