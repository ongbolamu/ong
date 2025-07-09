'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart, Linkedin, Mail, MapPin, Calendar, Star, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';

export default function EquipePage() {
  const teamMembers = [
    {
      name: "NGUEWOA Feralin Arcanchel",
      role: "Président",
      bio: "Entrepreneur passionné, Feralin dirige l'ONG BOLAMU avec une vision claire du développement durable et de l'entraide communautaire au Congo.",
      expertise: ["Leadership", "Entrepreneuriat", "Stratégie"],
      experience: "Entrepreneur expérimenté",
      location: "Talangai, Brazzaville",
      phone: "06 987 23 23",
      address: "62 rue Tsaba Talangai",
      image: "/images/Arcanchel.jpg",
      social: {
        email: "president@ongbolamu.org",
        linkedin: "#"
      }
    },
    {
      name: "NKOUKA Merphy Allegresse",
      role: "Vice-Président",
      bio: "Jeune entrepreneur dynamique, Merphy apporte une vision moderne et innovante à la gestion des projets de l'ONG.",
      expertise: ["Entrepreneuriat", "Innovation", "Gestion de projets"],
      experience: "Entrepreneur innovant",
      location: "Mfilou, Brazzaville",
      phone: "06 849 22 15",
      address: "18 rue Ngambio princesse Q. la base Arr. Mfilou",
      image: "/images/Allegresse.jpg",
      social: {
        email: "vicepresident@ongbolamu.org",
        linkedin: "#"
      }
    },
    {
      name: "BANZOUZI KOUKABANA Rych Belon",
      role: "Secrétaire Général",
      bio: "Consultant en informatique, Rych modernise les processus de l'ONG et assure la coordination administrative de l'organisation.",
      expertise: ["Informatique", "Consultation", "Administration"],
      experience: "Consultant IT expert",
      location: "Mfilou, Brazzaville",
      phone: "06 467 85 92",
      address: "69 rue Nkayi Q. Kahounga Mfilou",
      image: "/images/Rych.jpg",
      social: {
        email: "secretaire@ongbolamu.org",
        linkedin: "#"
      }
    },
    {
      name: "PEMBELE-TIBA Exaucé Gloire",
      role: "Trésorier Général",
      bio: "Informaticien spécialisé dans la gestion financière, Exaucé garantit la transparence et la bonne gestion des ressources de l'ONG.",
      expertise: ["Informatique", "Gestion financière", "Transparence"],
      experience: "Informaticien financier",
      location: "Moungali, Brazzaville",
      phone: "06 909 84 42",
      address: "22 rue Raphael Bidie Asecna Moungali",
      image: "/images/Exaucé.jpg",
      social: {
        email: "tresorier@ongbolamu.org",
        linkedin: "#"
      }
    }
  ];

  const membresActifs = [
    { name: "KOUMBOU BANTSIMBA Lys Parfait", image: "/images/placeholder-team.svg" },
    { name: "BIKOUTA Stive Sylvel", image: "/images/placeholder-team.svg" },
    { name: "MABIALA-NZITA Daniel", image: "/images/placeholder-team.svg" },
    { name: "NGUEMBO Thierry-Ulrich", image: "/images/placeholder-team.svg" },
    { name: "LOUZOLO Bienvenu Christ", image: "/images/placeholder-team.svg" },
    { name: "MAHOUNGOU Dohm", image: "/images/Dohm.jpg" },
    { name: "MAFOUTA Christian", image: "/images/placeholder-team.svg" },
    { name: "MABADI ADICOLLE Bienvenu Christ", image: "/images/placeholder-team.svg" }
  ];

  const stats = [
    { icon: Users, number: "4", label: "Membres du bureau exécutif" },
    { icon: Award, number: "8", label: "Membres actifs" },
    { icon: Heart, number: "15", label: "Communautés servies" },
    { icon: Star, number: "2,500+", label: "Vies impactées" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-cyan-50">
      <HeaderWithHero 
        title="Notre Équipe"
        subtitle="Rencontrez ceux qui sont derrière nos actions"
      />
      
      {/* Section Couverture avec galerie des membres */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6219]/95 via-[#e55100]/90 to-[#6ad4fe]/95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Leadership & <span className="text-yellow-300">Vision</span>
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Notre équipe dirigeante allie expertise professionnelle et passion pour le développement durable au Congo-Brazzaville.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="font-bold text-lg mb-1">Vision</h3>
                  <p className="text-sm text-white/80">Un Congo prospère et solidaire</p>
                </motion.div>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="font-bold text-lg mb-1">Mission</h3>
                  <p className="text-sm text-white/80">Transformer les communautés</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Galerie des photos de couverture */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="relative w-32 h-32 mx-auto">
                      {/* Cercle décoratif arrière */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-white/30 rounded-full blur-lg"></div>
                      
                      {/* Bordure élégante */}
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-yellow-400 via-white to-cyan-300 p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                          {member.image === "/images/placeholder-team.svg" ? (
                            <div className="w-full h-full bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-full flex items-center justify-center">
                              <Users className="w-8 h-8 text-white" />
                            </div>
                          ) : (
                            <OptimizedImage
                              src={member.image}
                              alt={member.name}
                              width={120}
                              height={120}
                              className="w-full h-full object-cover rounded-full"
                            />
                          )}
                        </div>
                      </div>

                      {/* Badge flottant */}
                      <motion.div
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-lg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      >
                        <p className="text-xs font-bold text-[#ff6219] text-center">
                          {member.name.split(' ')[1] || member.name.split(' ')[0]}
                        </p>
                        <p className="text-xs text-gray-600 text-center">{member.role}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistiques de l'équipe */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Bureau Exécutif */}
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
              Bureau <span className="text-[#ff6219]">Exécutif</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              L'organe dirigeant de l'ONG BOLAMU, composé de professionnels engagés pour le développement du Congo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Image et overlay */}
                <div className="relative h-64 bg-gradient-to-br from-[#ff6219]/10 to-[#6ad4fe]/10 flex items-center justify-center overflow-hidden">
                  {member.image === "/images/placeholder-team.svg" ? (
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] p-1">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <Users className="w-16 h-16 text-gray-400" />
                      </div>
                    </div>
                  ) : (
                    <motion.div 
                      className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-[#ff6219] transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <OptimizedImage
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>
                  )}
                  
                  {/* Badge du rôle */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#ff6219] text-white px-3 py-1 rounded-full text-sm font-bold">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#ff6219] font-semibold">{member.role}</p>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  {/* Expertise */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise :</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-orange-50 text-[#ff6219] text-xs rounded-full border border-orange-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Informations détaillées */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Expérience: {member.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="text-gray-600 text-xs">
                      {member.address}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex space-x-3 pt-4 border-t border-gray-100">
                    <a
                      href={`mailto:${member.social.email}`}
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-[#ff6219] text-gray-600 hover:text-white rounded-xl transition-all duration-200"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-[#6ad4fe] text-gray-600 hover:text-white rounded-xl transition-all duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Membres Actifs */}
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
              Membres <span className="text-[#ff6219]">Actifs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos membres actifs contribuent quotidiennement aux activités de l'ONG et participent activement à la réalisation de nos projets.
            </p>
          </motion.div>



          {/* Cartes détaillées des membres actifs */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {membresActifs.map((membre, index) => (
                <motion.div
                  key={membre.name}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-cyan-50 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {membre.image === "/images/placeholder-team.svg" ? (
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-white shadow-md mx-auto mb-3">
                      <OptimizedImage
                        src={membre.image}
                        alt={membre.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">{membre.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">Membre actif</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Call to Action */}
      {/* Section Rejoindre */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Users className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Rejoignez Notre Mission
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Vous partagez notre vision d'un Congo prospère ? 
              Découvrez comment vous pouvez contribuer à notre mission.
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
              <Link href="/apropos#contact">
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#ff6219] transition-all duration-300"
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

      <Footer />
    </div>
  );
} 