'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, Upload, Check, Star, Users, Heart, Award, Mail, Phone, MapPin, Calendar, FileText, Info, ChevronDown, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';

// Composant FAQ Item avec accordéon
function FAQItem({ faq, index }: { faq: { question: string; answer: string; icon: string }, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.button
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center space-x-4">
          <div className="text-2xl">{faq.icon}</div>
          <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#ff6219]" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="pl-12 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function AdhesionPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    ville: '',
    pays: '',
    profession: '',
    motivation: '',
    competences: '',
    disponibilite: '',
    typeAdhesion: 'membre',
    accepteConditions: false
  });

  const [step, setStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log('Données du formulaire:', formData);
    console.log('Fichier uploadé:', uploadedFile);
  };

  const benefits = [
    {
      icon: Users,
      title: "Réseau professionnel",
      description: "Rejoignez une communauté de professionnels engagés pour le développement du Congo"
    },
    {
      icon: Heart,
      title: "Impact direct",
      description: "Participez concrètement à l'amélioration des conditions de vie des communautés"
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Gagnez en compétences à travers des projets et formations"
    },
    {
      icon: Star,
      title: "Reconnaissance",
      description: "Votre contribution sera reconnue et valorisée au sein de notre organisation"
    }
  ];

  const membershipTypes = [
    {
      type: 'membre',
      title: 'Membre Actif',
      price: '1,500 FCFA/Mois',
      description: 'Recommandé - Droit et Devoir',
      isRecommended: true,
      features: [
        'Participation aux assemblées générales',
        'Etre renumeré pour certains activités',
        'Participer aux activités sur le terrain',
        'Recevoir de l\'assistance sociale'
      ]
    },
    {
      type: 'bienfaiteur',
      title: 'Membre Bienfaiteur',
      price: 'Gratuit',
      description: 'Droit et Devoir',
      isRecommended: false,
      features: [
        'Promouvoir l\'image de l\'organisation',
        'Participer aux evenments majeurs de l\'organisation',
        'Percevoir des per diem lors des activités',
        'Servir de relais ou de facilitateur',
        'Faire preuve de loyauté'
      ]
    },
    {
      type: 'honoraire',
      title: 'Membre Honoraire',
      price: 'Par nomination',
      description: 'Reconnaissance de contribution exceptionnelle',
      isRecommended: false,
      features: [
        'Reconnaissance des services rendus',
        'Appuis moral et financier',
        'Facilitateur de partenariats ou des financements grâce à leur carnet d\'adresses',
        'Notoriété et prestige'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-cyan-50">
      <HeaderWithHero 
        title="Devenir Membre"
        subtitle="Rejoignez notre mouvement pour le changement"
      />
      
      {/* Spacer pour compenser la navbar fixe */}
      <div className="h-20"></div>

      {/* Hero Section avec image de fond */}
      <section className="relative py-32 overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0">
          {/* Image de fond */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`
            }}
          />
          
          {/* Overlay dégradé avec nouvelle palette */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(135deg, rgba(3, 105, 161, 0.9), rgba(21, 128, 61, 0.8))',
                'linear-gradient(135deg, rgba(21, 128, 61, 0.9), rgba(196, 65, 12, 0.8))',
                'linear-gradient(135deg, rgba(196, 65, 12, 0.9), rgba(3, 105, 161, 0.8))',
                'linear-gradient(135deg, rgba(3, 105, 161, 0.9), rgba(21, 128, 61, 0.8))'
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Particules flottantes */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -80, -20],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.5]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 4
                }}
              />
            ))}
          </div>
        </div>

        {/* Contenu du hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-4 mb-8"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/30"
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <UserPlus className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(255,255,255,0.5)',
                    '0 0 40px rgba(255,255,255,0.8)',
                    '0 0 20px rgba(255,255,255,0.5)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Devenir Membre
              </motion.h1>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-8 bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Rejoignez notre communauté de changeurs et contribuez activement 
              au développement durable du Congo. Ensemble, bâtissons un avenir meilleur.
            </motion.p>

            {/* Call-to-action buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => {
                  document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-[#0369a1] px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center justify-center space-x-3 group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Adhérer Maintenant</span>
              </motion.button>
              
              <motion.button
                onClick={() => {
                  document.querySelector('.grid.grid-cols-1.md\\:grid-cols-3')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#15803d] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-green-700/25 transition-all duration-300 border-2 border-white/20"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(21, 128, 61, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Voir les Plans
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Pourquoi Nous <span className="text-[#0369a1]">Rejoindre ?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0369a1] to-[#15803d] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types d'adhésion */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Types d'<span className="text-[#0369a1]">Adhésion</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choisissez le niveau d'engagement qui correspond à vos aspirations et possibilités.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTypes.map((membership, index) => (
              <motion.div
                key={membership.type}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  membership.isRecommended ? 'ring-2 ring-[#0369a1] transform scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {membership.isRecommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#0369a1] text-white px-4 py-2 rounded-full text-sm font-bold">
                      Recommandé
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{membership.title}</h3>
                  <p className="text-3xl font-bold text-[#ff6219] mb-4">{membership.price}</p>
                  <p className="text-gray-600">{membership.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {membership.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, typeAdhesion: membership.type }));
                    document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 rounded-2xl font-bold transition-all duration-300 ${
                    membership.isRecommended
                      ? 'bg-[#0369a1] text-white hover:bg-[#0369a1]/90'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {membership.type === 'membre' ? 'Choisir ce plan' : 'Adhérer'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section FAQ - Questions fréquentes sur l'adhésion */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Questions <span className="text-[#ff6219]">Fréquentes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trouvez les réponses aux questions les plus courantes sur l'adhésion à notre organisation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* FAQ Accordéon */}
            <div className="space-y-6">
              {[
                {
                  question: "Quelles sont les conditions pour devenir membre ?",
                  answer: "Toute personne physique ou morale partageant ses buts, s'engageant à respecter les présents statuts et le règlement intérieur.",
                  icon: "👥"
                },
                {
                  question: "Qui dirige l'ONG BOLAMU ?",
                  answer: "Mr NGUEWOA Feralin Arcanchel est le dirigeant actuel",
                  icon: "⭐"
                },
                                  {
                    question: "Comment la gestion financière est-elle organisée ?",
                    answer: "Les ressources financières de l'ONG Bolamu sont déposées sur un compte bancaire ou auprès d'une institution de microfinance agréée. La gestion de ce compte est soumise à une double signature : La première, celle du Trésorier Général ; La seconde, celle d'un membre désigné par l'Assemblée Générale. Circuit des dépenses : Toute dépense engagée par l'ONG Bolamu doit obligatoirement suivre le circuit suivant : Identification du besoin ; Validation par le Trésorier Général ; Apposition du visa du Président de l'ONG Bolamu.",
                    icon: "🔄"
                  }
              ].map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} />
              ))}
            </div>

            {/* FAQ Accordéon - Suite */}
            <div className="space-y-6">
              {[
                {
                  question: "Comment puis-je m'impliquer concrètement ?",
                  answer: "Vous pouvez participer aux missions de terrain, aux actions de sensibilisation, aux collectes de fonds et aux formations",
                  icon: "🚀"
                },
                {
                  question: "Comment puis-je suivre l'impact de mes contributions ?",
                  answer: "L'ONG peut publier régulièrement : Des rapports trimestriels ou annuels avec des chiffres clés (bénéficiaires, zones couvertes, fonds utilisés). Des bilans de projets détaillant les actions menées grâce aux contributions. NB : Vous pouvez demandez à recevoir ces rapports par mail ou via un espace adhérent.",
                  icon: "📊"
                },
                                  {
                    question: "Comment peut-on perdre la qualité de membre ?",
                    answer: "La qualité de membre se perd par : Décès ; Démission adressée au President ; Radiation pour non-respect des statuts, règlement intérieur ou comportement préjudiciable à l'Organisation, prononcée par l'Assemblée Générale.",
                    icon: "📝"
                  }
              ].map((faq, index) => (
                <FAQItem key={index + 4} faq={faq} index={index + 4} />
              ))}
            </div>
          </div>

          {/* Contact pour questions supplémentaires */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#ff6219]/10 to-[#6ad4fe]/10 rounded-3xl p-8 border border-[#ff6219]/20">
              <MessageCircle className="w-12 h-12 text-[#ff6219] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Une question spécifique ?
              </h3>
              <p className="text-gray-600 mb-6">
                Notre équipe est là pour vous accompagner dans votre parcours d'adhésion.
              </p>
              <Link href="/apropos#contact">
                <motion.button
                  className="bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Nous contacter
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formulaire d'adhésion */}
      <section id="formulaire" className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Formulaire d'<span className="text-[#ff6219]">Adhésion</span>
              </h2>
              <p className="text-lg text-gray-600">
                Remplissez ce formulaire pour commencer votre parcours avec nous.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Étape 1: Informations personnelles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                    placeholder="Votre prénom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                    placeholder="+242 XX XX XX XX"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Adresse complète *
                  </label>
                  <input
                    type="text"
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                    placeholder="Votre adresse complète"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ville *
                  </label>
                  <input
                    type="text"
                    name="ville"
                    value={formData.ville}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                    placeholder="Brazzaville, Pointe-Noire..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pays *
                  </label>
                  <select
                    name="pays"
                    value={formData.pays}
                    onChange={handleInputChange}
                    required
                    aria-label="Sélectionnez votre pays"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Sélectionnez votre pays</option>
                    <option value="Congo">République du Congo</option>
                    <option value="RDC">République Démocratique du Congo</option>
                    <option value="France">France</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Profession *
                  </label>
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                    placeholder="Votre profession actuelle"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type d'adhésion *
                  </label>
                  <select
                    name="typeAdhesion"
                    value={formData.typeAdhesion}
                    onChange={handleInputChange}
                    required
                    aria-label="Sélectionnez votre type d'adhésion"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                  >
                    <option value="membre">Membre Actif (1,500 FCFA/Mois)</option>
                    <option value="bienfaiteur">Membre Bienfaiteur (Gratuit)</option>
                    <option value="honoraire">Membre Honoraire (Par nomination)</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Motivation *
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                    placeholder="Pourquoi souhaitez-vous rejoindre l'ONG BOLAMU ? Quelles sont vos motivations ?"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Compétences et expériences
                  </label>
                  <textarea
                    name="competences"
                    value={formData.competences}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                    placeholder="Décrivez vos compétences et expériences qui pourraient être utiles à l'ONG"
                  />
                </div>



                {/* Upload de photo */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Upload className="w-4 h-4 inline mr-2" />
                    Photo d'identité
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#ff6219] transition-colors duration-200">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="photo-upload"
                    />
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">
                        {uploadedFile ? uploadedFile.name : 'Cliquez pour télécharger votre photo'}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">JPG, PNG uniquement, max 2MB</p>
                    </label>
                  </div>
                </div>

                {/* Conditions */}
                <div className="md:col-span-2">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="accepteConditions"
                      checked={formData.accepteConditions}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-5 h-5 text-[#ff6219] border-gray-300 rounded focus:ring-[#ff6219]"
                    />
                    <span className="text-sm text-gray-700">
                      J'accepte les{' '}
                      <Link href="/mentions-legales" className="text-[#ff6219] hover:underline">
                        conditions d'adhésion
                      </Link>{' '}
                      et je m'engage à respecter les statuts et reglement interieur de l'ONG BOLAMU. *
                    </span>
                  </label>
                </div>
              </div>

              {/* Bouton de soumission */}
              <div className="text-center pt-8">
                <motion.button
                  type="submit"
                  className="bg-[#6ad4fe] text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!formData.accepteConditions}
                >
                  <UserPlus className="w-5 h-5 inline mr-2" />
                  Soumettre ma candidature
                </motion.button>
                
                <p className="text-sm text-gray-500 mt-4">
                  Votre candidature sera examinée sous 5 jours ouvrables.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 