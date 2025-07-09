'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from 'lucide-react';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <HeaderWithHero 
        title="Politique de Confidentialité"
        subtitle="Protection et traitement de vos données personnelles"
      />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* En-tête */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Politique de Confidentialité</h2>
            <p className="text-lg text-gray-600">
              Votre vie privée est importante pour nous. Cette politique explique comment nous collectons, 
              utilisons et protégeons vos informations personnelles.
            </p>
          </motion.div>

          <div className="space-y-12">
            
            {/* Données collectées */}
            <motion.section
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="w-6 h-6 text-blue-500 mr-3" />
                Données que nous collectons
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Données d'identification</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Nom et prénom</li>
                    <li>• Adresse e-mail</li>
                    <li>• Numéro de téléphone</li>
                    <li>• Adresse postale</li>
                    <li>• Date de naissance (pour certains programmes)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Données de navigation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Adresse IP</li>
                    <li>• Type de navigateur</li>
                    <li>• Pages visitées</li>
                    <li>• Durée de visite</li>
                    <li>• Cookies et technologies similaires</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Données financières</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Informations de donation (montant, date)</li>
                    <li>• Préférences de paiement</li>
                    <li>• Historique des transactions</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Note :</strong> Nous ne stockons jamais vos données bancaires complètes.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Utilisation des données */}
            <motion.section
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="w-6 h-6 text-green-500 mr-3" />
                Comment nous utilisons vos données
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Communication</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>• Envoi de newsletters</li>
                    <li>• Informations sur nos projets</li>
                    <li>• Invitations aux événements</li>
                    <li>• Remerciements pour dons</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-semibold text-green-900 mb-3">Gestion des services</h4>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Traitement des adhésions</li>
                    <li>• Gestion des bénévoles</li>
                    <li>• Suivi des donations</li>
                    <li>• Support client</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-900 mb-3">Amélioration</h4>
                  <ul className="space-y-2 text-orange-800 text-sm">
                    <li>• Analyse du site web</li>
                    <li>• Optimisation UX</li>
                    <li>• Personnalisation</li>
                    <li>• Recherche et développement</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-900 mb-3">Conformité légale</h4>
                  <ul className="space-y-2 text-purple-800 text-sm">
                    <li>• Obligations comptables</li>
                    <li>• Rapports aux autorités</li>
                    <li>• Transparence financière</li>
                    <li>• Audit externe</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Partage des données */}
            <motion.section
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <UserCheck className="w-6 h-6 text-orange-500 mr-3" />
                Partage et protection des données
              </h3>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="font-semibold text-red-900 mb-3">Principe de non-divulgation</h4>
                  <p className="text-red-800">
                    <strong>L'ONG BOLAMU ne vend, ne loue, ni ne partage vos données personnelles 
                    avec des tiers à des fins commerciales.</strong>
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Partage limité et contrôlé</h4>
                  <p className="text-gray-700 mb-4">
                    Nous pouvons partager certaines données uniquement dans les cas suivants :
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Prestataires de services :</strong> Services de paiement sécurisé, hébergement web</li>
                    <li>• <strong>Partenaires institutionnels :</strong> Avec votre consentement explicite</li>
                    <li>• <strong>Obligations légales :</strong> Réponse aux demandes des autorités compétentes</li>
                    <li>• <strong>Protection des droits :</strong> Défense de nos droits légaux</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Sécurité */}
            <motion.section
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="w-6 h-6 text-indigo-500 mr-3" />
                Sécurité de vos données
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Chiffrement SSL</h4>
                  <p className="text-sm text-gray-600">
                    Toutes les données en transit sont chiffrées avec SSL/TLS
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Stockage sécurisé</h4>
                  <p className="text-sm text-gray-600">
                    Bases de données chiffrées et accès restreint
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Accès contrôlé</h4>
                  <p className="text-sm text-gray-600">
                    Seul le personnel autorisé peut accéder aux données
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Vos droits */}
            <motion.section
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Vos droits sur vos données</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Droits d'accès et de contrôle</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Droit d'accès :</strong> Consulter vos données</li>
                    <li>• <strong>Droit de rectification :</strong> Corriger vos données</li>
                    <li>• <strong>Droit d'effacement :</strong> Supprimer vos données</li>
                    <li>• <strong>Droit de portabilité :</strong> Récupérer vos données</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Droits de limitation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Opposition :</strong> Refuser certains traitements</li>
                    <li>• <strong>Limitation :</strong> Restreindre l'utilisation</li>
                    <li>• <strong>Désabonnement :</strong> Newsletter et communications</li>
                    <li>• <strong>Retrait du consentement :</strong> À tout moment</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-blue-800">
                  <strong>Pour exercer vos droits :</strong> Contactez-nous à 
                  <a href="mailto:privacy@ongbolamu.org" className="underline ml-1">privacy@ongbolamu.org</a>
                </p>
              </div>
            </motion.section>

            {/* Cookies */}
            <motion.section
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cookies et technologies similaires</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Types de cookies utilisés</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Cookies essentiels</h5>
                      <p className="text-sm text-gray-600">
                        Nécessaires au fonctionnement du site (sécurité, session)
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Cookies analytiques</h5>
                      <p className="text-sm text-gray-600">
                        Mesure d'audience et amélioration du site (anonymisés)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-2">Gestion des cookies</h4>
                      <p className="text-yellow-800 text-sm">
                        Vous pouvez paramétrer votre navigateur pour refuser les cookies. 
                        Cependant, certaines fonctionnalités du site pourraient ne plus fonctionner correctement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Contact et mise à jour */}
            <motion.section
              className="bg-gradient-to-br from-[#ff6219]/5 to-[#6ad4fe]/5 rounded-2xl p-8 border border-[#ff6219]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact et mises à jour</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Délégué à la protection des données</h4>
                  <p className="text-gray-700">PEMBELE-TIBA Exaucé Gloire</p>
                  <p className="text-gray-600">Email : privacy@ongbolamu.org</p>
                  <p className="text-gray-600">Téléphone : +242 06 909 84 42</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mise à jour de cette politique</h4>
                  <p className="text-gray-700">
                    Cette politique de confidentialité peut être modifiée pour refléter les changements 
                    dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Dernière mise à jour :</strong> 15 janvier 2025
                  </p>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 