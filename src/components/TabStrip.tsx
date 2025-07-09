'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, Zap, Shield, Calendar, User, Tag, Eye, Heart, Users, Globe, GraduationCap, Leaf, Award, MapPin, PieChart, FileText, Download, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TabStrip() {
  const [activeTab, setActiveTab] = useState('actualites');

  const tabs = [
    { 
      id: 'actualites', 
      label: 'Actualités', 
      icon: Newspaper,
      count: 15,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'actions', 
      label: 'Nos Actions', 
      icon: Zap,
      count: 25,
      color: 'from-orange-500 to-red-500'
    },
    { 
      id: 'transparence', 
      label: 'Transparence', 
      icon: Shield,
      count: 6,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // Données pour Actualités
  const actualites = [
    {
      id: 1,
      title: 'Inauguration du nouveau centre de formation à Pointe-Noire',
      excerpt: 'Un nouveau centre de formation professionnelle a été inauguré pour répondre aux besoins des jeunes de la région.',
      author: 'Grace LOUBAKI',
      date: '2024-01-15',
      readTime: '5 min',
      category: 'Projets',
      featured: true,
      views: 245,
      likes: 18
    },
    {
      id: 2,
      title: 'Partenariat avec l\'UNICEF pour l\'éducation des filles',
      excerpt: 'Un nouveau partenariat stratégique pour améliorer l\'accès à l\'éducation des jeunes filles rurales.',
      author: 'Dr. Marie BOLAMU',
      date: '2024-01-10',
      readTime: '3 min',
      category: 'Partenariats',
      featured: false,
      views: 189,
      likes: 24
    },
    {
      id: 3,
      title: '2,500 personnes bénéficient de nos programmes de santé',
      excerpt: 'Bilan de nos actions dans le domaine de la santé communautaire en 2023.',
      author: 'Sylvie MBEMBA',
      date: '2023-12-15',
      readTime: '6 min',
      category: 'Impact',
      featured: false,
      views: 298,
      likes: 31
    }
  ];

  // Données pour Actions
  const actions = [
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
      dateFin: "2023-06-30"
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
      dateFin: "2024-08-31"
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
      dateFin: "2024-12-31"
    }
  ];

  // Données pour Transparence
  const transparenceData = {
    financials: {
      budget: '45,000,000',
      depenses: '42,500,000',
      projets: '38,000,000',
      administration: '4,500,000',
      beneficiaires: '2,847',
      projetsRealises: 12
    },
    documents: [
      { title: 'Rapport Financier 2023', type: 'Rapport annuel', date: '2024-03-15', size: '2.4 MB' },
      { title: 'Audit Externe 2023', type: 'Audit', date: '2024-02-28', size: '1.8 MB' },
      { title: 'Rapport d\'Impact 2023', type: 'Impact', date: '2024-01-20', size: '3.2 MB' }
    ]
  };

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
      case 'education': return <GraduationCap className="w-5 h-5" />;
      case 'sante': return <Heart className="w-5 h-5" />;
      case 'environnement': return <Leaf className="w-5 h-5" />;
      case 'formation': return <Users className="w-5 h-5" />;
      case 'economie': return <Globe className="w-5 h-5" />;
      default: return <Award className="w-5 h-5" />;
    }
  };

  const renderActualites = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Dernières Actualités</h3>
          <p className="text-gray-600">Suivez nos dernières nouvelles et réalisations</p>
        </div>
        <Link href="/#actualites">
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tout
          </motion.button>
        </Link>
      </div>

      {/* Articles */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {actualites.map((article, index) => (
          <motion.div
            key={article.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {article.category}
                </span>
                {article.featured && (
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                    À la une
                  </span>
                )}
              </div>
              
              <h4 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h4>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{article.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-3 h-3" />
                    <span>{article.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderActions = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Nos Actions</h3>
          <p className="text-gray-600">Découvrez nos projets qui transforment des vies</p>
        </div>
        <Link href="/actions">
          <motion.button
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tout
          </motion.button>
        </Link>
      </div>

      {/* Nos Réalisations - Domaines d'action */}
      <div className="mb-12">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Nos Domaines d'Action</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Heart className="w-6 h-6" />,
              title: "Santé communautaire",
              description: "Améliorer l'accès aux soins de santé de base dans les communautés rurales",
              color: "from-green-400 to-emerald-600"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Éducation",
              description: "Construire des écoles et former les enseignants pour un meilleur accès à l'éducation",
              color: "from-blue-400 to-cyan-600"
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Environnement",
              description: "Protéger la biodiversité et promouvoir les énergies renouvelables",
              color: "from-purple-400 to-indigo-600"
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: "Formation professionnelle",
              description: "Former les jeunes aux métiers d'avenir pour lutter contre le chômage",
              color: "from-orange-400 to-red-600"
            },
            {
              icon: <Leaf className="w-6 h-6" />,
              title: "Développement rural",
              description: "Soutenir l'agriculture durable et l'élevage dans les zones rurales",
              color: "from-green-400 to-teal-600"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Autonomisation des femmes",
              description: "Promouvoir l'égalité des genres et l'entrepreneuriat féminin",
              color: "from-pink-400 to-rose-600"
            }
          ].map((domaine, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${domaine.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {domaine.icon}
                </div>
              </div>
              <h5 className="font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {domaine.title}
              </h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                {domaine.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 text-center shadow-lg">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-green-600" />
          </div>
          <h4 className="text-2xl font-bold text-gray-900">25</h4>
          <p className="text-gray-600 text-sm">Projets réalisés</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <h4 className="text-2xl font-bold text-gray-900">8,947</h4>
          <p className="text-gray-600 text-sm">Bénéficiaires</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-lg">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <MapPin className="w-6 h-6 text-purple-600" />
          </div>
          <h4 className="text-2xl font-bold text-gray-900">15</h4>
          <p className="text-gray-600 text-sm">Communautés</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-lg">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <TrendingUp className="w-6 h-6 text-orange-600" />
          </div>
          <h4 className="text-2xl font-bold text-gray-900">230M</h4>
          <p className="text-gray-600 text-sm">Budget total (FCFA)</p>
        </div>
      </div>

      {/* Projets récents */}
      <div>
        <h4 className="text-xl font-bold text-gray-900 mb-6">Projets Récents</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <motion.div
              key={action.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      {getDomainIcon(action.domaine)}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(action.statut)}`}>
                      {getStatusText(action.statut)}
                    </span>
                  </div>
                </div>
                
                <h4 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {action.titre}
                </h4>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {action.description}
                </p>
                
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3 h-3" />
                    <span>{action.localisation}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{action.beneficiaires} bénéficiaires</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-3 h-3" />
                      <span>{action.budget}$ USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderTransparence = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Transparence Financière</h3>
          <p className="text-gray-600">Découvrez notre gestion transparente et responsable</p>
        </div>
        <Link href="/transparence">
          <motion.button
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tout
          </motion.button>
        </Link>
      </div>

      {/* Données financières 2023 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <PieChart className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Budget 2023</h4>
              <p className="text-2xl font-bold text-blue-600">{transparenceData.financials.budget} FCFA</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Projets:</span>
              <span className="font-medium">{transparenceData.financials.projets} FCFA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Administration:</span>
              <span className="font-medium">{transparenceData.financials.administration} FCFA</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Impact 2023</h4>
              <p className="text-2xl font-bold text-green-600">{transparenceData.financials.beneficiaires}</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Bénéficiaires directs:</span>
              <span className="font-medium">{transparenceData.financials.beneficiaires}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Projets réalisés:</span>
              <span className="font-medium">{transparenceData.financials.projetsRealises}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Efficacité</h4>
              <p className="text-2xl font-bold text-purple-600">89.4%</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Fonds alloués aux projets:</span>
              <span className="font-medium">89.4%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Frais administratifs:</span>
              <span className="font-medium">10.6%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Documents */}
      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-4">Documents Publics</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {transparenceData.documents.map((doc, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <FileText className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-gray-900 mb-1 line-clamp-2">{doc.title}</h5>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{doc.type}</span>
                    <span>{doc.size}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{doc.date}</p>
                </div>
                <Download className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'actualites':
        return renderActualites();
      case 'actions':
        return renderActions();
      case 'transparence':
        return renderTransparence();
      default:
        return renderActualites();
    }
  };

  return (
    <div className="w-full">
      {/* Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-2xl p-2 shadow-lg">
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === tab.id
                    ? 'text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tab.color}`}
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex items-center space-x-3">
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    activeTab === tab.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 