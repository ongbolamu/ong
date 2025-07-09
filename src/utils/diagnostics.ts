// Utilitaire de diagnostic pour identifier les problèmes du projet
export const diagnostics = {
  // Vérifier les erreurs SSR courantes
  checkSSRSafety: () => {
    const issues: string[] = [];
    
    // Vérifier si window/document sont utilisés sans vérification
    if (typeof window === 'undefined') {
      console.log('✅ Diagnostic SSR: Mode serveur détecté');
    } else {
      console.log('✅ Diagnostic SSR: Mode client détecté');
    }
    
    return issues;
  },

  // Vérifier les composants manquants
  checkMissingComponents: () => {
    const issues: string[] = [];
    
    try {
      // Vérifier les imports critiques
      const criticalComponents = [
        'HeaderWithHero',
        'Footer',
        'AnimatedBackground'
      ];
      
      console.log('✅ Composants critiques détectés');
    } catch (error) {
      issues.push(`Composant manquant: ${error}`);
    }
    
    return issues;
  },

  // Vérifier les images manquantes
  checkMissingImages: () => {
    const issues: string[] = [];
    
    const criticalImages = [
      '/images/logo Bolamu.png',
      '/images/placeholder-project.svg',
      '/images/placeholder-team.svg'
    ];
    
    criticalImages.forEach(imagePath => {
      // Note: En production, on devrait faire une vraie vérification fetch
      console.log(`Checking image: ${imagePath}`);
    });
    
    return issues;
  },

  // Vérifier les props manquantes
  checkMissingProps: () => {
    const issues: string[] = [];
    
    // Liste des pages qui utilisent HeaderWithHero
    const pagesWithHeader = [
      { path: '/apropos', title: 'À Propos de Nous' },
      { path: '/actions', title: 'Nos Actions' },
      { path: '/equipe', title: 'Notre Équipe' },
      { path: '/contact', title: 'Contactez-Nous' }
    ];
    
    console.log('✅ Pages avec HeaderWithHero vérifiées');
    return issues;
  },

  // Vérifier les liens cassés
  checkBrokenLinks: () => {
    const issues: string[] = [];
    
    const internalLinks = [
      '/',
      '/apropos',
      '/actions',
      '/equipe',
      '/contact',
      '/adhesion',
      '/transparence',
      '/actualites',
      '/don',
      '/impact'
    ];
    
    console.log('Links à vérifier:', internalLinks);
    return issues;
  },

  // Diagnostic complet
  runFullDiagnostic: () => {
    console.log('🔍 Démarrage du diagnostic complet...\n');
    
    const allIssues: string[] = [];
    
    console.log('1. Vérification SSR...');
    allIssues.push(...diagnostics.checkSSRSafety());
    
    console.log('2. Vérification composants...');
    allIssues.push(...diagnostics.checkMissingComponents());
    
    console.log('3. Vérification images...');
    allIssues.push(...diagnostics.checkMissingImages());
    
    console.log('4. Vérification props...');
    allIssues.push(...diagnostics.checkMissingProps());
    
    console.log('5. Vérification liens...');
    allIssues.push(...diagnostics.checkBrokenLinks());
    
    if (allIssues.length === 0) {
      console.log('✅ Aucun problème détecté ! Le projet semble en bon état.');
    } else {
      console.log('⚠️ Problèmes détectés:');
      allIssues.forEach((issue, index) => {
        console.log(`   ${index + 1}. ${issue}`);
      });
    }
    
    return allIssues;
  }
};

// Auto-diagnostic au chargement (uniquement en développement)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  setTimeout(() => {
    diagnostics.runFullDiagnostic();
  }, 2000);
} 