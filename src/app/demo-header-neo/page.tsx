'use client';

import { motion } from 'framer-motion';
import HeaderNeoModern from '@/components/HeaderNeoModern';
import { Sparkles, Zap, Shield, Monitor, Smartphone, Palette } from 'lucide-react';

export default function DemoHeaderNeo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Nouveau Header Ultra-Moderne */}
      <HeaderNeoModern />
      
      {/* Hero Section de démonstration */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Header Neo-Moderne
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Découvrez le nouveau design ultra-moderne avec des effets visuels impressionnants, 
              du glassmorphism et des animations fluides pour une expérience utilisateur exceptionnelle.
            </motion.p>
          </motion.div>

          {/* Fonctionnalités principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Sparkles,
                title: "Effets Holographiques",
                description: "Logo 3D avec effets de rotation et dégradés animés",
                color: "from-purple-500 to-blue-500"
              },
              {
                icon: Zap,
                title: "Animations Fluides",
                description: "Particules flottantes et transitions GPU-accelerated",
                color: "from-blue-500 to-emerald-500"
              },
              {
                icon: Shield,
                title: "Glassmorphism",
                description: "Effet de verre avec backdrop-blur et transparences",
                color: "from-emerald-500 to-purple-500"
              },
              {
                icon: Monitor,
                title: "Responsive Design",
                description: "Interface adaptive pour desktop et mobile",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Smartphone,
                title: "Menu Mobile Futuriste",
                description: "Menu mobile avec design cards et animations",
                color: "from-pink-500 to-orange-500"
              },
              {
                icon: Palette,
                title: "Gradient Dynamique",
                description: "Fond qui suit le curseur avec dégradés radiaux",
                color: "from-orange-500 to-purple-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="group"
              >
                <motion.div 
                  className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 mb-6 group-hover:scale-110 transition-transform`}
                    whileHover={{ rotateY: 15 }}
                  >
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-gray-700" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Section Comparaison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-gradient-to-br from-purple-600 via-blue-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
          >
            {/* Particules de fond */}
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
                    y: [-10, -30, -10],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.5, 0.5]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(255,255,255,0.5)',
                    '0 0 40px rgba(255,255,255,0.8)',
                    '0 0 20px rgba(255,255,255,0.5)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🚀 Header Nouvelle Génération
              </motion.h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Une expérience utilisateur révolutionnaire avec des technologies modernes : 
                Framer Motion, Glassmorphism, et animations 3D pour impressionner vos visiteurs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">60fps</div>
                  <div className="text-sm opacity-80">Animations fluides</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-80">Responsive design</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">⚡</div>
                  <div className="text-sm opacity-80">Performance optimisée</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Instructions d'utilisation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-20 bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🎯 Comment utiliser ce header
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">1. Importation</h4>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono">
                  import HeaderNeoModern from '@/components/HeaderNeoModern';
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">2. Utilisation</h4>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono">
                  &lt;HeaderNeoModern /&gt;
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-800 text-sm">
                <strong>💡 Astuce :</strong> Ce header utilise des effets avancés comme le suivi de souris et le glassmorphism. 
                Assurez-vous que Framer Motion est installé dans votre projet.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 