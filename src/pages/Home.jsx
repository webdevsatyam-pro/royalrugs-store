import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Quote,
  Eye,
  ShoppingBag,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const categories = [
    {
      name: "Persian Rugs",
      image:
        "https://images.unsplash.com/photo-1576016773942-3344d55707e8?auto=format&fit=crop&q=80",
      price: "Starting from $299",
    },
    {
      name: "Modern Geometric",
      image:
        "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80",
      price: "Starting from $150",
    },
    {
      name: "Traditional Wool",
      image:
        "https://images.unsplash.com/photo-1534889156217-d3c8ef46a56e?auto=format&fit=crop&q=80",
      price: "Starting from $199",
    },
  ];

  // New Data for Added Sections
  const newArrivals = [
    {
      id: 1,
      name: "Vintage Silk Route",
      price: "$450",
      tag: "New",
      img: "https://images.unsplash.com/photo-1594051664213-9426f9790400?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Azure Geometric",
      price: "$280",
      tag: "Sale",
      img: "https://images.unsplash.com/photo-1562544208-5190d6a29ad9?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Tribal Hand-Woven",
      price: "$320",
      tag: "Hot",
      img: "https://images.unsplash.com/photo-1575203091586-611fe505bb0e?auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Minimalist Sand",
      price: "$210",
      tag: "New",
      img: "https://images.unsplash.com/photo-1592345224825-450f383e5893?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="bg-[#fdfcfb]">
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80"
            alt="Luxury Rug Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl">
            <h5 className="text-amber-400 font-medium tracking-[0.3em] uppercase mb-4">
              Royal Collections 2024
            </h5>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Bring Elegance <br /> To Your{" "}
              <span className="italic text-amber-200 font-light">Floors.</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 font-light leading-relaxed">
              Experience the touch of royalty with our handcrafted Persian and
              Modern rugs. Each piece tells a story of ancient tradition and
              modern luxury.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/collections"
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-sm transition-all duration-300 flex items-center gap-2 group">
                Shop Collection{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/custom-rugs"
                className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-sm transition-all duration-300">
                Custom Design
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="text-amber-800" />,
                title: "Authentic Quality",
                desc: "100% Genuine Materials",
              },
              {
                icon: <Truck className="text-amber-800" />,
                title: "Free Shipping",
                desc: "Global Delivery",
              },
              {
                icon: <RotateCcw className="text-amber-800" />,
                title: "Easy Returns",
                desc: "30-Day Policy",
              },
              {
                icon: <Star className="text-amber-800" />,
                title: "Top Rated",
                desc: "4.9/5 Client Rating",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center">
                <div className="mb-3 p-3 bg-amber-50 rounded-full">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-gray-900">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRENDING CATEGORIES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Featured Categories
            </h2>
            <div className="h-1 w-20 bg-amber-700 mt-2"></div>
          </div>
          <Link
            to="/collections"
            className="text-amber-800 font-semibold hover:underline flex items-center gap-1">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer overflow-hidden shadow-lg">
              <div className="h-[450px] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-serif mb-1">{cat.name}</h3>
                <p className="text-amber-400 text-sm mb-4">{cat.price}</p>
                <button className="w-fit bg-white text-black px-6 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: NEW ARRIVALS */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              New Arrivals
            </h2>
            <p className="text-gray-500 mt-4">
              Discover our latest hand-crafted additions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((item) => (
              <motion.div
                key={item.id}
                {...fadeInUp}
                className="group relative">
                <div className="aspect-[3/4] overflow-hidden bg-gray-200 relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-amber-700 text-white px-3 py-1 text-xs font-bold">
                    {item.tag}
                  </span>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="bg-white p-3 rounded-full hover:bg-amber-600 hover:text-white transition-colors shadow-lg">
                      <ShoppingBag size={18} />
                    </button>
                    <button className="bg-white p-3 rounded-full hover:bg-amber-600 hover:text-white transition-colors shadow-lg">
                      <Heart size={18} />
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-amber-800 font-bold">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT BRAND / CTA */}
      <section className="bg-amber-900 py-20 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              src="https://images.unsplash.com/photo-1594051664213-9426f9790400?auto=format&fit=crop&q=80"
              alt="Rug Making"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-serif font-bold">
              The Art of Hand-Knotted Perfection
            </h2>
            <p className="text-amber-100/80 leading-relaxed text-lg">
              At RoyalRugs, we collaborate with master artisans from across the
              globe to bring you carpets that are not just floor coverings, but
              masterpieces of art. Every knot is made with precision, using the
              finest organic silks and wool.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-amber-400 rounded-full"></div>
                Hand-dyed with natural pigments
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-amber-400 rounded-full"></div>
                Sustainable and Eco-friendly production
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-amber-400 rounded-full"></div>Trusted
                by 50,000+ homes worldwide
              </li>
            </ul>
            <button className="bg-amber-100 text-amber-900 px-10 py-4 font-bold rounded-sm hover:bg-white transition-colors">
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* NEW SECTION: CUSTOMER TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Voices of Luxury
            </h2>
            <div className="h-1 w-20 bg-amber-700 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Johnson",
                role: "Interior Designer",
                text: "The quality of the Persian rug I received is beyond words. It has completely transformed my living room.",
              },
              {
                name: "Michael Chen",
                role: "Home Owner",
                text: "Exceptional service and even better products. The hand-knotted detail is something you can only find at RoyalRugs.",
              },
              {
                name: "Emma Davis",
                role: "Architect",
                text: "Sustainable materials and authentic designs. This is my go-to place for all my high-end interior projects.",
              },
            ].map((testi, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="bg-stone-50 p-8 relative">
                <Quote
                  className="text-amber-200 absolute top-4 right-4"
                  size={40}
                />
                <div className="flex mb-4 text-amber-500">
                  <Star size={16} fill="currentColor" />{" "}
                  <Star size={16} fill="currentColor" />{" "}
                  <Star size={16} fill="currentColor" />{" "}
                  <Star size={16} fill="currentColor" />{" "}
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-gray-700 italic mb-6">"{testi.text}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{testi.name}</h4>
                  <p className="text-sm text-amber-700">{testi.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: INSTAGRAM LOOKBOOK */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-full px-4 overflow-hidden">
          <div className="flex justify-between items-center mb-8 px-4 sm:px-12">
            <h3 className="text-xl font-serif font-bold italic">
              #RoyalRugsInHomes
            </h3>
            <p className="text-gray-500 text-sm">
              Follow us @RoyalRugs_Official
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square relative group cursor-pointer overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=60&w=400`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Instagram"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Eye className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Join the Royal Club
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 outline-none border border-gray-300 focus:border-amber-700"
            />
            <button className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm font-bold">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FINAL MINI FOOTER (To make it look complete) */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-serif text-2xl mb-4">RoyalRugs</h3>
            <p className="text-sm">
              Curating the world's finest hand-knotted masterpieces since 1984.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Shop</h4>
            <ul className="text-sm space-y-2">
              <li>Modern Rugs</li>
              <li>Traditional Rugs</li>
              <li>Office Collection</li>
              <li>Custom Orders</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="text-sm space-y-2">
              <li>Shipping Policy</li>
              <li>Track Order</li>
              <li>Returns & Exchanges</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Visit Us</h4>
            <p className="text-sm">
              123 Luxury Lane, Manhattan
              <br />
              New York, NY 10001
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
