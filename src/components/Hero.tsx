"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Activity, Cpu, BellRing } from "lucide-react";

export default function Hero() {
  const slides = [
    {
      badgeIcon: Activity,
      badgeText: "AN AQUACULTURE AIoT SOLUTION",
      titlePrefix: "We Provide ",
      titleHighlight: "AI & AIoT Operated",
      titleMid: " Water Quality Monitoring System & Support Services For The ",
      titleUnderline: "Fish Farmers",
      titleSuffix: " To Ensure High Productivity",
      description:
        "Empowering aquaculture farmers with 24/7 real-time DO, pH, Temperature & Salinity sensors, early disease warnings, automated aeration controls, and expert advisory.",
      btnPrimaryText: "Read More",
      btnPrimaryLink: "#about",
      btnSecondaryText: "Contact Us",
      btnSecondaryLink: "#contact",
      bgImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000&auto=format&fit=crop",
    },
    {
      badgeIcon: Cpu,
      badgeText: "SMART FARM AUTOMATION",
      titlePrefix: "Automated ",
      titleHighlight: "Aeration & Feed Control",
      titleMid: " To Eliminate Mass Fish Mortality & ",
      titleUnderline: "Save 30%+ Feed Costs",
      titleSuffix: "",
      description:
        "Save electricity and maintain optimum dissolved oxygen levels automatically with our IoT smart relays and bio-mass feeding recommendations.",
      btnPrimaryText: "Explore Services",
      btnPrimaryLink: "#services",
      btnSecondaryText: "Get Pricing",
      btnSecondaryLink: "#pricing",
      bgImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
    },
    {
      badgeIcon: BellRing,
      badgeText: "REAL-TIME MOBILE ALERTS",
      titlePrefix: "Instant ",
      titleHighlight: "SMS & Call Warnings",
      titleMid: " The Moment Pond Water Oxygen Drops Below ",
      titleUnderline: "Safe Levels",
      titleSuffix: "",
      description:
        "Never lose a fish harvest to unexpected water toxicity or night-time hypoxia. 24/7 monitoring and marine biologist support included.",
      btnPrimaryText: "Explore Features",
      btnPrimaryLink: "#features",
      btnSecondaryText: "Talk to Expert",
      btnSecondaryLink: "#contact",
      bgImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const current = slides[currentSlide];
  const BadgeIcon = current.badgeIcon;

  return (
    <section
      id="home"
      className="relative w-full bg-[#0d1e3a] text-white overflow-hidden min-h-[620px] lg:min-h-[700px] flex items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel with Smooth Fade */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform ${
            idx === currentSlide ? "opacity-40 scale-105" : "opacity-0 scale-100 pointer-events-none"
          }`}
          style={{ backgroundImage: `url('${slide.bgImage}')` }}
        />
      ))}

      {/* Gradient Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1e3a]/95 via-[#0d1e3a]/80 to-[#081225]/75" />

      {/* Subtle Grid Lines Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00c2e0_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

      {/* Left Carousel Control Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-[#00c2e0] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 hidden md:flex hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Carousel Control Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-[#00c2e0] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 hidden md:flex hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Container with Keyed Fade In */}
      <div
        key={currentSlide}
        className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center animate-fadeIn"
      >
        {/* Subtitle Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00c2e0]/20 border border-[#00c2e0]/40 text-[#00c2e0] text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
          <BadgeIcon className="w-4 h-4 text-[#00c2e0]" />
          <span>{current.badgeText}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl mb-6 text-white drop-shadow-md">
          {current.titlePrefix}
          <span className="text-[#00c2e0]">{current.titleHighlight}</span>
          {current.titleMid}
          <span className="underline decoration-[#00c2e0] underline-offset-8">
            {current.titleUnderline}
          </span>
          {current.titleSuffix}
        </h1>

        {/* Supporting Paragraph */}
        <p className="text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed mb-10 font-normal">
          {current.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={current.btnPrimaryLink}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#00c2e0] hover:bg-[#00a8c2] text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5 group"
          >
            <span>{current.btnPrimaryText}</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={current.btnSecondaryLink}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm uppercase tracking-wider backdrop-blur-md transition-all"
          >
            <ShieldCheck className="w-4 h-4 mr-2 text-[#00c2e0]" />
            <span>{current.btnSecondaryText}</span>
          </a>
        </div>

        {/* Clickable Carousel Indicators */}
        <div className="flex items-center gap-3 mt-12">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentSlide
                  ? "w-9 h-2.5 bg-[#00c2e0] shadow-md shadow-cyan-500/50"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
