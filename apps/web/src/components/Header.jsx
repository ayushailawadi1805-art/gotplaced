import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

 
   const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Careers', path: '/careers' },
  { name: 'Placement Programs', path: '/programs' },   
  { name: 'Contact Us', path: '/contact' }
];
  

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex-shrink-0 relative overflow-hidden rounded-full border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
              <img 
                src="https://horizons-cdn.hostinger.com/e89d2a99-30b2-4734-92e6-a6c791d94cb5/efc0a03168e30a59276b5a28c7c3413f.png" 
                alt="GotPlaced Logo" 
                className="w-12 h-12 object-cover"
              />
            </div>
            <div
              className="text-2xl font-serif font-extrabold tracking-wide transition-opacity"
              style={{ color: '#D4AF37' }}
            >
              GotPlaced
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">

  {navLinks.map((link) => (
    <Link
      key={link.path}
      to={link.path}
      className={`relative text-sm font-medium transition-colors ${
        isActive(link.path)
          ? "text-white"
          : "text-gray-400 hover:text-white"
      }`}
      style={isActive(link.path) ? { color: "#D4AF37" } : {}}
    >
      {link.name}

      {isActive(link.path) && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-[29px] left-0 right-0 h-0.5"
          style={{ backgroundColor: "#D4AF37" }}
        />
      )}
    </Link>
  ))}

  {/* Sign In */}
  <Link to="/login">
    <Button
      variant="outline"
      className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
    >
      Sign In
    </Button>
  </Link>

  {/* Create Account */}
  <Link to="/register">
    <Button className="bg-[#D4AF37] text-black hover:bg-[#c8a62e]">
      Create Account
    </Button>
  </Link>

</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: '#D4AF37' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: '#D4AF37' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-[#0a0a0a] border-t border-[#D4AF37]/20"
            >
              <div className="py-4 space-y-2 px-4">
  {navLinks.map((link) => (
    <Link
      key={link.path}
      to={link.path}
      onClick={() => setMobileMenuOpen(false)}
      className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        isActive(link.path)
          ? 'bg-white/5'
          : 'text-gray-400 hover:bg-white/5 hover:text-white'
      }`}
      style={isActive(link.path) ? { color: '#D4AF37' } : {}}
    >
      {link.name}
    </Link>
  ))}

  {/* Sign In */}
  <Link
    to="/login"
    onClick={() => setMobileMenuOpen(false)}
  >
    <Button
      variant="outline"
      className="w-full border-[#D4AF37] text-[#D4AF37]"
    >
      Sign In
    </Button>
  </Link>

  {/* Create Account */}
  <Link
    to="/register"
    onClick={() => setMobileMenuOpen(false)}
  >
    <Button
      className="w-full bg-[#D4AF37] text-black"
    >
      Create Account
    </Button>
  </Link>
</div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;