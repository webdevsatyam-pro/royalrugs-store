import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Ruler,
  Scissors,
  Truck,
  CheckCircle2,
  ArrowRight,
  Upload,
} from "lucide-react";

const CustomRugs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    size: "",
    material: "Wool",
    message: "",
  });

  const steps = [
    {
      icon: <Ruler size={32} />,
      title: "Measure Your Space",
      desc: "Tell us the exact dimensions you need, from wall-to-wall or specific area sizes.",
    },
    {
      icon: <Palette size={32} />,
      title: "Choose Palette",
      desc: "Select from over 1,000+ organic dye colors to match your interior perfectly.",
    },
    {
      icon: <Scissors size={32} />,
      title: "Expert Weaving",
      desc: "Our master artisans spend 4-6 months hand-knotting your unique masterpiece.",
    },
    {
      icon: <Truck size={32} />,
      title: "White Glove Delivery",
      desc: "We deliver and install your custom rug anywhere in the world with care.",
    },
  ];

  return (
    // FIX: pt-20 ko pt-0 kiya taki Navbar ke turant baad content shuru ho
    <div className="bg-[#fdfcfb] min-h-screen pt-0">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://st.hzcdn.com/simgs/d541dddc0d23a6fa_14-6265/home-design.jpg"
            className="w-full h-full object-cover"
            alt="Artisan working"
          />
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-4">
            Bespoke Service
          </motion.h5>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Your Vision, Our Craftsmanship
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-stone-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Create a one-of-a-kind rug that perfectly reflects your personal
            style and fits your space exactly.
          </motion.p>
        </div>
      </section>

      {/* 2. Process Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4 uppercase tracking-tighter">
            The Custom Process
          </h2>
          <div className="h-[2px] w-12 bg-amber-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="text-center group">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-900 group-hover:bg-amber-900 group-hover:text-white transition-all duration-500 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-3 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed font-medium">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Inquiry Form Section */}
      <section className="py-20 bg-[#12110f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold leading-tight">
              Start Your Design <br />{" "}
              <span className="text-amber-500 underline underline-offset-8 decoration-1">
                Consultation
              </span>
            </h2>
            <p className="text-stone-400 text-lg font-light leading-relaxed">
              Fill out the form below, and our design experts will contact you
              within 24 hours to discuss your project.
            </p>

            <ul className="space-y-5">
              {[
                "Free professional design mockups",
                "Samples shipped to your door",
                "Ethically sourced premium materials",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-stone-300 font-medium">
                  <CheckCircle2 size={18} className="text-amber-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-sm shadow-2xl text-stone-900">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full border-b border-stone-200 py-2 focus:border-amber-800 outline-none transition-colors text-sm font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full border-b border-stone-200 py-2 focus:border-amber-800 outline-none transition-colors text-sm font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                    Desired Size
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 8x10 ft"
                    className="w-full border-b border-stone-200 py-2 focus:border-amber-800 outline-none transition-colors text-sm font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                    Material
                  </label>
                  <select className="w-full border-b border-stone-200 py-2 focus:border-amber-800 outline-none transition-colors bg-transparent text-sm font-bold">
                    <option>Premium Silk</option>
                    <option>Highland Wool</option>
                    <option>Bamboo Silk Mix</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                  Project Details
                </label>
                <textarea
                  rows="3"
                  placeholder="Share your vision..."
                  className="w-full border border-stone-100 p-4 mt-2 focus:border-amber-800 outline-none transition-colors rounded-sm text-sm font-medium bg-stone-50"></textarea>
              </div>

              <button className="w-full bg-[#12110f] text-white py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-amber-900 transition-all flex items-center justify-center gap-3 group text-xs">
                Submit Inquiry{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomRugs;
