'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Building, Briefcase, Award, ExternalLink, Mail, Phone, Users, Target, Calendar, ArrowRight, Eye } from 'lucide-react';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PartenairesPage() {
  const [activeCategory, setActiveCategory] = useState('tous');

  const categories = [
    { id: 'tous', nom: 'Tous', icon: Globe },
    { id: 'internationaux', nom: 'Internationaux', icon: Globe },
    { id: 'gouvernement', nom: 'Gouvernement', icon: Building },
    { id: 'prives', nom: 'Secteur Privé', icon: Briefcase },
    { id: 'ong', nom: 'ONG Locales', icon: Heart },
    { id: 'academiques', nom: 'Académiques', icon: Award }
  ];

  const partenaires = [
    {
      id: 1,
      nom: 'UNICEF',
      logo: '/images/placeholder-team.svg',
      logoText: 'UNICEF',
      logoColor: 'from-blue-500 to-blue-600',
      categorie: 'internationaux',
      type: 'Organisation internationale',
      domaine: 'Éducation et Protection de l\'enfance',
      partenairiatDebut: '2019',
      description: 'Partenariat stratégique pour l\'amélioration de l\'accès à l\'éducation primaire et la protection des droits de l\'enfant.',
      projetsCommuns: [
        'Construction de 5 écoles primaires',
        'Formation de 120 enseignants',
        'Programme de protection infantile',
        'Distribution de kits scolaires'
      ],
      budget: '250,000 USD',
      beneficiaires: 1500,
      statut: 'actif',
      contact: {
        nom: 'Dr. Marie JOHNSON',
        poste: 'Représentante Pays',
        email: 'marie.johnson@unicef.org',
        telephone: '+242 06 111 22 33'
      }
    },
    {
      id: 2,
      nom: 'Organisation Mondiale de la Santé',
      logo: '/images/placeholder-team.svg',
      logoText: 'OMS',
      logoColor: 'from-blue-400 to-blue-500',
      categorie: 'internationaux',
      type: 'Organisation internationale',
      domaine: 'Santé communautaire',
      partenairiatDebut: '2020',
      description: 'Collaboration pour le renforcement des systèmes de santé communautaire et la prévention des maladies.',
      projetsCommuns: [
        'Formation d\'agents de santé communautaire',
        'Campagnes de vaccination',
        'Sensibilisation COVID-19',
        'Amélioration de l\'hygiène'
      ],
      budget: '180,000 USD',
      beneficiaires: 2000,
      statut: 'actif',
      contact: {
        nom: 'Dr. Paul MBEMBA',
        poste: 'Coordinateur Programme',
        email: 'paul.mbemba@who.int',
        telephone: '+242 06 222 33 44'
      }
    },
    {
      id: 3,
      nom: 'Union Européenne',
      logo: '/images/placeholder-team.svg',
      logoText: 'EU',
      logoColor: 'from-blue-600 to-blue-700',
      categorie: 'internationaux',
      type: 'Bailleur de fonds',
      domaine: 'Développement rural et gouvernance',
      partenairiatDebut: '2021',
      description: 'Financement de programmes de développement rural, d\'infrastructures et de renforcement de la gouvernance locale.',
      projetsCommuns: [
        'Projet de développement rural intégré',
        'Renforcement des capacités locales',
        'Infrastructure communautaire',
        'Formation en gouvernance'
      ],
      budget: '500,000 EUR',
      beneficiaires: 3500,
      statut: 'actif',
      contact: {
        nom: 'Sophie LAURENT',
        poste: 'Chargée de Programme',
        email: 'sophie.laurent@eeas.europa.eu',
        telephone: '+242 06 333 44 55'
      }
    },
    {
      id: 4,
      nom: 'Ministère de l\'Éducation',
      logo: '/images/placeholder-team.svg',
      logoText: 'MEPSA',
      logoColor: 'from-green-500 to-green-600',
      categorie: 'gouvernement',
      type: 'Institution gouvernementale',
      domaine: 'Politique éducative nationale',
      partenairiatDebut: '2018',
      description: 'Coordination des politiques éducatives nationales et intégration de nos programmes dans le système éducatif congolais.',
      projetsCommuns: [
        'Formation continue des enseignants',
        'Développement de curricula',
        'Évaluation des apprentissages',
        'Infrastructure scolaire'
      ],
      budget: '150,000 FCFA',
      beneficiaires: 2500,
      statut: 'actif',
      contact: {
        nom: 'Jean-Claude NKOUNKOU',
        poste: 'Directeur des Partenariats',
        email: 'jc.nkounkou@education.cg',
        telephone: '+242 06 444 55 66'
      }
    },
    {
      id: 5,
      nom: 'Total Energies Congo',
      logo: '/images/placeholder-team.svg',
      logoText: 'TOTAL',
      logoColor: 'from-red-500 to-red-600',
      categorie: 'prives',
      type: 'Entreprise privée',
      domaine: 'Responsabilité sociétale d\'entreprise',
      partenairiatDebut: '2022',
      description: 'Partenariat RSE pour le développement de projets d\'énergie durable et de formation professionnelle dans le secteur énergétique.',
      projetsCommuns: [
        'Installation de panneaux solaires',
        'Formation en énergies renouvelables',
        'Électrification rurale',
        'Bourses d\'études techniques'
      ],
      budget: '300,000 FCFA',
      beneficiaires: 800,
      statut: 'actif',
      contact: {
        nom: 'Alain DURAND',
        poste: 'Responsable RSE',
        email: 'alain.durand@totalenergies.com',
        telephone: '+242 06 555 66 77'
      }
    },
    {
      id: 6,
      nom: 'Croix-Rouge Congolaise',
      logo: '/images/placeholder-team.svg',
      logoText: 'CRC',
      logoColor: 'from-red-500 to-red-600',
      categorie: 'ong',
      type: 'ONG nationale',
      domaine: 'Humanitaire et urgence',
      partenairiatDebut: '2019',
      description: 'Actions coordonnées d\'urgence, sensibilisation communautaire et formation aux premiers secours.',
      projetsCommuns: [
        'Réponse aux urgences humanitaires',
        'Formation premiers secours',
        'Sensibilisation communautaire',
        'Gestion des catastrophes'
      ],
      budget: '120,000 FCFA',
      beneficiaires: 1200,
      statut: 'actif',
      contact: {
        nom: 'Grace LOUBAKI',
        poste: 'Coordinatrice Programmes',
        email: 'grace.loubaki@croixrouge.cg',
        telephone: '+242 06 666 77 88'
      }
    },
    {
      id: 7,
      nom: 'Université Marien Ngouabi',
      logo: '/images/placeholder-team.svg',
      logoText: 'UMNG',
      logoColor: 'from-purple-500 to-purple-600',
      categorie: 'academiques',
      type: 'Institution universitaire',
      domaine: 'Recherche et formation',
      partenairiatDebut: '2020',
      description: 'Collaboration académique pour la recherche en développement durable et la formation de cadres spécialisés.',
      projetsCommuns: [
        'Recherche en développement rural',
        'Formation de cadres techniques',
        'Stages étudiants',
        'Publications scientifiques'
      ],
      budget: '80,000 FCFA',
      beneficiaires: 500,
      statut: 'actif',
      contact: {
        nom: 'Prof. Michel MOUSSAVOU',
        poste: 'Directeur Relations Extérieures',
        email: 'michel.moussavou@umng.cg',
        telephone: '+242 06 777 88 99'
      }
    },
    {
      id: 8,
      nom: 'Banque Mondiale',
      logo: '/images/placeholder-team.svg',
      logoText: 'BM',
      logoColor: 'from-green-600 to-green-700',
      categorie: 'internationaux',
      type: 'Institution financière internationale',
      domaine: 'Développement économique',
      partenairiatDebut: '2021',
      description: 'Soutien financier et technique pour les projets d\'infrastructure communautaire et de développement économique.',
      projetsCommuns: [
        'Développement d\'infrastructures',
        'Microfinance rurale',
        'Formation entrepreneuriale',
        'Renforcement institutionnel'
      ],
      budget: '400,000 USD',
      beneficiaires: 2200,
      statut: 'actif',
      contact: {
        nom: 'Dr. Sarah WILLIAMS',
        poste: 'Spécialiste Senior',
        email: 'sarah.williams@worldbank.org',
        telephone: '+242 06 888 99 00'
      }
    }
  ];

  const partenairesFiltres = activeCategory === 'tous' 
    ? partenaires 
    : partenaires.filter(p => p.categorie === activeCategory);

  const statistiques = [
    { 
      valeur: partenaires.length, 
      label: 'Partenaires actifs',
      icon: Heart,
      couleur: 'from-blue-500 to-blue-600'
    },
    { 
      valeur: partenaires.reduce((sum, p) => sum + p.beneficiaires, 0).toLocaleString(), 
      label: 'Bénéficiaires totaux',
      icon: Users,
      couleur: 'from-green-500 to-green-600'
    },
    { 
      valeur: partenaires.reduce((sum, p) => sum + p.projetsCommuns.length, 0), 
      label: 'Projets collaboratifs',
      icon: Target,
      couleur: 'from-orange-500 to-orange-600'
    },
    { 
      valeur: new Date().getFullYear() - 2018, 
      label: 'Années d\'expérience',
      icon: Calendar,
      couleur: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <HeaderWithHero 
        title="Nos Partenaires"
        subtitle="Un écosystème de collaboration pour maximiser notre impact"
      />

      {/* Section statistiques */}
      <section className="py-20 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Notre Réseau de Partenaires</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ensemble, nous créons un impact durable grâce à des partenariats stratégiques 
              avec des organisations locales et internationales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistiques.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.valeur}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-12 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((categorie) => (
              <motion.button
                key={categorie.id}
                onClick={() => setActiveCategory(categorie.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === categorie.id
                    ? 'bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <categorie.icon className="w-4 h-4" />
                <span className="font-medium">{categorie.nom}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des partenaires */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partenairesFiltres.map((partenaire, index) => (
              <motion.div
                key={partenaire.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* En-tête avec logo */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${partenaire.logoColor} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                      {partenaire.logoText}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{partenaire.nom}</h3>
                      <p className="text-gray-600 text-sm">{partenaire.type}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {partenaire.statut === 'actif' ? 'Partenariat actif' : 'Inactif'}
                        </span>
                        <span className="text-gray-500 text-xs">
                          Depuis {partenaire.partenairiatDebut}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenu principal */}
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Domaine de collaboration</h4>
                    <p className="text-orange-600 font-medium">{partenaire.domaine}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-700">{partenaire.description}</p>
                  </div>

                  {/* Statistiques du partenariat */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">{partenaire.beneficiaires.toLocaleString()}</div>
                      <div className="text-sm text-blue-800">Bénéficiaires</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">{partenaire.projetsCommuns.length}</div>
                      <div className="text-sm text-green-800">Projets communs</div>
                    </div>
                  </div>

                  {/* Projets communs */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Projets collaboratifs</h4>
                    <ul className="space-y-2">
                      {partenaire.projetsCommuns.slice(0, 3).map((projet, pIndex) => (
                        <li key={pIndex} className="flex items-start space-x-2">
                          <ArrowRight className="w-4 h-4 text-[#ff6219] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{projet}</span>
                        </li>
                      ))}
                      {partenaire.projetsCommuns.length > 3 && (
                        <li className="text-gray-500 text-sm">
                          +{partenaire.projetsCommuns.length - 3} autres projets...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Contact partenariat</h4>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">{partenaire.contact.nom}</p>
                      <p>{partenaire.contact.poste}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <a 
                          href={`mailto:${partenaire.contact.email}`}
                          className="flex items-center space-x-1 text-[#ff6219] hover:underline"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Email</span>
                        </a>
                        <a 
                          href={`tel:${partenaire.contact.telephone}`}
                          className="flex items-center space-x-1 text-[#6ad4fe] hover:underline"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Téléphone</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section devenir partenaire */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Devenez notre partenaire
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez notre réseau de partenaires engagés pour le développement durable du Congo. 
              Ensemble, nous pouvons créer un impact encore plus grand.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Target className="w-8 h-8 text-[#ff6219] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Impact Partagé</h3>
                <p className="text-gray-600 text-sm">
                  Maximisez votre impact social grâce à nos expertises complémentaires
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Users className="w-8 h-8 text-[#6ad4fe] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Réseau Étendu</h3>
                <p className="text-gray-600 text-sm">
                  Accédez à notre réseau de bénéficiaires et communautés locales
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Award className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  Bénéficiez de notre expertise en gestion de projets de développement
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apropos#contact">
                <motion.button
                  className="bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-5 h-5" />
                  <span>Nous contacter</span>
                </motion.button>
              </Link>
              
              <Link href="/transparence">
                <motion.button
                  className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 hover:bg-gray-50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Voir notre transparence</span>
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