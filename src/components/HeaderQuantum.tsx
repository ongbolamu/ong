'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Sparkles, Zap, Shield, 
  Home, Users, UserPlus, Newspaper, Phone, 
  Award, Target, Heart, Eye, Calendar, Atom
} from 'lucide-react';

export default function HeaderQuantum() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef<HTMLElement>(null);
  
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 150], [1, 0.95]);

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
      description: 'Retour à l\'accueil',
      color: '#8b5cf6' 
    },
    { 
      name: 'À Propos', 
      href: '/apropos', 
      icon: Users,
      description: 'Notre histoire et mission',
      color: '#3b82f6',
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
      color: '#10b981',
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
      description: 'Rencontrez notre équipe',
      color: '#f59e0b' 
    },
    { 
      name: 'Rejoindre', 
      href: '/adhesion', 
      icon: UserPlus,
      description: 'Devenir membre ou bénévole',
      color: '#ef4444'
    },
    { 
      name: 'Actualités', 
      href: '/actualites', 
      icon: Newspaper,
      description: 'Dernières nouvelles',
      color: '#8b5cf6'
    },
    { 
      name: 'Contact', 
              href: '/apropos#contact', 
      icon: Phone,
      description: 'Nous contacter',
      color: '#06b6d4'
    }
  ];

  return (
    <>
      {/* Quantum Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Grille quantique */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="quantum-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="url(#quantum-gradient)" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="quantum-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3">
                  <animate attributeName="stop-color" 
                    values="#8b5cf6;#3b82f6;#10b981;#8b5cf6" 
                    dur="8s" repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1">
                  <animate attributeName="stop-color" 
                    values="#3b82f6;#10b981;#8b5cf6;#3b82f6" 
                    dur="8s" repeatCount="indefinite"/>
                </stop>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#quantum-grid)" />
          </svg>
        </div>

        {/* Particules quantiques */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 2, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: [0.4, 0.0, 0.2, 1]
            }}
          />
        ))}

        {/* Onde d'énergie qui suit la souris */}
        <motion.div
          className="absolute w-96 h-96 pointer-events-none"
          style={{
            background: `radial-gradient(circle, 
              rgba(139, 92, 246, 0.15) 0%, 
              rgba(59, 130, 246, 0.1) 30%, 
              rgba(16, 185, 129, 0.05) 60%, 
              transparent 100%)`,
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            filter: 'blur(1px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      <motion.header
        ref={headerRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ y: headerY, opacity: headerOpacity }}
        transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'bg-black/20 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-purple-500/20' 
            : 'bg-transparent'
        }`}
      >
        {/* Barre d'état quantique */}
        <motion.div 
          className="bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-emerald-900/80 backdrop-blur-xl text-white py-3 px-4 text-sm relative overflow-hidden border-b border-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Effet de scan */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Atom className="w-4 h-4" />
                </motion.div>
                <span className="font-mono text-xs">QUANTUM.SYSTEM.ACTIVE</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="font-mono text-xs">ENCRYPTION.LEVEL.MAX</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <motion.div 
                className="flex items-center space-x-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-xs font-mono">ONLINE.24/7</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Navigation principale quantique */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo quantique */}
            <motion.div 
              className="flex items-center space-x-4 relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="relative w-16 h-16 perspective-1000"
                whileHover={{ rotateY: 20, rotateX: 10 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Anneaux quantiques */}
                <motion.div
                  className="absolute inset-0 border-2 border-purple-500/50 rounded-full"
                  animate={{ rotateX: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-2 border-2 border-blue-500/50 rounded-full"
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 border-2 border-emerald-500/50 rounded-full"
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Logo central */}
                <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                  <Image 
                    src="/images/logo Bolamu.png" 
                    alt="BOLAMU" 
                    width={24} 
                    height={24}
                    className="w-6 h-6 object-contain relative z-10"
                  />
                </div>
              </motion.div>
              
              <div className="flex flex-col">
                <motion.h1 
                  className="text-3xl font-black bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  BOLAMU
                </motion.h1>
                <motion.p 
                  className="text-xs text-white/70 font-mono tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  &gt; QUANTUM.HUMANITARIAN.PROTOCOL
                </motion.p>
              </div>
            </motion.div>

            {/* Navigation avec effets quantiques */}
            <nav className="hidden lg:flex items-center space-x-2">
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
                        className="relative px-6 py-4 rounded-2xl flex items-center space-x-3 group cursor-pointer overflow-hidden border border-white/10 backdrop-blur-xl"
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ 
                          background: `linear-gradient(135deg, ${item.color}20, transparent)`,
                          boxShadow: `0 0 20px ${item.color}30`
                        }}
                      >
                        {/* Effet de pulsation quantique */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100"
                          style={{ 
                            background: `radial-gradient(circle at center, ${item.color}20, transparent)`
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0, 0.3, 0]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        {/* Lignes quantiques */}
                        <motion.div
                          className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100"
                          style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                          animate={{
                            x: ['-100%', '100%']
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        
                        <Icon 
                          className="w-5 h-5 text-white/80 group-hover:text-white transition-colors relative z-10" 
                          style={{ filter: `drop-shadow(0 0 8px ${item.color})` }}
                        />
                        <span className="text-white/80 group-hover:text-white font-semibold relative z-10 transition-colors font-mono text-sm">
                          {item.name.toUpperCase()}
                        </span>
                        {item.dropdown && (
                          <ChevronDown className="w-4 h-4 text-white/60 group-hover:text-white transition-all duration-300 group-hover:rotate-180 relative z-10" />
                        )}
                      </motion.div>
                    </Link>

                    {/* Dropdown quantique */}
                    <AnimatePresence>
                      {activeDropdown === item.name && item.dropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9, rotateX: -10 }}
                          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9, rotateX: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full left-0 mt-4 w-72 bg-black/30 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden z-50"
                          style={{ 
                            boxShadow: `0 25px 50px ${item.color}20`
                          }}
                        >
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
                                    className="px-6 py-4 hover:bg-white/5 transition-all duration-300 flex items-center space-x-4 group cursor-pointer border-b border-white/5 last:border-b-0"
                                    whileHover={{ x: 5, scale: 1.02 }}
                                  >
                                    <div 
                                      className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform"
                                      style={{ 
                                        boxShadow: `0 0 15px ${item.color}30`
                                      }}
                                    >
                                      <SubIcon 
                                        className="w-5 h-5 text-white/70" 
                                        style={{ filter: `drop-shadow(0 0 4px ${item.color})` }}
                                      />
                                    </div>
                                    <span className="text-white/80 group-hover:text-white font-medium transition-colors font-mono text-sm">
                                      {subItem.name.toUpperCase()}
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

            {/* Bouton Don quantique */}
            <div className="flex items-center space-x-4">
              <Link href="/don">
                <motion.button 
                  className="relative bg-[#ff6219] text-white px-8 py-4 rounded-2xl font-bold overflow-hidden group shadow-2xl"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
                  }}
                >
                  {/* Effet holographique */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Particules d'énergie */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${15 + i * 8}%`,
                        top: `${25 + (i % 2) * 15}%`,
                      }}
                      animate={{
                        y: [-8, -20, -8],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.5, 0.5]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                  
                  <span className="relative z-10 flex items-center space-x-2 font-mono text-sm">
                    <Sparkles className="w-5 h-5" />
                    <span>DONATE.NOW</span>
                  </span>
                </motion.button>
              </Link>

              {/* Menu mobile quantique */}
              <motion.button
                className="lg:hidden p-4 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10 shadow-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-white" />
                  ) : (
                    <Menu className="w-6 h-6 text-white" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Menu mobile quantique */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:hidden bg-black/30 backdrop-blur-2xl border-t border-white/10"
            >
              <div className="max-w-7xl mx-auto px-4 py-8 space-y-3">
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
                          className="flex items-center space-x-4 p-4 rounded-2xl border border-white/10 backdrop-blur-xl group"
                          style={{ 
                            background: `linear-gradient(135deg, ${item.color}15, transparent)`
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div 
                            className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform"
                            style={{ 
                              boxShadow: `0 0 20px ${item.color}40`
                            }}
                          >
                            <Icon 
                              className="w-7 h-7 text-white/80" 
                              style={{ filter: `drop-shadow(0 0 6px ${item.color})` }}
                            />
                          </div>
                          <div>
                            <div className="text-white font-bold group-hover:text-white transition-colors font-mono">
                              {item.name.toUpperCase()}
                            </div>
                            <div className="text-sm text-white/60 font-mono">
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
                  transition={{ delay: 0.8 }}
                  className="pt-6 border-t border-white/10"
                >
                  <Link href="/don">
                    <motion.button 
                      className="w-full bg-[#ff6219] text-white py-5 px-6 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-2xl font-mono"
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Sparkles className="w-6 h-6" />
                      <span>QUANTUM.DONATE.NOW</span>
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