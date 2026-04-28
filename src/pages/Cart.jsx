import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Price Calculation: price * quantity
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = cart.length > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-2">
            Shopping Bag
          </h1>
          <p className="text-stone-500 text-sm font-medium tracking-widest uppercase">
            Total {cart.length} unique products
          </p>
        </div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-[2rem] p-20 text-center shadow-sm border border-stone-100">
            <ShoppingBag size={60} className="mx-auto text-stone-200 mb-6" />
            <h2 className="text-2xl font-serif font-bold mb-4">Bag is empty</h2>
            <Link
              to="/collections"
              className="bg-amber-900 text-white px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest">
              Start Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Items List */}
            <div className="flex-1 space-y-6">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex flex-col sm:flex-row items-center gap-6">
                    {/* Item Image (Clicking navigates to product page) */}
                    <Link
                      to={`/product/${item.id}`}
                      className="w-32 h-40 bg-stone-100 rounded-2xl overflow-hidden shrink-0 group">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 text-center sm:text-left">
                      <Link
                        to={`/product/${item.id}`}
                        className="hover:text-amber-800 transition-colors">
                        <span className="text-[10px] text-amber-800 font-black uppercase tracking-widest">
                          {item.category}
                        </span>
                        <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-stone-400 text-xs mb-4 italic">
                        Exclusive Heritage Collection
                      </p>

                      {/* REAL WORKING QUANTITY CONTROLS */}
                      <div className="flex items-center justify-center sm:justify-start gap-4">
                        <div className="flex items-center border border-stone-200 rounded-full px-3 py-1 bg-stone-50">
                          <button
                            onClick={() => updateQuantity(item.id, "dec")}
                            className="text-stone-400 hover:text-amber-800 transition-colors">
                            <Minus size={16} />
                          </button>
                          <span className="px-5 text-sm font-black text-stone-800 w-10 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, "inc")}
                            className="text-stone-400 hover:text-amber-800 transition-colors">
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Total Price for this item */}
                    <div className="text-center sm:text-right flex flex-col justify-between items-center sm:items-end min-h-[120px]">
                      <div className="text-right">
                        <p className="text-2xl font-serif font-bold text-stone-900">
                          ${item.price * item.quantity}
                        </p>
                        <p className="text-[10px] text-stone-400 font-bold uppercase tracking-tighter">
                          ${item.price} per unit
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-stone-300 hover:text-red-500 transition-all p-2 hover:bg-red-50 rounded-full">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:w-[380px]">
              <div className="bg-[#12110f] text-white rounded-[2.5rem] p-10 sticky top-24 shadow-2xl">
                <h3 className="text-2xl font-serif font-bold mb-8 italic">
                  Order Summary
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-stone-400 text-sm font-medium">
                    <span>Subtotal</span>
                    <span className="text-white">${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-stone-400 text-sm font-medium">
                    <span>Royal Shipping</span>
                    <span className="text-white">${shipping}</span>
                  </div>
                  <div className="border-t border-stone-800 pt-6 mt-6 flex justify-between items-end">
                    <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">
                      Total Amount
                    </span>
                    <span className="text-3xl font-serif font-bold text-amber-500">
                      ${total}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-amber-700 hover:bg-white hover:text-stone-900 text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all shadow-xl flex items-center justify-center gap-3 group">
                  Proceed to Payment{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <div className="mt-8 flex items-center gap-3 text-stone-500 text-[10px] uppercase font-bold tracking-widest justify-center">
                  <ShieldCheck size={16} className="text-amber-700" /> Insured
                  Checkout
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
