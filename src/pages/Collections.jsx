import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ShoppingBag, Heart, Search, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";

const productsData = [
  {
    id: 1,
    name: "Persian Silk Medallion",
    price: 1250,
    category: "Persian",
    image:
      "https://images.unsplash.com/photo-1576016773942-3344d55707e8?auto=format&fit=crop&q=80",
    tag: "Handmade",
  },
  {
    id: 2,
    name: "Modern Abstract Gray",
    price: 450,
    category: "Modern",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80",
    tag: "New",
  },
  {
    id: 3,
    name: "Traditional Turkish Red",
    price: 890,
    category: "Traditional",
    image:
      "https://images.unsplash.com/photo-1534889156217-d3c8ef46a56e?auto=format&fit=crop&q=80",
    tag: "Antique",
  },
  {
    id: 4,
    name: "Geometric Moroccan Wool",
    price: 620,
    category: "Modern",
    image:
      "https://images.unsplash.com/photo-1594051664213-9426f9790400?auto=format&fit=crop&q=80",
    tag: "Sale",
  },
  {
    id: 5,
    name: "Vintage Kashmir Royal",
    price: 3200,
    category: "Persian",
    image:
      "https://images.unsplash.com/photo-1562611428-261559811f93?auto=format&fit=crop&q=80",
    tag: "Exclusive",
  },
  {
    id: 6,
    name: "Minimalist Nordic White",
    price: 299,
    category: "Minimalist",
    image:
      "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&q=80",
    tag: "",
  },
];

const Collections = () => {
  const { addToCart, addToWishlist, wishlist } = useCart();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search");
    if (search) setSearchQuery(search);
    window.scrollTo(0, 0);
  }, [location]);

  const filteredProducts = productsData
    .filter(
      (p) => selectedCategory === "All" || p.category === selectedCategory,
    )
    .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      return 0;
    });

  return (
    // PT-20 ko kam karke PT-4 kiya taki Navbar ke sath gap na rahe
    <div className="bg-[#fcfbf7] min-h-screen pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs - mt-4 ko 0 kiya gap kam karne ke liye */}
        <nav className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 mt-2 mb-4">
          <Link to="/" className="hover:text-amber-800 transition-colors">
            Home
          </Link>
          <ChevronRight size={10} />
          <span className="text-amber-800">Collections</span>
        </nav>

        {/* Header Section */}
        <div className="mb-8 border-b border-stone-200 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
                Our Collections
              </h1>
              <p className="text-amber-800 font-bold tracking-[0.15em] uppercase text-[10px] flex items-center gap-2">
                <span className="w-6 h-[1px] bg-amber-800"></span>
                {searchQuery
                  ? `Results for: ${searchQuery}`
                  : `${selectedCategory} Series Masterpieces`}
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-sm border border-stone-100 shadow-sm">
              <span className="text-[9px] font-black text-stone-400 uppercase">
                Sort By
              </span>
              <select
                onChange={(e) => setSortOption(e.target.value)}
                className="outline-none text-xs font-bold text-stone-800 bg-transparent cursor-pointer">
                <option value="default">Featured</option>
                <option value="price-low">Price: Low-High</option>
                <option value="price-high">Price: High-Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-60">
            {/* Sticky top adjust kiya kyuki navbar ab page ka part hai */}
            <div className="sticky top-4 space-y-8">
              <div>
                <h3 className="text-[10px] font-black tracking-widest text-stone-400 uppercase mb-4 flex items-center gap-2">
                  <Filter size={12} /> Categories
                </h3>
                <div className="space-y-1.5">
                  {[
                    "All",
                    "Persian",
                    "Modern",
                    "Traditional",
                    "Minimalist",
                  ].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setSearchQuery("");
                      }}
                      className={`w-full text-left py-2.5 px-4 rounded-md text-xs font-bold transition-all ${
                        selectedCategory === cat
                          ? "bg-amber-900 text-white shadow-md"
                          : "bg-white text-stone-600 hover:bg-stone-50 border border-stone-100"
                      }`}>
                      {cat} Rugs
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 p-5 rounded-xl border border-amber-100/50">
                <h4 className="font-serif font-bold text-amber-900 text-sm mb-1">
                  Custom Size?
                </h4>
                <p className="text-[10px] text-amber-800/70 mb-3">
                  We weave your imagination.
                </p>
                <button className="w-full bg-white text-amber-900 py-2 rounded-lg text-[9px] font-black shadow-sm uppercase tracking-tighter">
                  Consult Artisan
                </button>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group">
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 rounded-sm">
                      {product.tag && (
                        <div className="absolute top-3 left-3 z-10 bg-white/90 px-2 py-0.5 text-[9px] font-black uppercase tracking-tighter shadow-sm">
                          {product.tag}
                        </div>
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center gap-2">
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-white text-stone-900 px-5 py-2.5 rounded-full font-bold text-[10px] shadow-xl hover:bg-amber-900 hover:text-white transition-colors flex items-center gap-2">
                          <ShoppingBag size={14} /> ADD TO CART
                        </button>
                        <button
                          onClick={() => addToWishlist(product)}
                          className={`p-2.5 rounded-full shadow-xl transition-all ${wishlist.find((i) => i.id === product.id) ? "bg-red-500 text-white" : "bg-white hover:text-red-500"}`}>
                          <Heart
                            size={16}
                            fill={
                              wishlist.find((i) => i.id === product.id)
                                ? "currentColor"
                                : "none"
                            }
                          />
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-stone-400 text-[9px] font-black uppercase tracking-widest mb-1">
                        {product.category}
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-base font-bold text-amber-950">
                          ${product.price}
                        </span>
                        <span className="text-[11px] text-stone-300 line-through">
                          ${product.price + 200}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Collections;
