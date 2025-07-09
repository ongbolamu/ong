'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';

export default function TestNavigation() {
  const navigationLinks = [
    { 
      category: 'Page d\'accueil', 
      links: [
        { text: 'Section À propos', href: '/#apropos', description: 'Section À propos sur la page d\'accueil' }
      ]
    },
    { 
      category: 'Page À propos', 
      links: [
        { text: 'Notre Histoire', href: '/apropos#histoire', description: 'Section Histoire de l\'ONG' },
        { text: 'Mission & Vision', href: '/apropos#mission', description: 'Section Mission et Vision' },
        { text: 'Nos Valeurs', href: '/apropos#valeurs', description: 'Section Valeurs fondamentales' },
        { text: 'Contact', href: '/apropos#contact', description: 'Section Contact avec formulaire' }
      ]
    },
    { 
      category: 'Page Actions', 
      links: [
        { text: 'Statistiques', href: '/actions#statistiques', description: 'Section Statistiques d\'impact' },
        { text: 'Tous les projets', href: '/actions#projets', description: 'Section Liste des projets' }
      ]
    },
    { 
      category: 'Page Adhésion', 
      links: [
        { text: 'Formulaire', href: '/adhesion#formulaire', description: 'Section Formulaire d\'adhésion' }
      ]
    },
    { 
      category: 'Pages complètes', 
      links: [
        { text: 'Équipe', href: '/equipe', description: 'Page complète de l\'équipe' },
        { text: 'Actualités', href: '/actualites', description: 'Page complète des actualités' },
        { text: 'Transparence', href: '/transparence', description: 'Page complète de transparence' },
        { text: 'Don', href: '/don', description: 'Page complète de don' },
        { text: 'Bénévolat', href: '/benevolat', description: 'Page complète de bénévolat' },
        { text: 'Partenaires', href: '/partenaires', description: 'Page complète des partenaires' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-orange-50">
      <HeaderWithHero 
        title="Test Navigation"
        subtitle="Vérification de tous les liens de navigation vers les sections"
        showHero={true}
      />

      <div className="h-20"></div>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0369a1] mb-6">
              🔗 Test de Navigation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testez tous les liens de navigation pour vérifier qu'ils redirigent correctement vers les bonnes sections des pages.
            </p>
          </motion.div>

          <div className="space-y-12">
            {navigationLinks.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#15803d] mb-6 flex items-center">
                  <CheckCircle className="w-8 h-8 mr-3" />
                  {category.category}
                </h3>
                
                <div className="grid gap-4">
                  {category.links.map((link, linkIndex) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                      className="border border-gray-200 rounded-xl p-4 hover:border-[#0369a1] hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{link.text}</h4>
                          <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-800">
                            {link.href}
                          </code>
                        </div>
                        
                        <Link href={link.href}>
                          <motion.button
                            className="ml-4 bg-gradient-to-r from-[#0369a1] to-[#15803d] text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>Tester</span>
                            <ExternalLink className="w-4 h-4" />
                          </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 bg-gradient-to-br from-[#0369a1] to-[#15803d] text-white p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">📝 Instructions de Test</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start space-x-3">
                <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Cliquez sur "Tester" pour chaque lien</span>
              </li>
              <li className="flex items-start space-x-3">
                <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Vérifiez que vous êtes redirigé vers la bonne section</span>
              </li>
              <li className="flex items-start space-x-3">
                <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>La section doit apparaître en haut de la page (effet de scroll)</span>
              </li>
              <li className="flex items-start space-x-3">
                <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>La navbar sticky doit rester visible en haut</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
