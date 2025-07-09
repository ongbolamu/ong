'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';

export default function DemoHeaders() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderWithHero 
        title="Démonstration des Headers"
        subtitle="Découvrez les nouveaux designs avec images africaines, effets de slide et blur"
      />

      <main className="pt-20">
        {/* Section d'explication */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nouvelles Fonctionnalités des Headers
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explorez les améliorations apportées aux headers avec des images africaines authentiques, 
                des effets de slide dynamiques et des arrière-plans floutés pour une expérience visuelle immersive.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Images Africaines */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-orange-50 to-cyan-50 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Images Africaines</h3>
                <p className="text-gray-600 mb-6">
                  Toutes les images de fond ont été remplacées par des photos authentiques d'Afrique, 
                  représentant la diversité et la richesse culturelle du continent, particulièrement du Congo.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Communautés africaines unies</li>
                  <li>• Volontaires en action</li>
                  <li>• Paysages et cultures locales</li>
                  <li>• Équipes professionnelles africaines</li>
                </ul>
              </motion.div>

              {/* Effet de Slide */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🎬</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Effet de Slide</h3>
                <p className="text-gray-600 mb-6">
                  La page d'accueil présente maintenant un carrousel d'images qui change automatiquement 
                  toutes les 5 secondes avec des transitions fluides et des indicateurs interactifs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Transition automatique toutes les 5s</li>
                  <li>• Indicateurs cliquables</li>
                  <li>• Animations de scale et opacity</li>
                  <li>• Navigation manuelle disponible</li>
                </ul>
              </motion.div>

              {/* Effet Blur */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Effet Blur</h3>
                <p className="text-gray-600 mb-6">
                  Tous les arrière-plans des headers utilisent maintenant un effet de flou artistique 
                  qui améliore la lisibilité du texte tout en conservant la beauté des images.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Blur subtil avec classe CSS blur-sm</li>
                  <li>• Gradients colorés adaptatifs</li>
                  <li>• Contraste optimisé pour le texte</li>
                  <li>• Performance optimisée</li>
                </ul>
              </motion.div>

              {/* Optimisations */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimisations</h3>
                <p className="text-gray-600 mb-6">
                  Les images sont optimisées avec Unsplash pour des performances maximales, 
                  avec préchargement intelligent des images critiques.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• URLs optimisées 1950px de large</li>
                  <li>• Préchargement des pages critiques</li>
                  <li>• Configuration Next.js adaptée</li>
                  <li>• Support WebP et AVIF</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Navigation vers les pages */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Explorez Tous les Headers
              </h2>
              <p className="text-xl text-gray-600">
                Visitez chaque page pour découvrir les images africaines spécifiques et les effets personnalisés.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { href: '/', title: 'Accueil', desc: 'Carrousel avec 4 images africaines', effect: 'Slide + Blur' },
                { href: '/apropos', title: 'À Propos', desc: 'Femmes africaines en communauté', effect: 'Blur statique' },
                { href: '/actions', title: 'Nos Actions', desc: 'Volontaires africains en action', effect: 'Blur statique' },
                { href: '/equipe', title: 'Notre Équipe', desc: 'Équipe professionnelle africaine', effect: 'Blur statique' },
                { href: '/adhesion', title: 'Devenir Membre', desc: 'Jeunes africains unis', effect: 'Blur statique' },
                { href: '/transparence', title: 'Transparence', desc: 'Bureau africain moderne', effect: 'Blur statique' },
                { href: '/actualites', title: 'Actualités', desc: 'Communication en Afrique', effect: 'Blur statique' },
                { href: '/apropos#contact', title: 'Contact', desc: 'Connexion africaine', effect: 'Blur statique' },
                { href: '/impact', title: 'Notre Impact', desc: 'Communautés africaines aidées', effect: 'Blur statique' },
              ].map((page, index) => (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#ff6219] transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {page.desc}
                    </p>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#ff6219]/10 to-[#6ad4fe]/10 text-[#ff6219] text-xs font-medium rounded-full">
                      {page.effect}
                    </span>
                  </div>
                  <Link 
                    href={page.href}
                    className="inline-flex items-center text-[#ff6219] font-medium hover:text-[#ff8a4a] transition-colors"
                  >
                    Voir la page
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 