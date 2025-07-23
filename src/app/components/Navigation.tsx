'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Check if the screen width is >= 768px
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);

    // Run on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 left-6 z-50 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 md:hidden"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-violet-400 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-0.5 bg-violet-400 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-violet-400 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Navigation Menu */}
      <AnimatePresence mode="wait">
        {(isOpen || isDesktop) && (
          <motion.nav
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed relative min-h-screen w-64 bg-black/95 backdrop-blur-lg border-r border-white/10 z-40 md:translate-x-0"
          >
            <div className="p-8 pt-20 md:pt-8">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      pathname === item.path
                        ? 'bg-violet-600/20 text-violet-400'
                        : 'text-gray-400 hover:text-violet-400 hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}