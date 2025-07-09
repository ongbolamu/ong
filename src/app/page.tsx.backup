'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { Heart, Users, Globe, Award, ArrowRight, Star, Shield, Leaf, GraduationCap, Calendar, Sparkles, Target, Eye, ChevronDown, Play, Pause, Clock, User } from 'lucide-react';
import Link from 'next/link';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';
import Image from 'next/image';
import TabStrip from '@/components/TabStrip';
import { useStatistiques } from '@/hooks/useData';

// Composant d'emblème 3D amélioré
function EmblemeONG3D() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative w-40 h-40 mx-auto mb-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Cercles concentriques animés */}
      <motion.div 
        className="absolute inset-0 rounded-full border-4 border-[#0369a1]/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute inset-2 rounded-full border-2 border-[#15803d]/40"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Emblème principal avec effet 3D */}
      <motion.div 
        className="absolute inset-4 rounded-full bg-[#0369a1] p-1 shadow-2xl"
        style={{
          boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(3, 105, 161, 0.5), 0 0 50px rgba(21, 128, 61, 0.3)' 
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
        }}
        animate={{
          rotateY: isHovered ? 15 : 0,
          rotateX: isHovered ? 10 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
          {/* Effet de brillance */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            style={{ transform: 'skewX(-20deg)' }}
          />
          
          <div className="relative w-16 h-16 z-10">
            {/* Figures humaines centrales avec animation 3D */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-12 h-12 bg-[#0369a1] rounded-full flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            
            {/* Étoiles flottantes animées */}
            {[0, 72, 144, 216, 288].map((angle, index) => (
            <motion.div
                key={index}
                className="absolute w-4 h-4"
                style={{
                  top: `${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`,
                  left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              >
                <Star className="w-full h-full text-[#c2410c] fill-current drop-shadow-lg" />
            </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Particules flottantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#c2410c] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
}

// Composant de carte 3D flottante
function Card3D({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -10, 
        rotateX: 5, 
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      style={{
        transformStyle: 'preserve-3d',
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(255, 98, 25, 0.1)' 
          : '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
      }}
    >
      {children}
      
      {/* Effet de brillance au hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none rounded-2xl"
        animate={isHovered ? { x: ['-100%', '100%'] } : {}}
        transition={{ duration: 0.6 }}
        style={{ transform: 'skewX(-20deg)' }}
      />
    </motion.div>
  );
}

// Composant de background animé avec particules
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient animé */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-emerald-50 to-orange-50"
        animate={{
          background: [
            'linear-gradient(135deg, #eff6ff, #ecfdf5, #fff7ed)',
            'linear-gradient(135deg, #ecfdf5, #fff7ed, #eff6ff)',
            'linear-gradient(135deg, #fff7ed, #eff6ff, #ecfdf5)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Formes géométriques flottantes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-[#0369a1]/10 to-[#15803d]/10 blur-xl"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Particules micro */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#0369a1] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -800],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Récupérer les statistiques dynamiques
  const { data: statistiques, loading: statsLoading, error: statsError } = useStatistiques();

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <HeaderWithHero 
        title="ONG BOLAMU"
        subtitle="l'ONG BOLAMU est une organisation non gouvernementale humanitaire, indépendante et à but non lucratif. Elle œuvre pour un monde plus juste, plus solidaire et plus durable, à travers des actions concrètes de terrain."
        showHero={true}
      />
      
      {/* Spacer pour compenser la navbar fixe */}
      <div className="h-24"></div>

      {/* 1. SECTION PRÉSENTATION & MOT DU PRÉSIDENT */}
      <section id="presentation" className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Présentation de l'ONG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-[#0369a1] to-[#15803d] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Qui sommes-nous</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ONG <span className="text-[#0369a1]">BOLAMU</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Une organisation non gouvernementale humanitaire, indépendante et à but non lucratif, 
              œuvrant pour un monde plus juste, plus solidaire et plus durable.
            </p>
          </motion.div>
          
          {/* Texte de présentation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl mb-20"
          >
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-[#0369a1] to-[#15803d] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg p-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/logo Bolamu.png"
                  alt="Logo ONG BOLAMU"
                  width={60}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              <div className="prose prose-xl text-gray-700 max-w-none text-center space-y-6">
                <p className="text-lg leading-relaxed">
                  L'ONG BOLAMU tire son nom du lingala, signifiant <strong className="text-[#0369a1]">"Le bien commun"</strong>. 
                  Cette appellation reflète parfaitement notre philosophie : construire ensemble un avenir meilleur 
                  pour les communautés congolaises et africaines.
                </p>
                <p className="text-lg leading-relaxed">
                  Fondée à Brazzaville par des citoyens engagés, nous développons des solutions innovantes 
                  et durables aux défis du développement, en plaçant l'humain au cœur de nos actions. 
                  Notre approche holistique intègre les dimensions sociale, économique et environnementale 
                  pour un impact réel et mesurable.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mot du Président */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl shadow-xl border border-white/20"
          >
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  animate={{
                    backgroundImage: [
                      'linear-gradient(135deg, #0369a1, #15803d)',
                      'linear-gradient(135deg, #15803d, #c2410c)',
                      'linear-gradient(135deg, #c2410c, #0369a1)',
                      'linear-gradient(135deg, #0369a1, #15803d)'
                    ]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    backgroundSize: '200% 200%'
                  }}
                >
                  💬 Mot du Président
                </motion.h3>
              </motion.div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Photo du président */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0369a1] to-[#15803d] rounded-full p-1">
                      <div className="w-full h-full bg-white rounded-full p-2">
                        <Image
                          src="/images/Arcanchel.jpg"
                          alt="Arcanchel Feralin NGUEWOA - Président ONG BOLAMU"
                          width={200}
                          height={200}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <motion.div
                      className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-[#c2410c] to-[#ff6219] rounded-full flex items-center justify-center shadow-lg"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Message du président */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:col-span-2 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                  <motion.blockquote
                    className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6"
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(3, 105, 161, 0.1)',
                        '0 0 20px rgba(21, 128, 61, 0.1)',
                        '0 0 10px rgba(3, 105, 161, 0.1)'
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    "Nous croyons fermement que c'est par la solidarité, l'entraide et le respect de la dignité humaine 
                  que nous pouvons transformer positivement les communautés et créer un développement durable 
                  pour les générations présentes et futures."
                  </motion.blockquote>
                  
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-[#0369a1] to-[#15803d] rounded-full flex items-center justify-center p-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="/images/logo Bolamu.png"
                        alt="Logo ONG BOLAMU"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <div>
                      <p className="font-bold text-gray-900">Arcanchel Feralin NGUEWOA</p>
                      <p className="text-sm text-gray-600">Président de l'ONG BOLAMU</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SECTION STATISTIQUES & IMPACT */}
      <section className="py-24 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Notre <span className="text-[#0369a1]">Impact</span>
            </h2>
            <p className="text-xl text-gray-600">Des chiffres qui parlent de notre engagement</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsLoading ? (
              // Affichage pendant le chargement
              [0, 1, 2, 3].map((index) => (
                <Card3D key={index} delay={index * 0.2}>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center h-full">
                    <div className="w-20 h-20 bg-gray-200 rounded-2xl mx-auto mb-6 animate-pulse"></div>
                    <div className="h-10 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </Card3D>
              ))
            ) : statsError ? (
              // Affichage en cas d'erreur
              <div className="col-span-full text-center text-red-600">
                Erreur lors du chargement des statistiques
              </div>
            ) : (() => {
              // Fonction pour gérer l'affichage des statistiques
              const stats = statistiques as unknown as any[];
              if (!stats || !Array.isArray(stats) || stats.length === 0) {
                return (
                  <div className="col-span-full text-center text-gray-600">
                    Aucune statistique disponible
                  </div>
                );
              }
              
              return stats.map((stat: any, index: number) => {
                const staticIcons = [Users, Globe, Award, Calendar];
                const staticColors = ['from-blue-600 to-blue-700', 'from-emerald-600 to-emerald-700', 'from-orange-600 to-orange-700', 'from-cyan-600 to-cyan-700'];
                const IconComponent = staticIcons[index] || Users;
                const color = staticColors[index] || 'from-gray-400 to-gray-500';
                
                return (
                  <Card3D key={stat.id || index} delay={index * 0.2}>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center h-full">
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                        whileHover={{ rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-4xl font-bold text-gray-900 mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        {stat.valeur?.toLocaleString('fr-FR')}
                        {stat.nom === 'Bénéficiaires' && '+'}
                      </motion.h3>
                      <p className="text-gray-600 font-medium">{stat.description || stat.nom}</p>
                    </div>
                  </Card3D>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* 3. SECTION NOS VALEURS FONDAMENTALES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              animate={{
                backgroundImage: [
                  'linear-gradient(135deg, #0369a1, #15803d)',
                  'linear-gradient(135deg, #15803d, #c2410c)',
                  'linear-gradient(135deg, #c2410c, #0369a1)',
                  'linear-gradient(135deg, #0369a1, #15803d)'
                ]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200% 200%'
              }}
            >
              💎 Nos Valeurs Fondamentales
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action quotidienne et notre engagement envers les communautés
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-3xl shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-[#0369a1] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <Heart className="w-10 h-10 text-white" />
                </motion.div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Solidarité</h4>
                <p className="text-gray-600 leading-relaxed">Unis dans l'action pour le bien commun, nous construisons ensemble un avenir meilleur</p>
              </motion.div>
              
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-[#15803d] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-10 h-10 text-white" />
                </motion.div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Entraide</h4>
                <p className="text-gray-600 leading-relaxed">Soutien mutuel et collaboration pour créer des liens durables entre les communautés</p>
              </motion.div>
              
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-[#c2410c] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <Shield className="w-10 h-10 text-white" />
                </motion.div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Dignité humaine</h4>
                <p className="text-gray-600 leading-relaxed">Respect absolu de la personne humaine dans toutes nos interventions</p>
              </motion.div>
              
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-[#15803d] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <Leaf className="w-10 h-10 text-white" />
                </motion.div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Développement durable</h4>
                <p className="text-gray-600 leading-relaxed">Avenir responsable et équitable pour les générations présentes et futures</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section with Enhanced Background Slideshow */}
      <section className="relative py-28 overflow-hidden">
        {/* Enhanced Background Slideshow */}
        <div className="absolute inset-0">
          {/* Overlay dynamique avec dégradé animé */}
          <motion.div
            className="absolute inset-0 z-10"
            animate={{
              background: [
                'linear-gradient(135deg, rgba(3, 105, 161, 0.9), rgba(21, 128, 61, 0.8))',
                'linear-gradient(135deg, rgba(21, 128, 61, 0.9), rgba(196, 65, 12, 0.8))',
                'linear-gradient(135deg, rgba(196, 65, 12, 0.9), rgba(3, 105, 161, 0.8))',
                'linear-gradient(135deg, rgba(3, 105, 161, 0.9), rgba(21, 128, 61, 0.8))'
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Slideshow avec effet de zoom et morphing */}
          <motion.div
            initial={{ x: 0, scale: 1 }}
            animate={{ 
              x: [0, -33.33, -66.66, 0],
              scale: [1, 1.1, 1.05, 1]
            }}
            transition={{ 
              duration: 18, 
              repeat: Infinity, 
              ease: [0.4, 0.0, 0.2, 1]
            }}
            className="flex absolute inset-0 w-[300%]"
          >
            {/* Image 1 avec effet de rotation */}
            <motion.div 
              className="w-1/3 h-full bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
                backgroundSize: 'cover'
              }}
              animate={{ rotateZ: [0, 2, -1, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-black/20" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-600/30"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </motion.div>
            
            {/* Image 2 avec effet de pulsation */}
            <motion.div 
              className="w-1/3 h-full bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
                backgroundSize: 'cover'
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-black/20" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-emerald-600/30"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </motion.div>
            
            {/* Image 3 avec logo animé */}
            <motion.div 
              className="w-1/3 h-full bg-cover bg-center relative overflow-hidden flex items-center justify-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
                backgroundSize: 'cover'
              }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-red-500/40 to-pink-600/40"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="relative z-10 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl"
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image 
                  src="/images/logo Bolamu.png" 
                  alt="Logo BOLAMU" 
                  width={80} 
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Particules flottantes */}
          <div className="absolute inset-0 z-5">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -60, -20],
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
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 40px rgba(255,255,255,0.8)',
                  '0 0 20px rgba(255,255,255,0.5)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Rejoignez notre mission
            </motion.h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto bg-gray-800/80 rounded-2xl p-4">
              Votre soutien fait la différence. Ensemble, nous pouvons créer un avenir meilleur 
              pour les communautés dans le besoin à travers nos actions humanitaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/don">
                <motion.button 
                  className="bg-[#0369a1] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-blue-700/25 transition-all duration-300 flex items-center justify-center space-x-2 group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(3, 105, 161, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Faire un don maintenant</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              {/* <Link href="/benevolat">
                <motion.button 
                  className="bg-[#15803d] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-green-700/25 transition-all duration-300 border-2 border-white/20"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(21, 128, 61, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Devenir bénévole
                </motion.button>
              </Link> */}
              <Link href="/adhesion">
                <motion.button 
                  className="bg-[#15803d] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-green-700/25 transition-all duration-300 border-2 border-white/20"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(21, 128, 61, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Devenir membre
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section FAQ déplacée vers /adhesion */}

      {/* Section Contact avec particules animées */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background animé */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#0369a1]/20 to-[#15803d]/20"
            animate={{
              background: [
                'linear-gradient(135deg, rgba(3, 105, 161, 0.2), rgba(21, 128, 61, 0.2))',
                'linear-gradient(135deg, rgba(21, 128, 61, 0.2), rgba(196, 65, 12, 0.2))',
                'linear-gradient(135deg, rgba(196, 65, 12, 0.2), rgba(3, 105, 161, 0.2))'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          {/* Particules flottantes */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -80, -20],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 4
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
                            animate={{
                textShadow: [
                  '0 0 20px rgba(3, 105, 161, 0.5)',
                  '0 0 40px rgba(21, 128, 61, 0.8)',
                  '0 0 20px rgba(3, 105, 161, 0.5)'
                ]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              Contactez-Nous
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Nous sommes à votre écoute pour répondre à vos questions, 
              recevoir vos suggestions ou discuter d'opportunités de collaboration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card3D className="bg-gray-800/90 rounded-2xl p-6 border border-gray-700" delay={0.1}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#0369a1] rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Notre Mission</h3>
                    <p className="text-gray-300">Transformer des vies, construire l'avenir</p>
                  </div>
                </div>
              </Card3D>

              <Card3D className="bg-gray-800/90 rounded-2xl p-6 border border-gray-700" delay={0.2}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#15803d] rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Portée Internationale</h3>
                    <p className="text-gray-300">Actions dans toute l'Afrique subsaharienne</p>
                  </div>
                </div>
              </Card3D>

              <Card3D className="bg-gray-800/90 rounded-2xl p-6 border border-gray-700" delay={0.3}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#c2410c] rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Équipe Dédiée</h3>
                    <p className="text-gray-300">Professionnels passionnés et bénévoles engagés</p>
                  </div>
                </div>
              </Card3D>
            </motion.div>

            {/* Actions et navigation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card3D className="bg-gray-800/90 rounded-3xl p-8 border border-gray-700" delay={0.1}>
                <div className="text-center space-y-6">
                  <motion.div
                    className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0369a1] to-[#15803d] rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Heart className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white">Découvrez Notre Histoire</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Apprenez-en plus sur nos valeurs, notre équipe passionnée 
                    et notre engagement envers les communautés que nous servons.
                  </p>
                  
                                      <Link href="/apropos#histoire">
                      <motion.button
                        className="w-full bg-gradient-to-r from-[#0369a1] to-[#15803d] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 25px 50px rgba(3, 105, 161, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>À Propos de Nous</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </motion.button>
                    </Link>
                </div>
              </Card3D>

              {/* Boutons d'action supplémentaires */}
              <div className="grid grid-cols-2 gap-4">
                <Link href="/apropos#contact">
                  <motion.button
                    className="w-full bg-gray-800/90 text-white px-6 py-3 rounded-xl font-semibold border border-gray-700 hover:bg-gray-700/90 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Nous Contacter
                  </motion.button>
                </Link>
                
                <Link href="/equipe">
                  <motion.button
                    className="w-full bg-gray-800/90 text-white px-6 py-3 rounded-xl font-semibold border border-gray-700 hover:bg-gray-700/90 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Notre Équipe
                  </motion.button>
                </Link>
                </div>
            </motion.div>
          </div>

          {/* Citation inspirante */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Card3D className="bg-gray-800/90 rounded-3xl p-8 border border-gray-700 max-w-4xl mx-auto" delay={0.2}>
              <motion.blockquote
                className="text-2xl md:text-3xl font-light italic text-white mb-6"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(255, 255, 255, 0.3)',
                    '0 0 20px rgba(255, 255, 255, 0.6)',
                    '0 0 10px rgba(255, 255, 255, 0.3)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                "L'humanité ne peut progresser que si nous marchons ensemble, 
                main dans la main, vers un avenir plus juste et plus solidaire."
              </motion.blockquote>
              <div className="flex items-center justify-center space-x-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-[#0369a1] to-[#15803d] rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-left">
                  <p className="text-[#0369a1] font-bold">Équipe BOLAMU</p>
                  <p className="text-gray-300 text-sm">Organisation Non Gouvernementale</p>
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Section Actualités - FUSIONNÉE DEPUIS LA PAGE ACTUALITÉS */}
      <section id="actualites" className="py-24 bg-gradient-to-br from-orange-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête de section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] bg-clip-text text-transparent">
                📰 Nos Actualités
              </h2>
            </motion.div>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos dernières actions, événements et réalisations. 
              Suivez l'impact de notre travail au quotidien.
            </p>
          </motion.div>

          {/* Article en vedette */}
          <motion.div
            className="bg-white rounded-3xl overflow-hidden shadow-2xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full bg-gradient-to-br from-[#ff6219]/10 to-[#6ad4fe]/10">
                <div className="absolute top-4 left-4">
                  <span className="bg-[#ff6219] text-white px-3 py-1 rounded-full text-sm font-bold">
                    À la une
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-24 h-24 text-gray-300" />
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-orange-100 text-[#ff6219] px-3 py-1 rounded-full text-sm font-medium">
                    Projets
                  </span>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>15 janvier 2024</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Inauguration du nouveau centre de formation à Pointe-Noire
                </h3>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Un nouveau centre de formation professionnelle a été inauguré pour répondre aux besoins des jeunes de la région. 
                  Le centre offrira des formations en informatique, couture, mécanique et agriculture moderne.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Grace LOUBAKI</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">5 min</span>
                    </div>
                  </div>

                  <Link href="/actualites">
                    <motion.button
                      className="bg-[#ff6219] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#e55a17] transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Voir toutes les actualités
                      <ArrowRight className="w-4 h-4 inline ml-2" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grille d'articles récents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Partenariat avec l\'UNICEF pour l\'éducation des filles',
                excerpt: 'Un nouveau partenariat stratégique pour améliorer l\'accès à l\'éducation des jeunes filles rurales.',
                category: 'Partenariats',
                author: 'Dr. Marie BOLAMU',
                date: '10 janvier 2024',
                readTime: '3 min',
                tags: ['UNICEF', 'Éducation', 'Filles']
              },
              {
                title: '2,500 personnes bénéficient de nos programmes de santé',
                excerpt: 'Bilan de nos actions dans le domaine de la santé communautaire en 2023.',
                category: 'Impact',
                author: 'Sylvie MBEMBA',
                date: '15 décembre 2023',
                readTime: '6 min',
                tags: ['Santé', 'Impact', 'Communauté']
              },
              {
                title: 'Formation en entrepreneuriat pour 150 jeunes',
                excerpt: 'Un programme intensif de formation en entrepreneuriat vient de se terminer avec succès.',
                category: 'Projets',
                author: 'Paul MAKAYA',
                date: '8 décembre 2023',
                readTime: '4 min',
                tags: ['Entrepreneuriat', 'Jeunesse', 'Formation']
              }
            ].map((article, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 bg-gradient-to-br from-[#ff6219]/10 to-[#6ad4fe]/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-gray-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#ff6219] px-2 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#ff6219] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{article.author}</span>
                    </div>
                    <Link href="/actualites">
                      <motion.button
                        className="text-[#ff6219] hover:text-[#e55a17] transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        Lire plus →
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Call to action vers toutes les actualités */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/actualites">
              <motion.button
                className="bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(255, 98, 25, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Voir toutes nos actualités
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Nos Valeurs Fondamentales - DÉPLACÉE APRÈS ACTUALITÉS */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Nos Valeurs Fondamentales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0369a1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Solidarité</h4>
                <p className="text-gray-600 text-sm">Unis dans l'action pour le bien commun</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#15803d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Entraide</h4>
                <p className="text-gray-600 text-sm">Soutien mutuel et collaboration</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#c2410c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Dignité humaine</h4>
                <p className="text-gray-600 text-sm">Respect de la personne humaine</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#15803d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Développement durable</h4>
                <p className="text-gray-600 text-sm">Avenir responsable et équitable</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 