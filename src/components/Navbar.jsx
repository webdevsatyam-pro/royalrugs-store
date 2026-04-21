import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Search ke liye states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Search submit function
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collections?search=${searchQuery}`); // Search results page par bhej dega
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/60 backdrop-blur-md py-4 border-b border-gray-100"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-tighter text-amber-900">
                ROYAL<span className="text-gray-800">RUGS</span>
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase -mt-1 text-amber-800/70 font-bold">
                Premium Carpets
              </span>
            </Link>
          </div>

          {/* Center Section: Links or Search Input */}
          <div className="hidden md:flex flex-1 justify-center px-10">
            {!isSearchOpen ? (
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-sm font-semibold text-gray-800 hover:text-amber-700 transition-colors relative group">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            ) : (
              <motion.form
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onSubmit={handleSearch}
                className="w-full max-w-md relative">
                <input
                  type="text"
                  autoFocus
                  placeholder="Search rugs, colors, patterns..."
                  className="w-full bg-gray-100 border border-amber-200 py-1.5 px-4 rounded-full outline-none focus:ring-2 focus:ring-amber-700 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3 top-1.5 text-gray-400 hover:text-black">
                  <X size={18} />
                </button>
              </motion.form>
            )}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-5">
            {/* Search Icon Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-800 hover:text-amber-700 transition-colors">
              {isSearchOpen ? (
                <X size={22} className="md:hidden" />
              ) : (
                <Search size={22} />
              )}
            </button>

            <Link
              to="/wishlist"
              className="hidden sm:block text-gray-800 hover:text-amber-700">
              <Heart size={22} />
            </Link>

            <Link to="/cart" className="text-gray-800 relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            <Link
              to="/signin"
              className="hidden md:block bg-amber-900 text-white px-5 py-2 rounded-sm hover:bg-black transition-all duration-300 text-sm font-bold shadow-md">
              SIGN IN
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-amber-900">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Same as before) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-4 text-base font-medium text-gray-800 border-b border-gray-50"
                  onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <Link
                to="/signin"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-amber-800 font-bold uppercase tracking-wider text-sm">
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
