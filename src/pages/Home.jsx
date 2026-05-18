import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Quote,
  Eye,
  ShoppingBag,
  Heart,
  Sparkles,
  Award,
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { convertPrice } = useCart();
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const categories = [
    {
      name: "Persian Royal Classic",
      image:
        "https://images.unsplash.com/photo-1576016773942-3344d55707e8?auto=format&fit=crop&q=80&w=800",
      price: "From $299",
      desc: "Timeless heritage, hand-knotted over months of absolute dedication.",
      badge: "Signature"
    },
    {
      name: "Modern Geometric",
      image:
        "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80&w=800",
      price: "From $150",
      desc: "Contemporary abstract forms crafted for the sophisticated modern home.",
      badge: "Contemporary"
    },
    {
      name: "Traditional Wool & Silk",
      image:
        "https://images.unsplash.com/photo-1534889156217-d3c8ef46a56e?auto=format&fit=crop&q=80&w=800",
      price: "From $199",
      desc: "Soft organic sheep wool dyed naturally for unmatched warmth and resilience.",
      badge: "Pure Organic"
    },
  ];

  const newArrivals = [
    {
      id: 1,
      name: "Vintage Silk Route",
      price: "$450",
      tag: "Limited",
      tagColor: "bg-[#5C1D24]", // Rich burgundy
      img: "https://images.unsplash.com/photo-1594051664213-9426f9790400?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      name: "Azure Geometric",
      price: "$280",
      tag: "Special Offer",
      tagColor: "bg-[#1E3E3B]", // Emerald/Forest green
      img: "https://images.unsplash.com/photo-1562544208-5190d6a29ad9?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      name: "Tribal Hand-Woven",
      price: "$320",
      tag: "Masterpiece",
      tagColor: "bg-[#B28A30]", // Premium Gold/Amber
      img: "https://images.unsplash.com/photo-1575203091586-611fe505bb0e?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 4,
      name: "Minimalist Sand Dune",
      price: "$210",
      tag: "New",
      tagColor: "bg-amber-900",
      img: "https://images.unsplash.com/photo-1592345224825-450f383e5893?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-stone-900 overflow-hidden font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80"
            alt="Luxury Rug Background"
            className="w-full h-full object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-amber-950/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white max-w-3xl">
            
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <Sparkles className="text-amber-400" size={14} />
              <span className="text-amber-300 text-xs font-bold uppercase tracking-[0.25em]">
                Heritage of Craftsmanship
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-serif font-light mb-6 leading-[1.08] tracking-tight">
              Bring <span className="italic font-normal text-amber-200">Elegance</span> <br /> 
              To Your <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">Floors.</span>
            </h1>

            <p className="text-base md:text-xl text-gray-200/90 mb-10 font-light leading-relaxed max-w-xl">
              Experience the unmatched luxury of masterfully hand-knotted Persian, Modern, and Traditional carpets. Woven with organic silk and virgin wool, designed to last generations.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                to="/collections"
                className="bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-bold tracking-widest text-xs px-10 py-5 rounded-none shadow-2xl transition-all duration-300 flex items-center gap-3 group border border-amber-600/30">
                EXPLORE COLLECTION{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </Link>
              <Link
                to="/custom-rugs"
                className="bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 hover:border-amber-400 text-white font-bold tracking-widest text-xs px-10 py-5 rounded-none transition-all duration-300 flex items-center gap-2">
                CUSTOM DESIGN
                <ArrowUpRight size={14} className="text-amber-300" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Elegant Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-6 rounded-full bg-amber-500/80"
          />
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="py-12 bg-white border-b border-stone-100 relative z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              {
                icon: <Award className="text-amber-700" size={26} />,
                title: "Authentic Masterpieces",
                desc: "100% genuine silk & wool",
              },
              {
                icon: <Truck className="text-amber-700" size={26} />,
                title: "Complimentary Delivery",
                desc: "Insured global transit",
              },
              {
                icon: <RotateCcw className="text-amber-700" size={26} />,
                title: "30-Day Royal Shield",
                desc: "Hassle-free return policy",
              },
              {
                icon: <Star className="text-amber-700" size={26} />,
                title: "Exquisite Pedigree",
                desc: "4.9/5 verified client reviews",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 border border-transparent hover:border-amber-900/10 hover:bg-[#FAF8F5]/50 transition-all duration-300 group">
                <div className="p-3 bg-amber-50 rounded-none text-amber-800 shrink-0 group-hover:bg-amber-100 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm tracking-wide uppercase mb-1">{feature.title}</h4>
                  <p className="text-xs text-stone-500 font-light">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRENDING CATEGORIES */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[1px] w-8 bg-amber-700"></div>
              <span className="text-amber-800 text-xs font-bold tracking-[0.25em] uppercase">Curated Portfolios</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-stone-900">
              Featured <span className="italic font-normal">Collections</span>
            </h2>
          </div>
          <Link
            to="/collections"
            className="text-amber-800 font-bold uppercase tracking-widest text-xs hover:text-amber-950 transition-colors flex items-center gap-2 group pb-1 border-b border-amber-800/30 hover:border-amber-950">
            VIEW ALL COLLECTIONS <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="group relative bg-white border border-stone-200/60 p-3 shadow-lg shadow-stone-100/50 hover:shadow-2xl hover:shadow-amber-950/[0.04] transition-all duration-500 flex flex-col h-full">
              
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-amber-550 border border-amber-400/30 text-white font-bold text-[9px] uppercase tracking-widest px-3 py-1.5 bg-amber-900/90 backdrop-blur-sm">
                  {cat.badge}
                </span>

                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <span className="text-amber-300 font-semibold tracking-wider text-xs mb-1">{convertPrice(cat.price)}</span>
                  <h3 className="text-2xl font-serif mb-2">{cat.name}</h3>
                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                    {cat.desc}
                  </p>
                  <Link
                    to="/collections"
                    className="w-fit bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors duration-300">
                    DISCOVER NOW
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: NEW ARRIVALS */}
      <section className="py-24 bg-stone-100/80 border-t border-b border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-amber-700"></span>
              <span className="text-amber-800 text-xs font-bold tracking-[0.25em] uppercase">Just Off the Loom</span>
              <span className="h-[1px] w-6 bg-amber-700"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-stone-900">
              The Luxury <span className="italic font-normal">New Arrivals</span>
            </h2>
            <p className="text-stone-500 mt-4 text-sm font-light max-w-md mx-auto">
              Presenting our newest acquisitions, freshly certified and curated by our lead designers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((item) => (
              <motion.div
                key={item.id}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group flex flex-col bg-white border border-stone-200/50 p-2.5 transition-all duration-300 hover:shadow-xl hover:shadow-stone-200/80">
                <div className="aspect-[3/4] overflow-hidden bg-[#FAF8F5] relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[800ms]"
                  />
                  <span className={`absolute top-3 left-3 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 ${item.tagColor} shadow-md`}>
                    {item.tag}
                  </span>
                  
                  {/* Floating Luxury Action Buttons */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button className="bg-white hover:bg-amber-800 text-stone-850 hover:text-white p-3.5 rounded-full transition-all duration-300 shadow-xl hover:scale-110">
                      <ShoppingBag size={18} />
                    </button>
                    <button className="bg-white hover:bg-amber-800 text-stone-850 hover:text-white p-3.5 rounded-full transition-all duration-300 shadow-xl hover:scale-110">
                      <Heart size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="p-4 text-center mt-2">
                  <h3 className="font-semibold text-stone-900 text-sm tracking-wide mb-1 group-hover:text-amber-800 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-amber-800 font-serif font-semibold text-sm">{convertPrice(item.price)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT BRAND / CTA */}
      <section className="bg-[#12110F] py-28 text-white overflow-hidden relative">
        {/* Subtle Decorative Golden Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 border-8 border-[#1A1916] shadow-2xl p-2 bg-[#12110F]">
              <img
                src="https://images.unsplash.com/photo-1594051664213-9426f9790400?auto=format&fit=crop&q=80&w=800"
                alt="Artisan Weaving"
                className="w-full object-cover aspect-[4/3] grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Golden Frame Inset Decoration */}
            <div className="absolute -inset-4 border border-amber-600/30 pointer-events-none translate-x-3 translate-y-3 z-0" />
          </div>

          <div className="lg:w-1/2 space-y-8 relative z-10">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-amber-500"></span>
              <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">The Atelier Legacy</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight">
              The Art of <br />
              <span className="italic font-normal text-amber-200">Hand-Knotted</span> Perfection
            </h2>
            
            <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
              At RoyalRugs, we collaborate with multigenerational master weavers to create rugs that are not mere flooring, but masterpieces of history, art, and craft. Every single knot is tied manually using certified pure organic mulberry silks and natural hand-carded highland wool.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold tracking-wider text-gray-300 uppercase">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0" />
                Hand-dyed with plant pigments
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0" />
                100% sustainable weaving guild
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0" />
                Double-washed with mineral water
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0" />
                Legacy of 50,000+ homes
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/collections"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-widest text-xs px-10 py-5 transition-colors duration-300">
                DISCOVER OUR HERITAGE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: CUSTOMER TESTIMONIALS */}
      <section className="py-28 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-amber-700"></span>
              <span className="text-amber-800 text-xs font-bold tracking-[0.25em] uppercase">Vanguard Patronage</span>
              <span className="h-[1px] w-6 bg-amber-700"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-stone-900">
              Voices of <span className="italic font-normal">Luxury</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Lead Interior Designer, NYC",
                text: "The vintage Persian rug we acquired is of absolute museum-tier quality. The depth of color achieved through vegetable dyes is utterly incomparable.",
                rating: 5
              },
              {
                name: "Sir Michael Chen",
                role: "Art Collector & Patron",
                text: "RoyalRugs is the only brand that honors the ancient knot count metrics. It is an investment in pure cultural heritage that has elevated our gallery.",
                rating: 5
              },
              {
                name: "Emma Davis",
                role: "Principal Architect, Davis & Co",
                text: "I trust their custom design atelier completely. Their ability to translate custom modernist geometry blueprints into hand-tufted silk is superb.",
                rating: 5
              },
            ].map((testi, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white border border-stone-200/60 p-10 relative flex flex-col justify-between shadow-lg shadow-stone-100/50 hover:shadow-2xl hover:border-amber-600/20 transition-all duration-300">
                
                <Quote
                  className="text-amber-100 absolute top-6 right-6 pointer-events-none"
                  size={50}
                  strokeWidth={1}
                />
                
                <div>
                  <div className="flex mb-6 text-amber-500 gap-1">
                    {[...Array(testi.rating)].map((_, idx) => (
                      <Star key={idx} size={14} fill="currentColor" className="text-amber-500" />
                    ))}
                  </div>
                  <p className="text-stone-700 font-serif italic text-sm leading-relaxed mb-8 relative z-10">
                    "{testi.text}"
                  </p>
                </div>

                <div className="border-t border-stone-100 pt-6">
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">{testi.name}</h4>
                  <p className="text-xs text-amber-800 font-semibold tracking-wider uppercase mt-1">{testi.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: INSTAGRAM LOOKBOOK */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-full px-4 overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 px-4 sm:px-12 gap-4">
            <h3 className="text-xl font-serif font-light text-stone-900 tracking-wide uppercase">
              #ROYALRUGS<span className="italic text-amber-800 font-normal">INHOMES</span>
            </h3>
            <p className="text-stone-500 text-xs tracking-widest font-bold uppercase">
              Follow Our Atelier: <a href="#instagram" className="text-amber-800 hover:text-amber-950 transition-colors">@RoyalRugs_Official</a>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square relative group cursor-pointer overflow-hidden bg-stone-100 border border-stone-100">
                <img
                  src={`https://images.unsplash.com/photo-${1500000000000 + i * 1050000}?auto=format&fit=crop&q=60&w=500`}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  alt="Instagram Lifestyle"
                />
                {/* Clean inset luxury overlay */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
                  <div className="w-full h-full border border-white/30 flex items-center justify-center">
                    <Eye className="text-white scale-90 group-hover:scale-100 transition-transform duration-300" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER */}
      <section className="py-28 bg-[#FAF8F5] relative border-t border-stone-200/30">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex justify-center mb-4">
            <Award className="text-amber-800" size={32} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-4 text-stone-900 tracking-wide">
            Join the <span className="italic font-normal text-amber-800">Royal Club</span>
          </h2>
          <p className="text-stone-500 mb-10 text-sm max-w-lg mx-auto font-light leading-relaxed">
            Subscribe to receive private invitations to new off-loom collections, bespoke rug maintenance advice, and exclusive royal club pricing.
          </p>
          
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto bg-white p-2 border border-stone-200 shadow-xl">
            <input
              type="email"
              required
              placeholder="Enter your premier email address"
              className="flex-1 px-6 py-4 outline-none border border-transparent focus:border-transparent text-sm bg-[#FAF8F5] placeholder-stone-400 font-light"
            />
            <button className="bg-stone-900 hover:bg-amber-800 text-white font-bold tracking-widest text-xs uppercase px-8 py-4 transition-colors duration-300 shadow-md">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
