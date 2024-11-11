import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, MessageCircleHeart, Camera } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={to}
        className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors duration-300 ${
          isActive ? 'bg-red-100 text-red-600' : 'text-red-400 hover:text-red-600'
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export const Navigation = () => {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-lg px-6 py-3 rounded-full shadow-lg border border-red-100 md:top-4 md:bottom-auto">
      <ul className="flex items-center gap-2 md:gap-4">
        <li><NavLink to="/"><Home className="w-5 h-5" /><span className="hidden md:inline">Home</span></NavLink></li>
        <li><NavLink to="/memories"><Camera className="w-5 h-5" /><span className="hidden md:inline">Memories</span></NavLink></li>
        <li><NavLink to="/messages"><MessageCircleHeart className="w-5 h-5" /><span className="hidden md:inline">Messages</span></NavLink></li>
      </ul>
    </nav>
  );
};