import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  CheckCircle2,
  ArrowLeft,
  Lock,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  // 1. clearCart ko context se nikaal liya
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  // 2. Order hone par cart khali karne ka logic
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Yahan cart khali ho jayega
    clearCart();

    // Fir success screen dikhegi
    setIsOrdered(true);
    window.scrollTo(0, 0);
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500">
            <CheckCircle2 size={60} strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">
            Order Confirmed
          </h1>
          <p className="text-stone-500 mb-10 leading-relaxed">
            Your royal masterpiece has been reserved. Our master artisans are
            preparing it for delivery.
          </p>
          <Link
            to="/"
            className="inline-block bg-stone-900 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-xl hover:bg-amber-900 transition-all">
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-10 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between border-b border-stone-200 pb-8 text-stone-900">
          <div>
            <Link
              to="/cart"
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-amber-800 transition-colors">
              <ArrowLeft size={14} /> Back to Bag
            </Link>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-4">
              Secure Checkout
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-2 text-stone-400">
            <Lock size={16} />{" "}
            <span className="text-[10px] font-bold uppercase tracking-widest">
              SSL Encrypted
            </span>
          </div>
        </div>

        <form
          onSubmit={handlePlaceOrder}
          className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 space-y-12">
            {/* 1. Shipping Details */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <h3 className="text-xl font-serif font-bold">
                  Shipping Address
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="bg-white border border-stone-200 p-4 rounded-xl outline-none focus:border-amber-800 text-sm"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="bg-white border border-stone-200 p-4 rounded-xl outline-none focus:border-amber-800 text-sm"
                />
                <input
                  type="text"
                  placeholder="Street Address"
                  required
                  className="md:col-span-2 bg-white border border-stone-200 p-4 rounded-xl outline-none focus:border-amber-800 text-sm"
                />
                <input
                  type="text"
                  placeholder="City"
                  required
                  className="bg-white border border-stone-200 p-4 rounded-xl outline-none focus:border-amber-800 text-sm"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  required
                  className="bg-white border border-stone-200 p-4 rounded-xl outline-none focus:border-amber-800 text-sm"
                />
              </div>
            </section>

            {/* 2. Payment Method */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <h3 className="text-xl font-serif font-bold">Payment Method</h3>
              </div>
              <div className="space-y-4">
                <div
                  onClick={() => setPaymentMethod("card")}
                  className={`cursor-pointer border-2 p-6 rounded-2xl flex items-center justify-between transition-all ${
                    paymentMethod === "card"
                      ? "border-amber-800 bg-amber-50/30"
                      : "border-stone-200 bg-white hover:border-amber-200"
                  }`}>
                  <div className="flex items-center gap-4">
                    <div
                      className={`${paymentMethod === "card" ? "bg-amber-800 text-white" : "bg-stone-100 text-stone-500"} p-2 rounded-lg transition-colors`}>
                      <CreditCard size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-900">
                        Credit / Debit Card
                      </p>
                      <p className="text-[10px] text-stone-500 uppercase tracking-widest">
                        Secure Online Payment
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 border-4 rounded-full transition-all ${paymentMethod === "card" ? "border-amber-800 bg-white" : "border-stone-200 bg-transparent"}`}></div>
                </div>

                <div
                  onClick={() => setPaymentMethod("cod")}
                  className={`cursor-pointer border-2 p-6 rounded-2xl flex items-center justify-between transition-all ${
                    paymentMethod === "cod"
                      ? "border-amber-800 bg-amber-50/30"
                      : "border-stone-200 bg-white hover:border-amber-200"
                  }`}>
                  <div className="flex items-center gap-4">
                    <div
                      className={`${paymentMethod === "cod" ? "bg-amber-800 text-white" : "bg-stone-100 text-stone-500"} p-2 rounded-lg transition-colors`}>
                      <Truck size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-900">
                        Cash on Delivery
                      </p>
                      <p className="text-[10px] text-stone-500 uppercase tracking-widest">
                        Pay when you receive
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 border-4 rounded-full transition-all ${paymentMethod === "cod" ? "border-amber-800 bg-white" : "border-stone-200 bg-transparent"}`}></div>
                </div>
              </div>

              <AnimatePresence>
                {paymentMethod === "card" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden">
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-stone-100/50 rounded-3xl border border-stone-200">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="md:col-span-2 bg-white border border-stone-200 p-4 rounded-xl outline-none focus:border-amber-800 text-sm"
                      />
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="bg-white border border-stone-200 p-4 rounded-xl outline-none focus:border-amber-800 text-sm"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="bg-white border border-stone-200 p-4 rounded-xl outline-none focus:border-amber-800 text-sm"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          </div>

          <div className="lg:w-[420px]">
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-stone-100 sticky top-24">
              <h3 className="text-xl font-serif font-bold mb-8">
                Order Summary
              </h3>
              <div className="space-y-6 mb-10 max-h-[300px] overflow-y-auto no-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-20 bg-stone-50 rounded-xl overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover"
                        alt={item.name}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-stone-900 line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-stone-900">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-4 border-t border-stone-100 pt-8">
                <div className="flex justify-between text-sm text-stone-500 font-medium">
                  <span>Subtotal</span>
                  <span className="text-stone-900">${subtotal}</span>
                </div>
                <div className="flex justify-between text-sm text-stone-500 font-medium">
                  <span>Shipping</span>
                  <span className="text-stone-900">${shipping}</span>
                </div>
                <div className="flex justify-between items-end pt-4 border-t border-stone-50">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-stone-400">
                    Total
                  </span>
                  <span className="text-3xl font-serif font-bold text-amber-900">
                    ${total}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#12110f] text-white mt-10 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[11px] shadow-2xl hover:bg-amber-900 transition-all flex items-center justify-center gap-3">
                Complete Purchase <ShieldCheck size={18} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
