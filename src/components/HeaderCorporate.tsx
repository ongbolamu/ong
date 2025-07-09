'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronDown, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeaderCorporate() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/apropos', label: 'À propos' },
    { href: '/actions', label: 'Nos actions' },
    { href: '/adhesion', label: 'Devenir membre' },
    { href: '/transparence', label: 'Transparence' },
    { href: '/actualites', label: 'Actualités' },
    { href: '/apropos#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Barre d'informations supérieure */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+242 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@ongbolamu.org</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>25 rue Niari Talangaï, Brazzaville</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Lun-Ven: 8h-17h</span>
              </div>
              <select className="bg-transparent border-none text-white text-sm" title="Sélectionner la langue" aria-label="Sélection de la langue">
                <option value="fr">🇫🇷 FR</option>
                <option value="en">🇬🇧 EN</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <motion.header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg border-b-2 border-[#ff6219]' 
            : 'bg-white shadow-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo corporate */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-[#ff6219] rounded-lg p-1">
                <div className="w-full h-full rounded-lg bg-white flex items-center justify-center">
                  <Image 
                    src="/images/logo Bolamu.png" 
                    alt="Logo ONG BOLAMU" 
                    width={48} 
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  <span className="text-[#ff6219]">ONG</span>{' '}
                  <span className="text-[#6ad4fe]">BOLAMU</span>
                </h1>
                <p className="text-sm text-gray-600 font-medium">
                  Organisation Non Gouvernementale • République du Congo
                </p>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Certifiée ONG
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Depuis 2016
                  </span>
                </div>
              </div>
            </Link>
            
            {/* Navigation corporate */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="px-4 py-2 text-gray-700 hover:text-[#ff6219] font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff6219] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
            
            {/* Actions corporate */}
            <div className="flex items-center space-x-3">
              
              {/* Boutons d'action */}
              <div className="hidden md:flex items-center space-x-3">
                <Link href="/adhesion">
                  <button className="border-2 border-[#ff6219] text-[#ff6219] px-4 py-2 rounded-lg hover:bg-[#ff6219] hover:text-white transition-all duration-300 font-medium text-sm">
                    Adhérer
                  </button>
                </Link>
                
                <Link href="/don">
                  <button className="bg-[#ff6219] text-white px-6 py-2 rounded-lg hover:bg-[#e5551a] hover:shadow-lg transition-all duration-300 font-medium text-sm flex items-center space-x-2">
                    <span>Faire un don</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </Link>
              </div>
              
              {/* Menu mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:border-[#ff6219] hover:text-[#ff6219] transition-all duration-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile corporate */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-gray-50 border-t"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <nav className="space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 px-4 text-gray-700 hover:text-[#ff6219] hover:bg-white rounded-lg transition-all duration-200 font-medium border border-transparent hover:border-gray-200"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <Link href="/adhesion">
                      <button 
                        onClick={() => setIsOpen(false)}
                        className="w-full border-2 border-[#ff6219] text-[#ff6219] py-3 px-4 rounded-lg hover:bg-[#ff6219] hover:text-white transition-all duration-300 font-medium"
                      >
                        Devenir membre
                      </button>
                    </Link>
                    
                    <Link href="/don">
                      <button 
                        onClick={() => setIsOpen(false)}
                        className="w-full bg-[#ff6219] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#e5551a] transition-all duration-300"
                      >
                        <span>Faire un don</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
} 