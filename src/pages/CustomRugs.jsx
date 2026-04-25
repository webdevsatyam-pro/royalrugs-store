import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Ruler,
  Palette,
  Scissors,
  Home,
  Star,
  ChevronRight,
  Check,
  ShieldCheck,
  Sparkles,
  Send,
} from "lucide-react";

// --- Constants ---
const SIZES = [
  { label: "2 × 3 ft", w: "2", h: "3", price: "$89" },
  { label: "4 × 6 ft", w: "4", h: "6", price: "$189" },
  { label: "5 × 8 ft", w: "5", h: "8", price: "$299" },
  { label: "6 × 9 ft", w: "6", h: "9", price: "$399" },
  { label: "8 × 10 ft", w: "8", h: "10", price: "$549" },
  { label: "Custom", w: "?", h: "?", price: "Quote" },
];

const COLORS = [
  { name: "Crimson", bg: "#6b1f2a" },
  { name: "Royal Blue", bg: "#1a3a5c" },
  { name: "Forest Green", bg: "#2d5a27" },
  { name: "Antique Gold", bg: "#b8924a" },
  { name: "Espresso", bg: "#3d3028" },
  { name: "Sand", bg: "#c4a882" },
  { name: "Taupe", bg: "#8a7d6b" },
  { name: "Midnight", bg: "#1a1208" },
];

const PATTERNS = [
  { name: "Persian", icon: "✦" },
  { name: "Geometric", icon: "❖" },
  { name: "Floral", icon: "✿" },
  { name: "Modern", icon: "⬡" },
];

// --- Sub-Components ---

const Hero = ({ onStart }) => (
  <section className="relative min-h-[85vh] flex items-center bg-[#1a1208] overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,#b8924a 0,#b8924a 1px,transparent 0,transparent 50%)",
          backgroundSize: "30px 30px",
        }}></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}>
        <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
          Bespoke Studio
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
          Design Your <br />{" "}
          <span className="italic text-amber-500">Masterpiece.</span>
        </h1>
        <p className="text-stone-400 text-lg mb-8 max-w-md">
          Collaborate with master artisans to craft a rug that reflects your
          soul, woven with centuries of tradition.
        </p>
        <button
          onClick={onStart}
          className="bg-amber-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all flex items-center gap-3">
          Start Customizing <ChevronRight size={16} />
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative hidden md:block">
        <div className="aspect-[4/5] bg-gradient-to-br from-amber-900 to-stone-900 rounded-2xl shadow-2xl border border-white/10 flex items-center justify-center p-10">
          <Sparkles
            size={80}
            className="text-amber-500/20 absolute top-10 right-10"
          />
          <div className="text-center">
            <span className="text-9xl text-amber-500/10 font-serif">✦</span>
            <p className="text-amber-500 font-serif italic text-2xl">
              Handcrafted Perfection
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const CustomRugs = () => {
  const [size, setSize] = useState(0);
  const [color, setColor] = useState(0);
  const [pattern, setPattern] = useState(0);

  const scrollToConfig = () => {
    document
      .getElementById("configurator")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-0">
      <Hero onStart={scrollToConfig} />

      {/* 2. Process Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif text-stone-900 mb-16">
          The Artisan Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            {
              icon: <Ruler />,
              title: "Dimensions",
              desc: "Select standard or custom sizes.",
            },
            {
              icon: <Palette />,
              title: "Color Palette",
              desc: "Choose from 1200+ organic dyes.",
            },
            {
              icon: <Scissors />,
              title: "Material",
              desc: "Pure silk or New Zealand wool.",
            },
            {
              icon: <Home />,
              title: "Delivery",
              desc: "Insured global white-glove shipping.",
            },
          ].map((s, i) => (
            <div key={i} className="space-y-4">
              <div className="w-16 h-16 bg-amber-50 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-6">
                {s.icon}
              </div>
              <h3 className="font-bold uppercase tracking-widest text-xs">
                {s.title}
              </h3>
              <p className="text-sm text-stone-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Configurator Section */}
      <section id="configurator" className="py-24 bg-stone-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Controls */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-serif text-stone-900 mb-2">
                  Design Studio
                </h2>
                <p className="text-stone-500 text-sm">
                  Configure your rug specifications below.
                </p>
              </div>

              {/* Size Select */}
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                  Step 1: Select Size
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {SIZES.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setSize(i)}
                      className={`py-3 text-xs font-bold rounded-lg border transition-all ${size === i ? "bg-amber-900 text-white border-amber-900 shadow-lg" : "bg-white text-stone-600 border-stone-200 hover:border-amber-800"}`}>
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Select */}
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                  Step 2: Primary Color
                </label>
                <div className="flex flex-wrap gap-4">
                  {COLORS.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setColor(i)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${color === i ? "border-amber-900 scale-110" : "border-transparent"}`}
                      style={{ backgroundColor: c.bg }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Pattern Select */}
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                  Step 3: Pattern Style
                </label>
                <div className="grid grid-cols-4 gap-4">
                  {PATTERNS.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setPattern(i)}
                      className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${pattern === i ? "border-amber-900 bg-amber-50" : "border-stone-200 bg-white"}`}>
                      <span className="text-2xl">{p.icon}</span>
                      <span className="text-[9px] font-bold uppercase tracking-tighter">
                        {p.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-stone-900 rounded-3xl p-8 text-white flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">
                    Estimated Price
                  </p>
                  <p className="text-4xl font-serif text-amber-500">
                    {SIZES[size].price}
                  </p>
                </div>
                <button className="bg-amber-700 hover:bg-white hover:text-stone-900 text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all">
                  Request Quote
                </button>
              </div>
            </div>

            {/* Right: Preview (THE REAL UI) */}
            <div className="lg:sticky lg:top-24">
              <div className="relative aspect-[4/5] bg-white rounded-[2.5rem] shadow-2xl p-6 border border-stone-200">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur px-4 py-1 rounded-full border border-stone-100 shadow-sm">
                  <span className="text-[9px] font-black tracking-[0.2em] text-stone-400 uppercase">
                    Live Design Preview
                  </span>
                </div>

                {/* Visual Rug Rendering */}
                <motion.div
                  key={`${color}-${pattern}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full rounded-2xl shadow-inner relative overflow-hidden flex items-center justify-center text-white/10"
                  style={{ backgroundColor: COLORS[color].bg }}>
                  <div className="absolute inset-8 border border-white/20 rounded-lg"></div>
                  <span className="text-[15vw] lg:text-[10vw] font-serif opacity-10 select-none">
                    {PATTERNS[pattern].icon}
                  </span>

                  {/* Texture Effect Overlay */}
                  <div
                    className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
                    style={{
                      backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/natural-paper.png')",
                    }}></div>
                </motion.div>

                {/* Specs Floating Tags */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3 whitespace-nowrap">
                  <div className="bg-stone-900 text-white px-4 py-2 rounded-full text-[10px] font-bold shadow-xl border border-white/10">
                    MATERIAL: SILK BLEND
                  </div>
                  <div className="bg-amber-700 text-white px-4 py-2 rounded-full text-[10px] font-bold shadow-xl">
                    SIZE: {SIZES[size].label}
                  </div>
                </div>
              </div>

              <div className="mt-16 flex items-center gap-6 justify-center text-stone-400">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  <ShieldCheck size={16} className="text-amber-700" /> Insured
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  <Star size={16} className="text-amber-700" /> 4.9/5 Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Minimal Footer Banner */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-serif text-stone-900 mb-8 max-w-2xl mx-auto">
          Ready to bring your masterpiece to life?
        </h2>
        <button className="bg-stone-900 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-amber-800 transition-all shadow-2xl">
          Consult an Artisan Now
        </button>
      </section>
    </div>
  );
};

export default CustomRugs;
