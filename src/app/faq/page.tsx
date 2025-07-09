'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, MessageCircle, ChevronDown, Users, Heart, Shield, Globe, HelpCircle, Phone, Mail, User, Lock } from 'lucide-react';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: 'tous', nom: 'Toutes les questions', icon: HelpCircle, count: 16 },
    { id: 'general', nom: 'Général', icon: Globe, count: 4 },
    { id: 'adhesion', nom: 'Adhésion', icon: User, count: 3 },
    { id: 'don', nom: 'Dons', icon: Heart, count: 3 },
    { id: 'benevolat', nom: 'Bénévolat', icon: Users, count: 3 },
    { id: 'transparence', nom: 'Transparence', icon: Shield, count: 2 },
    { id: 'confidentialite', nom: 'Confidentialité', icon: Lock, count: 1 }
  ];

  const faqs = [
    // Questions générales
    {
      id: 1,
      question: "Qu'est-ce que l'ONG BOLAMU et quelle est sa mission ?",
      reponse: "L'ONG BOLAMU est une organisation non gouvernementale basée à Brazzaville, République du Congo. Notre mission est de promouvoir le développement durable et d'améliorer les conditions de vie des populations congolaises à travers des programmes dans l'éducation, la santé, l'environnement et le développement économique. 'BOLAMU' signifie 'ensemble' en lingala, reflétant notre philosophie de travail collaboratif.",
      categorie: 'general',
      tags: ['mission', 'organisation', 'congo']
    },
    {
      id: 2,
      question: "Dans quels domaines l'ONG BOLAMU intervient-elle ?",
      reponse: "Nous intervenons dans six domaines principaux : 1) Éducation (construction d'écoles, formation d'enseignants), 2) Santé communautaire (formation d'agents, campagnes de prévention), 3) Environnement (reboisement, énergies vertes), 4) Développement économique (microcrédits, formation entrepreneuriale), 5) Infrastructure sociale (puits d'eau, routes rurales), 6) Autonomisation des femmes (formation, accompagnement).",
      categorie: 'general',
      tags: ['domaines', 'programmes', 'secteurs']
    },
    {
      id: 3,
      question: "Où êtes-vous basés et dans quelles régions intervenez-vous ?",
      reponse: "Notre siège social est situé à Brazzaville, dans le quartier Talangaï. Nous intervenons principalement en République du Congo, avec des projets actifs à Brazzaville, Pointe-Noire, Dolisie et dans plusieurs communes rurales. Nous étendons progressivement nos actions vers les zones les plus défavorisées du pays.",
      categorie: 'general',
      tags: ['localisation', 'zones', 'congo']
    },
    {
      id: 4,
      question: "Comment puis-je vérifier la légitimité de votre organisation ?",
      reponse: "L'ONG BOLAMU est officiellement enregistrée avec l'agrément AGR/MIN/INT/2023/001 du Ministère de l'Intérieur. Vous pouvez consulter nos documents officiels (statuts, rapports financiers, certifications) dans notre section 'Transparence'. Nous sommes également certifiés ISO 9001 et possédons le label 'Don en Confiance'.",
      categorie: 'general',
      tags: ['légitimité', 'certification', 'documents']
    },

    // Questions sur l'adhésion
    {
      id: 5,
      question: "Comment devenir membre de l'ONG BOLAMU ?",
      reponse: "Pour devenir membre, vous devez : 1) Être majeur et partager nos valeurs, 2) Remplir le formulaire d'adhésion en ligne ou physique, 3) Participer à une session d'orientation mensuelle, 4) Vous acquitter de la cotisation annuelle (25,000 FCFA pour Membre Actif, 100,000 FCFA pour Membre Bienfaiteur). Le processus prend généralement 5 jours ouvrables.",
      categorie: 'adhesion',
      tags: ['membre', 'adhésion', 'cotisation']
    },
    {
      id: 6,
      question: "Quels sont les avantages d'être membre ?",
      reponse: "Les membres actifs participent aux décisions, reçoivent notre bulletin mensuel, accèdent aux formations gratuites et peuvent proposer des projets. Les membres bienfaiteurs bénéficient en plus d'un rapport d'impact personnalisé, d'invitations VIP aux événements, d'un accès prioritaire aux missions terrain et d'un suivi dédié de leurs contributions.",
      categorie: 'adhesion',
      tags: ['avantages', 'membre', 'bénéfices']
    },
    {
      id: 7,
      question: "Puis-je suspendre ou annuler mon adhésion ?",
      reponse: "Oui, vous pouvez suspendre votre adhésion temporairement (max 12 mois) ou la résilier définitivement en nous notifiant par email. La suspension maintient vos droits sans obligation de cotisation. Pour une résiliation, nous organisons un entretien de départ pour comprendre vos raisons et améliorer notre organisation.",
      categorie: 'adhesion',
      tags: ['suspension', 'résiliation', 'annulation']
    },

    // Questions sur les dons
    {
      id: 8,
      question: "Comment faire un don à l'ONG BOLAMU ?",
      reponse: "Vous pouvez faire un don via notre formulaire en ligne sécurisé (carte bancaire, mobile money), par virement bancaire, ou directement à notre siège. Nous acceptons les dons ponctuels ou récurrents. Minimum 1,000 FCFA, maximum illimité. Vous recevez automatiquement un reçu fiscal pour déduction d'impôts.",
      categorie: 'don',
      tags: ['don', 'paiement', 'sécurisé']
    },
    {
      id: 9,
      question: "Mes dons sont-ils déductibles des impôts ?",
      reponse: "Oui, l'ONG BOLAMU est habilitée à délivrer des reçus fiscaux. Vos dons sont déductibles de l'impôt sur le revenu selon la réglementation congolaise en vigueur. Le reçu vous est envoyé automatiquement par email sous 48h et une copie physique peut être retirée à notre siège.",
      categorie: 'don',
      tags: ['déduction', 'impôts', 'reçu']
    },
    {
      id: 10,
      question: "Comment puis-je suivre l'utilisation de mes dons ?",
      reponse: "Nous garantissons une transparence totale. Tous les donateurs reçoivent notre rapport trimestriel d'activités. Les donateurs de plus de 50,000 FCFA accèdent à un dashboard en ligne montrant l'utilisation de leurs fonds. Les grands donateurs (100,000+ FCFA) reçoivent un rapport d'impact géolocalisé personnalisé.",
      categorie: 'don',
      tags: ['suivi', 'transparence', 'rapport']
    },

    // Questions sur le bénévolat
    {
      id: 11,
      question: "Comment devenir bénévole chez BOLAMU ?",
      reponse: "Le processus est simple : 1) Remplissez notre formulaire de candidature en ligne, 2) Participez à un entretien d'orientation (physique ou visio), 3) Suivez une formation d'accueil (4h), 4) Choisissez vos domaines et disponibilités. Nous adaptons les missions à vos compétences et contraintes personnelles.",
      categorie: 'benevolat',
      tags: ['bénévole', 'candidature', 'formation']
    },
    {
      id: 12,
      question: "Quels types de missions de bénévolat proposez-vous ?",
      reponse: "Nous offrons des missions variées : terrain (animation, sensibilisation), technique (IT, logistique), communication (rédaction, réseaux sociaux), administrative (comptabilité, coordination), formation (enseignement, ateliers) et mobilisation (collecte de fonds, événements). Missions ponctuelles ou régulières selon vos préférences.",
      categorie: 'benevolat',
      tags: ['missions', 'types', 'variées']
    },
    {
      id: 13,
      question: "Y a-t-il une durée minimum d'engagement pour les bénévoles ?",
      reponse: "Aucune durée minimum n'est imposée. Vous pouvez participer à une mission ponctuelle (1 jour) ou vous engager sur le long terme. Nous apprécions la régularité mais respectons vos contraintes. La moyenne de nos bénévoles est de 4h par mois, mais certains donnent beaucoup plus selon leur disponibilité.",
      categorie: 'benevolat',
      tags: ['durée', 'engagement', 'flexibilité']
    },

    // Questions sur la transparence
    {
      id: 14,
      question: "Vos comptes sont-ils audités et publics ?",
      reponse: "Absolument. Nos comptes sont audités annuellement par un cabinet externe indépendant (Bureau Veritas). Tous nos rapports financiers, audits et bilans sont publiés dans la section 'Transparence' de notre site. Nous publions également un rapport d'impact détaillé chaque trimestre avec utilisation des fonds par projet.",
      categorie: 'transparence',
      tags: ['audit', 'comptes', 'publics']
    },
    {
      id: 15,
      question: "Quel pourcentage des dons va réellement aux bénéficiaires ?",
      reponse: "85% de vos dons vont directement aux programmes et bénéficiaires. 10% couvrent les frais administratifs nécessaires (loyer, salaires minimum, équipements) et 5% sont réservés aux frais de collecte et communication. Cette répartition transparente est détaillée dans chaque rapport financier trimestriel.",
      categorie: 'transparence',
      tags: ['pourcentage', 'répartition', 'bénéficiaires']
    },

    // Question sur la confidentialité
    {
      id: 16,
      question: "Comment protégez-vous mes données personnelles ?",
      reponse: "Nous appliquons une politique stricte de protection des données conforme au RGPD. Vos informations sont chiffrées, stockées de manière sécurisée et jamais vendues à des tiers. Vous pouvez accéder, modifier ou supprimer vos données à tout moment. Notre DPO (Délégué à la Protection des Données) est joignable à privacy@ongbolamu.org pour toute question.",
      categorie: 'confidentialite',
      tags: ['données', 'protection', 'RGPD']
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.reponse.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'tous' || faq.categorie === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <HeaderWithHero 
        title="Questions Fréquentes"
        subtitle="Trouvez rapidement les réponses à toutes vos questions sur l'ONG BOLAMU"
      />
      
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* En-tête avec statistiques */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Centre d'Aide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explorez notre base de connaissances pour obtenir des réponses instantanées 
              à vos questions sur nos programmes, adhésions, dons et plus encore.
            </p>
            
            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ff6219] mb-2">{faqs.length}</div>
                <div className="text-sm text-gray-600">Questions répondues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6ad4fe] mb-2">{categories.length - 1}</div>
                <div className="text-sm text-gray-600">Catégories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
                <div className="text-sm text-gray-600">Réponse moyenne</div>
              </div>
            </div>
          </motion.div>

          {/* Barre de recherche */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher dans les questions fréquentes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Filtres par catégorie */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Filter className="w-5 h-5 text-gray-600 mr-2" />
              <span className="text-gray-600 font-medium">Filtrer par catégorie :</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.nom}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    selectedCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Liste des FAQ */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem(faq.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#ff6219]/10 to-[#6ad4fe]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-[#ff6219]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <div className="flex flex-wrap gap-2">
                          {faq.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="w-5 h-5 text-[#ff6219]" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <div className="pl-16 pt-4 text-gray-700 leading-relaxed">
                            {faq.reponse}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucune question trouvée</h3>
                <p className="text-gray-600">
                  Essayez de modifier votre recherche ou explorez une autre catégorie.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Section contact pour questions non trouvées */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#ff6219]/10 to-[#6ad4fe]/10 rounded-3xl p-8 border border-[#ff6219]/20 text-center">
              <MessageCircle className="w-16 h-16 text-[#ff6219] mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Votre question n'est pas ici ?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Notre équipe est là pour vous aider ! Contactez-nous directement et nous vous répondrons dans les plus brefs délais.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Link href="/apropos#contact">
                  <motion.button
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Nous écrire</span>
                  </motion.button>
                </Link>
                
                <motion.button
                  className="flex items-center justify-center space-x-2 bg-white text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>+242 06 909 84 42</span>
                </motion.button>
              </div>
              
              <div className="mt-6 text-sm text-gray-600">
                <strong>Horaires :</strong> Lundi - Vendredi : 8h00 - 17h00 | Samedi : 9h00 - 13h00
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}