'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, GraduationCap, Leaf, Award, Calendar, MapPin, Download, Play, ExternalLink, Filter } from 'lucide-react';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function NosActions() {
  const [filterStatus, setFilterStatus] = useState('tous');
  const [filterDomain, setFilterDomain] = useState('tous');

  const projets = [
    {
      id: 1,
      titre: "Construction de l'École Primaire de Makélékélé",
      description: "Construction d'une école primaire de 6 classes avec équipements pédagogiques pour 300 élèves.",
      statut: "termine",
      domaine: "education",
      localisation: "Makélékélé, Brazzaville",
      beneficiaires: 300,
      budget: "50,000",
      dateDebut: "2022-01-15",
      dateFin: "2023-06-30",
      image: "/images/placeholder-project.svg",
      documents: [
        { nom: "Rapport final", type: "pdf", url: "#" },
        { nom: "Photos du projet", type: "images", url: "#" }
      ],
      partenaires: ["Ministère de l'Éducation", "Communauté locale"]
    },
    {
      id: 2,
      titre: "Programme de Formation Professionnelle",
      description: "Formation en couture, menuiserie et informatique pour 150 jeunes déscolarisés.",
      statut: "en_cours",
      domaine: "formation",
      localisation: "Poto-Poto, Brazzaville",
      beneficiaires: 150,
      budget: "35,000",
      dateDebut: "2023-09-01",
      dateFin: "2024-08-31",
      image: "/images/placeholder-team.svg",
      documents: [
        { nom: "Rapport d'étape", type: "pdf", url: "#" },
        { nom: "Témoignages", type: "video", url: "#" }
      ],
      partenaires: ["UNICEF", "Chambre des Métiers"]
    },
    {
      id: 3,
      titre: "Campagne de Reforestation",
      description: "Plantation de 10,000 arbres dans les zones dégradées autour de Brazzaville.",
      statut: "en_cours",
      domaine: "environnement",
      localisation: "Périphérie de Brazzaville",
      beneficiaires: 5000,
      budget: "25,000",
      dateDebut: "2023-11-01",
      dateFin: "2024-12-31",
      image: "/images/placeholder-project.svg",
      documents: [
        { nom: "Plan de reforestation", type: "pdf", url: "#" }
      ],
      partenaires: ["Ministère de l'Environnement", "ONG Verte"]
    },
    {
      id: 4,
      titre: "Centre de Santé Communautaire",
      description: "Construction et équipement d'un centre de santé pour 8 villages ruraux.",
      statut: "planifie",
      domaine: "sante",
      localisation: "Département du Pool",
      beneficiaires: 2000,
      budget: "80,000",
      dateDebut: "2024-03-01",
      dateFin: "2025-12-31",
      image: "/images/placeholder-team.svg",
      documents: [
        { nom: "Étude de faisabilité", type: "pdf", url: "#" }
      ],
      partenaires: ["Ministère de la Santé", "OMS"]
    },
    {
      id: 5,
      titre: "Microfinance pour Femmes Entrepreneures",
      description: "Programme de microcrédits et formation en gestion pour 200 femmes.",
      statut: "planifie",
      domaine: "economie",
      localisation: "Ouenzé, Brazzaville",
      beneficiaires: 200,
      budget: "40,000",
      dateDebut: "2024-06-01",
      dateFin: "2026-05-31",
      image: "/images/placeholder-project.svg",
      documents: [],
      partenaires: ["Banque Populaire", "ONU Femmes"]
    },
    {
      id: 6,
      titre: "Puits d'Eau Potable",
      description: "Forage de 5 puits d'eau potable dans les villages ruraux du département de la Bouenza.",
      statut: "termine",
      domaine: "sante",
      localisation: "Département de la Bouenza",
      beneficiaires: 1500,
      budget: "30,000",
      dateDebut: "2021-03-01",
      dateFin: "2022-02-28",
      image: "/images/placeholder-team.svg",
      documents: [
        { nom: "Rapport technique", type: "pdf", url: "#" },
        { nom: "Impact social", type: "pdf", url: "#" }
      ],
      partenaires: ["UNICEF", "Communautés locales"]
    }
  ];

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case 'termine': return 'bg-green-100 text-green-800';
      case 'en_cours': return 'bg-blue-100 text-blue-800';
      case 'planifie': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (statut: string) => {
    switch (statut) {
      case 'termine': return 'Terminé';
      case 'en_cours': return 'En cours';
      case 'planifie': return 'Planifié';
      default: return 'Inconnu';
    }
  };

  const getDomainIcon = (domaine: string) => {
    switch (domaine) {
      case 'education': return <GraduationCap className="w-6 h-6" />;
      case 'sante': return <Heart className="w-6 h-6" />;
      case 'environnement': return <Leaf className="w-6 h-6" />;
      case 'formation': return <Users className="w-6 h-6" />;
      case 'economie': return <Globe className="w-6 h-6" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  const projetsFiltres = projets.filter(projet => {
    const matchStatut = filterStatus === 'tous' || projet.statut === filterStatus;
    const matchDomaine = filterDomain === 'tous' || projet.domaine === filterDomain;
    return matchStatut && matchDomaine;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-cyan-50">
      <HeaderWithHero 
        title="Nos Actions"
        subtitle="Ensemble, créons un impact positif durable"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos <span style={{ color: '#ff6219' }}>Actions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Découvrez nos projets passés, en cours et à venir qui transforment 
              concrètement la vie des communautés congolaises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistiques */}
      <section id="statistiques" className="py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25</h3>
              <p className="text-gray-600">Projets réalisés</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">12,500+</h3>
              <p className="text-gray-600">Bénéficiaires directs</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#ff6219]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15</h3>
              <p className="text-gray-600">Communautés touchées</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">8</h3>
              <p className="text-gray-600">Projets en cours</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-gradient-to-r from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filtrer par :</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#ff6219] focus:border-transparent"
                title="Filtrer par statut"
                aria-label="Filtrer par statut"
              >
                <option value="tous">Tous les statuts</option>
                <option value="termine">Terminés</option>
                <option value="en_cours">En cours</option>
                <option value="planifie">Planifiés</option>
              </select>
              
              <select
                value={filterDomain}
                onChange={(e) => setFilterDomain(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#ff6219] focus:border-transparent"
                title="Filtrer par domaine"
                aria-label="Filtrer par domaine"
              >
                <option value="tous">Tous les domaines</option>
                <option value="education">Éducation</option>
                <option value="sante">Santé</option>
                <option value="environnement">Environnement</option>
                <option value="formation">Formation</option>
                <option value="economie">Économie</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des projets */}
      <section id="projets" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projetsFiltres.map((projet, index) => (
              <motion.div
                key={projet.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-cyan-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={projet.image}
                    alt={projet.titre}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(projet.statut)}`}>
                      {getStatusText(projet.statut)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#ff6219]">
                      {getDomainIcon(projet.domaine)}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{projet.titre}</h3>
                  <p className="text-gray-600 mb-4">{projet.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {projet.localisation}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {projet.beneficiaires} bénéficiaires
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(projet.dateDebut).toLocaleDateString('fr-FR')} - {new Date(projet.dateFin).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Budget: {projet.budget}€</div>
                    <div className="text-sm text-gray-600">
                      Partenaires: {projet.partenaires.join(', ')}
                    </div>
                  </div>
                  
                  {projet.documents.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Documents:</h4>
                      <div className="flex flex-wrap gap-2">
                        {projet.documents.map((doc, docIndex) => (
                          <a
                            key={docIndex}
                            href={doc.url}
                            className="inline-flex items-center px-3 py-1 bg-white rounded-lg text-sm text-[#ff6219] hover:bg-orange-50 transition-colors"
                          >
                            {doc.type === 'pdf' && <Download className="w-4 h-4 mr-1" />}
                            {doc.type === 'video' && <Play className="w-4 h-4 mr-1" />}
                            {doc.type === 'images' && <ExternalLink className="w-4 h-4 mr-1" />}
                            {doc.nom}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <button className="w-full bg-[#ff6219] text-white py-2 px-4 rounded-lg hover:shadow-orange-500/25 hover:shadow-lg transition-all">
                    En savoir plus
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 