import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart, wishlist } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collections?search=${searchQuery}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "Custom Rugs", path: "/custom-rugs" },
    { name: "New Arrivals", path: "/new-arrivals" },
  ];

  return (
    <nav
      // FIX: 'fixed' ko 'sticky top-0' kiya aur 'bg-white' solid rakha
      className={`sticky top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-xl py-2"
          : "bg-white py-5 border-b border-stone-100"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }} className="flex-shrink-0">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-serif font-extrabold tracking-tighter text-amber-950">
                ROYAL<span className="text-amber-700">RUGS</span>
              </span>
              <span className="text-[9px] tracking-[0.4em] uppercase -mt-1 text-gray-500 font-bold italic">
                Heritage of Quality
              </span>
            </Link>
          </motion.div>

          {/* Center Links & Search Box */}
          <div className="hidden md:flex flex-1 justify-center px-10">
            <AnimatePresence mode="wait">
              {!isSearchOpen ? (
                <motion.div
                  key="links"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex space-x-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-sm font-bold text-gray-800 hover:text-amber-700 transition-all uppercase tracking-widest relative group">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ))}
                </motion.div>
              ) : (
                <motion.form
                  key="search"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  onSubmit={handleSearchSubmit}
                  className="relative w-full max-w-lg">
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search for luxury rugs..."
                    className="w-full bg-stone-100 border-2 border-amber-100 py-2 px-5 rounded-full outline-none focus:border-amber-700 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-4 top-2.5 text-gray-400 hover:text-black">
                    <X size={20} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-800 hover:text-amber-700 transition-transform hover:scale-110">
              <Search size={22} strokeWidth={2.5} />
            </button>

            <Link
              to="/wishlist"
              className="text-gray-800 hover:text-red-600 relative group">
              <Heart
                size={22}
                strokeWidth={2.5}
                className={
                  wishlist.length > 0 ? "fill-red-500 text-red-500" : ""
                }
              />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold animate-bounce">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="text-gray-800 hover:text-amber-700 relative group">
              <ShoppingCart size={22} strokeWidth={2.5} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-800 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </Link>

            <Link
              to="/signin"
              className="hidden lg:block bg-amber-900 text-white px-6 py-2 rounded-full text-xs font-black tracking-tighter hover:bg-black transition-all shadow-lg">
              SIGN IN
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-amber-900">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 bg-white z-[200] p-6 flex flex-col">
            <div className="flex justify-between items-center mb-10">
              <span className="text-2xl font-serif font-bold italic">
                RoyalRugs
              </span>
              <button onClick={() => setIsOpen(false)}>
                <X size={32} />
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-serif mb-6 border-b border-stone-100 pb-2">
                {link.name}
              </Link>
            ))}
            <Link
              to="/signin"
              className="mt-auto bg-amber-900 text-white text-center py-4 rounded-xl font-bold">
              SIGN IN
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
