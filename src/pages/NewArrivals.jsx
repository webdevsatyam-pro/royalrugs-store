import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Heart,
  Star,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const NEW_PRODUCTS = [
  {
    id: 101,
    name: "Celestial Silk Runner",
    price: 850,
    category: "Modern",
    image:
      "https://images.unsplash.com/photo-1576016773942-3344d55707e8?auto=format&fit=crop&q=80",
    isNew: true,
  },
  {
    id: 102,
    name: "Imperial Gold Medallion",
    price: 2400,
    category: "Persian",
    image:
      "https://images.unsplash.com/photo-1534889156217-d3c8ef46a56e?auto=format&fit=crop&q=80",
    isNew: true,
  },
  {
    id: 103,
    name: "Nordic Frost Wool",
    price: 520,
    category: "Minimalist",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80",
    isNew: true,
  },
  {
    id: 104,
    name: "Sunset Kilim Weave",
    price: 390,
    category: "Traditional",
    image:
      "https://images.unsplash.com/photo-1594051664213-9426f9790400?auto=format&fit=crop&q=80",
    isNew: true,
  },
  {
    id: 105,
    name: "Midnight Onyx Shag",
    price: 680,
    category: "Modern",
    image:
      "https://images.unsplash.com/photo-1562611428-261559811f93?auto=format&fit=crop&q=80",
    isNew: true,
  },
  {
    id: 106,
    name: "Emerald Forest Silk",
    price: 1800,
    category: "Persian",
    image:
      "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&q=80",
    isNew: true,
  },
];

const NewArrivals = () => {
  const { addToCart, addToWishlist, wishlist } = useCart();
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? NEW_PRODUCTS
      : NEW_PRODUCTS.filter((p) => p.category === filter);

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-0 pb-20">
      {/* 1. ELEGANT HERO HEADER */}
      <section className="bg-[#1a1208] py-20 px-4 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-amber-500" size={18} />
            <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px]">
              Seasonal Drop
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            New <span className="italic text-stone-400">Treasures</span>
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Freshly off the loom. Experience the latest additions to our royal
            collection, where ancient techniques meet contemporary aesthetics.
          </p>
        </motion.div>
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-black text-white/5 whitespace-nowrap pointer-events-none">
          COLLECTION 2024
        </div>
      </section>

      {/* 2. FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 mt-12 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-stone-200 pb-6">
          <div className="flex items-center gap-6 overflow-x-auto w-full no-scrollbar">
            {["All", "Persian", "Modern", "Traditional", "Minimalist"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                    filter === cat
                      ? "text-amber-800 border-b-2 border-amber-800 pb-1"
                      : "text-stone-400 hover:text-stone-800"
                  }`}>
                  {cat}
                </button>
              ),
            )}
          </div>
          <div className="flex items-center gap-2 text-stone-400 text-[10px] font-bold uppercase tracking-widest">
            <SlidersHorizontal size={14} /> Sort: Newest First
          </div>
        </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative">
                {/* Image Wrap */}
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 rounded-sm">
                  {/* Just In Badge */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="bg-white text-stone-900 px-4 py-1.5 text-[9px] font-black uppercase tracking-widest shadow-xl border border-stone-100">
                      Just Arrived
                    </span>
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Quick Action Overlay */}
                  <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart(product)}
                      className="bg-white text-stone-900 px-8 py-3 rounded-full text-[10px] font-black shadow-2xl flex items-center gap-3 hover:bg-amber-900 hover:text-white transition-all">
                      <ShoppingBag size={16} /> ADD TO BAG
                    </motion.button>
                    <motion.button
                      onClick={() => addToWishlist(product)}
                      className={`p-3 rounded-full shadow-2xl transition-all ${
                        wishlist.find((i) => i.id === product.id)
                          ? "bg-red-500 text-white"
                          : "bg-white text-stone-900 hover:text-red-500"
                      }`}>
                      <Heart
                        size={20}
                        fill={
                          wishlist.find((i) => i.id === product.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8 text-center">
                  <p className="text-[9px] text-amber-800 font-bold uppercase tracking-[0.25em] mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-2xl font-serif text-stone-900 mb-2 group-hover:text-amber-800 transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-xl font-medium text-stone-900">
                      ${product.price}
                    </span>
                    <span className="text-sm text-stone-300 line-through font-bold">
                      ${product.price + 150}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. NO PRODUCTS FOUND */}
        {filteredItems.length === 0 && (
          <div className="py-32 text-center">
            <h2 className="text-3xl font-serif text-stone-400">
              Check back soon for new treasures in this category.
            </h2>
            <button
              onClick={() => setFilter("All")}
              className="mt-8 text-amber-800 font-bold uppercase tracking-widest text-xs underline underline-offset-8">
              View All Arrivals
            </button>
          </div>
        )}
      </section>

      {/* 5. CTA SECTION */}
      <section className="mt-32 border-t border-stone-200 pt-32 pb-16 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">
          Never miss a <span className="italic font-light">drop.</span>
        </h2>
        <p className="text-stone-500 mb-10 font-medium">
          Join our inner circle and get notified 24 hours before our new
          collections go live.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-white border border-stone-200 px-8 py-4 rounded-full text-sm outline-none focus:border-amber-800 w-full sm:w-80"
          />
          <button className="bg-stone-900 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-amber-900 transition-all flex items-center justify-center gap-3 group">
            Subscribe{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default NewArrivals;
