'use client';
import React from 'react';
import { motion } from 'framer-motion';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';

export default function TestStickyNavbar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-orange-50">
      <HeaderWithHero 
        title="Test Navbar Sticky"
        subtitle="La navbar reste maintenant fixe pendant le scroll avec la nouvelle palette de couleurs"
        showHero={true}
      />

      {/* Spacer pour compenser la navbar fixe */}
      <div className="h-20"></div>

      {/* Contenu long pour tester le scroll */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-[#0369a1] mb-6">🌊 Nouvelle Palette Océan Tropical</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-[#0369a1] to-[#1e40af] rounded-xl text-white">
                <h3 className="font-bold text-lg mb-2">Bleu Océan</h3>
                <p className="text-sm opacity-90">#0369a1</p>
                <p className="text-xs mt-2">Couleur principale - Confiance et stabilité</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#15803d] to-[#166534] rounded-xl text-white">
                <h3 className="font-bold text-lg mb-2">Vert Tropical</h3>
                <p className="text-sm opacity-90">#15803d</p>
                <p className="text-xs mt-2">Couleur secondaire - Nature et croissance</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#c2410c] to-[#ea580c] rounded-xl text-white">
                <h3 className="font-bold text-lg mb-2">Orange Corail</h3>
                <p className="text-sm opacity-90">#c2410c</p>
                <p className="text-xs mt-2">Couleur accent - Énergie et action</p>
              </div>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-[#15803d] mb-6">📍 Navbar Sticky</h2>
            <p className="text-lg text-gray-700 mb-4">
              La navbar est maintenant sticky et reste visible pendant le scroll :
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#0369a1] rounded-full"></div>
                <span>Position fixe - la navbar reste en haut pendant le scroll</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#15803d] rounded-full"></div>
                <span>Effet glassmorphism élégant avec backdrop-blur</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#c2410c] rounded-full"></div>
                <span>Détection de scroll pour adapter les styles</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#0369a1] rounded-full"></div>
                <span>Nouvelle palette de couleurs Océan Tropical</span>
              </li>
            </ul>
          </motion.div>

          {/* Section 3 - Longue pour le scroll */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-[#c2410c] mb-6">📱 Test de Navigation</h2>
            <div className="space-y-6">
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Section de contenu {i + 1}</h3>
                  <p className="text-gray-600">
                    Ceci est une section de contenu qui montre la navbar statique en action. 
                    La nouvelle palette de couleurs "Océan Tropical" apporte une identité visuelle moderne 
                    et professionnelle au site de l'ONG BOLAMU. La navbar défile maintenant naturellement avec le contenu.
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section finale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-[#0369a1] to-[#15803d] p-8 rounded-2xl shadow-xl text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-6">✅ Navigation Sticky Active !</h2>
            <p className="text-xl mb-4">
              La navbar sticky fonctionne parfaitement avec la nouvelle palette !
            </p>
            <p className="text-lg opacity-90">
              La navbar reste visible pendant le scroll et utilise 
              la nouvelle palette de couleurs Océan Tropical pour une identité moderne.
            </p>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
} 