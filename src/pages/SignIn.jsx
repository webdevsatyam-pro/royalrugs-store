import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Signing in to RoyalRugs...");
    navigate("/");
  };

  return (
    // PT-0 ensures no gap with sticky navbar
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-4 pt-0">
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-5xl w-full bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row min-h-[650px] border border-stone-100">
        {/* LEFT: Branding & Image */}
        <div className="hidden md:flex md:w-5/12 bg-stone-900 relative items-center justify-center p-12 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1594051664213-9426f9790400?auto=format&fit=crop&q=80"
            alt="Royal Rug Texture"
            className="absolute inset-0 w-full h-full object-cover opacity-40 hover:scale-110 transition-transform duration-[3s]"
          />
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-serif font-bold text-white mb-4 italic tracking-tight">
              The Heritage <br /> Awaits
            </h2>
            <div className="h-0.5 w-10 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-stone-300 text-sm font-medium leading-relaxed opacity-80">
              Log in to your private showroom and manage your bespoke orders.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/80"></div>
        </div>

        {/* RIGHT: Login Form */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center bg-white">
          <div className="mb-10">
            <h1 className="text-4xl font-serif font-bold text-stone-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-stone-400 text-sm font-medium tracking-tight">
              Sign in to your RoyalRugs account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-1">
                Account Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300"
                  size={18}
                />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-stone-50 border border-stone-100 py-4 pl-12 pr-4 rounded-2xl outline-none focus:bg-white focus:border-amber-700 focus:ring-4 focus:ring-amber-700/5 transition-all text-sm font-bold"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[10px] font-black text-amber-800 hover:text-black uppercase tracking-widest transition-colors">
                  Recover Access?
                </button>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300"
                  size={18}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full bg-stone-50 border border-stone-100 py-4 pl-12 pr-12 rounded-2xl outline-none focus:bg-white focus:border-amber-700 focus:ring-4 focus:ring-amber-700/5 transition-all text-sm font-bold"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 hover:text-amber-800 transition-colors">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#12110f] text-white py-4 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:bg-amber-900 transition-all flex items-center justify-center gap-3 group">
              Enter Showroom{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            {/* Divider */}
            <div className="relative py-4 flex items-center">
              <div className="flex-grow border-t border-stone-100"></div>
              <span className="flex-shrink mx-4 text-[10px] uppercase font-black text-stone-300 tracking-widest">
                Secure Connect
              </span>
              <div className="flex-grow border-t border-stone-100"></div>
            </div>

            {/* Google Login (Direct SVG Used here to avoid Lucide Error) */}
            <button
              type="button"
              className="w-full bg-white border border-stone-100 text-stone-700 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-stone-50 transition-all flex items-center justify-center gap-3 shadow-sm">
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Sign in with Google
            </button>
          </form>

          {/* Create Account Link */}
          <div className="mt-12 text-center">
            <p className="text-xs text-stone-400 font-medium">
              New to the Royalty?{" "}
              <Link
                to="/signup"
                className="text-amber-800 font-black hover:underline ml-1">
                Create an Account
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;
