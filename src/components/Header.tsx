'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Heart, Home, Users, Zap, UserPlus, Shield, Newspaper, Phone, Award, Target, Eye, Calendar, MapPin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '/', label: 'Accueil', icon: Home },
    { 
      href: '/apropos', 
      label: 'À propos',
      icon: Users,
      dropdown: [
        { href: '/apropos#histoire', label: 'Notre histoire', icon: Award },
        { href: '/apropos#mission', label: 'Mission & Vision', icon: Target },
        { href: '/apropos#valeurs', label: 'Nos valeurs', icon: Heart },
        { href: '/equipe', label: 'Notre équipe', icon: Users }
      ]
    },
    { 
      href: '/actions', 
      label: 'Nos actions',
      icon: Zap,
      dropdown: [
        { href: '/actions#projets', label: 'Tous les projets', icon: Eye },
        { href: '/actions#projets?filter=en_cours', label: 'Projets en cours', icon: Calendar },
        { href: '/actions#projets?filter=termine', label: 'Projets terminés', icon: Award },
        { href: '/actions#statistiques', label: 'Notre impact', icon: Target }
      ]
    },
    { href: '/adhesion#formulaire', label: 'Devenir membre', icon: UserPlus },
    { href: '/transparence', label: 'Transparence', icon: Shield },
    { href: '/#actualites', label: 'Actualités', icon: Newspaper },
    { href: '/apropos#contact', label: 'Contact', icon: Phone },
  ];

  const languages = [
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm shadow-lg border-b border-gray-100'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo ultra-moderne avec animations */}
          <Link href="/" className="flex items-center space-x-4 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white border-2 border-gray-200 shadow-lg">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center relative overflow-hidden">
                  {/* Effet de brillance animé */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    style={{ transform: 'skewX(-20deg)' }}
                  />
                  <Image 
                    src="/images/logo Bolamu.png" 
                    alt="Logo ONG BOLAMU" 
                    width={40} 
                    height={40}
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
              </div>
            </motion.div>
            
            <div className="hidden sm:block">
              <motion.h1 
                className="text-2xl font-bold bg-gradient-to-r from-[#0369a1] via-[#0284c7] to-[#15803d] bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{ 
                  backgroundPosition: { duration: 4, repeat: Infinity },
                  scale: { type: "spring", stiffness: 300 }
                }}
                style={{ backgroundSize: '200% 100%' }}
              >
                ONG BOLAMU
              </motion.h1>
              <motion.p 
                className="text-sm text-gray-600 font-medium tracking-wide"
                animate={{ 
                  color: ['#6b7280', '#0369a1', '#15803d', '#6b7280']
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                Entraide • Développement • Réussite
              </motion.p>
            </div>
          </Link>
          
          {/* Navigation desktop avec icônes uniquement */}
          <nav className="hidden xl:flex items-center space-x-2">
            {menuItems.map((item) => (
              <div 
                key={item.href}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={item.href} 
                  className="relative flex items-center justify-center w-12 h-12 rounded-xl text-gray-700 hover:text-[#0369a1] font-medium transition-all duration-200 hover:bg-blue-50/50 group"
                  title={item.label}
                >
                  <item.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                  {item.dropdown && (
                    <ChevronDown className="absolute -bottom-1 -right-1 w-3 h-3 transition-transform duration-200 group-hover:rotate-180 opacity-60" />
                  )}
                  
                  {/* Tooltip en bas à gauche */}
                  <div className="absolute top-full left-0 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {item.label}
                    <div className="absolute bottom-full left-2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-gray-900"></div>
                  </div>
                </Link>
                
                {/* Dropdown menu avec icônes */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-gray-100/50 py-2"
                    >
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          className="flex items-center px-4 py-3 text-gray-700 hover:text-[#0369a1] hover:bg-blue-50/50 transition-colors duration-200 text-sm group"
                        >
                          <dropItem.icon className="w-4 h-4 mr-3 transition-transform duration-200 group-hover:scale-110" />
                          {dropItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
          
          {/* Actions à droite */}
          <div className="flex items-center space-x-3">
            
            {/* Sélecteur de langue moderne */}
            <div className="hidden md:block relative group">
              <button className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-all duration-200 border border-gray-200/50">
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">FR</span>
                <ChevronDown className="w-3 h-3 text-gray-500 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-40 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-gray-100/50 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:text-[#ff6219] hover:bg-orange-50/50 transition-colors duration-200"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bouton de don amélioré */}
            <Link href="/don">
              <button
                className="hidden md:flex items-center space-x-2 bg-[#ff6219] text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Faire un don</span>
              </button>
            </Link>
            
            {/* Menu mobile moderne */}
            <div className="xl:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-[#ff6219] text-white shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile amélioré */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header du menu mobile */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100/50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-white border-2 border-gray-200 p-0.5">
                    <div className="w-full h-full rounded-lg bg-white flex items-center justify-center">
                      <Image 
                        src="/images/logo Bolamu.png" 
                        alt="Logo ONG BOLAMU" 
                        width={32} 
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#ff6219]">
                      BOLAMU
                    </h3>
                    <p className="text-xs text-gray-600">Menu</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100/50 transition-colors duration-200"
                  title="Fermer le menu"
                  aria-label="Fermer le menu"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Navigation mobile avec icônes */}
              <nav className="p-6 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-4 text-gray-700 hover:text-[#ff6219] hover:bg-orange-50/50 rounded-xl transition-all duration-200 font-medium group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-orange-100 flex items-center justify-center transition-all duration-200">
                          <item.icon className="w-5 h-5 text-gray-600 group-hover:text-[#ff6219] transition-colors duration-200" />
                        </div>
                        <span>{item.label}</span>
                      </div>
                      {item.dropdown && (
                        <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </Link>
                    
                    {/* Sous-menu mobile */}
                    {item.dropdown && (
                      <motion.div
                        className="ml-4 mt-2 space-y-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <Link
                            key={dropItem.href}
                            href={dropItem.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-3 p-3 text-sm text-gray-600 hover:text-[#ff6219] hover:bg-orange-50/30 rounded-lg transition-all duration-200 group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center transition-all duration-200">
                              <dropItem.icon className="w-4 h-4 text-gray-500 group-hover:text-[#ff6219] transition-colors duration-200" />
                            </div>
                            <span>{dropItem.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
                
                {/* Actions du menu mobile */}
                <div className="pt-6 border-t border-gray-100/50 space-y-3">
                  <Link href="/don">
                    <button
                      className="w-full flex items-center justify-center space-x-2 bg-[#ff6219] text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                    >
                      <Heart className="w-5 h-5" />
                      <span>Faire un don</span>
                    </button>
                  </Link>
                  
                  <div className="flex justify-center space-x-4 pt-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors duration-200"
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm font-medium text-gray-700">{lang.code.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 