'use client';

import { motion } from 'framer-motion';
import HeaderQuantum from '@/components/HeaderQuantum';
import { Atom, Zap, Shield, Monitor, Smartphone, Palette, Code, Sparkles } from 'lucide-react';

export default function DemoHeaderQuantum() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Header Quantique Révolutionnaire */}
      <HeaderQuantum />
      
      {/* Fond étoilé */}
      <div className="fixed inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      {/* Hero Section quantique */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block mb-8"
              animate={{ rotateY: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Atom className="w-20 h-20 text-purple-400 mx-auto" />
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              QUANTUM HEADER
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              &gt; EXPERIENCE.NEXT_GENERATION.UI_TECHNOLOGY <br/>
              &gt; POWERED.BY.QUANTUM_ALGORITHMS.AND.ADVANCED_ANIMATIONS
            </motion.p>

            {/* Statistiques quantiques */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: "QUANTUM.PARTICLES", value: "∞", unit: "ACTIVE" },
                { label: "ANIMATION.FPS", value: "120", unit: "FRAMES" },
                { label: "ENERGY.LEVEL", value: "9000", unit: "WATTS" },
                { label: "DIMENSION.ACCESS", value: "4D", unit: "SPACE" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
                >
                  <motion.div 
                    className="text-3xl font-bold text-purple-400 mb-2 font-mono"
                    animate={{ textShadow: ['0 0 10px #8b5cf6', '0 0 20px #8b5cf6', '0 0 10px #8b5cf6'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/60 text-xs font-mono">{stat.label}</div>
                  <div className="text-emerald-400 text-xs font-mono">{stat.unit}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fonctionnalités quantiques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Atom,
                title: "QUANTUM.LOGO",
                description: "Logo 3D avec anneaux rotatifs et effets holographiques",
                color: "#8b5cf6",
                features: ["ROTATION.3D", "HOLOGRAM.EFFECT", "ENERGY.RINGS"]
              },
              {
                icon: Zap,
                title: "PARTICLE.SYSTEM",
                description: "Système de particules quantiques avec physique avancée",
                color: "#3b82f6",
                features: ["QUANTUM.PHYSICS", "REAL.TIME", "INTERACTIVE"]
              },
              {
                icon: Shield,
                title: "QUANTUM.SECURITY",
                description: "Interface sécurisée avec cryptage visuel",
                color: "#10b981",
                features: ["ENCRYPTION.MAX", "SECURE.PROTOCOL", "QUANTUM.KEY"]
              },
              {
                icon: Monitor,
                title: "MATRIX.GRID",
                description: "Grille quantique animée en arrière-plan",
                color: "#f59e0b",
                features: ["MATRIX.STYLE", "GRID.DYNAMIC", "CODE.RAIN"]
              },
              {
                icon: Smartphone,
                title: "MOBILE.QUANTUM",
                description: "Interface mobile avec design futuriste",
                color: "#ef4444",
                features: ["RESPONSIVE.4D", "TOUCH.QUANTUM", "MOBILE.FIRST"]
              },
              {
                icon: Code,
                title: "ADVANCED.ANIMATIONS",
                description: "Animations GPU-accelerated avec Framer Motion",
                color: "#8b5cf6",
                features: ["GPU.POWERED", "60FPS.SMOOTH", "3D.TRANSFORMS"]
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.3 * index, duration: 0.8 }}
                className="group relative"
              >
                <motion.div 
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden group-hover:bg-white/10 transition-all duration-500"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  style={{
                    boxShadow: `0 0 30px ${feature.color}20`
                  }}
                >
                  {/* Effet de scan */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100"
                    style={{ background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)` }}
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 mb-6 mx-auto group-hover:scale-110 transition-transform"
                    style={{
                      boxShadow: `0 0 20px ${feature.color}40`
                    }}
                    whileHover={{ rotateY: 15 }}
                  >
                    <feature.icon 
                      className="w-full h-full text-white"
                      style={{ filter: `drop-shadow(0 0 8px ${feature.color})` }}
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors font-mono text-center">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors mb-4 text-center font-mono text-sm">
                    {feature.description}
                  </p>
                  
                  {/* Features list */}
                  <div className="space-y-2">
                    {feature.features.map((feat, featIndex) => (
                      <motion.div
                        key={feat}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + featIndex * 0.1 }}
                        className="flex items-center space-x-2 text-xs font-mono"
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: feature.color }}
                        />
                        <span className="text-white/60">{feat}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Section d'analyse technique */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-emerald-900/30 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
          >
            {/* Circuit pattern background */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" className="absolute inset-0">
                <defs>
                  <pattern id="circuit" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M30 0 L30 30 L60 30" fill="none" stroke="#8b5cf6" strokeWidth="1"/>
                    <circle cx="30" cy="30" r="3" fill="#8b5cf6"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit)" />
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-8 font-mono"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(139, 92, 246, 0.5)',
                    '0 0 40px rgba(139, 92, 246, 0.8)',
                    '0 0 20px rgba(139, 92, 246, 0.5)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                &gt; TECHNICAL.ANALYSIS
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[
                  { label: "COMPONENTS", value: "47", description: "React components with quantum effects" },
                  { label: "ANIMATIONS", value: "∞", description: "Infinite loop animations system" },
                  { label: "PERFORMANCE", value: "AAA+", description: "Optimized for 120fps rendering" }
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 + index * 0.2 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                  >
                    <motion.div 
                      className="text-4xl font-bold text-emerald-400 mb-2 font-mono"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-white font-mono text-sm mb-2">{metric.label}</div>
                    <div className="text-white/60 text-xs">{metric.description}</div>
                  </motion.div>
                ))}
              </div>

              {/* Code snippet */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-left max-w-2xl mx-auto"
              >
                <div className="text-emerald-400 font-mono text-sm mb-4">&gt; IMPLEMENTATION.CODE</div>
                <div className="font-mono text-xs text-white/80 space-y-1">
                  <div><span className="text-purple-400">import</span> <span className="text-blue-400">HeaderQuantum</span> <span className="text-purple-400">from</span> <span className="text-emerald-400">'@/components/HeaderQuantum'</span>;</div>
                  <div></div>
                  <div><span className="text-purple-400">export default function</span> <span className="text-blue-400">App</span>() {'{'};</div>
                  <div>  <span className="text-purple-400">return</span> (</div>
                  <div>    &lt;<span className="text-blue-400">HeaderQuantum</span> /&gt;</div>
                  <div>  );</div>
                  <div>{'}'}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="text-center mt-20"
          >
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl font-mono"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6" />
                <span>&gt; ACTIVATE.QUANTUM.MODE</span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 