import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Début du seeding...')

  // Créer les statistiques
  const stats = await prisma.statistique.createMany({
    data: [
      {
        nom: 'Bénéficiaires',
        valeur: 3200,
        description: 'Nombre total de bénéficiaires aidés',
        icone: 'Users'
      },
      {
        nom: 'Communautés',
        valeur: 18,
        description: 'Nombre de communautés touchées',
        icone: 'Globe'
      },
      {
        nom: 'Projets réalisés',
        valeur: 32,
        description: 'Nombre total de projets terminés',
        icone: 'Award'
      },
      {
        nom: 'Années d\'expérience',
        valeur: 9,
        description: 'Années d\'engagement communautaire',
        icone: 'Calendar'
      }
    ],
    skipDuplicates: true
  })

  // Créer les catégories d'actualités
  const categorieEducation = await prisma.categorieActualite.create({
    data: {
      nom: 'Éducation',
      description: 'Actions liées à l\'éducation et la formation',
      couleur: '#6ad4fe'
    }
  })

  const categorieSante = await prisma.categorieActualite.create({
    data: {
      nom: 'Santé',
      description: 'Projets de santé communautaire',
      couleur: '#ff6219'
    }
  })

  const categorieEnvironnement = await prisma.categorieActualite.create({
    data: {
      nom: 'Environnement',
      description: 'Protection de l\'environnement',
      couleur: '#10b981'
    }
  })

  // Créer les domaines de programmes
  const domaineEducation = await prisma.domaineProgramme.create({
    data: {
      nom: 'Éducation et Formation',
      description: 'Améliorer l\'accès à l\'éducation de qualité',
      icone: 'GraduationCap'
    }
  })

  const domaineSante = await prisma.domaineProgramme.create({
    data: {
      nom: 'Santé Communautaire',
      description: 'Renforcer les systèmes de santé locaux',
      icone: 'Heart'
    }
  })

  const domaineEnvironnement = await prisma.domaineProgramme.create({
    data: {
      nom: 'Protection Environnementale',
      description: 'Préserver les ressources naturelles',
      icone: 'Leaf'
    }
  })

  // Créer des membres de l'équipe
  const equipe = await prisma.membreEquipe.createMany({
    data: [
      {
        nom: 'MAMPOUYA',
        prenom: 'Exaucé',
        poste: 'Directeur Exécutif',
        bio: 'Passionné par le développement communautaire, Exaucé dirige l\'ONG BOLAMU avec vision et engagement.',
        image: '/images/Exaucé.jpg',
        email: 'exauce@bolamu.org'
      },
      {
        nom: 'OKOUYA',
        prenom: 'Arcanchel',
        poste: 'Coordinateur des Programmes',
        bio: 'Expert en gestion de projets humanitaires avec plus de 8 ans d\'expérience.',
        image: '/images/Arcanchel.jpg',
        email: 'arcanchel@bolamu.org'
      },
      {
        nom: 'TCHICAYA',
        prenom: 'Rychy',
        poste: 'Responsable Communication',
        bio: 'Spécialiste en communication digitale et sensibilisation communautaire.',
        image: '/images/Rych.jpg',
        email: 'rychy@bolamu.org'
      },
      {
        nom: 'MOUKALA',
        prenom: 'Dohm',
        poste: 'Chargé des Partenariats',
        bio: 'Développement de partenariats stratégiques et mobilisation de ressources.',
        image: '/images/Dohm.jpg',
        email: 'dohm@bolamu.org'
      }
    ],
    skipDuplicates: true
  })

  // Créer des actualités
  const actualites = await prisma.actualite.createMany({
    data: [
      {
        titre: 'Lancement du programme d\'alphabétisation à Brazzaville',
        contenu: 'Nous sommes fiers d\'annoncer le lancement de notre nouveau programme d\'alphabétisation qui touchera plus de 500 adultes dans les quartiers périphériques de Brazzaville. Ce programme vise à réduire l\'analphabétisme et à donner aux participants les compétences de base nécessaires pour améliorer leur quotidien.',
        image: '/images/education-program.jpg',
        auteur: 'Exaucé MAMPOUYA',
        statut: 'PUBLIE'
      },
      {
        titre: 'Distribution de kits sanitaires dans 5 communautés',
        contenu: 'Dans le cadre de notre programme de santé communautaire, nous avons distribué des kits sanitaires comprenant des produits d\'hygiène de base, des médicaments essentiels et du matériel de premiers secours à plus de 200 familles.',
        image: '/images/health-kits.jpg',
        auteur: 'Arcanchel OKOUYA',
        statut: 'PUBLIE'
      },
      {
        titre: 'Campagne de reboisement : 1000 arbres plantés',
        contenu: 'Notre initiative environnementale a permis de planter 1000 arbres dans la région de Pointe-Noire, contribuant à la lutte contre la déforestation et au développement durable. Cette action s\'inscrit dans notre engagement pour la protection de l\'environnement.',
        image: '/images/reforestation.jpg',
        auteur: 'Rychy TCHICAYA',
        statut: 'PUBLIE'
      }
    ],
    skipDuplicates: true
  })

  // Créer des actions/projets
  const actions = await prisma.action.createMany({
    data: [
      {
        titre: 'Construction d\'un centre de santé communautaire',
        description: 'Construire un centre de santé moderne pour améliorer l\'accès aux soins de santé primaires',
        contenu: 'Ce projet vise à construire un centre de santé équipé dans le district de Makélékélé pour servir une population de plus de 10 000 habitants. Le centre comprendra une maternité, une pharmacie et des services de consultation générale.',
        dateDebut: new Date('2024-01-15'),
        dateFin: new Date('2024-12-31'),
        statut: 'EN_COURS',
        budget: 150000,
        localisation: 'Makélékélé, Brazzaville',
        objectifs: [
          'Améliorer l\'accès aux soins de santé primaires',
          'Réduire la mortalité infantile et maternelle',
          'Former le personnel médical local'
        ],
        resultats: [
          '50% des travaux de construction terminés',
          '5 infirmiers formés',
          '200 consultations prénatales réalisées'
        ]
      },
      {
        titre: 'Programme d\'autonomisation des femmes',
        description: 'Former et accompagner les femmes dans la création de micro-entreprises',
        contenu: 'Ce programme offre une formation en entrepreneuriat, un microcrédit et un accompagnement personnalisé à 100 femmes pour leur permettre de créer leurs propres activités génératrices de revenus.',
        dateDebut: new Date('2024-03-01'),
        dateFin: new Date('2024-11-30'),
        statut: 'EN_COURS',
        budget: 80000,
        localisation: 'Pointe-Noire',
        objectifs: [
          'Former 100 femmes en entrepreneuriat',
          'Créer 80 micro-entreprises',
          'Augmenter les revenus des familles'
        ],
        resultats: [
          '60 femmes formées',
          '35 micro-entreprises créées',
          'Augmentation moyenne de 40% des revenus'
        ]
      }
    ],
    skipDuplicates: true
  })

  // Créer des partenaires
  const partenaires = await prisma.partenaire.createMany({
    data: [
      {
        nom: 'Ministère de la Santé du Congo',
        type: 'GOUVERNEMENT',
        description: 'Partenariat pour l\'amélioration du système de santé',
        contact: 'sante@gouv.cg'
      },
      {
        nom: 'UNICEF Congo',
        type: 'ONG',
        description: 'Collaboration sur les programmes d\'éducation et de protection de l\'enfance',
        siteWeb: 'https://unicef.org/congo'
      },
      {
        nom: 'Total Énergies Congo',
        type: 'ENTREPRISE',
        description: 'Soutien financier pour les projets environnementaux',
        siteWeb: 'https://totalenergies.com'
      }
    ],
    skipDuplicates: true
  })

  // Créer des témoignages
  const temoignages = await prisma.témoignage.createMany({
    data: [
      {
        nom: 'Marie NGOUABI',
        poste: 'Bénéficiaire du programme d\'alphabétisation',
        contenu: 'Grâce à BOLAMU, j\'ai appris à lire et écrire. Maintenant, je peux aider mes enfants avec leurs devoirs et même tenir les comptes de mon petit commerce.',
        note: 5,
        statut: 'PUBLIE'
      },
      {
        nom: 'Dr. Joseph MABIALA',
        poste: 'Directeur du Centre de Santé de Makélékélé',
        contenu: 'Le partenariat avec BOLAMU a transformé notre capacité à servir la communauté. Les équipements fournis et la formation reçue ont considérablement amélioré la qualité des soins.',
        note: 5,
        statut: 'PUBLIE'
      }
    ],
    skipDuplicates: true
  })

  console.log('✅ Seeding terminé avec succès!')
  console.log(`📊 ${stats.count} statistiques créées`)
  console.log(`👥 ${equipe.count} membres d'équipe créés`)
  console.log(`📰 ${actualites.count} actualités créées`)
  console.log(`🎯 ${actions.count} actions créées`)
  console.log(`🤝 ${partenaires.count} partenaires créés`)
  console.log(`💬 ${temoignages.count} témoignages créés`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }) 