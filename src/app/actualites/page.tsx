'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Calendar, User, Tag, Search, Filter, Eye, Heart, Share2, Clock, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';

export default function ActualitesPage() {
  const [activeCategory, setActiveCategory] = useState('tous');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'tous', label: 'Tous les articles', count: 15 },
    { id: 'projets', label: 'Projets', count: 6 },
    { id: 'evenements', label: 'Événements', count: 4 },
    { id: 'partenariats', label: 'Partenariats', count: 3 },
    { id: 'impact', label: 'Impact', count: 2 }
  ];

  const articles = [
    {
      id: 1,
      title: 'Inauguration du nouveau centre de formation à Pointe-Noire',
      excerpt: 'Un nouveau centre de formation professionnelle a été inauguré pour répondre aux besoins des jeunes de la région.',
      content: 'Le centre offrira des formations en informatique, couture, mécanique et agriculture moderne...',
      category: 'projets',
      author: 'Grace LOUBAKI',
      date: '2024-01-15',
      readTime: '5 min',
      image: '/images/placeholder-project.svg',
      tags: ['Formation', 'Jeunesse', 'Pointe-Noire'],
      featured: true,
      views: 245,
      likes: 18
    },
    {
      id: 2,
      title: 'Partenariat avec l\'UNICEF pour l\'éducation des filles',
      excerpt: 'Un nouveau partenariat stratégique pour améliorer l\'accès à l\'éducation des jeunes filles rurales.',
      content: 'Ce partenariat vise à construire 5 nouvelles écoles et former 50 enseignants...',
      category: 'partenariats',
      author: 'Dr. Marie BOLAMU',
      date: '2024-01-10',
      readTime: '3 min',
      image: '/images/placeholder-project.svg',
      tags: ['UNICEF', 'Éducation', 'Filles'],
      featured: false,
      views: 189,
      likes: 24
    },
    {
      id: 3,
      title: 'Assemblée générale annuelle 2024',
      excerpt: 'Retour sur notre assemblée générale qui s\'est tenue le 20 décembre 2023 à Brazzaville.',
      content: 'L\'assemblée a réuni plus de 100 participants pour faire le bilan de l\'année...',
      category: 'evenements',
      author: 'Jean-Claude NKOUNKOU',
      date: '2023-12-22',
      readTime: '4 min',
      image: '/images/placeholder-project.svg',
      tags: ['Assemblée', 'Bilan', 'Gouvernance'],
      featured: false,
      views: 156,
      likes: 12
    },
    {
      id: 4,
      title: '2,500 personnes bénéficient de nos programmes de santé',
      excerpt: 'Bilan de nos actions dans le domaine de la santé communautaire en 2023.',
      content: 'Nos programmes de santé ont touché 2,500 personnes dans 15 communautés...',
      category: 'impact',
      author: 'Sylvie MBEMBA',
      date: '2023-12-15',
      readTime: '6 min',
      image: '/images/placeholder-project.svg',
      tags: ['Santé', 'Impact', 'Communauté'],
      featured: false,
      views: 298,
      likes: 31
    },
    {
      id: 5,
      title: 'Formation en entrepreneuriat pour 150 jeunes',
      excerpt: 'Un programme intensif de formation en entrepreneuriat vient de se terminer avec succès.',
      content: 'Le programme a formé 150 jeunes aux techniques de création et gestion d\'entreprise...',
      category: 'projets',
      author: 'Paul MAKAYA',
      date: '2023-12-08',
      readTime: '4 min',
      image: '/images/placeholder-project.svg',
      tags: ['Entrepreneuriat', 'Jeunesse', 'Formation'],
      featured: false,
      views: 167,
      likes: 19
    },
    {
      id: 6,
      title: 'Campagne de sensibilisation sur l\'hygiène',
      excerpt: 'Une campagne de sensibilisation sur l\'hygiène et la prévention des maladies dans 10 villages.',
      content: 'La campagne a sensibilisé plus de 1,000 personnes sur les bonnes pratiques d\'hygiène...',
      category: 'projets',
      author: 'Grace LOUBAKI',
      date: '2023-11-30',
      readTime: '3 min',
      image: '/images/placeholder-project.svg',
      tags: ['Santé', 'Sensibilisation', 'Hygiène'],
      featured: false,
      views: 134,
      likes: 15
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'tous' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-cyan-50">
      <HeaderWithHero 
        title="Actualités"
        subtitle="Suivez nos dernières nouvelles et réalisations"
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
                <Newspaper className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] bg-clip-text text-transparent">
                Actualités
              </h1>
            </motion.div>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Restez informés de nos dernières actions, événements et réalisations. 
              Découvrez l'impact de notre travail au quotidien.
            </p>

            {/* Lien vers la section actualités de la page d'accueil */}
            <motion.div
              className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-center space-x-4">
                <Home className="w-8 h-8 text-blue-600" />
                <div className="text-center">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">
                    Découvrez nos actualités sur la page d'accueil
                  </h3>
                  <p className="text-blue-700 text-sm mb-4">
                    Retrouvez un aperçu de nos dernières actualités directement intégrées à notre page d'accueil
                  </p>
                  <Link href="/#actualites">
                    <motion.button
                      className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Voir les actualités
                      <ArrowRight className="w-4 h-4 inline ml-2" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Barre de recherche et filtres */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-[#ff6219] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article en vedette */}
      {featuredArticle && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-white rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full bg-gradient-to-br from-[#ff6219]/10 to-[#6ad4fe]/10">
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff6219] text-white px-3 py-1 rounded-full text-sm font-bold">
                      À la une
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="w-24 h-24 text-gray-300" />
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-orange-100 text-[#ff6219] px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === featuredArticle.category)?.label}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredArticle.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{featuredArticle.readTime}</span>
                      </div>
                    </div>

                    <motion.div
                      className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      Article complet bientôt disponible
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Grille d'articles */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 bg-gradient-to-br from-[#ff6219]/10 to-[#6ad4fe]/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-gray-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#ff6219] px-2 py-1 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === article.category)?.label}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                    <span>•</span>
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#ff6219] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{article.author}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Eye className="w-4 h-4" />
                        <span className="text-xs">{article.views}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">{article.likes}</span>
                      </div>
                      <button 
                        className="text-gray-500 hover:text-[#ff6219] transition-colors"
                        title="Partager l'article"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Précédent
              </button>
              <button className="px-4 py-2 bg-[#ff6219] text-white rounded-lg">1</button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Suivant
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-[#ff6219] to-[#6ad4fe]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Newspaper className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Restez Informés
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités 
              directement dans votre boîte mail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                className="bg-white text-[#ff6219] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                S'abonner
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 