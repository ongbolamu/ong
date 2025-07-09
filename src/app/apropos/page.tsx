'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Users, Globe, Shield, Leaf, GraduationCap, Award, Target, Eye,
  Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building, 
  Facebook, Twitter, Linkedin, Instagram 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';

export default function APropos() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
    type: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Message envoyé:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      sujet: '',
      message: '',
      type: 'general'
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse principale',
      details: [
        'Avenue Félix Éboué, Quartier Poto-Poto',
        'BP 1234, Brazzaville',
        'République du Congo'
      ],
      color: 'from-[#ff6219] to-[#ff8a4a]'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: [
        '+242 06 123 45 67',
        '+242 05 987 65 43',
        'Lundi - Vendredi: 8h - 17h'
      ],
      color: 'from-[#6ad4fe] to-[#4fc3f7]'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'contact@ongbolamu.org',
        'info@ongbolamu.org',
        'partenariats@ongbolamu.org'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: [
        'Lundi - Vendredi: 8h00 - 17h00',
        'Samedi: 9h00 - 13h00',
        'Dimanche: Fermé'
      ],
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/ongbolamu', color: 'hover:text-blue-600' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/ongbolamu', color: 'hover:text-blue-400' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/company/ongbolamu', color: 'hover:text-blue-700' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/ongbolamu', color: 'hover:text-pink-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-50">
      <HeaderWithHero 
        title="À Propos & Contact"
        subtitle="Découvrez notre histoire et restons connectés"
      />
      
      <div className="pt-24">{/* Espace pour le header fixe */}</div>

      {/* Histoire Section - Design Amélioré */}
      <section id="histoire" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Particules de fond animées */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* En-tête de section avec design moderne */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Notre Parcours</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              animate={{
                backgroundImage: [
                  'linear-gradient(135deg, #ff6219, #6ad4fe, #15803d)',
                  'linear-gradient(135deg, #6ad4fe, #15803d, #ff6219)',
                  'linear-gradient(135deg, #15803d, #ff6219, #6ad4fe)',
                  'linear-gradient(135deg, #ff6219, #6ad4fe, #15803d)'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200% 200%'
              }}
            >
              📖 Notre Histoire
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Découvrez l'histoire de l'ONG BOLAMU et notre engagement pour le développement du Congo
            </motion.p>
          </motion.div>

          {/* Contenu principal avec design moderne */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texte principal avec style amélioré */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heart className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos Origines</h3>
                <p className="text-gray-600 leading-relaxed">
                  L'ONG BOLAMU a été fondée à Brazzaville par un groupe de citoyens engagés, 
                  animés par la volonté de contribuer activement au développement de leur communauté 
                  et du Congo dans son ensemble.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-[#6ad4fe] to-[#15803d] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Globe className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Signification de "BOLAMU"</h3>
                <p className="text-gray-600 leading-relaxed">
                  Le nom "BOLAMU" trouve ses racines dans la langue lingala et signifie <strong className="text-[#ff6219]">"Le bien commun"</strong>, 
                  reflétant parfaitement notre philosophie de travail collaboratif et de solidarité communautaire.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-[#15803d] to-[#ff6219] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Approche</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous avons développé une approche holistique du développement, 
                  intégrant les dimensions sociale, économique et environnementale pour assurer 
                  un impact durable et significatif dans les communautés que nous servons.
                </p>
              </div>
            </motion.div>
            
            {/* Timeline des étapes clés avec design moderne */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/30"
            >
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-8 text-center"
                animate={{
                  backgroundImage: [
                    'linear-gradient(135deg, #ff6219, #6ad4fe)',
                    'linear-gradient(135deg, #6ad4fe, #15803d)',
                    'linear-gradient(135deg, #15803d, #ff6219)',
                    'linear-gradient(135deg, #ff6219, #6ad4fe)'
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  backgroundSize: '200% 200%'
                }}
              >
                ✨ Nos Étapes Clés
              </motion.h3>
              
              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Fondation",
                    description: "Création de l'ONG à Brazzaville avec une vision claire du développement communautaire",
                    color: "from-[#ff6219] to-[#ff8a4a]",
                    icon: Building
                  },
                  {
                    step: 2,
                    title: "Premiers projets",
                    description: "Lancement des premières initiatives dans les domaines de l'éducation et de la santé",
                    color: "from-[#6ad4fe] to-[#4fc3f7]",
                    icon: GraduationCap
                  },
                  {
                    step: 3,
                    title: "Expansion",
                    description: "Extension de nos activités à plusieurs communautés et diversification de nos programmes",
                    color: "from-[#15803d] to-[#22c55e]",
                    icon: Globe
                  },
                  {
                    step: 4,
                    title: "Reconnaissance",
                    description: "Obtention de reconnaissances officielles et développement de partenariats stratégiques",
                    color: "from-purple-600 to-purple-400",
                    icon: Award
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    className="flex items-start space-x-6 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-bold text-gray-400">ÉTAPE {item.step}</span>
                        <div className="h-px bg-gradient-to-r from-gray-300 to-transparent flex-1"></div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Citation inspirante */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/30 max-w-4xl mx-auto">
              <motion.blockquote
                className="text-2xl md:text-3xl font-light italic text-gray-700 mb-6"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(255, 98, 25, 0.3)',
                    '0 0 20px rgba(106, 212, 254, 0.3)',
                    '0 0 10px rgba(21, 128, 61, 0.3)',
                    '0 0 10px rgba(255, 98, 25, 0.3)'
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                "BOLAMU signifie 'Le bien commun' - c'est ensemble que nous construisons un avenir meilleur pour tous."
              </motion.blockquote>
              <div className="flex items-center justify-center space-x-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-left">
                  <p className="text-[#ff6219] font-bold">Équipe Fondatrice</p>
                  <p className="text-gray-500 text-sm">ONG BOLAMU</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section id="valeurs" className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              animate={{
                backgroundImage: [
                  'linear-gradient(135deg, #ff6219, #6ad4fe)',
                  'linear-gradient(135deg, #6ad4fe, #15803d)',
                  'linear-gradient(135deg, #15803d, #ff6219)',
                  'linear-gradient(135deg, #ff6219, #6ad4fe)'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200% 200%'
              }}
            >
              Nos Valeurs Fondamentales
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et définissent notre identité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Solidarité</h3>
              <p className="text-gray-600">
                Unis dans l'action pour le bien commun, nous croyons en la force de l'unité 
                et de l'entraide mutuelle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#6ad4fe] to-[#ff6219] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entraide</h3>
              <p className="text-gray-600">
                Le soutien mutuel et la collaboration sont au cœur de notre approche 
                du développement communautaire.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dignité Humaine</h3>
              <p className="text-gray-600">
                Le respect de la personne humaine dans toute sa dimension 
                guide chacune de nos interventions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-[#6ad4fe] rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Développement Durable</h3>
              <p className="text-gray-600">
                Nous œuvrons pour un avenir responsable et équitable, 
                préservant les ressources pour les générations futures.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Notre Équipe */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div className="flex items-center justify-center mb-8">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-[#ff6219] via-[#6ad4fe] to-[#15803d] rounded-full flex items-center justify-center mr-6 shadow-2xl"
                whileInView={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <Users className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h2 
                className="text-4xl md:text-6xl font-bold"
                whileInView={{ y: [-20, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  background: 'linear-gradient(135deg, #ff6219 0%, #6ad4fe 50%, #15803d 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
              >
                Notre Équipe
              </motion.h2>
            </motion.div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez les visages passionnés qui donnent vie à notre mission et œuvrent 
              quotidiennement pour le développement du Congo.
            </p>
          </motion.div>

          {/* Section Bureau Exécutif */}
          <div className="mb-16">
            <motion.div className="text-center mb-8">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-2"
                whileInView={{ scale: [0.9, 1.1, 1] }}
                transition={{ duration: 0.8 }}
                style={{
                  background: 'linear-gradient(135deg, #ff6219 0%, #6ad4fe 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                🏛️ Bureau Exécutif
              </motion.h3>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] mx-auto rounded-full"
                whileInView={{ width: [0, 96] }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Membre 1 - Arcanchel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src="/images/Arcanchel.jpg"
                    alt="Arcanchel - Membre de l'équipe ONG BOLAMU"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Arcanchel Feralin NGUEWOA</h3>
                    <p className="text-sm opacity-90">President</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm">
                    Engagé dans le développement communautaire et la promotion de l'éducation.
                  </p>
                </div>
              </motion.div>

              {/* Membre 2 - Allegresse */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src="/images/Allegresse.jpg"
                    alt="Allegresse - Membre de l'équipe ONG BOLAMU"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Allegresse Merphy NKOUKA</h3>
                    <p className="text-sm opacity-90">Vice-President</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm">
                    Spécialisé dans la gestion de projets et le développement durable.
                  </p>
                </div>
              </motion.div>

              {/* Membre 3 - Rych */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src="/images/Rych.jpg"
                    alt="Rych - Membre de l'équipe ONG BOLAMU"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Rych Belon BANZOUZI</h3>
                    <p className="text-sm opacity-90">Secretaire General</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm">
                    Ingénieur en informatique, Data Analyst et Développeur
                  </p>
                </div>
              </motion.div>

              {/* Membre 4 - Exaucé */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src="/images/Exaucé.jpg"
                    alt="Exaucé - Membre de l'équipe ONG BOLAMU"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Exaucé Gloire PEMBELE-TIBA</h3>
                    <p className="text-sm opacity-90">Trésorier</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm">
                    Engagez dans la gestion de ressource.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Section Membres Actifs */}
          <div className="mb-16">
            <motion.div className="text-center mb-8">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-2"
                whileInView={{ scale: [0.9, 1.1, 1] }}
                transition={{ duration: 0.8 }}
                style={{
                  background: 'linear-gradient(135deg, #15803d 0%, #6ad4fe 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                ⭐ Membres Actifs
              </motion.h3>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-[#15803d] to-[#6ad4fe] mx-auto rounded-full"
                whileInView={{ width: [0, 96] }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Membre Actif 1 - KOUMBOU BANTSIMBA Lys Parfait */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src="/images/Lys.png"
                    alt="Lys Parfait - Membre actif ONG BOLAMU"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-white">
                    <h4 className="text-sm font-bold">Lys Parfait</h4>
                    <p className="text-xs opacity-90">Auditeur interne</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-xs">
                    KOUMBOU BANTSIMBA Lys Parfait
                  </p>
                </div>
              </motion.div>

              {/* Membre Actif 2 - BIKOUTA Stive Sylvel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <div className="w-full h-full bg-gradient-to-br from-[#15803d] to-[#c2410c] flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <h4 className="text-sm font-bold">Stive Sylvel</h4>
                    <p className="text-xs opacity-90">Staticien</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-xs">
                    BIKOUTA Stive Sylvel
                  </p>
                </div>
              </motion.div>

              {/* Membre Actif 3 - MABIALA-NZITA Daniel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <div className="w-full h-full bg-gradient-to-br from-[#c2410c] to-[#0369a1] flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <h4 className="text-sm font-bold">Daniel</h4>
                    <p className="text-xs opacity-90">Membre Actif</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-xs">
                    MABIALA-NZITA Daniel
                  </p>
                </div>
              </motion.div>

              {/* Membre Actif 4 - NGUEMBO Thierry-Ulrich */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <h4 className="text-sm font-bold">Thierry-Ulrich</h4>
                    <p className="text-xs opacity-90">Membre Actif</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-xs">
                    NGUEMBO Thierry-Ulrich
                  </p>
                </div>
              </motion.div>

              {/* Membre Actif 5 - LOUZOLO Bienvenu Christ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <div className="w-full h-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <h4 className="text-sm font-bold">Bienvenu Christ</h4>
                    <p className="text-xs opacity-90">Membre Actif</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-xs">
                    LOUZOLO Bienvenu Christ
                  </p>
                </div>
              </motion.div>

              {/* Membre Actif 6 - MAHOUNGOU Dohm */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src="/images/Dohm.jpg"
                    alt="Dohm - Membre actif ONG BOLAMU"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-white">
                    <h4 className="text-sm font-bold">Dohm</h4>
                    <p className="text-xs opacity-90">Conseiller financier interne</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-xs">
                    MAHOUNGOU Dohm
                  </p>
                </div>
              </motion.div>

              {/* Membre Actif 7 - MAFOUTA Christian */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <h4 className="text-sm font-bold">Christian</h4>
                    <p className="text-xs opacity-90">Statitien</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-xs">
                    MAFOUTA Christian
                  </p>
                </div>
              </motion.div>

              {/* Membre Actif 8 - MABADI ADICOLLE Bienvenu Christ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <h4 className="text-sm font-bold">Bienvenu Christ</h4>
                    <p className="text-xs opacity-90">Membre Actif</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-xs">
                    MABADI ADICOLLE Bienvenu Christ
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Call to action pour rejoindre l'équipe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-[#0369a1] to-[#15803d] rounded-3xl p-8 text-white">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-4"
                whileInView={{ y: [-10, 0], opacity: [0, 1] }}
                transition={{ duration: 0.6 }}
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'white',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                🤝 Rejoignez Notre Équipe
              </motion.h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Vous partagez nos valeurs et souhaitez contribuer au développement du Congo ? 
                Découvrez nos opportunités de bénévolat et d'engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/benevolat"
                  className="bg-white text-[#0369a1] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  Devenir bénévole
                </Link>
                <Link
                  href="/adhesion"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#0369a1] transition-colors"
                >
                  Devenir membre
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-2xl flex items-center justify-center shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] bg-clip-text text-transparent">
                Contactez-Nous
              </h2>
            </motion.div>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question, 
              suggestion ou collaboration.
            </p>
          </motion.div>

          {/* Informations de contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Formulaire de contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Formulaire */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] rounded-full flex items-center justify-center mr-4">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold"
                  whileInView={{ x: [-20, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: 'linear-gradient(135deg, #ff6219 0%, #6ad4fe 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  ✉️ Envoyez-nous un message
                </motion.h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-300"
                        placeholder="Votre nom complet"
                      />
                      <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-300"
                        placeholder="votre@email.com"
                      />
                      <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-300"
                        placeholder="+242 XX XXX XX XX"
                      />
                      <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">
                      Type de demande
                    </label>
                    <div className="relative">
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-300 appearance-none bg-white"
                      >
                        <option value="general">Question générale</option>
                        <option value="partenariat">Partenariat</option>
                        <option value="don">Don / Donation</option>
                        <option value="benevole">Bénévolat</option>
                        <option value="presse">Presse / Média</option>
                      </select>
                      <Building className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="sujet"
                    name="sujet"
                    required
                    value={formData.sujet}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-300"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Décrivez votre demande en détail..."
                    />
                    <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Informations supplémentaires */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Réseaux sociaux */}
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Suivez-nous</h3>
                <p className="text-gray-600 mb-6">
                  Restez informé de nos actions et participez à notre communauté sur les réseaux sociaux.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Urgences */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-4">Urgences humanitaires</h3>
                <p className="text-red-700 mb-4">
                  Pour les situations d'urgence nécessitant une intervention immédiate :
                </p>
                <div className="space-y-2">
                  <p className="text-red-800 font-semibold">📞 +242 06 123 45 67</p>
                  <p className="text-red-800 font-semibold">📧 urgence@ongbolamu.org</p>
                </div>
                <p className="text-sm text-red-600 mt-4">
                  Disponible 24h/24 pour les urgences humanitaires
                </p>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="mb-6 opacity-90">
                  Recevez nos actualités et découvrez l'impact de nos actions.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-4 py-3 rounded-l-xl text-gray-900 focus:outline-none"
                  />
                  <button className="bg-white text-[#ff6219] px-6 py-3 rounded-r-xl font-semibold hover:bg-gray-100 transition-colors">
                    S'abonner
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 