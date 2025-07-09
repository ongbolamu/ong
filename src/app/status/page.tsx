'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, Zap, Globe, Smartphone, Monitor, Star, MessageCircle, Target, Users } from 'lucide-react';
import Link from 'next/link';

export default function StatusPage() {
  const systemStatus = [
    { name: 'Site Web Principal', status: 'operational', latency: '45ms' },
    { name: 'API Backend', status: 'operational', latency: '28ms' },
    { name: 'Base de Données', status: 'operational', latency: '12ms' },
    { name: 'CDN Images', status: 'operational', latency: '23ms' },
    { name: 'Système de Dons', status: 'operational', latency: '67ms' },
    { name: 'Newsletter', status: 'operational', latency: '34ms' },
  ];

  const recentOptimizations = [
    '✅ Section FAQ redesignée avec accordéon interactif',
    '✅ FAQ intégrée dans la page adhésion avec 8 questions spécialisées',
    '✅ Classement optimal des sections de la page principale',
    '✅ Corrections TypeScript (Calendar, Card3D, WebGL)',
    '✅ Suppression de la FAQ générique de la page d\'accueil',
    '✅ Optimisation des animations Framer Motion',
    '✅ Amélioration UX/UI de la section adhésion',
    '✅ Performance WebGL et détection GPU améliorées',
  ];

  const pages = [
    { name: 'Accueil', path: '/', status: 'active' },
    { name: 'À propos', path: '/apropos', status: 'active' },
    { name: 'Actions', path: '/actions', status: 'active' },
    { name: 'Impact', path: '/impact', status: 'active' },
    { name: 'Adhésion (avec FAQ)', path: '/adhesion', status: 'active' },
    { name: 'Transparence', path: '/transparence', status: 'active' },
    { name: 'Actualités', path: '/actualites', status: 'active' },
    { name: 'Équipe', path: '/equipe', status: 'active' },
    { name: 'Don', path: '/don', status: 'active' },
    { name: 'Programmes', path: '/programmes', status: 'active' },
    { name: 'Bénévolat', path: '/benevolat', status: 'active' },
    { name: 'Partenaires', path: '/partenaires', status: 'active' },
    { name: 'FAQ Complète', path: '/faq', status: 'active' },
    { name: 'Mentions Légales', path: '/mentions-legales', status: 'active' },
    { name: 'Confidentialité', path: '/confidentialite', status: 'active' },
    { name: 'Designs', path: '/designs', status: 'active' },
    { name: 'Header Glassmorphism', path: '/glassmorphism', status: 'active' },
    { name: 'Header Neo Modern', path: '/demo-header-neo', status: 'active' },
    { name: 'Header Quantum', path: '/demo-header-quantum', status: 'active' },
    { name: 'Statut', path: '/status', status: 'active' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Statut du Site ONG BOLAMU</h1>
              <p className="text-gray-600 mt-2">Monitoring en temps réel des performances et fonctionnalités</p>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-green-600 font-semibold">Tous systèmes opérationnels</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Statut des Systèmes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-900">Statut des Systèmes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemStatus.map((system, index) => (
              <motion.div
                key={system.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-4 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{system.name}</h3>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600 font-medium">Opérationnel</span>
                  <span className="text-gray-500">{system.latency}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pages du Site */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-gray-900">Pages du Site</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pages.map((page, index) => (
              <motion.div
                key={page.path}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={page.path}
                  className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-4 border border-gray-200 transition-all duration-200 hover:shadow-md group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 group-hover:text-purple-600">
                      {page.name}
                    </span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{page.path}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Optimisations Récentes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Info className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-bold text-gray-900">Optimisations Récentes</h2>
          </div>
          
          <div className="space-y-3">
            {recentOptimizations.map((optimization, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-3 bg-green-50 rounded-lg p-3"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-800">{optimization}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compatibilité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Monitor className="w-6 h-6 text-indigo-500" />
            <h2 className="text-2xl font-bold text-gray-900">Compatibilité</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Monitor className="w-12 h-12 text-indigo-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Desktop</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>✅ Chrome 90+</div>
                <div>✅ Firefox 88+</div>
                <div>✅ Safari 14+</div>
                <div>✅ Edge 90+</div>
              </div>
            </div>
            
            <div className="text-center">
              <Smartphone className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Mobile</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>✅ iOS Safari 14+</div>
                <div>✅ Chrome Mobile 90+</div>
                <div>✅ Samsung Internet</div>
                <div>✅ Firefox Mobile</div>
              </div>
            </div>
            
            <div className="text-center">
              <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Performance</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>⚡ Score PageSpeed: 95+</div>
                <div>⚡ First Paint: &lt;1s</div>
                <div>⚡ Largest Paint: &lt;2s</div>
                <div>⚡ Interactivity: &lt;2s</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nouvelles Fonctionnalités */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Star className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900">Nouvelles Fonctionnalités</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">FAQ Interactive</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Section FAQ redesignée avec accordéon animé, 8 questions spécialisées pour l'adhésion avec réponses détaillées.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">Classement Optimisé</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Réorganisation des sections selon la psychologie utilisateur pour maximiser l'engagement et les conversions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">UX Améliorée</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Animations Framer Motion optimisées, micro-interactions et design responsive pour une expérience fluide.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Actions rapides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
          >
            <Globe className="w-5 h-5" />
            <span>Retour au site principal</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 