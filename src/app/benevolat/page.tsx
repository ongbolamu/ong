'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Clock, MapPin, Star, CheckCircle, Send, Calendar, Target, Award } from 'lucide-react';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';

export default function BenevolatPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    ville: '',
    domaine: '',
    disponibilite: '',
    experience: '',
    motivation: ''
  });

  const domaines = [
    {
      id: 'education',
      nom: 'Éducation',
      description: 'Enseignement, alphabétisation, formation',
      icon: '📚',
      couleur: 'from-blue-500 to-blue-600',
      besoins: ['Enseignants', 'Formateurs', 'Animateurs', 'Coordinateurs pédagogiques']
    },
    {
      id: 'sante',
      nom: 'Santé',
      description: 'Sensibilisation, accompagnement, prévention',
      icon: '🏥',
      couleur: 'from-red-500 to-red-600',
      besoins: ['Agents de santé', 'Sensibilisateurs', 'Accompagnateurs', 'Coordinateurs santé']
    },
    {
      id: 'environnement',
      nom: 'Environnement',
      description: 'Reforestation, sensibilisation écologique',
      icon: '🌱',
      couleur: 'from-green-500 to-green-600',
      besoins: ['Éco-animateurs', 'Agents forestiers', 'Sensibilisateurs', 'Coordinateurs environnement']
    },
    {
      id: 'communication',
      nom: 'Communication',
      description: 'Médias, réseaux sociaux, événements',
      icon: '📢',
      couleur: 'from-purple-500 to-purple-600',
      besoins: ['Community managers', 'Journalistes', 'Photographes', 'Coordinateurs communication']
    },
    {
      id: 'technique',
      nom: 'Technique',
      description: 'IT, logistique, administration',
      icon: '⚙️',
      couleur: 'from-orange-500 to-orange-600',
      besoins: ['Développeurs', 'Logisticiens', 'Comptables', 'Coordinateurs techniques']
    },
    {
      id: 'mobilisation',
      nom: 'Mobilisation',
      description: 'Collecte de fonds, partenariats',
      icon: '🤝',
      couleur: 'from-teal-500 to-teal-600',
      besoins: ['Fundraisers', 'Chargés de partenariats', 'Ambassadeurs', 'Coordinateurs mobilisation']
    }
  ];

  const temoignages = [
    {
      nom: 'Sylvie MBEMBA',
      role: 'Bénévole Éducation',
      duree: '2 ans',
      temoignage: 'Contribuer à l\'éducation des enfants de ma communauté me donne un sens profond à ma vie. Voir leurs progrès est ma plus belle récompense.',
      photo: '/images/img.jpg',
      impact: '45 enfants formés'
    },
    {
      nom: 'Paul MAKAYA',
      role: 'Bénévole Santé',
      duree: '1 an',
      temoignage: 'Les formations que j\'ai données sur l\'hygiène ont permis de réduire les maladies dans plusieurs villages. C\'est concret et gratifiant.',
      photo: '/images/img.jpg',
      impact: '8 villages sensibilisés'
    },
    {
      nom: 'Grace LOUBAKI',
      role: 'Bénévole Communication',
      duree: '6 mois',
      temoignage: 'Raconter les histoires de nos bénéficiaires et partager l\'impact de nos actions me passionne. Chaque story compte.',
      photo: '/images/img.jpg',
      impact: '1M+ personnes touchées'
    }
  ];

  const avantages = [
    {
      icon: Heart,
      titre: 'Impact social',
      description: 'Contribuez directement au développement de votre communauté'
    },
    {
      icon: Star,
      titre: 'Développement personnel',
      description: 'Acquérez de nouvelles compétences et expériences'
    },
    {
      icon: Users,
      titre: 'Réseau professionnel',
      description: 'Rencontrez des professionnels engagés et élargissez votre réseau'
    },
    {
      icon: Award,
      titre: 'Reconnaissance',
      description: 'Certificats et attestations pour valoriser votre engagement'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log('Candidature bénévole soumise:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      <HeaderWithHero 
        title="Devenir Bénévole"
        subtitle="Rejoignez notre communauté de bénévoles engagés pour le développement du Congo"
      />

      {/* Section hero */}
      <section className="py-20 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ensemble, nous pouvons changer des vies
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Votre temps, vos compétences et votre passion peuvent faire la différence. 
                Rejoignez une équipe de 50+ bénévoles actifs dans toute la République du Congo.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-sm opacity-80">Bénévoles formés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">2,500+</div>
                  <div className="text-sm opacity-80">Heures données</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">25</div>
                  <div className="text-sm opacity-80">Communautés aidées</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {avantages.map((avantage, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <avantage.icon className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{avantage.titre}</h3>
                  <p className="text-sm opacity-80">{avantage.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domaines de bénévolat */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Domaines d'intervention</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le domaine qui correspond à vos compétences et à vos passions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domaines.map((domaine, index) => (
              <motion.div
                key={domaine.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`h-2 bg-gradient-to-r ${domaine.couleur}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{domaine.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{domaine.nom}</h3>
                      <p className="text-gray-600 text-sm">{domaine.description}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Postes recherchés :</h4>
                    <ul className="space-y-1">
                      {domaine.besoins.map((besoin, bIndex) => (
                        <li key={bIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {besoin}
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

      {/* Témoignages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages de nos bénévoles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez l'expérience enrichissante de nos bénévoles engagés
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {temoignages.map((temoignage, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {temoignage.nom.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{temoignage.nom}</h3>
                    <p className="text-gray-600 text-sm">{temoignage.role}</p>
                    <p className="text-gray-500 text-xs">Bénévole depuis {temoignage.duree}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 italic mb-4">
                  "{temoignage.temoignage}"
                </blockquote>
                
                <div className="bg-gradient-to-r from-[#ff6219]/10 to-[#6ad4fe]/10 rounded-lg p-3">
                  <p className="text-sm font-semibold text-gray-900">Impact : {temoignage.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de candidature */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Postulez maintenant</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Remplissez ce formulaire pour rejoindre notre équipe de bénévoles
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    required
                    value={formData.nom}
                    placeholder="Votre nom"
                    aria-label="Nom"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    required
                    value={formData.prenom}
                    placeholder="Votre prénom"
                    aria-label="Prénom"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    placeholder="Votre email"
                    aria-label="Email"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    required
                    value={formData.telephone}
                    placeholder="Votre numéro de téléphone"
                    aria-label="Téléphone"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ville de résidence *
                  </label>
                  <input
                    type="text"
                    name="ville"
                    required
                    value={formData.ville}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Domaine d'intérêt *
                  </label>
                  <select
                    name="domaine"
                    required
                    value={formData.domaine}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent"
                  >
                    <option value="">Choisir un domaine</option>
                    {domaines.map(domaine => (
                      <option key={domaine.id} value={domaine.id}>{domaine.nom}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Disponibilité *
                </label>
                <select
                  name="disponibilite"
                  required
                  value={formData.disponibilite}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent"
                >
                  <option value="">Choisir votre disponibilité</option>
                  <option value="quelques_heures">Quelques heures par semaine</option>
                  <option value="week_end">Week-ends principalement</option>
                  <option value="temps_plein">Temps plein (missions longues)</option>
                  <option value="ponctuel">Missions ponctuelles</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expérience dans le bénévolat
                </label>
                <textarea
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Décrivez vos expériences précédentes en bénévolat..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motivation *
                </label>
                <textarea
                  name="motivation"
                  rows={4}
                  required
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder="Expliquez-nous pourquoi vous souhaitez devenir bénévole avec l'ONG BOLAMU..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ff6219] focus:border-transparent"
                />
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 mx-auto hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer ma candidature</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact et info */}
      <section className="py-20 bg-gradient-to-br from-[#ff6219]/5 to-[#6ad4fe]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Formation incluse</h3>
              <p className="text-gray-600">
                Tous nos bénévoles reçoivent une formation complète avant leur première mission
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Suivi personnalisé</h3>
              <p className="text-gray-600">
                Un coordinateur vous accompagne tout au long de votre parcours de bénévole
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reconnaissance</h3>
              <p className="text-gray-600">
                Certificats d'engagement et lettres de recommandation pour valoriser votre expérience
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 