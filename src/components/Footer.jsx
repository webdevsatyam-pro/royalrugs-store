import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";

// Custom Social Icons (SVGs) - No more Lucide Error!
const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#0c0b09] text-gray-300 pt-16 pb-8 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-serif font-bold text-white tracking-tighter">
                ROYAL<span className="text-amber-600">RUGS</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Timeless craftsmanship and premium hand-knotted luxury for your
              home.
            </p>
            <div className="flex space-x-5">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors">
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors">
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* 2. Collection Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 pb-2 border-b border-amber-900/20 inline-block">
              Collection
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/collections"
                  className="text-sm text-gray-400 hover:text-white transition-colors">
                  Classic Persian
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-sm text-gray-400 hover:text-white transition-colors">
                  Modern Designs
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-sm text-gray-400 hover:text-white transition-colors">
                  Custom Rugs
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Contact Details */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 pb-2 border-b border-amber-900/20 inline-block">
              Support
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-amber-600" /> Jaipur,
                Rajasthan, IN
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-amber-600" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-amber-600" />{" "}
                hello@royalrugs.com
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 pb-2 border-b border-amber-900/20 inline-block">
              Newsletter
            </h4>
            <div className="relative mt-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-stone-900 border border-stone-800 py-3 px-4 rounded text-sm text-white focus:outline-none focus:border-amber-600"
              />
              <button className="absolute right-3 top-3 text-amber-600 hover:text-amber-400 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-500 uppercase tracking-widest font-medium">
            &copy; {new Date().getFullYear()} RoyalRugs. Handmade with Love.
          </p>
          <div className="flex space-x-6 text-[11px] text-gray-500 uppercase tracking-widest">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
