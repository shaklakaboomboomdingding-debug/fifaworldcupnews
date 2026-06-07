import { Link, useLocation } from "react-router";
import { Menu, X, Trophy, Bell, Search, User } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { clsx } from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Matches", path: "/matches" },
    { name: "Standings", path: "/standings" },
    { name: "Teams", path: "/teams" },
  ];

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-400 rounded-lg flex items-center justify-center font-black text-xl italic">26</div>
            <Link to="/" className="text-xl font-black tracking-tighter uppercase">
              FIFA World Cup <span className="text-green-400">Hub</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "text-sm font-semibold uppercase tracking-wider transition-colors",
                  location.pathname === link.path ? "text-white border-b-2 border-green-400 pb-1" : "text-slate-400 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-300 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-slate-300 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <Link to="/admin" className="text-slate-300 hover:text-white transition-colors title='Admin Dashboard'">
              <User className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-slate-900"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "block px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider",
                    location.pathname === link.path ? "text-green-400 bg-slate-800" : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
