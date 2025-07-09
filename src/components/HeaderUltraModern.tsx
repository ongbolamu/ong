'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Heart, Users, Zap, ChevronDown, Sparkles, Shield, Home, UserPlus, Newspaper, Phone, Award, Target, Eye, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeaderUltraModern() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const menuItems = [
    { 
      name: 'Accueil', 
      href: '/', 
      icon: Home,
      description: 'Retour à l\'accueil' 
    },
    { 
      name: 'À Propos', 
      href: '/apropos', 
      icon: Users,
      description: 'Notre histoire et mission',
      dropdown: [
        { name: 'Notre Histoire', href: '/apropos#histoire', icon: Award },
        { name: 'Mission & Vision', href: '/apropos#mission', icon: Target },
        { name: 'Nos Valeurs', href: '/apropos#valeurs', icon: Heart },
        { name: 'Transparence', href: '/transparence', icon: Eye }
      ]
    },
    { 
      name: 'Nos Actions', 
      href: '/actions', 
      icon: Zap,
      description: 'Projets et réalisations',
      dropdown: [
        { name: 'Projets en cours', href: '/actions?filter=en_cours', icon: Calendar },
        { name: 'Projets terminés', href: '/actions?filter=termine', icon: Award },
        { name: 'Impact & Résultats', href: '/impact', icon: Target }
      ]
    },
    { 
      name: 'Équipe', 
      href: '/equipe', 
      icon: Users,
      description: 'Rencontrez notre équipe' 
    },
    { 
      name: 'Rejoindre', 
      href: '/adhesion', 
      icon: UserPlus,
      description: 'Devenir membre ou bénévole' 
    },
    { 
      name: 'Actualités', 
      href: '/actualites', 
      icon: Newspaper,
      description: 'Dernières nouvelles' 
    },
    { 
      name: 'Contact', 
              href: '/apropos#contact', 
      icon: Phone,
      description: 'Nous contacter' 
    }
  ];

  return (
    <>
      {/* Gradient de fond dynamique */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(139, 92, 246, 0.15), 
            rgba(59, 130, 246, 0.1), 
            rgba(16, 185, 129, 0.05), 
            transparent 80%)`
        }}
      />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-purple-500/10' 
            : 'bg-transparent'
        }`}
      >
        {/* Barre d'informations en haut */}
        <motion.div 
          className="bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 text-white py-2 px-4 text-sm relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
          <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Ensemble pour un Congo meilleur 🇨🇬</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>ONG certifiée • Transparence financière</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <motion.div 
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs">En ligne • Disponible 24/7</span>
            </div>
          </div>
        </motion.div>

        {/* Navigation principale */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo avec effet holographique */}
            <motion.div 
              className="flex items-center space-x-3 relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="relative w-12 h-12 rounded-2xl bg-[#ff6219] p-0.5 shadow-2xl hover:shadow-orange-500/25"
                whileHover={{ rotateY: 15, rotateX: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <Image 
                    src="/images/logo Bolamu.png" 
                    alt="Logo ONG BOLAMU" 
                    width={32} 
                    height={32}
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
              </motion.div>
              
              <div className="flex flex-col">
                <motion.h1 
                  className="text-2xl font-black text-[#ff6219]"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  BOLAMU
                </motion.h1>
                <motion.p 
                  className="text-xs text-gray-600 font-medium tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Entraide • Développement • Réussite
                </motion.p>
              </div>
            </motion.div>

            {/* Navigation desktop avec effets futuristes */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    className="relative group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link href={item.href}>
                      <motion.div 
                        className="relative px-4 py-3 rounded-2xl flex items-center space-x-2 group cursor-pointer overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Fond glassmorphism au hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-emerald-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-emerald-500/10 rounded-2xl backdrop-blur-sm border border-white/0 group-hover:border-white/20 transition-all duration-300"
                        />
                        
                        {/* Particules animées */}
                        <motion.div
                          className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                          animate={{
                            x: [0, 20, 0],
                            y: [0, -10, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                          style={{ top: '20%', left: '10%' }}
                        />
                        <motion.div
                          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                          animate={{
                            x: [0, -15, 0],
                            y: [0, -15, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                          style={{ top: '70%', right: '20%' }}
                        />
                        
                        <Icon className="w-5 h-5 text-gray-700 group-hover:text-purple-600 transition-colors relative z-10" />
                        <span className="text-gray-700 group-hover:text-purple-600 font-medium relative z-10 transition-colors">
                          {item.name}
                        </span>
                        {item.dropdown && (
                          <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-purple-600 transition-all duration-300 group-hover:rotate-180 relative z-10" />
                        )}
                      </motion.div>
                    </Link>

                    {/* Dropdown amélioré */}
                    <AnimatePresence>
                      {activeDropdown === item.name && item.dropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden z-50"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-emerald-500/5" />
                          {item.dropdown.map((subItem, subIndex) => {
                            const SubIcon = subItem.icon;
                            return (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.1 }}
                              >
                                <Link href={subItem.href}>
                                  <motion.div 
                                    className="px-6 py-4 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10 transition-all duration-300 flex items-center space-x-3 group cursor-pointer border-b border-gray-100/50 last:border-b-0"
                                    whileHover={{ x: 5 }}
                                  >
                                    <div className="w-8 h-8 rounded-xl bg-gray-100 group-hover:bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                      <SubIcon className="w-4 h-4 text-gray-600 group-hover:text-[#ff6219]" />
                                    </div>
                                    <span className="text-gray-700 group-hover:text-purple-600 font-medium transition-colors">
                                      {subItem.name}
                                    </span>
                                  </motion.div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bouton Don avec effet néon */}
            <div className="flex items-center space-x-4">
              <Link href="/don">
                <motion.button 
                  className="relative bg-[#ff6219] text-white px-8 py-3 rounded-2xl font-bold overflow-hidden group shadow-2xl hover:shadow-orange-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Effet de brillance qui traverse */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Particules flottantes */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${30 + i * 8}%`,
                      }}
                      animate={{
                        y: [-5, -15, -5],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                  
                  <span className="relative z-10 flex items-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span>Faire un don</span>
                  </span>
                </motion.button>
              </Link>

              {/* Menu mobile avec design futuriste */}
              <motion.button
                className="lg:hidden p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-gray-700" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-700" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Menu mobile glassmorphism */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={item.href}>
                        <motion.div 
                          className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10 transition-all duration-300 group"
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-gray-600 group-hover:text-[#ff6219]" />
                          </div>
                          <div>
                            <div className="text-gray-900 font-semibold group-hover:text-purple-600 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.description}
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Bouton Don mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="pt-4 border-t border-gray-200/50"
                >
                  <Link href="/don">
                    <motion.button 
                      className="w-full bg-[#ff6219] text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-xl"
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Sparkles className="w-5 h-5" />
                      <span>Faire un don maintenant</span>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
} 