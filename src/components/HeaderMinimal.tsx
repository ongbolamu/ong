'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Heart, Globe2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeaderMinimal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/apropos', label: 'À propos' },
    { href: '/actions', label: 'Actions' },
    { href: '/adhesion', label: 'Adhésion' },
    { href: '/transparence', label: 'Transparence' },
    { href: '/actualites', label: 'Actualités' },
    { href: '/apropos#contact', label: 'Contact' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo épuré */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <Image 
                  src="/images/logo Bolamu.png" 
                  alt="Logo ONG BOLAMU" 
                  width={48} 
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <div>
              <motion.h1 
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                BOLAMU
              </motion.h1>
              <p className={`text-xs uppercase tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-gray-500' : 'text-white/80'
              }`}>
                ONG • Congo
              </p>
            </div>
          </Link>
          
          {/* Navigation minimaliste */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#ff6219]' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          
          {/* Actions épurées */}
          <div className="flex items-center space-x-4">
            
            {/* Langue */}
            <button className={`hidden md:flex items-center space-x-1 text-sm transition-colors duration-300 ${
              isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
            }`}>
              <Globe2 className="w-4 h-4" />
              <span>FR</span>
            </button>

            {/* Bouton de don épuré */}
            <Link href="/don">
              <motion.button 
                className="hidden md:flex items-center space-x-2 bg-[#ff6219] text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl hover:bg-[#e5551a] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-4 h-4" />
                <span>Don</span>
              </motion.button>
            </Link>
            
            {/* Menu mobile épuré */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Menu mobile full-screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] z-40"
          >
            <div className="flex flex-col justify-center items-center h-full text-center px-6">
              
              {/* Logo dans le menu */}
              <motion.div 
                className="mb-12"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto mb-4">
                  <Image 
                    src="/images/logo Bolamu.png" 
                    alt="Logo ONG BOLAMU" 
                    width={80} 
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-white">BOLAMU</h2>
                <p className="text-white/80 text-sm uppercase tracking-wider">Entraide • Développement • Réussite</p>
              </motion.div>

              {/* Navigation mobile */}
              <nav className="space-y-6 mb-12">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl font-light text-white hover:text-white/80 transition-colors duration-300 group"
                    >
                      <span className="flex items-center justify-center space-x-3">
                        <span>{item.label}</span>
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Actions du menu mobile */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Link href="/don">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="bg-white text-[#ff6219] px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto"
                  >
                    <Heart className="w-5 h-5" />
                    <span>Faire un don</span>
                  </button>
                </Link>
                
                <div className="flex items-center justify-center space-x-6 text-white/80 text-sm">
                  <button className="flex items-center space-x-2 hover:text-white transition-colors">
                    <Globe2 className="w-4 h-4" />
                    <span>Français</span>
                  </button>
                  <span>•</span>
                  <button className="flex items-center space-x-2 hover:text-white transition-colors">
                    <Globe2 className="w-4 h-4" />
                    <span>English</span>
                  </button>
                </div>
              </motion.div>

              {/* Bouton de fermeture */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 