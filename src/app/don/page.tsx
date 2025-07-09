'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, CreditCard, Shield, Gift, Users, Target, Check, Star, Lock, ArrowRight, DollarSign } from 'lucide-react';
import Link from 'next/link';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';

export default function DonPage() {
  const [montant, setMontant] = useState('');
  const [montantPersonnalise, setMontantPersonnalise] = useState('');
  const [frequence, setFrequence] = useState('unique');
  const [projet, setProjet] = useState('general');
  const [etape, setEtape] = useState(1);

  const montantsPredefinies = [
    { valeur: '5000', label: '5,000 FCFA', impact: 'Kit scolaire pour 1 enfant' },
    { valeur: '15000', label: '15,000 FCFA', impact: 'Vaccination pour 5 enfants' },
    { valeur: '25000', label: '25,000 FCFA', impact: 'Formation pour 1 jeune' },
    { valeur: '50000', label: '50,000 FCFA', impact: 'Microcrédit pour 1 femme' },
    { valeur: '100000', label: '100,000 FCFA', impact: 'Construction d\'1 puits' },
    { valeur: '250000', label: '250,000 FCFA', impact: 'Équipement d\'1 classe' }
  ];

  const projets = [
    {
      id: 'general',
      nom: 'Fonds général',
      description: 'Soutien à l\'ensemble de nos programmes',
      urgence: false
    },
    {
      id: 'education',
      nom: 'Éducation',
      description: 'Construction d\'écoles et formation d\'enseignants',
      urgence: true
    },
    {
      id: 'sante',
      nom: 'Santé',
      description: 'Campagnes de vaccination et formation d\'agents de santé',
      urgence: false
    },
    {
      id: 'economie',
      nom: 'Développement économique',
      description: 'Microcrédits et formation entrepreneuriale',
      urgence: false
    },
    {
      id: 'urgence',
      nom: 'Aide d\'urgence',
      description: 'Réponse aux crises et catastrophes naturelles',
      urgence: true
    }
  ];

  const avantages = [
    {
      icon: Shield,
      titre: 'Sécurisé',
      description: 'Paiements protégés par cryptage SSL'
    },
    {
      icon: Check,
      titre: 'Transparent',
      description: 'Rapports détaillés sur l\'utilisation des fonds'
    },
    {
      icon: Heart,
      titre: 'Impact direct',
      description: 'Votre don aide directement les communautés'
    },
    {
      icon: Star,
      titre: 'Déductible',
      description: 'Reçu fiscal pour déduction d\'impôts'
    }
  ];

  const temoignages = [
    {
      nom: 'Sophie MARTIN',
      role: 'Donatrice régulière',
      temoignage: 'Voir l\'impact concret de mes dons sur l\'éducation des enfants congolais me motive à continuer.',
      montant: '25,000 FCFA/mois'
    },
    {
      nom: 'Pierre DUBOIS',
      role: 'Parrain d\'école',
      temoignage: 'J\'ai financé la construction d\'une école. Recevoir les photos et lettres des élèves est émouvant.',
      montant: '500,000 FCFA'
    },
    {
      nom: 'Marie NGOMA',
      role: 'Diaspora congolaise',
      temoignage: 'Contribuer au développement de mon pays depuis l\'étranger donne du sens à ma réussite.',
      montant: '50,000 FCFA/trimestre'
    }
  ];

  const handleMontantChange = (valeur: string) => {
    setMontant(valeur);
    setMontantPersonnalise('');
  };

  const handleMontantPersonnalise = (valeur: string) => {
    setMontantPersonnalise(valeur);
    setMontant('');
  };

  const getMontantFinal = () => {
    return montant || montantPersonnalise;
  };

  const getImpactDescription = (montantStr: string) => {
    const montantNum = parseInt(montantStr);
    if (montantNum >= 250000) return 'Équipement complet d\'une classe';
    if (montantNum >= 100000) return 'Construction d\'un puits d\'eau potable';
    if (montantNum >= 50000) return 'Microcrédit pour une femme entrepreneur';
    if (montantNum >= 25000) return 'Formation complète pour un jeune';
    if (montantNum >= 15000) return 'Vaccination pour 5 enfants';
    if (montantNum >= 5000) return 'Kit scolaire pour un enfant';
    return 'Contribution précieuse à nos actions';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-cyan-50">
      <HeaderWithHero 
        title="Faire un Don"
        subtitle="Soutenez nos projets et transformez des vies"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-[#ff6219] rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] bg-clip-text text-transparent">
                Faire un Don
              </h1>
            </motion.div>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Votre générosité transforme des vies. Chaque don, petit ou grand, 
              contribue à bâtir un avenir meilleur pour les communautés congolaises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Avantages */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((avantage, index) => (
              <motion.div
                key={avantage.titre}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-[#ff6219] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <avantage.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{avantage.titre}</h3>
                <p className="text-gray-600 text-sm">{avantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de don */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* En-tête du formulaire */}
            <div className="bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] p-8 text-white text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Formulaire de Don</h2>
              <p className="text-white/90">Choisissez le montant et la fréquence de votre don</p>
            </div>

            <div className="p-8 md:p-12">
              {/* Étape 1: Montant */}
              {etape === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    Choisissez votre montant
                  </h3>

                  {/* Montants prédéfinis */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {montantsPredefinies.map((option) => (
                      <motion.button
                        key={option.valeur}
                        onClick={() => handleMontantChange(option.valeur)}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                          montant === option.valeur
                            ? 'border-[#ff6219] bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="font-bold text-gray-900 mb-1">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.impact}</div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Montant personnalisé */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Montant personnalisé (FCFA)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="number"
                        value={montantPersonnalise}
                        onChange={(e) => handleMontantPersonnalise(e.target.value)}
                        placeholder="Entrez votre montant"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Fréquence */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Fréquence du don
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { id: 'unique', label: 'Don unique', description: 'Un seul versement' },
                        { id: 'mensuel', label: 'Don mensuel', description: 'Chaque mois' },
                        { id: 'annuel', label: 'Don annuel', description: 'Chaque année' }
                      ].map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setFrequence(option.id)}
                          className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center ${
                            frequence === option.id
                              ? 'border-[#ff6219] bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="font-bold text-gray-900 mb-1">{option.label}</div>
                          <div className="text-sm text-gray-600">{option.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Projet à soutenir */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Projet à soutenir
                    </label>
                    <div className="space-y-3">
                      {projets.map((projetOption) => (
                        <label
                          key={projetOption.id}
                          className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                            projet === projetOption.id
                              ? 'border-[#ff6219] bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="projet"
                            value={projetOption.id}
                            checked={projet === projetOption.id}
                            onChange={(e) => setProjet(e.target.value)}
                            className="sr-only"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-gray-900">{projetOption.nom}</span>
                              {projetOption.urgence && (
                                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                                  Urgent
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{projetOption.description}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            projet === projetOption.id ? 'border-[#ff6219]' : 'border-gray-300'
                          }`}>
                            {projet === projetOption.id && (
                              <div className="w-3 h-3 bg-[#ff6219] rounded-full"></div>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Résumé et bouton */}
                  {getMontantFinal() && (
                    <motion.div
                      className="bg-gray-50 rounded-2xl p-6 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h4 className="font-bold text-gray-900 mb-2">Résumé de votre don :</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Montant :</strong> {parseInt(getMontantFinal()).toLocaleString()} FCFA</p>
                        <p><strong>Fréquence :</strong> {
                          frequence === 'unique' ? 'Don unique' : 
                          frequence === 'mensuel' ? 'Don mensuel' : 'Don annuel'
                        }</p>
                        <p><strong>Projet :</strong> {projets.find(p => p.id === projet)?.nom}</p>
                        <p><strong>Impact :</strong> {getImpactDescription(getMontantFinal())}</p>
                      </div>
                    </motion.div>
                  )}

                  <motion.button
                    onClick={() => setEtape(2)}
                    disabled={!getMontantFinal()}
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      getMontantFinal()
                        ? 'bg-[#ff6219] text-white shadow-lg hover:shadow-xl hover:shadow-orange-500/25'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    whileHover={getMontantFinal() ? { scale: 1.02 } : {}}
                    whileTap={getMontantFinal() ? { scale: 0.98 } : {}}
                  >
                    Continuer vers le paiement
                    <ArrowRight className="w-5 h-5 inline ml-2" />
                  </motion.button>
                </motion.div>
              )}

              {/* Étape 2: Paiement */}
              {etape === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Finaliser votre don
                    </h3>
                    <div className="bg-orange-50 rounded-2xl p-4 inline-block">
                      <p className="text-[#ff6219] font-bold text-lg">
                        {parseInt(getMontantFinal()).toLocaleString()} FCFA
                      </p>
                      <p className="text-gray-600 text-sm">
                        {frequence === 'unique' ? 'Don unique' : 
                         frequence === 'mensuel' ? 'Don mensuel' : 'Don annuel'}
                      </p>
                    </div>
                  </div>

                  {/* Informations personnelles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                        placeholder="+242 XX XX XX XX"
                      />
                    </div>
                  </div>

                  {/* Méthodes de paiement */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">
                      Méthode de paiement
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-2 border-[#ff6219] bg-orange-50 rounded-2xl p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <CreditCard className="w-6 h-6 text-[#ff6219]" />
                          <span className="font-bold text-gray-900">Carte bancaire</span>
                        </div>
                        <p className="text-sm text-gray-600">Visa, Mastercard, American Express</p>
                      </div>
                      <div className="border-2 border-gray-200 rounded-2xl p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <Gift className="w-6 h-6 text-gray-400" />
                          <span className="font-bold text-gray-400">Mobile Money</span>
                        </div>
                        <p className="text-sm text-gray-400">Bientôt disponible</p>
                      </div>
                    </div>
                  </div>

                  {/* Informations carte */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <Lock className="w-5 h-5 text-green-500" />
                      <span className="font-bold text-gray-900">Paiement sécurisé</span>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Numéro de carte *
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Date d'expiration *
                          </label>
                          <input
                            type="text"
                            placeholder="MM/AA"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="space-y-4 mb-8">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        className="mt-1 w-5 h-5 text-[#ff6219] border-gray-300 rounded focus:ring-[#ff6219]"
                      />
                      <span className="text-sm text-gray-700">
                        Je souhaite recevoir un reçu fiscal pour déduction d'impôts
                      </span>
                    </label>
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        className="mt-1 w-5 h-5 text-[#ff6219] border-gray-300 rounded focus:ring-[#ff6219]"
                      />
                      <span className="text-sm text-gray-700">
                        Je souhaite recevoir des nouvelles de l'ONG BOLAMU par email
                      </span>
                    </label>
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 w-5 h-5 text-[#ff6219] border-gray-300 rounded focus:ring-[#ff6219]"
                      />
                      <span className="text-sm text-gray-700">
                        J'accepte les{' '}
                        <Link href="/mentions-legales" className="text-[#ff6219] hover:underline">
                          conditions d'utilisation
                        </Link>{' '}
                        et la{' '}
                        <Link href="/confidentialite" className="text-[#ff6219] hover:underline">
                          politique de confidentialité
                        </Link>
                        *
                      </span>
                    </label>
                  </div>

                  {/* Boutons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setEtape(1)}
                      className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300"
                    >
                      Retour
                    </button>
                    <motion.button
                      className="flex-1 bg-[#ff6219] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Lock className="w-5 h-5 inline mr-2" />
                      Finaliser le don
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Témoignages de <span className="text-[#ff6219]">Donateurs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez ce que nos donateurs disent de leur expérience avec l'ONG BOLAMU.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {temoignages.map((temoignage, index) => (
              <motion.div
                key={temoignage.nom}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#ff6219] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{temoignage.nom}</h3>
                  <p className="text-[#ff6219] font-medium text-sm">{temoignage.role}</p>
                  <p className="text-gray-500 text-sm">{temoignage.montant}</p>
                </div>

                <blockquote className="text-gray-700 text-center italic leading-relaxed">
                  "{temoignage.temoignage}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 