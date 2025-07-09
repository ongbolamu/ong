'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Heart, Users, Globe, Award, ArrowRight, Star, Sparkles, ChevronDown, Zap, Target, Eye, Rocket, Shield, Calendar } from 'lucide-react';
import Link from 'next/link';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';

// Background glassmorphism avec bulles flottantes
function GlassmorphismBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient de base */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500" />
      
      {/* Bulles flottantes glassmorphism */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full backdrop-blur-xl bg-white/10 border border-white/20"
          style={{
            width: `${100 + Math.random() * 200}px`,
            height: `${100 + Math.random() * 200}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
    </div>
  );
}

// Carte glassmorphism
function GlassCard({ children, className = "", delay = 0 }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Effet de brillance interne */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 rounded-3xl" />
        
        {/* Contenu */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Particules internes au hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}
        
        {/* Bordure animée */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent"
          animate={isHovered ? {
            borderImage: [
              'linear-gradient(45deg, rgba(255,255,255,0.3), transparent, rgba(255,255,255,0.3)) 1',
              'linear-gradient(135deg, rgba(255,255,255,0.3), transparent, rgba(255,255,255,0.3)) 1',
              'linear-gradient(225deg, rgba(255,255,255,0.3), transparent, rgba(255,255,255,0.3)) 1',
              'linear-gradient(315deg, rgba(255,255,255,0.3), transparent, rgba(255,255,255,0.3)) 1',
            ]
          } : {}}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />
      </div>
    </motion.div>
  );
}

// Emblème glassmorphism
function GlassEmbleme() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative w-56 h-56 mx-auto mb-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Anneaux externes glassmorphism */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute inset-${i * 4} rounded-full backdrop-blur-xl bg-white/5 border border-white/20`}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
        />
      ))}
      
      {/* Sphère centrale glassmorphism */}
      <motion.div 
        className="absolute inset-16 rounded-full backdrop-blur-2xl bg-white/20 border border-white/30 shadow-2xl"
        animate={{
          boxShadow: isHovered ? [
            '0 0 50px rgba(255,255,255,0.3)',
            '0 0 100px rgba(255,98,25,0.3)',
            '0 0 50px rgba(106,212,254,0.3)',
            '0 0 50px rgba(255,255,255,0.3)',
          ] : '0 20px 40px rgba(0,0,0,0.2)',
        }}
        transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
      >
        <div className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden">
          {/* Effet holographique */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ transform: 'skewX(-20deg)' }}
          />
          
          {/* Icône centrale */}
          <motion.div 
            className="relative z-10 w-16 h-16 backdrop-blur-xl bg-white/30 rounded-full flex items-center justify-center border border-white/40"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Users className="w-8 h-8 text-white drop-shadow-lg" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Étoiles orbitales glassmorphism */}
      {[0, 60, 120, 180, 240, 300].map((angle, index) => (
        <motion.div
          key={index}
          className="absolute w-8 h-8 backdrop-blur-xl bg-white/20 rounded-full border border-white/30 flex items-center justify-center"
          style={{
            top: `${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`,
            left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut"
          }}
        >
          <Star className="w-4 h-4 text-yellow-300 fill-current" />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function GlassmorphismHome() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <HeaderWithHero 
        title="Design Glassmorphism"
        subtitle="Interface moderne avec effets de verre"
      />
      
      {/* Hero Section Glassmorphism */}
      <section className="relative min-h-screen flex items-center justify-center">
        <motion.div style={{ y: yBg }}>
          <GlassmorphismBackground />
        </motion.div>
        
        <motion.div 
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
          style={{ scale }}
        >
          <GlassEmbleme />
          
          {/* Titre glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 mb-8 shadow-2xl">
              <motion.h1 
                className="text-6xl md:text-8xl font-black mb-6 text-white"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(255,255,255,0.5)',
                    '0 0 40px rgba(255,98,25,0.3)',
                    '0 0 20px rgba(106,212,254,0.3)',
                    '0 0 20px rgba(255,255,255,0.5)',
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ONG BOLAMU
              </motion.h1>
              
              <motion.div 
                className="text-2xl md:text-4xl font-bold text-white/90 flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {['Entraide', 'Développement', 'Réussite'].map((word, index) => (
                  <motion.span
                    key={word}
                    className="backdrop-blur-xl bg-white/20 px-4 py-2 rounded-2xl border border-white/30"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotateY: [0, 5, 0],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            
            {/* Description glassmorphism */}
            <motion.div
              className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 mb-12 shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Une vision cristalline pour un Congo prospère. L'ONG BOLAMU transforme 
                les communautés avec transparence, innovation et détermination.
              </p>
            </motion.div>
            
            {/* Boutons glassmorphism */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <Link href="/adhesion">
                <motion.button 
                  className="group relative backdrop-blur-2xl bg-white/20 border border-white/30 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 98, 25, 0.3)',
                    borderColor: 'rgba(255, 98, 25, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative flex items-center space-x-2">
                    <Rocket className="w-5 h-5" />
                    <span>Devenir membre</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              
              <Link href="/actions">
                <motion.button 
                  className="group relative backdrop-blur-2xl bg-white/10 border border-white/20 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(106, 212, 254, 0.3)',
                    borderColor: 'rgba(106, 212, 254, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>Découvrir nos actions</span>
                  </span>
                </motion.button>
              </Link>
              
              <Link href="/don">
                <motion.button 
                  className="group relative backdrop-blur-2xl bg-gradient-to-r from-green-400/30 to-emerald-500/30 border border-green-400/50 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(34, 197, 94, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative flex items-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Faire un don</span>
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator glassmorphism */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-full p-3">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </section>

      {/* Section Impact Glassmorphism */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 inline-block shadow-2xl">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
                NOTRE <span className="text-orange-300">IMPACT</span>
              </h2>
              <p className="text-xl text-white/80">Transparence et résultats mesurables</p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '2,500+', label: 'Bénéficiaires', delay: 0 },
              { icon: Globe, number: '15', label: 'Communautés', delay: 0.2 },
              { icon: Award, number: '25', label: 'Projets réalisés', delay: 0.4 },
              { icon: Calendar, number: '8', label: 'Années d\'expérience', delay: 0.6 }
            ].map((stat, index) => (
              <GlassCard key={index} delay={stat.delay}>
                <div className="text-center">
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-6 backdrop-blur-xl bg-white/20 rounded-2xl flex items-center justify-center border border-white/30"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(255, 98, 25, 0.3)',
                      borderColor: 'rgba(255, 98, 25, 0.5)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-4xl font-black text-white mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: stat.delay + 0.3, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-white/80 font-medium">{stat.label}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 