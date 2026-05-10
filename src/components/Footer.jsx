import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  Truck,
  RotateCcw,
  CreditCard,
} from "lucide-react";

// Custom Social Icons
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
    <footer className="bg-[#0c0b09] text-gray-300 border-t border-amber-900/30">
      {/* 1. TOP TRUST BADGES BAR */}
      <div className="border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <Truck className="text-amber-600" size={32} />
              <div>
                <h5 className="text-white text-sm font-bold uppercase">
                  Free Shipping
                </h5>
                <p className="text-xs text-gray-500 font-light">
                  On orders over $500
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-amber-600" size={32} />
              <div>
                <h5 className="text-white text-sm font-bold uppercase">
                  Secure Payment
                </h5>
                <p className="text-xs text-gray-500 font-light">
                  100% Protected
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <RotateCcw className="text-amber-600" size={32} />
              <div>
                <h5 className="text-white text-sm font-bold uppercase">
                  Easy Returns
                </h5>
                <p className="text-xs text-gray-500 font-light">
                  30 Day Policy
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CreditCard className="text-amber-600" size={32} />
              <div>
                <h5 className="text-white text-sm font-bold uppercase">
                  EMI Available
                </h5>
                <p className="text-xs text-gray-500 font-light">
                  At 0% Interest
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {/* 2. BRAND & ABOUT */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-serif font-bold text-white tracking-tighter">
                ROYAL<span className="text-amber-600">RUGS</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Established in 1984, we bring the legacy of hand-knotted
              perfection to modern homes. Each rug is a masterpiece of art,
              culture, and sustainable craftsmanship.
            </p>
            <div className="flex space-x-5 pt-2">
              {[<InstagramIcon />, <FacebookIcon />, <TwitterIcon />].map(
                (icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full border border-amber-900/50 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-all duration-300">
                    {icon}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* 3. COLLECTIONS LINKS */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 relative">
              Collections
              <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-amber-600"></span>
            </h4>
            <ul className="space-y-4">
              {[
                "Classic Persian",
                "Modern Minimalist",
                "Vintage Oriental",
                "Hand-Tufted Wool",
                "Custom Rugs",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/collections"
                    className="text-sm text-gray-500 hover:text-amber-500 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-amber-600 group-hover:w-3 transition-all"></span>{" "}
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. COMPANY & CARE */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 relative">
              Help & Care
              <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-amber-600"></span>
            </h4>
            <ul className="space-y-4">
              {[
                "Our Story",
                "Rug Care Guide",
                "Shipping Policy",
                "Track Order",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-sm text-gray-500 hover:text-amber-500 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-amber-600 group-hover:w-3 transition-all"></span>{" "}
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. CONTACT & NEWSLETTER */}
          <div className="lg:col-span-1">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 relative">
              Keep In Touch
              <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-amber-600"></span>
            </h4>
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-amber-600 mt-1 shrink-0" />
                <span>
                  Jaipur Rugs Mansion, <br />
                  Rajasthan, India
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Mail size={18} className="text-amber-600 shrink-0" />
                <span>concierge@royalrugs.com</span>
              </div>
            </div>

            <div className="relative group">
              <input
                type="email"
                placeholder="Join the Elite Club"
                className="w-full bg-white/[0.03] border border-white/10 py-3 px-4 rounded-sm text-sm text-white focus:outline-none focus:border-amber-600 transition-all"
              />
              <button className="absolute right-3 top-3 text-amber-600 group-hover:translate-x-1 transition-transform">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* 6. BOTTOM BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
              &copy; {new Date().getFullYear()} ROYAL RUGS LUXURY COLLECTIONS
              PVT. LTD. <br />
              DESIGNED FOR THE EXTRAORDINARY.
            </p>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-4"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="Paypal"
              className="h-4"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg"
              alt="ApplePay"
              className="h-5"
            />
          </div>

          <div className="flex space-x-8 text-[11px] text-gray-500 uppercase tracking-widest font-bold">
            <Link to="#" className="hover:text-amber-500 transition-colors">
              Privacy
            </Link>
            <Link to="#" className="hover:text-amber-500 transition-colors">
              Terms
            </Link>
            <Link to="#" className="hover:text-amber-500 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
