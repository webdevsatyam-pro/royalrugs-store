import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ShoppingBag, Heart, CheckCircle } from "lucide-react";
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

  // Combined Filter Logic (Search + Category)
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
    <div className="bg-[#fcfbf7] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 border-b border-stone-200 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-5xl font-serif font-bold text-stone-900 mb-2">
              Our Collections
            </h1>
            <p className="text-amber-800 font-medium tracking-widest uppercase text-sm">
              {searchQuery
                ? `Searching for: ${searchQuery}`
                : `Handcrafted Elegance / ${selectedCategory} Rugs`}
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white p-2 rounded-lg shadow-sm border border-stone-100">
            <span className="text-xs font-bold text-gray-400 pl-2">
              SORT BY
            </span>
            <select
              onChange={(e) => setSortOption(e.target.value)}
              className="outline-none text-sm font-bold text-stone-800 bg-transparent cursor-pointer pr-4">
              <option value="default">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64">
            <div className="sticky top-32 space-y-10">
              <div>
                <h3 className="text-xs font-black tracking-[0.2em] text-gray-400 uppercase mb-6 flex items-center gap-2">
                  <Filter size={14} /> Shop by Category
                </h3>
                <div className="space-y-2">
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
                      className={`w-full text-left py-3 px-4 rounded-lg text-sm font-bold transition-all ${
                        selectedCategory === cat
                          ? "bg-amber-900 text-white shadow-lg translate-x-2"
                          : "bg-white text-stone-600 hover:bg-stone-100"
                      }`}>
                      {cat} Rugs
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                <h4 className="font-serif font-bold text-amber-900 mb-2">
                  Need Custom Size?
                </h4>
                <p className="text-xs text-amber-800/70 mb-4 leading-relaxed">
                  We can weave any design in your required dimensions.
                </p>
                <button className="w-full bg-white text-amber-900 py-2 rounded-full text-xs font-black shadow-sm hover:shadow-md transition-all">
                  CONSULT ARTISAN
                </button>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group">
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 rounded-sm">
                      {product.tag && (
                        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-stone-900 text-[10px] font-black px-3 py-1 uppercase tracking-tighter shadow-sm">
                          {product.tag}
                        </div>
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />

                      {/* Hover Overlay Buttons */}
                      <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => addToCart(product)}
                          className="bg-white text-stone-900 px-6 py-3 rounded-full font-black text-xs shadow-2xl flex items-center gap-2 hover:bg-amber-900 hover:text-white transition-colors">
                          <ShoppingBag size={16} /> ADD TO CART
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => addToWishlist(product)}
                          className={`p-3 rounded-full shadow-2xl transition-all ${wishlist.find((i) => i.id === product.id) ? "bg-red-500 text-white" : "bg-white text-stone-900 hover:text-red-500"}`}>
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

                    <div className="mt-6 text-center">
                      <h3 className="font-serif text-xl font-bold text-stone-900 mb-1 group-hover:text-amber-800 transition-colors cursor-pointer">
                        {product.name}
                      </h3>
                      <p className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                        {product.category}
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-lg font-medium text-amber-950">
                          ${product.price}
                        </span>
                        <span className="text-sm text-stone-300 line-through">
                          ${product.price + 250}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* No Results State */}
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center border-2 border-dashed border-stone-200 rounded-3xl">
                <Search size={60} className="mx-auto text-stone-200 mb-4" />
                <h2 className="text-2xl font-serif font-bold text-stone-800">
                  No treasures found
                </h2>
                <p className="text-stone-500 mt-2">
                  Try a different search or explore all categories.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-8 bg-stone-900 text-white px-8 py-3 rounded-full text-sm font-bold">
                  Clear All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Collections;
