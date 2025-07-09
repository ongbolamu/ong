'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Shield, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <HeaderWithHero 
        title="Mentions Légales"
        subtitle="Informations légales et réglementaires de l'ONG BOLAMU"
      />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* En-tête avec icône */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mentions Légales</h2>
            <p className="text-lg text-gray-600">
              Conformément à la réglementation en vigueur en République du Congo
            </p>
          </motion.div>

          {/* Contenu des mentions légales */}
          <div className="space-y-12">
            
            {/* Identification de l'organisation */}
            <motion.section
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-[#ff6219] mr-3" />
                Identification de l'Organisation
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Dénomination sociale</h4>
                  <p className="text-gray-700">ONG BOLAMU</p>
                  <p className="text-sm text-gray-600">Organisation Non Gouvernementale</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Forme juridique</h4>
                  <p className="text-gray-700">Association sans but lucratif</p>
                  <p className="text-sm text-gray-600">Régie par la loi n°2001-20 du Congo</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Numéro d'agrément</h4>
                  <p className="text-gray-700">AGR/MIN/INT/2023/001</p>
                  <p className="text-sm text-gray-600">Ministère de l'Intérieur</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Date de création</h4>
                  <p className="text-gray-700">15 mars 2016</p>
                  <p className="text-sm text-gray-600">JO n°12 du 20 mars 2016</p>
                </div>
              </div>
            </motion.section>

            {/* Siège social et contacts */}
            <motion.section
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-[#6ad4fe] mr-3" />
                Siège Social et Contacts
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#ff6219] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Adresse du siège social</h4>
                    <p className="text-gray-700">25 rue Niari, Quartier Talangaï</p>
                    <p className="text-gray-700">BP 1234, Brazzaville</p>
                    <p className="text-gray-700">République du Congo</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#6ad4fe]" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Téléphone</h4>
                    <p className="text-gray-700">+242 06 123 45 67</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#ff6219]" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-700">contact@ongbolamu.org</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Responsables légaux */}
            <motion.section
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Responsables Légaux</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Représentant légal</h4>
                  <p className="text-gray-700">NGUEWOA Feralin Arcanchel</p>
                  <p className="text-sm text-gray-600">Président de l'ONG BOLAMU</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Directeur de publication</h4>
                  <p className="text-gray-700">BANZOUZI KOUKABANA Rych Belon</p>
                  <p className="text-sm text-gray-600">Secrétaire Général</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Responsable informatique</h4>
                  <p className="text-gray-700">PEMBELE-TIBA Exaucé Gloire</p>
                  <p className="text-sm text-gray-600">Trésorier Général - Informaticien</p>
                </div>
              </div>
            </motion.section>

            {/* Hébergement du site */}
            <motion.section
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Hébergement du Site Web</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hébergeur</h4>
                  <p className="text-gray-700">Vercel Inc.</p>
                  <p className="text-sm text-gray-600">340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Nom de domaine</h4>
                  <p className="text-gray-700">ongbolamu.org</p>
                </div>
              </div>
            </motion.section>

            {/* Propriété intellectuelle */}
            <motion.section
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Propriété Intellectuelle</h3>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 mb-4">
                  L'ensemble de ce site web, incluant mais non limité aux textes, images, graphiques, 
                  logos, icônes, sons, logiciels, et leur compilation, constitue une œuvre protégée 
                  par les lois congolaises et internationales relatives à la propriété intellectuelle.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Toute reproduction, représentation, modification, publication, adaptation de tout 
                  ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, 
                  est interdite, sauf autorisation écrite préalable de l'ONG BOLAMU.
                </p>
                
                <p className="text-gray-700">
                  Les marques et logos présents sur ce site sont déposés par l'ONG BOLAMU. 
                  Toute reproduction ou représentation non autorisée de ces marques constitue 
                  une contrefaçon passible de sanctions pénales.
                </p>
              </div>
            </motion.section>

            {/* Limitation de responsabilité */}
            <motion.section
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Limitation de Responsabilité</h3>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 mb-4">
                  L'ONG BOLAMU s'efforce d'assurer au mieux l'exactitude et la mise à jour des 
                  informations diffusées sur ce site, dont elle se réserve le droit de corriger 
                  le contenu à tout moment et sans préavis.
                </p>
                
                <p className="text-gray-700 mb-4">
                  L'ONG BOLAMU ne pourra être tenue responsable des dommages directs et indirects 
                  causés au matériel de l'utilisateur lors de l'accès au site, et résultant soit 
                  de l'utilisation d'un matériel ne répondant pas aux spécifications, soit de 
                  l'apparition d'un bug ou d'une incompatibilité.
                </p>
                
                <p className="text-gray-700">
                  L'ONG BOLAMU ne pourra également être tenue responsable des dommages indirects 
                  consécutifs à l'utilisation du site.
                </p>
              </div>
            </motion.section>

            {/* Date de mise à jour */}
            <motion.section
              className="bg-gradient-to-br from-[#ff6219]/5 to-[#6ad4fe]/5 rounded-2xl p-8 border border-[#ff6219]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-[#ff6219]" />
                <h3 className="text-xl font-bold text-gray-900">Mise à Jour</h3>
              </div>
              
              <p className="text-gray-700">
                Dernière mise à jour des mentions légales : <strong>15 janvier 2025</strong>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Ces mentions légales peuvent être modifiées à tout moment. 
                Il est recommandé de les consulter régulièrement.
              </p>
            </motion.section>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 