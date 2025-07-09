'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Sparkles, Eye, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';

export default function DesignsShowcase() {
  const designs = [
    {
      title: 'Design Classique',
      description: 'Version originale avec animations fluides et couleurs ONG',
      image: '/api/placeholder/400/300', // Placeholder pour l'image
      href: '/',
      color: 'from-orange-400 to-red-500',
      features: ['Animations Framer Motion', 'Couleurs ONG officielles', 'Design responsive', 'Navigation intuitive']
    },
    {
      title: 'Design Ultra-Moderne',
      description: 'Version futuriste avec effets 3D et particules',
      image: '/api/placeholder/400/300',
      href: '/glassmorphism',
      color: 'from-purple-400 to-pink-500',
      features: ['Effets 3D avancés', 'Curseur personnalisé', 'Particules animées', 'Hologrammes']
    },
    {
      title: 'Design Glassmorphism',
      description: 'Effet de verre moderne avec transparence et flou',
      image: '/api/placeholder/400/300',
      href: '/glassmorphism',
      color: 'from-cyan-400 to-blue-500',
      features: ['Effet de verre', 'Backdrop blur', 'Transparence', 'Bulles flottantes']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <HeaderWithHero 
        title="Designs UI Modernes"
        subtitle="Explorez nos différents designs d'interface"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Palette className="w-12 h-12 text-purple-400" />
              <h1 className="text-5xl md:text-7xl font-black text-white">
                DESIGNS <span className="text-purple-400">UI</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Découvrez nos différentes versions de design modernes pour l'ONG BOLAMU. 
              Chaque design offre une expérience unique avec des animations et effets innovants.
            </p>
            
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(147, 51, 234, 0.3)',
                  '0 0 40px rgba(147, 51, 234, 0.5)',
                  '0 0 20px rgba(147, 51, 234, 0.3)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5" />
              <span>3 designs uniques disponibles</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Designs Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {designs.map((design, index) => (
              <motion.div
                key={design.title}
                className="group relative"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image Preview */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <motion.div
                      className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${design.color} flex items-center justify-center`}
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                    >
                      <Eye className="w-16 h-16 text-white" />
                    </motion.div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{design.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{design.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      {design.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-2 text-sm text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${design.color}`} />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Link href={design.href}>
                      <motion.button
                        className={`w-full bg-gradient-to-r ${design.color} text-white py-4 rounded-2xl font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow flex items-center justify-center space-x-2`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Voir le design</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>
                  
                  {/* Effet de brillance */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    style={{ transform: 'skewX(-20deg)' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à découvrir l'innovation ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Chaque design raconte l'histoire de l'ONG BOLAMU d'une manière unique. 
              Explorez et choisissez celui qui vous inspire le plus.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button
                  className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Design Classique
                </motion.button>
              </Link>
              <Link href="/glassmorphism">
                <motion.button
                  className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ultra-Moderne
                </motion.button>
              </Link>
              <Link href="/glassmorphism">
                <motion.button
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Glassmorphism
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 