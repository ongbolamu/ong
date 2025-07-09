'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Leaf, Briefcase, Building, Users, Target, Calendar, MapPin, Award, TrendingUp, Eye } from 'lucide-react';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ProgrammesPage() {
  const [activeProgramme, setActiveProgramme] = useState('education');

  const programmes = [
    {
      id: 'education',
      nom: 'Éducation & Formation',
      icon: GraduationCap,
      couleur: 'from-blue-500 to-blue-600',
      description: 'Améliorer l\'accès à une éducation de qualité pour tous',
      objectifPrincipal: 'Réduire l\'illettrisme et améliorer les compétences de base',
      beneficiaires: '2,500+ élèves',
      budget: '180,000 USD',
      duree: '2019-2025',
      zones: ['Brazzaville', 'Pointe-Noire', 'Dolisie', 'Villages ruraux'],
      partenaires: ['UNICEF', 'Ministère de l\'Éducation', 'UNESCO'],
      resultats: [
        { indicateur: 'Écoles construites', valeur: '8', unite: 'infrastructures' },
        { indicateur: 'Enseignants formés', valeur: '120', unite: 'personnes' },
        { indicateur: 'Élèves soutenus', valeur: '2,500', unite: 'bénéficiaires' },
        { indicateur: 'Kits scolaires distribués', valeur: '3,200', unite: 'unités' }
      ],
      activites: [
        {
          titre: 'Construction d\'écoles',
          description: 'Construction et réhabilitation d\'infrastructures scolaires dans les zones rurales',
          statut: 'en_cours',
          progression: 75
        },
        {
          titre: 'Formation continue des enseignants',
          description: 'Programme de formation pédagogique et méthodologique pour enseignants',
          statut: 'en_cours',
          progression: 85
        },
        {
          titre: 'Distribution de matériel scolaire',
          description: 'Fourniture de kits scolaires complets aux élèves défavorisés',
          statut: 'termine',
          progression: 100
        },
        {
          titre: 'Alphabétisation des adultes',
          description: 'Cours d\'alphabétisation pour adultes non scolarisés',
          statut: 'planifie',
          progression: 15
        }
      ],
      impact: {
        description: 'Notre programme éducation a permis d\'améliorer significativement les résultats scolaires dans les zones d\'intervention',
        temoignage: {
          texte: "Grâce à l'école construite par BOLAMU, mes enfants peuvent enfin étudier près de chez nous. Les résultats sont excellents !",
          auteur: "Marie NKOUNKOU",
          fonction: "Parent d'élève, Makélékélé"
        }
      }
    },
    {
      id: 'sante',
      nom: 'Santé Communautaire',
      icon: Heart,
      couleur: 'from-red-500 to-red-600',
      description: 'Améliorer l\'accès aux soins de santé primaires',
      objectifPrincipal: 'Réduire la mortalité infantile et maternelle',
      beneficiaires: '1,800+ patients',
      budget: '120,000 USD',
      duree: '2020-2024',
      zones: ['Brazzaville périphérie', 'Département du Pool', 'Villages isolés'],
      partenaires: ['OMS', 'Ministère de la Santé', 'UNICEF'],
      resultats: [
        { indicateur: 'Centres de santé équipés', valeur: '5', unite: 'infrastructures' },
        { indicateur: 'Agents de santé formés', valeur: '45', unite: 'personnes' },
        { indicateur: 'Consultations réalisées', valeur: '8,500', unite: 'actes' },
        { indicateur: 'Enfants vaccinés', valeur: '1,200', unite: 'bénéficiaires' }
      ],
      activites: [
        {
          titre: 'Formation d\'agents de santé communautaire',
          description: 'Formation d\'agents locaux pour les soins de base et la prévention',
          statut: 'en_cours',
          progression: 70
        },
        {
          titre: 'Campagnes de vaccination',
          description: 'Vaccination systématique des enfants et rattrapage vaccinal',
          statut: 'en_cours',
          progression: 90
        },
        {
          titre: 'Sensibilisation hygiène et nutrition',
          description: 'Éducation communautaire sur les bonnes pratiques de santé',
          statut: 'termine',
          progression: 100
        },
        {
          titre: 'Équipement de centres de santé',
          description: 'Fourniture d\'équipements médicaux de base',
          statut: 'planifie',
          progression: 25
        }
      ],
      impact: {
        description: 'Réduction significative des maladies évitables et amélioration de l\'état nutritionnel des enfants',
        temoignage: {
          texte: "La formation reçue m'a permis de sauver plusieurs vies dans mon village. Je peux maintenant diagnostiquer et traiter les maladies courantes.",
          auteur: "Paul MAKAYA",
          fonction: "Agent de santé communautaire"
        }
      }
    },
    {
      id: 'environnement',
      nom: 'Environnement & Climat',
      icon: Leaf,
      couleur: 'from-green-500 to-green-600',
      description: 'Protection de l\'environnement et adaptation climatique',
      objectifPrincipal: 'Lutter contre la déforestation et promouvoir les énergies vertes',
      beneficiaires: '5,000+ personnes',
      budget: '95,000 USD',
      duree: '2021-2026',
      zones: ['Forêts périurbaines', 'Communautés rurales', 'Zones dégradées'],
      partenaires: ['PNUD', 'Ministère de l\'Environnement', 'Union Européenne'],
      resultats: [
        { indicateur: 'Arbres plantés', valeur: '15,000', unite: 'plants' },
        { indicateur: 'Hectares reboisés', valeur: '250', unite: 'ha' },
        { indicateur: 'Foyers solaires installés', valeur: '180', unite: 'équipements' },
        { indicateur: 'Personnes sensibilisées', valeur: '3,500', unite: 'bénéficiaires' }
      ],
      activites: [
        {
          titre: 'Campagne de reforestation',
          description: 'Plantation d\'arbres locaux et d\'espèces fruitières',
          statut: 'en_cours',
          progression: 65
        },
        {
          titre: 'Installation de panneaux solaires',
          description: 'Électrification solaire de centres communautaires',
          statut: 'en_cours',
          progression: 50
        },
        {
          titre: 'Sensibilisation environnementale',
          description: 'Éducation communautaire sur la protection de l\'environnement',
          statut: 'termine',
          progression: 100
        },
        {
          titre: 'Création de pépinières',
          description: 'Établissement de pépinières communautaires d\'arbres',
          statut: 'planifie',
          progression: 20
        }
      ],
      impact: {
        description: 'Amélioration de la couverture forestière et réduction de l\'empreinte carbone des communautés',
        temoignage: {
          texte: "Nos forêts renaissent grâce aux actions de BOLAMU. Les jeunes apprennent maintenant l'importance de protéger notre environnement.",
          auteur: "Chef MOUKALA",
          fonction: "Chef traditionnel, Kinkala"
        }
      }
    },
    {
      id: 'economie',
      nom: 'Développement Économique',
      icon: Briefcase,
      couleur: 'from-orange-500 to-orange-600',
      description: 'Autonomisation économique et entrepreneuriat',
      objectifPrincipal: 'Créer des opportunités économiques durables',
      beneficiaires: '800+ entrepreneurs',
      budget: '150,000 USD',
      duree: '2020-2025',
      zones: ['Zones urbaines', 'Marchés locaux', 'Coopératives rurales'],
      partenaires: ['Banque Mondiale', 'ONU Femmes', 'Secteur privé local'],
      resultats: [
        { indicateur: 'Microentreprises créées', valeur: '120', unite: 'entreprises' },
        { indicateur: 'Personnes formées', valeur: '650', unite: 'bénéficiaires' },
        { indicateur: 'Emplois créés', valeur: '300', unite: 'postes' },
        { indicateur: 'Crédits accordés', valeur: '85', unite: 'financements' }
      ],
      activites: [
        {
          titre: 'Formation en entrepreneuriat',
          description: 'Modules de formation en création et gestion d\'entreprise',
          statut: 'en_cours',
          progression: 80
        },
        {
          titre: 'Microfinance et crédit',
          description: 'Octroi de microcrédits aux porteurs de projets viables',
          statut: 'en_cours',
          progression: 60
        },
        {
          titre: 'Création de coopératives',
          description: 'Appui à la création de groupements économiques',
          statut: 'termine',
          progression: 100
        },
        {
          titre: 'Accompagnement post-création',
          description: 'Suivi et conseil aux nouvelles entreprises',
          statut: 'planifie',
          progression: 30
        }
      ],
      impact: {
        description: 'Amélioration significative des revenus et de l\'autonomie économique des bénéficiaires',
        temoignage: {
          texte: "Grâce au microcrédit et à la formation, j'ai pu créer mon atelier de couture. Aujourd'hui, j'emploie 4 personnes de mon quartier.",
          auteur: "Sylvie MBEMBA",
          fonction: "Entrepreneure, Ouenzé"
        }
      }
    },
    {
      id: 'infrastructure',
      nom: 'Infrastructure Sociale',
      icon: Building,
      couleur: 'from-purple-500 to-purple-600',
      description: 'Amélioration des infrastructures de base',
      objectifPrincipal: 'Faciliter l\'accès aux services essentiels',
      beneficiaires: '3,200+ personnes',
      budget: '200,000 USD',
      duree: '2019-2024',
      zones: ['Villages ruraux', 'Quartiers périurbains', 'Communautés isolées'],
      partenaires: ['Banque Africaine de Développement', 'Gouvernement local'],
      resultats: [
        { indicateur: 'Puits d\'eau forés', valeur: '12', unite: 'ouvrages' },
        { indicateur: 'Kilomètres de routes', valeur: '25', unite: 'km' },
        { indicateur: 'Centres communautaires', valeur: '6', unite: 'bâtiments' },
        { indicateur: 'Foyers raccordés', valeur: '450', unite: 'connexions' }
      ],
      activites: [
        {
          titre: 'Forage de puits d\'eau potable',
          description: 'Installation de points d\'eau sécurisés dans les villages',
          statut: 'en_cours',
          progression: 85
        },
        {
          titre: 'Réhabilitation de routes rurales',
          description: 'Amélioration de l\'accès aux communautés isolées',
          statut: 'en_cours',
          progression: 70
        },
        {
          titre: 'Construction de centres communautaires',
          description: 'Édification d\'espaces multifonctionnels pour les communautés',
          statut: 'termine',
          progression: 100
        },
        {
          titre: 'Électrification rurale',
          description: 'Extension du réseau électrique vers les zones non couvertes',
          statut: 'planifie',
          progression: 35
        }
      ],
      impact: {
        description: 'Amélioration drastique de l\'accès aux services de base et de la qualité de vie',
        temoignage: {
          texte: "Depuis que nous avons de l'eau potable au village, les maladies ont diminué et nos enfants peuvent mieux étudier le soir grâce à l'électricité.",
          auteur: "Jacques MOUSSAVOU",
          fonction: "Président du comité de développement"
        }
      }
    },
    {
      id: 'femmes',
      nom: 'Autonomisation des Femmes',
      icon: Users,
      couleur: 'from-pink-500 to-pink-600',
      description: 'Leadership féminin et égalité des genres',
      objectifPrincipal: 'Renforcer le rôle des femmes dans le développement',
      beneficiaires: '1,200+ femmes',
      budget: '85,000 USD',
      duree: '2021-2025',
      zones: ['Toutes nos zones d\'intervention'],
      partenaires: ['ONU Femmes', 'Ministère de la Femme', 'Organisations féminines'],
      resultats: [
        { indicateur: 'Femmes formées en leadership', valeur: '250', unite: 'personnes' },
        { indicateur: 'Groupements féminins créés', valeur: '18', unite: 'organisations' },
        { indicateur: 'Femmes en position de décision', valeur: '65', unite: 'leaders' },
        { indicateur: 'Activités génératrices de revenus', valeur: '180', unite: 'projets' }
      ],
      activites: [
        {
          titre: 'Formation en leadership féminin',
          description: 'Renforcement des capacités de leadership des femmes',
          statut: 'en_cours',
          progression: 75
        },
        {
          titre: 'Création d\'associations féminines',
          description: 'Appui à l\'organisation et structuration des groupements',
          statut: 'en_cours',
          progression: 80
        },
        {
          titre: 'Sensibilisation sur les droits',
          description: 'Éducation sur les droits des femmes et l\'égalité des genres',
          statut: 'termine',
          progression: 100
        },
        {
          titre: 'Mentorat et accompagnement',
          description: 'Programme de mentorat pour femmes entrepreneures',
          statut: 'planifie',
          progression: 25
        }
      ],
      impact: {
        description: 'Augmentation significative de la participation des femmes dans les instances de décision',
        temoignage: {
          texte: "Je suis maintenant présidente de notre coopérative agricole. La formation m'a donné la confiance nécessaire pour diriger et défendre nos intérêts.",
          auteur: "Claudine NGOMA",
          fonction: "Présidente de coopérative, Kinkala"
        }
      }
    }
  ];

  const programmeActif = programmes.find(p => p.id === activeProgramme) || programmes[0];

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'termine': return 'text-green-600 bg-green-100';
      case 'en_cours': return 'text-blue-600 bg-blue-100';
      case 'planifie': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatutText = (statut: string) => {
    switch (statut) {
      case 'termine': return 'Terminé';
      case 'en_cours': return 'En cours';
      case 'planifie': return 'Planifié';
      default: return 'Inconnu';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <HeaderWithHero 
        title="Nos Programmes"
        subtitle="Six programmes sectoriels pour un développement intégré et durable"
      />

      {/* Vue d'ensemble */}
      <section className="py-20 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Vue d'ensemble de nos programmes</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Une approche holistique du développement à travers six secteurs d'intervention complémentaires
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {programmes.map((programme, index) => (
              <motion.div
                key={programme.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center cursor-pointer hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveProgramme(programme.id)}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <programme.icon className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-semibold mb-2">{programme.nom}</h3>
                <p className="text-xs opacity-80">{programme.beneficiaires}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation des programmes */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {programmes.map((programme) => (
              <motion.button
                key={programme.id}
                onClick={() => setActiveProgramme(programme.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeProgramme === programme.id
                    ? `bg-gradient-to-r ${programme.couleur} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <programme.icon className="w-5 h-5" />
                <span className="font-medium">{programme.nom}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Détail du programme actif */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* En-tête du programme */}
          <motion.div
            className="mb-16"
            key={programmeActif.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${programmeActif.couleur} rounded-2xl flex items-center justify-center text-white`}>
                    <programmeActif.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{programmeActif.nom}</h2>
                    <p className="text-gray-600">{programmeActif.description}</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-blue-900 mb-2">Objectif principal</h3>
                  <p className="text-blue-800">{programmeActif.objectifPrincipal}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Zones d'intervention</h4>
                    <ul className="space-y-1">
                      {programmeActif.zones.map((zone, index) => (
                        <li key={index} className="flex items-center text-gray-700 text-sm">
                          <MapPin className="w-4 h-4 text-orange-500 mr-2" />
                          {zone}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Partenaires clés</h4>
                    <ul className="space-y-1">
                      {programmeActif.partenaires.map((partenaire, index) => (
                        <li key={index} className="flex items-center text-gray-700 text-sm">
                          <Users className="w-4 h-4 text-blue-500 mr-2" />
                          {partenaire}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Informations clés</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Bénéficiaires</span>
                    <span className="font-semibold text-green-600">{programmeActif.beneficiaires}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Budget total</span>
                    <span className="font-semibold text-blue-600">{programmeActif.budget}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Période</span>
                    <span className="font-semibold text-purple-600">{programmeActif.duree}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Résultats */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Résultats obtenus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programmeActif.resultats.map((resultat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-3xl font-bold text-[#ff6219] mb-2">{resultat.valeur}</div>
                  <div className="text-gray-600 text-sm mb-1">{resultat.indicateur}</div>
                  <div className="text-gray-500 text-xs">({resultat.unite})</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Activités */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Activités principales</h3>
            <div className="space-y-6">
              {programmeActif.activites.map((activite, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{activite.titre}</h4>
                      <p className="text-gray-700">{activite.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatutColor(activite.statut)}`}>
                      {getStatutText(activite.statut)}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">Progression :</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${programmeActif.couleur} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${activite.progression}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{activite.progression}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Impact et témoignage */}
          <motion.div
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact et témoignage</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Mesure d'impact</h4>
                <p className="text-gray-700 mb-4">{programmeActif.impact.description}</p>
                <Link href="/impact" className="inline-flex items-center space-x-2 text-[#ff6219] font-medium hover:underline">
                  <TrendingUp className="w-4 h-4" />
                  <span>Voir tous nos indicateurs d'impact</span>
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-full flex items-center justify-center text-white font-bold">
                    {programmeActif.impact.temoignage.auteur.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-gray-700 italic mb-3">
                      "{programmeActif.impact.temoignage.texte}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-gray-900">{programmeActif.impact.temoignage.auteur}</div>
                      <div className="text-sm text-gray-600">{programmeActif.impact.temoignage.fonction}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-gradient-to-br from-[#ff6219]/5 to-[#6ad4fe]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Target className="w-16 h-16 text-[#ff6219] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rejoignez nos programmes
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Que vous soyez particulier, entreprise ou organisation, il existe plusieurs moyens 
              de participer à nos programmes de développement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/benevolat">
                <motion.button
                  className="bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-5 h-5" />
                  <span>Devenir bénévole</span>
                </motion.button>
              </Link>
              
              <Link href="/don">
                <motion.button
                  className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 hover:bg-gray-50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Award className="w-5 h-5" />
                  <span>Soutenir financièrement</span>
                </motion.button>
              </Link>
              
              <Link href="/partenaires">
                <motion.button
                  className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 hover:bg-gray-50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-5 h-5" />
                  <span>Partenariat</span>
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