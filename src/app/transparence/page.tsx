'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, PieChart, FileText, Download, Eye, Award, Users, TrendingUp, Calendar, DollarSign, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import HeaderWithHero from '@/components/HeaderWithHero';
import Footer from '@/components/Footer';

export default function TransparencePage() {
  const [activeYear, setActiveYear] = useState('2023');

  const financialData = {
    '2023': {
      budget: '45,000,000',
      depenses: '42,500,000',
      projets: '38,000,000',
      administration: '4,500,000',
      beneficiaires: '2,847',
      projetsRealises: 12
    },
    '2022': {
      budget: '38,000,000',
      depenses: '36,200,000',
      projets: '32,400,000',
      administration: '3,800,000',
      beneficiaires: '2,156',
      projetsRealises: 9
    },
    '2021': {
      budget: '32,000,000',
      depenses: '30,100,000',
      projets: '27,090,000',
      administration: '3,010,000',
      beneficiaires: '1,789',
      projetsRealises: 7
    }
  };

  const documents = [
    {
      title: 'Rapport Financier 2023',
      type: 'Rapport annuel',
      date: '2024-03-15',
      size: '2.4 MB',
      icon: FileText,
      url: '#'
    },
    {
      title: 'Audit Externe 2023',
      type: 'Audit',
      date: '2024-02-28',
      size: '1.8 MB',
      icon: Shield,
      url: '#'
    },
    {
      title: 'Statuts de l\'ONG',
      type: 'Document légal',
      date: '2023-01-10',
      size: '0.9 MB',
      icon: FileText,
      url: '#'
    },
    {
      title: 'Rapport d\'Impact 2023',
      type: 'Impact',
      date: '2024-01-20',
      size: '3.2 MB',
      icon: TrendingUp,
      url: '#'
    },
    {
      title: 'Budget Prévisionnel 2024',
      type: 'Budget',
      date: '2023-12-15',
      size: '1.1 MB',
      icon: PieChart,
      url: '#'
    },
    {
      title: 'Procès-verbaux AG 2023',
      type: 'Gouvernance',
      date: '2023-11-30',
      size: '1.5 MB',
      icon: Users,
      url: '#'
    }
  ];

  const certifications = [
    {
      title: 'Certification ISO 9001',
      organisme: 'Bureau Veritas',
      date: '2023-06-15',
      validite: '2026-06-15',
      statut: 'Valide'
    },
    {
      title: 'Agrément Ministériel',
      organisme: 'Ministère de l\'Intérieur',
      date: '2022-03-10',
      validite: '2027-03-10',
      statut: 'Valide'
    },
    {
      title: 'Label Don en Confiance',
      organisme: 'Comité de la Charte',
      date: '2023-01-20',
      validite: '2025-01-20',
      statut: 'Valide'
    }
  ];

  const governanceMembers = [
    {
      name: 'NGUEWOA Feralin Arcanchel',
      role: 'Président',
      mandat: '2023-2027',
      profession: 'Entrepreneur',
      phone: '06 987 23 23',
      photo: '/images/placeholder-team.svg'
    },
    {
      name: 'NKOUKA Merphy Allegresse',
      role: 'Vice-Président',
      mandat: '2023-2027',
      profession: 'Entrepreneur',
      phone: '06 849 22 15',
      photo: '/images/placeholder-team.svg'
    },
    {
      name: 'BANZOUZI KOUKABANA Rych Belon',
      role: 'Secrétaire Général',
      mandat: '2023-2027',
      profession: 'Consultant en Informatique',
      phone: '06 467 85 92',
      photo: '/images/placeholder-team.svg'
    },
    {
      name: 'PEMBELE-TIBA Exaucé Gloire',
      role: 'Trésorier Général',
      mandat: '2023-2027',
      profession: 'Informaticien',
      phone: '06 909 84 42',
      photo: '/images/placeholder-team.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-cyan-50">
      <HeaderWithHero 
        title="Transparence"
        subtitle="Gouvernance ouverte et responsabilité partagée"
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
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#ff6219] to-[#6ad4fe] bg-clip-text text-transparent">
                Transparence
              </h1>
            </motion.div>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              La transparence est au cœur de nos valeurs. Découvrez nos finances, 
              notre gouvernance et nos résultats en toute transparence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Données financières */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Données <span className="text-[#ff6219]">Financières</span>
            </h2>
            
            {/* Sélecteur d'année */}
            <div className="flex justify-center space-x-4 mb-12">
              {Object.keys(financialData).map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeYear === year
                      ? 'bg-[#ff6219] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Métriques financières */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-8 h-8 text-[#ff6219]" />
                <span className="text-sm font-semibold text-gray-500">BUDGET TOTAL</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {financialData[activeYear as keyof typeof financialData].budget} FCFA
              </h3>
              <p className="text-gray-600">Budget alloué pour {activeYear}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <PieChart className="w-8 h-8 text-[#6ad4fe]" />
                <span className="text-sm font-semibold text-gray-500">PROJETS</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {financialData[activeYear as keyof typeof financialData].projets} FCFA
              </h3>
              <p className="text-gray-600">Investis dans les projets</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-green-500" />
                <span className="text-sm font-semibold text-gray-500">BÉNÉFICIAIRES</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {financialData[activeYear as keyof typeof financialData].beneficiaires}
              </h3>
              <p className="text-gray-600">Personnes aidées en {activeYear}</p>
            </motion.div>
          </div>

          {/* Graphique de répartition */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Répartition des Dépenses {activeYear}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Graphique simplifié */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-[#ff6219] rounded-full"></div>
                    <span className="font-medium">Projets et programmes</span>
                  </div>
                  <span className="font-bold">89.4%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#ff6219] h-3 rounded-full" style={{ width: '89.4%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-[#6ad4fe] rounded-full"></div>
                    <span className="font-medium">Frais administratifs</span>
                  </div>
                  <span className="font-bold">10.6%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#6ad4fe] h-3 rounded-full" style={{ width: '10.6%' }}></div>
                </div>
              </div>

              {/* Détails */}
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-2xl p-6">
                  <h4 className="font-bold text-[#ff6219] mb-2">Projets et Programmes</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    {financialData[activeYear as keyof typeof financialData].projets} FCFA
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Éducation et formation</li>
                    <li>• Santé communautaire</li>
                    <li>• Développement économique</li>
                    <li>• Infrastructure sociale</li>
                  </ul>
                </div>

                <div className="bg-cyan-50 rounded-2xl p-6">
                  <h4 className="font-bold text-[#6ad4fe] mb-2">Frais Administratifs</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    {financialData[activeYear as keyof typeof financialData].administration} FCFA
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Salaires et charges</li>
                    <li>• Bureaux et équipements</li>
                    <li>• Communication</li>
                    <li>• Audit et conformité</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documents officiels */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Documents <span className="text-[#ff6219]">Officiels</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Accédez à tous nos documents officiels : rapports financiers, audits, statuts et plus encore.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-xl flex items-center justify-center">
                    <doc.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {doc.type}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#ff6219] transition-colors">
                  {doc.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(doc.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <FileText className="w-4 h-4" />
                    <span>{doc.size}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-[#ff6219] text-white py-2 px-4 rounded-xl hover:bg-[#e55a17] transition-colors text-sm font-medium">
                    <Download className="w-4 h-4 inline mr-2" />
                    Télécharger
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-xl hover:bg-gray-200 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Certifications & <span className="text-[#ff6219]">Agréments</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{cert.organisme}</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Obtenu :</strong> {new Date(cert.date).toLocaleDateString('fr-FR')}</p>
                  <p><strong>Valide jusqu'au :</strong> {new Date(cert.validite).toLocaleDateString('fr-FR')}</p>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    {cert.statut}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gouvernance */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="text-[#ff6219]">Gouvernance</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre conseil d'administration assure une gouvernance transparente et efficace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governanceMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#ff6219] to-[#6ad4fe] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#ff6219] font-semibold mb-1">{member.role}</p>
                <p className="text-sm text-gray-600 mb-1">{member.profession}</p>
                <p className="text-xs text-gray-500 mb-2">Mandat : {member.mandat}</p>
                <p className="text-xs text-gray-500">{member.phone}</p>
              </motion.div>
            ))}
          </div>
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
            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Une Question sur nos Finances ?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              concernant notre gestion financière et notre gouvernance.
            </p>
            
            <Link href="/apropos#contact">
              <motion.button
                className="bg-white text-[#ff6219] px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nous contacter
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 