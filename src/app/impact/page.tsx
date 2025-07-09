'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, TrendingUp, Users, Heart, Award, MapPin, Calendar, BarChart3, PieChart, ArrowUp, Star, CheckCircle, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';

export default function ImpactPage() {
  const [activeYear, setActiveYear] = useState('2023');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTestimonialAutoPlay, setIsTestimonialAutoPlay] = useState(true);
  const [currentPartner, setCurrentPartner] = useState(0);
  const [isPartnerAutoPlay, setIsPartnerAutoPlay] = useState(true);

  const impactData = {
    '2023': {
      beneficiaires: 2847,
      projets: 12,
      partenaires: 8,
      communautes: 15,
      formations: 450,
      emplois: 89,
      budget: '45M FCFA'
    },
    '2022': {
      beneficiaires: 2156,
      projets: 9,
      partenaires: 6,
      communautes: 12,
      formations: 320,
      emplois: 67,
      budget: '38M FCFA'
    },
    '2021': {
      beneficiaires: 1789,
      projets: 7,
      partenaires: 4,
      communautes: 9,
      formations: 245,
      emplois: 45,
      budget: '32M FCFA'
    }
  };

  const domaines = [
    {
      title: 'Éducation',
      icon: Award,
      couleur: 'from-blue-500 to-blue-600',
      stats: {
        '2023': { beneficiaires: 1200, projets: 4, budget: '18M' },
        '2022': { beneficiaires: 950, projets: 3, budget: '15M' },
        '2021': { beneficiaires: 720, projets: 2, budget: '12M' }
      },
      realisations: [
        'Construction de 3 écoles primaires',
        'Formation de 50 enseignants',
        'Distribution de 2000 kits scolaires',
        'Bourses d\'études pour 150 élèves'
      ]
    },
    {
      title: 'Santé',
      icon: Heart,
      couleur: 'from-red-500 to-red-600',
      stats: {
        '2023': { beneficiaires: 850, projets: 3, budget: '12M' },
        '2022': { beneficiaires: 680, projets: 2, budget: '10M' },
        '2021': { beneficiaires: 520, projets: 2, budget: '8M' }
      },
      realisations: [
        'Campagnes de vaccination pour 500 enfants',
        'Formation de 25 agents de santé communautaire',
        'Distribution de moustiquaires imprégnées',
        'Sensibilisation sur l\'hygiène et la nutrition'
      ]
    },
    {
      title: 'Développement Économique',
      icon: TrendingUp,
      couleur: 'from-green-500 to-green-600',
      stats: {
        '2023': { beneficiaires: 547, projets: 3, budget: '10M' },
        '2022': { beneficiaires: 356, projets: 2, budget: '8M' },
        '2021': { beneficiaires: 289, projets: 2, budget: '7M' }
      },
      realisations: [
        'Formation entrepreneuriale pour 200 jeunes',
        'Microcrédits pour 89 femmes',
        'Création de 3 coopératives agricoles',
        'Marché de producteurs locaux'
      ]
    },
    {
      title: 'Infrastructure',
      icon: Users,
      couleur: 'from-purple-500 to-purple-600',
      stats: {
        '2023': { beneficiaires: 250, projets: 2, budget: '5M' },
        '2022': { beneficiaires: 170, projets: 2, budget: '5M' },
        '2021': { beneficiaires: 260, projets: 1, budget: '5M' }
      },
      realisations: [
        'Construction de 2 puits d\'eau potable',
        'Réhabilitation de routes rurales',
        'Installation de panneaux solaires',
        'Centre communautaire polyvalent'
      ]
    }
  ];

  const temoignages = [
    {
      nom: 'Marie NKOUNKOU',
      role: 'Bénéficiaire - Programme Éducation',
      localisation: 'Pointe-Noire',
      temoignage: 'Grâce à la bourse d\'études de l\'ONG BOLAMU, j\'ai pu terminer mes études secondaires et je prépare maintenant l\'université. Cette opportunité a changé ma vie.',
      photo: '/images/img.jpg',
      impact: 'Diplômée avec mention',
      couleur: 'from-blue-500 to-blue-600'
    },
    {
      nom: 'Jean MAKAYA',
      role: 'Entrepreneur - Programme Économique',
      localisation: 'Dolisie',
      temoignage: 'Le microcrédit et la formation en entrepreneuriat m\'ont permis de créer ma petite entreprise de menuiserie. Aujourd\'hui, j\'emploie 5 personnes de ma communauté.',
      photo: '/images/img.jpg',
      impact: '5 emplois créés',
      couleur: 'from-green-500 to-green-600'
    },
    {
      nom: 'Grace LOUBAKI',
      role: 'Agent de santé - Programme Santé',
      localisation: 'Brazzaville',
      temoignage: 'La formation que j\'ai reçue m\'a permis de mieux servir ma communauté. Je peux maintenant détecter et traiter les maladies courantes, sauvant des vies.',
      photo: '/images/img.jpg',
      impact: '200 consultations/mois',
      couleur: 'from-red-500 to-red-600'
    },
    {
      nom: 'Patrick MOUSSAVOU',
      role: 'Directeur d\'école - Programme Éducation',
      localisation: 'Owando',
      temoignage: 'L\'infrastructure scolaire construite par BOLAMU a transformé notre école. Nous avons maintenant des salles modernes et l\'effectif des élèves a doublé.',
      photo: '/images/img.jpg',
      impact: 'Effectif doublé',
      couleur: 'from-purple-500 to-purple-600'
    },
    {
      nom: 'Claudine NGOMA',
      role: 'Présidente coopérative - Programme Économique',
      localisation: 'Kinkala',
      temoignage: 'Notre coopérative de femmes agricultrices a bénéficié d\'équipements modernes. Nos rendements ont augmenté de 150% et nous vendons sur tout le pays.',
      photo: '/images/img.jpg',
      impact: '+150% rendements',
      couleur: 'from-emerald-500 to-emerald-600'
    }
  ];

  const partenaires = [
    { 
      nom: 'UNICEF', 
      type: 'Organisation internationale', 
      domaine: 'Éducation',
      logo: '/images/placeholder-team.svg',
      logoText: 'UNICEF',
      logoColor: 'from-blue-500 to-blue-600',
      description: 'Partenariat stratégique pour l\'amélioration de l\'accès à l\'éducation primaire et la protection de l\'enfance',
      projets: 8,
      couleur: 'from-blue-500 to-blue-600'
    },
    { 
      nom: 'OMS', 
      type: 'Organisation internationale', 
      domaine: 'Santé',
      logo: '/images/placeholder-team.svg',
      logoText: 'WHO',
      logoColor: 'from-blue-400 to-blue-500',
      description: 'Collaboration pour le renforcement des systèmes de santé communautaire et la prévention des maladies',
      projets: 5,
      couleur: 'from-red-500 to-red-600'
    },
    { 
      nom: 'Union Européenne', 
      type: 'Bailleur de fonds', 
      domaine: 'Développement',
      logo: '/images/placeholder-team.svg',
      logoText: 'EU',
      logoColor: 'from-blue-600 to-blue-700',
      description: 'Financement de programmes de développement rural, d\'infrastructures et de gouvernance locale',
      projets: 12,
      couleur: 'from-indigo-500 to-indigo-600'
    },
    { 
      nom: 'Banque Mondiale', 
      type: 'Institution financière', 
      domaine: 'Infrastructure',
      logo: '/images/placeholder-team.svg',
      logoText: 'WB',
      logoColor: 'from-green-600 to-green-700',
      description: 'Soutien financier et technique pour les projets d\'infrastructure communautaire et de développement économique',
      projets: 6,
      couleur: 'from-green-500 to-green-600'
    },
    { 
      nom: 'Ministère de l\'Éducation', 
      type: 'Gouvernement', 
      domaine: 'Éducation',
      logo: '/images/placeholder-team.svg',
      logoText: 'MENFOP',
      logoColor: 'from-orange-500 to-orange-600',
      description: 'Coordination des politiques éducatives nationales et formation continue des enseignants',
      projets: 15,
      couleur: 'from-yellow-500 to-yellow-600'
    },
    { 
      nom: 'Croix-Rouge Congo', 
      type: 'ONG locale', 
      domaine: 'Humanitaire',
      logo: '/images/placeholder-team.svg',
      logoText: 'CRC',
      logoColor: 'from-red-500 to-red-600',
      description: 'Actions coordonnées d\'urgence, sensibilisation communautaire et formation aux premiers secours',
      projets: 9,
      couleur: 'from-red-500 to-pink-600'
    }
  ];

  const objectifsDeveloppement = [
    { numero: 1, titre: 'Pas de pauvreté', progres: 75 },
    { numero: 3, titre: 'Bonne santé et bien-être', progres: 82 },
    { numero: 4, titre: 'Éducation de qualité', progres: 89 },
    { numero: 5, titre: 'Égalité entre les sexes', progres: 67 },
    { numero: 8, titre: 'Travail décent et croissance économique', progres: 71 },
    { numero: 10, titre: 'Inégalités réduites', progres: 58 }
  ];

  // Auto-play pour les témoignages
  useEffect(() => {
    if (isTestimonialAutoPlay) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % temoignages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isTestimonialAutoPlay, temoignages.length]);

  // Auto-play pour les partenaires
  useEffect(() => {
    if (isPartnerAutoPlay) {
      const interval = setInterval(() => {
        setCurrentPartner((prev) => (prev + 1) % Math.ceil(partenaires.length / 3));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPartnerAutoPlay, partenaires.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-cyan-50">
      <HeaderWithHero 
        title="Notre Impact"
        subtitle="Mesurez l'effet de nos actions sur le terrain"
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
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] bg-clip-text text-transparent">
                Notre Impact
              </h1>
            </motion.div>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez l'impact concret de nos actions sur les communautés congolaises. 
              Des chiffres qui témoignent de notre engagement pour un développement durable.
            </p>
          </motion.div>

          {/* Sélecteur d'année */}
          <motion.div
            className="flex justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {Object.keys(impactData).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
                  activeYear === year
                    ? 'bg-[#ff6219] text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {year}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Métriques principales */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, label: 'Bénéficiaires', value: impactData[activeYear as keyof typeof impactData].beneficiaires, suffix: '', color: 'from-blue-500 to-blue-600' },
              { icon: Award, label: 'Projets réalisés', value: impactData[activeYear as keyof typeof impactData].projets, suffix: '', color: 'from-green-500 to-green-600' },
              { icon: Heart, label: 'Partenaires', value: impactData[activeYear as keyof typeof impactData].partenaires, suffix: '', color: 'from-red-500 to-red-600' },
              { icon: MapPin, label: 'Communautés', value: impactData[activeYear as keyof typeof impactData].communautes, suffix: '', color: 'from-purple-500 to-purple-600' }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <motion.h3 
                  className="text-4xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {metric.value.toLocaleString()}{metric.suffix}
                </motion.h3>
                <p className="text-gray-600 font-medium">{metric.label}</p>
                <div className="flex items-center justify-center mt-2 text-green-500">
                  <ArrowUp className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">+{Math.floor(Math.random() * 20 + 10)}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact par domaine */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Impact par <span className="text-[#ff6219]">Domaine</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre approche multisectorielle nous permet d'avoir un impact global sur le développement des communautés.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {domaines.map((domaine, index) => (
              <motion.div
                key={domaine.title}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`bg-gradient-to-r ${domaine.couleur} p-6`}>
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-3">
                      <domaine.icon className="w-8 h-8" />
                      <h3 className="text-2xl font-bold">{domaine.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold">
                        {domaine.stats[activeYear as keyof typeof domaine.stats].beneficiaires}
                      </p>
                      <p className="text-sm opacity-90">bénéficiaires</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">
                        {domaine.stats[activeYear as keyof typeof domaine.stats].projets}
                      </p>
                      <p className="text-sm text-gray-600">Projets</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">
                        {domaine.stats[activeYear as keyof typeof domaine.stats].budget}
                      </p>
                      <p className="text-sm text-gray-600">Budget</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-500">100%</p>
                      <p className="text-sm text-gray-600">Réussite</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Principales réalisations :</h4>
                    <ul className="space-y-2">
                      {domaine.realisations.map((realisation, rIndex) => (
                        <li key={rIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{realisation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages - Design Sliding */}
      <section className="pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Témoignages de <span className="text-[#ff6219]">Bénéficiaires</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Les vraies histoires de transformation qui donnent du sens à notre mission.
            </p>
          </motion.div>

          <div className="relative">
            {/* Contrôles de lecture */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => 
                  prev === 0 ? temoignages.length - 1 : prev - 1
                )}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
                aria-label="Témoignage précédent"
                title="Témoignage précédent"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              
              <button
                onClick={() => setIsTestimonialAutoPlay(!isTestimonialAutoPlay)}
                className="p-3 rounded-full bg-[#ff6219] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#e5571a]"
                aria-label={isTestimonialAutoPlay ? "Mettre en pause" : "Reprendre la lecture"}
                title={isTestimonialAutoPlay ? "Mettre en pause" : "Reprendre la lecture"}
              >
                {isTestimonialAutoPlay ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              
              <button
                onClick={() => setCurrentTestimonial((prev) => 
                  (prev + 1) % temoignages.length
                )}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
                aria-label="Témoignage suivant"
                title="Témoignage suivant"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Carrousel principal */}
            <div className="relative h-[500px] overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="relative w-full max-w-4xl">
                    {/* Image de fond avec overlay */}
                    <div className="relative h-[500px] rounded-3xl overflow-hidden">
                      <Image
                        src={temoignages[currentTestimonial].photo}
                        alt={temoignages[currentTestimonial].nom}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                    </div>

                    {/* Contenu du témoignage */}
                    <div className="absolute inset-0 flex items-center">
                      <div className="p-12 text-white max-w-2xl">
                        <motion.div
                          className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${temoignages[currentTestimonial].couleur} mb-6`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <span className="text-sm font-bold">{temoignages[currentTestimonial].impact}</span>
                        </motion.div>

                        <motion.blockquote
                          className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          "{temoignages[currentTestimonial].temoignage}"
                        </motion.blockquote>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <h3 className="text-xl font-bold mb-2">{temoignages[currentTestimonial].nom}</h3>
                          <p className="text-orange-300 font-medium">{temoignages[currentTestimonial].role}</p>
                          <p className="text-gray-300 text-sm">{temoignages[currentTestimonial].localisation}</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicateurs de pagination */}
            <div className="flex justify-center space-x-3 mt-8">
              {temoignages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-[#ff6219] scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Aperçu des témoignages suivants */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[0, 1, 2].map((offset) => {
                const index = (currentTestimonial + offset + 1) % temoignages.length;
                const temoignage = temoignages[index];
                return (
                  <motion.div
                    key={`preview-${index}`}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setCurrentTestimonial(index)}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: offset * 0.1 }}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={temoignage.photo}
                          alt={temoignage.nom}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{temoignage.nom}</h4>
                        <p className="text-xs text-gray-600">{temoignage.localisation}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">
                      "{temoignage.temoignage.substring(0, 100)}..."
                    </p>
                    <div className="mt-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {temoignage.impact}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs de développement durable */}
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
              Contribution aux <span className="text-[#ff6219]">ODD</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos actions s'alignent sur les Objectifs de Développement Durable des Nations Unies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectifsDeveloppement.map((odd, index) => (
              <motion.div
                key={odd.numero}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-xl flex items-center justify-center text-white font-bold">
                    {odd.numero}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">{odd.titre}</h3>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Progression</span>
                    <span className="text-sm font-bold text-gray-900">{odd.progres}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${odd.progres}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires - Animation Défilement Infini */}
      <section className="pb-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos <span className="text-[#ff6219]">Partenaires</span> Stratégiques
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des collaborations solides avec des organisations internationales et locales de renom.
            </p>
          </motion.div>

          {/* Défilement infini des logos */}
          <div className="relative">
            {/* Première ligne - défilement vers la gauche */}
            <div className="flex overflow-hidden mb-8">
              <motion.div
                className="flex gap-8 min-w-full"
                animate={{
                  x: ["0%", "-100%"]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Première série de partenaires */}
                {partenaires.map((partenaire, index) => (
                  <motion.div
                    key={`first-${partenaire.nom}`}
                    className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden w-80"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    {/* Fond dégradé animé */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${partenaire.couleur} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="flex items-center space-x-4 relative z-10">
                      {/* Logo du partenaire */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md">
                          <div className={`w-full h-full bg-gradient-to-br ${partenaire.logoColor} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white font-bold text-sm text-center leading-tight">
                              {partenaire.logoText}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Info partenaire */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#ff6219] transition-colors duration-300 truncate">
                          {partenaire.nom}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 font-medium">
                          {partenaire.type}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className={`bg-gradient-to-r ${partenaire.couleur} text-white px-2 py-1 rounded-full text-xs font-bold`}>
                            {partenaire.domaine}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                            {partenaire.projets} projets
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Effet de brillance au survol */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                  </motion.div>
                ))}
                
                {/* Duplication pour l'effet infini */}
                {partenaires.map((partenaire, index) => (
                  <motion.div
                    key={`duplicate-${partenaire.nom}`}
                    className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden w-80"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${partenaire.couleur} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="flex items-center space-x-4 relative z-10">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md">
                          <div className={`w-full h-full bg-gradient-to-br ${partenaire.logoColor} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white font-bold text-sm text-center leading-tight">
                              {partenaire.logoText}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#ff6219] transition-colors duration-300 truncate">
                          {partenaire.nom}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 font-medium">
                          {partenaire.type}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className={`bg-gradient-to-r ${partenaire.couleur} text-white px-2 py-1 rounded-full text-xs font-bold`}>
                            {partenaire.domaine}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                            {partenaire.projets} projets
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Deuxième ligne - défilement vers la droite */}
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-8 min-w-full"
                animate={{
                  x: ["-100%", "0%"]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Deuxième série (inverse) */}
                {[...partenaires].reverse().map((partenaire, index) => (
                  <motion.div
                    key={`second-${partenaire.nom}`}
                    className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden w-80"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${partenaire.couleur} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="flex items-center space-x-4 relative z-10">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md">
                          <div className={`w-full h-full bg-gradient-to-br ${partenaire.logoColor} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white font-bold text-sm text-center leading-tight">
                              {partenaire.logoText}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#ff6219] transition-colors duration-300 truncate">
                          {partenaire.nom}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 font-medium">
                          {partenaire.type}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className={`bg-gradient-to-r ${partenaire.couleur} text-white px-2 py-1 rounded-full text-xs font-bold`}>
                            {partenaire.domaine}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                            {partenaire.projets} projets
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                  </motion.div>
                ))}
                
                {/* Duplication pour l'effet infini */}
                {[...partenaires].reverse().map((partenaire, index) => (
                  <motion.div
                    key={`second-duplicate-${partenaire.nom}`}
                    className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden w-80"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${partenaire.couleur} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="flex items-center space-x-4 relative z-10">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md">
                          <div className={`w-full h-full bg-gradient-to-br ${partenaire.logoColor} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white font-bold text-sm text-center leading-tight">
                              {partenaire.logoText}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#ff6219] transition-colors duration-300 truncate">
                          {partenaire.nom}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 font-medium">
                          {partenaire.type}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className={`bg-gradient-to-r ${partenaire.couleur} text-white px-2 py-1 rounded-full text-xs font-bold`}>
                            {partenaire.domaine}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                            {partenaire.projets} projets
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Statistiques des partenariats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-[#ff6219] mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {partenaires.length}
              </motion.div>
              <p className="text-sm text-gray-600 font-medium">Partenaires Actifs</p>
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-[#ff6219] mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {partenaires.reduce((sum, p) => sum + p.projets, 0)}
              </motion.div>
              <p className="text-sm text-gray-600 font-medium">Projets Conjoints</p>
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-[#ff6219] mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {new Set(partenaires.map(p => p.domaine)).size}
              </motion.div>
              <p className="text-sm text-gray-600 font-medium">Domaines d'Action</p>
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-[#ff6219] mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                100%
              </motion.div>
              <p className="text-sm text-gray-600 font-medium">Taux de Réussite</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-gradient-to-r from-[#ff6219] to-[#6ad4fe]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Target className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Rejoignez Notre Impact
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Votre contribution peut multiplier notre impact. 
              Ensemble, construisons un avenir meilleur pour le Congo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/adhesion">
                <motion.button
                  className="bg-white text-[#ff6219] px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Devenir membre
                </motion.button>
              </Link>
              <Link href="/don">
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#ff6219] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Faire un don
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 