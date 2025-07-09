'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Heart, Home, Users, Zap, UserPlus, Shield, Newspaper, Phone, Award, Target, Eye, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getHeaderBackground, preloadCriticalImages, headerBackgrounds } from '@/utils/headerBackgrounds';

interface HeaderWithHeroProps {
  title?: string;
  subtitle?: string;
  showHero?: boolean;
}

export default function HeaderWithHero({ title, subtitle, showHero = true }: HeaderWithHeroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Images pour le slide (page d'accueil uniquement)
  const slideImages = [
    'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
  ];
  
  // Obtenir l'arrière-plan pour la page actuelle
  const backgroundConfig = getHeaderBackground(pathname);
  const isHomePage = pathname === '/';

  // Effet slide pour la page d'accueil
  useEffect(() => {
    if (isHomePage) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideImages.length);
      }, 5000); // Change toutes les 5 secondes
      
      return () => clearInterval(interval);
    }
  }, [isHomePage, slideImages.length]);



  // Précharger les images critiques
  useEffect(() => {
    preloadCriticalImages();
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
    // { 
    //   href: '/actions', 
    //   label: 'Nos actions',
    //   icon: Zap,
    //   dropdown: [
    //     { href: '/actions#projets', label: 'Tous les projets', icon: Eye },
    //     { href: '/actions#projets?filter=en_cours', label: 'Projets en cours', icon: Calendar },
    //     { href: '/actions#projets?filter=termine', label: 'Projets terminés', icon: Award },
    //     { href: '/actions#statistiques', label: 'Notre impact', icon: Target }
    //   ]
    // },
    { 
      href: '/engagement', 
      label: 'S\'engager',
      icon: UserPlus,
      dropdown: [
        { href: '/adhesion#formulaire', label: 'Devenir membre', icon: UserPlus },
        // { href: '/benevolat', label: 'Bénévolat', icon: Heart },
        { href: '/don', label: 'Faire un don', icon: Heart },
        // { href: '/partenaires', label: 'Partenariats', icon: Users }
      ]
    },
    { href: '/transparence', label: 'Transparence', icon: Shield },
    { href: '/actualites', label: 'Actualités', icon: Newspaper },
    { href: '/apropos#contact', label: 'Contact', icon: Phone },
  ];

  const languages = [
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
  ];

  // Fonction pour obtenir le titre par défaut selon la page
  const getDefaultTitle = () => {
    const titleMap: Record<string, string> = {
      '/': 'ONG BOLAMU',
      '/apropos': 'À Propos de Nous',
      // '/actions': 'Nos Actions',
      '/equipe': 'Notre Équipe',
      '/adhesion': 'Devenir Membre',
      '/transparence': 'Transparence',
      '/actualites': 'Actualités',
      '/apropos#contact': 'Contactez-Nous',
      '/impact': 'Notre Impact',
      '/don': 'Faire un Don'
      // '/benevolat': 'Bénévolat',
      // '/partenaires': 'Partenariats'
    };
    return titleMap[pathname] || 'ONG BOLAMU';
  };

  const getDefaultSubtitle = () => {
    const subtitleMap: Record<string, string> = {
      '/': 'Entraide • Développement • Réussite',
      '/apropos': 'Découvrez notre histoire, notre mission et nos valeurs',
      // '/actions': 'Ensemble, créons un impact positif durable',
      '/equipe': 'Rencontrez les visages derrière nos actions',
      '/adhesion': 'Rejoignez notre mouvement pour le changement',
      '/transparence': 'Gouvernance ouverte et responsabilité partagée',
      '/actualites': 'Suivez nos dernières nouvelles et réalisations',
      '/apropos#contact': 'Restons connectés pour agir ensemble',
      '/impact': 'Mesurez l\'effet de nos actions sur le terrain',
      '/don': 'Soutenez nos projets et transformez des vies'
      // '/benevolat': 'Engagez-vous comme bénévole avec nous',
      // '/partenaires': 'Construisons ensemble un avenir meilleur'
    };
    return subtitleMap[pathname] || 'Entraide • Développement • Réussite';
  };

  return (
    <>
      {/* Navigation Header */}
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
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4 group">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-[#0369a1] via-[#0284c7] to-[#15803d] p-0.5 shadow-lg">
                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center relative overflow-hidden">
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
                >
                  ONG BOLAMU
                </motion.h1>
                <motion.p className="text-sm text-gray-600 font-medium tracking-wide">
                  Entraide • Développement • Réussite
                </motion.p>
              </div>
            </Link>
            
            {/* Navigation desktop */}
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
                    
                    <div className="absolute top-full left-0 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {item.label}
                      <div className="absolute bottom-full left-2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-gray-900"></div>
                    </div>
                  </Link>
                  
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
                      className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:text-[#0369a1] hover:bg-blue-50/50 transition-colors duration-200"
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <Link 
                href="/don"
                className="hidden md:flex items-center space-x-2 bg-[#0369a1] to-[#0284c7] text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-[#1e40af] transition-all duration-300 transform hover:scale-105"
              >
                <Heart className="w-4 h-4" />
                <span>Faire un don</span>
              </Link>
              
              <button
                className="xl:hidden p-2 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Menu mobile */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="xl:hidden border-t border-gray-100/50 py-4 space-y-2"
              >
                {menuItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-[#0369a1] hover:bg-blue-50/50 rounded-lg transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0369a1]/10 to-[#15803d]/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Section Hero avec image de fond */}
      {showHero && (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Images de fond avec slide pour la page d'accueil */}
          {isHomePage ? (
            <div className="absolute inset-0">
              {slideImages.map((imageUrl, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundPosition: 'center center'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentSlide ? 1 : 0,
                    scale: index === currentSlide ? 1.05 : 1.1
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              ))}
            </div>
          ) : (
            /* Image de fond statique avec blur pour les autres pages */
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm transform scale-105"
              style={{
                backgroundImage: `url(${backgroundConfig.url})`,
                backgroundPosition: backgroundConfig.position
              }}
            />
          )}
          
          {/* Overlay avec gradient coloré */}
          <div className={`absolute inset-0 ${backgroundConfig.overlay}`} />
          
          {/* Particules flottantes */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          {/* Contenu principal */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {title || getDefaultTitle()}
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {subtitle || getDefaultSubtitle()}
            </motion.p>
            
            {pathname === '/' && (
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {/* <Link
                  href="/actions"
                  className="px-8 py-4 bg-white text-[#ff6219] font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Découvrir nos actions
                </Link> */}
                <Link
                  href="/apropos"
                  className="px-8 py-4 bg-white text-[#ff6219] font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Découvrir notre histoire
                </Link>
                <Link
                  href="/adhesion"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#ff6219] transition-all duration-300 transform hover:scale-105"
                >
                  Devenir membre
                </Link>
              </motion.div>
            )}
          </div>

          {/* Indicateurs de slide pour la page d'accueil */}
          {isHomePage && (
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  title={`Aller à la slide ${index + 1}`}
                  aria-label={`Aller à la slide ${index + 1}`}
                />
              ))}
            </div>
          )}
          
          {/* Flèche de scroll animée */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-white/70" />
          </motion.div>
        </section>
      )}
    </>
  );
} 