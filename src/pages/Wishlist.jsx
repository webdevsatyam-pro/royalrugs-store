import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Heart, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { wishlist, addToWishlist, addToCart } = useCart();

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-4 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="py-10 text-center md:text-left border-b border-stone-200 mb-10 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
              My Favorites
            </h1>
            <p className="text-amber-800 text-[10px] font-black uppercase tracking-[0.3em] mt-2">
              {wishlist.length} Curated Masterpieces
            </p>
          </div>
          <Link
            to="/collections"
            className="text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-amber-800 flex items-center gap-2 transition-colors">
            Continue Exploring <ArrowRight size={14} />
          </Link>
        </div>

        {wishlist.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center bg-white rounded-3xl border border-stone-100 shadow-sm">
            <Heart size={40} className="mx-auto text-stone-200 mb-4" />
            <p className="text-stone-500 font-serif italic text-lg">
              Your gallery is waiting for its first treasure.
            </p>
            <Link
              to="/collections"
              className="mt-6 inline-block bg-stone-900 text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
              Browse Collection
            </Link>
          </motion.div>
        ) : (
          /* --- COMPACT GRID (2 columns mobile, 4 columns desktop) --- */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            <AnimatePresence mode="popLayout">
              {wishlist.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group bg-white rounded-xl overflow-hidden border border-stone-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                  {/* Small Image Area */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Compact Remove Icon */}
                    <button
                      onClick={() => addToWishlist(item)}
                      className="absolute top-2 right-2 bg-white/90 backdrop-blur-md p-1.5 rounded-full text-stone-400 hover:text-red-500 transition-colors shadow-sm z-10">
                      <X size={14} />
                    </button>

                    {/* Quick Move to Bag Overlay */}
                    <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-white text-stone-900 w-full py-2.5 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-2 hover:bg-amber-900 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                        <ShoppingBag size={12} /> Add to Bag
                      </button>
                    </div>
                  </div>

                  {/* Compact Info Section */}
                  <div className="p-4 flex flex-col flex-grow text-center">
                    <span className="text-[8px] text-amber-700 font-black uppercase tracking-[0.2em] mb-1">
                      {item.category}
                    </span>
                    <Link to={`/product/${item.id}`}>
                      <h3 className="text-sm font-serif font-bold text-stone-900 line-clamp-1 hover:text-amber-800 transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <div className="mt-auto pt-3 flex items-center justify-center gap-2 border-t border-stone-50">
                      <span className="text-sm font-bold text-stone-900">
                        ${item.price}
                      </span>
                      <span className="text-[10px] text-stone-300 line-through font-medium">
                        ${item.price + 150}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Minimal Support Section */}
        {wishlist.length > 0 && (
          <div className="mt-20 p-8 rounded-3xl bg-stone-100 border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Heart size={20} className="text-amber-800" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  Special Order?
                </h4>
                <p className="text-xs text-stone-500">
                  Contact our concierge for custom alterations.
                </p>
              </div>
            </div>
            <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-amber-800 pb-1 hover:text-amber-800 transition-all">
              Chat with an Expert
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
