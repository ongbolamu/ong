// Configuration des images de fond pour les headers selon les pages
export interface HeaderBackground {
  url: string;
  alt: string;
  position: string;
  overlay: string;
}

export const headerBackgrounds: Record<string, HeaderBackground> = {
  // Page d'accueil
  '/': {
    url: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    alt: 'Communauté africaine unie, solidarité en Afrique',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-[#0369a1]/80 via-[#0284c7]/70 to-[#15803d]/60'
  },
  
  // ========== PAGES PRINCIPALES AVEC IMAGES LOCALES ==========
  
  // À propos & Contact
  '/apropos': {
    url: '/images/backgrounds/About.jpg',
    alt: 'À propos de l\'ONG BOLAMU - Notre histoire et mission',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-blue-900/85 via-indigo-800/75 to-[#15803d]/65'
  },
  
  // Actualités - utilisation de l'image "Nos Actions"
  '/actualites': {
    url: '/images/backgrounds/Nos Actions.jpg',
    alt: 'Actualités et nouvelles de l\'ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-indigo-900/85 via-blue-700/75 to-cyan-500/65'
  },
  
  // Faire un don
  '/don': {
    url: '/images/backgrounds/Faire un don.jpg',
    alt: 'Soutenez nos actions - Faire un don à l\'ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-red-900/85 via-[#c2410c]/75 to-orange-400/65'
  },
  
  // Transparence
  '/transparence': {
    url: '/images/backgrounds/Transparence.jpg',
    alt: 'Transparence financière et gouvernance responsable',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-slate-900/85 via-gray-700/75 to-[#15803d]/65'
  },
  
  // Devenir membre / Adhésion
  '/adhesion': {
    url: '/images/backgrounds/Devenir membre.jpg',
    alt: 'Rejoignez l\'ONG BOLAMU - Devenir membre',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-[#c2410c]/85 via-orange-600/75 to-yellow-400/65'
  },
  
  // Bénévolat
  '/benevolat': {
    url: '/images/backgrounds/Benevolat.jpg',
    alt: 'Engagez-vous comme bénévole avec l\'ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-emerald-900/85 via-teal-700/75 to-green-400/65'
  },
  
  // Partenaires
  '/partenaires': {
    url: '/images/backgrounds/Partenariat.jpg',
    alt: 'Partenariats et collaborations de l\'ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-blue-900/85 via-indigo-700/75 to-cyan-400/65'
  },
  
  // Nos actions
  '/actions': {
    url: '/images/backgrounds/Nos Actions.jpg',
    alt: 'Nos actions et projets sur le terrain',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-green-900/85 via-emerald-700/75 to-lime-400/65'
  },
  
  // Notre impact - utilisation de l'image "Nos Actions"
  '/impact': {
    url: '/images/backgrounds/Nos Actions.jpg',
    alt: 'Impact positif mesurable, transformation des communautés',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-emerald-900/85 via-green-700/75 to-lime-500/65'
  },
  
  // ========== AUTRES PAGES ==========
  
  // Notre équipe
  '/equipe': {
    url: '/images/backgrounds/About.jpg',
    alt: 'Équipe de l\'ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-purple-900/80 via-purple-700/70 to-[#c2410c]/60'
  },
  
  // Contact
  '/contact': {
    url: '/images/backgrounds/About.jpg',
    alt: 'Contactez l\'ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-teal-900/80 via-teal-700/70 to-green-500/60'
  },
  
  // Nos programmes - utilisation de l'image "Nos Actions"
  '/programmes': {
    url: '/images/backgrounds/Nos Actions.jpg',
    alt: 'Programmes de développement de l\'ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-violet-900/80 via-purple-700/70 to-[#15803d]/60'
  },
  
  // FAQ - utilisation de l'image "Partenariat"
  '/faq': {
    url: '/images/backgrounds/Partenariat.jpg',
    alt: 'Questions fréquentes - ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-purple-900/80 via-pink-700/70 to-rose-500/60'
  },
  
  // Mentions légales - utilisation de l'image "Transparence"
  '/mentions-legales': {
    url: '/images/backgrounds/Transparence.jpg',
    alt: 'Mentions légales - ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-gray-900/80 via-slate-700/70 to-gray-600/60'
  },
  
  // Politique de confidentialité - utilisation de l'image "Transparence"
  '/confidentialite': {
    url: '/images/backgrounds/Transparence.jpg',
    alt: 'Politique de confidentialité - ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-slate-900/80 via-gray-700/70 to-blue-600/60'
  },
  
  // Designs UI - utilisation de l'image "Nos Actions"
  '/designs': {
    url: '/images/backgrounds/Nos Actions.jpg',
    alt: 'Designs et interfaces - ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-purple-900/80 via-violet-700/70 to-pink-500/60'
  },
  
  // Glassmorphism - utilisation de l'image "Nos Actions"
  '/glassmorphism': {
    url: '/images/backgrounds/Nos Actions.jpg',
    alt: 'Interface glassmorphism - ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-cyan-900/80 via-blue-700/70 to-indigo-500/60'
  },
  
  // Page de statut - utilisation de l'image "Transparence"
  '/status': {
    url: '/images/backgrounds/Transparence.jpg',
    alt: 'Statut et monitoring - ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-green-900/80 via-emerald-700/70 to-teal-500/60'
  },
  
  // Démonstration headers - utilisation de l'image "Nos Actions"
  '/demo-headers': {
    url: '/images/backgrounds/Nos Actions.jpg',
    alt: 'Démonstration des headers - ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-indigo-900/80 via-purple-700/70 to-pink-500/60'
  },
  
  // Demo header neo - utilisation de l'image "Nos Actions"
  '/demo-header-neo': {
    url: '/images/backgrounds/Nos Actions.jpg',
    alt: 'Header néo-moderne - ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-violet-900/80 via-purple-700/70 to-fuchsia-500/60'
  },
  
  // Demo header quantum - utilisation de l'image "Nos Actions"
  '/demo-header-quantum': {
    url: '/images/backgrounds/Nos Actions.jpg',
    alt: 'Header quantique - ONG BOLAMU',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-black/90 via-gray-800/80 to-blue-600/70'
  }
};

// Fonction pour obtenir l'arrière-plan d'une page
export function getHeaderBackground(pathname: string): HeaderBackground {
  return headerBackgrounds[pathname] || headerBackgrounds['/'];
}

// Fonction pour précharger les images critiques
export function preloadCriticalImages() {
  const criticalPaths = ['/', '/apropos', '/actions', '/programmes', '/benevolat', '/partenaires', '/don', '/adhesion'];
  
  criticalPaths.forEach(path => {
    const background = getHeaderBackground(path);
    if (background.url.startsWith('/images/')) {
      // Précharger seulement les images locales
      const img = new Image();
      img.src = background.url;
    }
  });
}

// Fonction pour obtenir toutes les images de header
export function getAllHeaderImages(): string[] {
  return Object.values(headerBackgrounds).map(bg => bg.url);
}

// Fonction de diagnostic pour vérifier l'état des images
export function diagnoseHeaderImages(): {
  localImages: string[];
  externalImages: string[];
  missingImages: string[];
  availableImages: string[];
} {
  const localImages: string[] = [];
  const externalImages: string[] = [];
  const missingImages: string[] = [];
  const availableImages: string[] = [];

  // Images disponibles dans le dossier backgrounds
  const availableBackgroundImages = [
    'About.jpg',
    'Benevolat.jpg',
    'Devenir membre.jpg',
    'Faire un don.jpg',
    'Nos Actions.jpg', 
    'Partenariat.jpg',
    'Transparence.jpg'
  ];

  Object.values(headerBackgrounds).forEach(config => {
    if (config.url.startsWith('/images/backgrounds/')) {
      const imageName = config.url.split('/').pop() || '';
      localImages.push(imageName);
      
      if (availableBackgroundImages.includes(imageName)) {
        availableImages.push(imageName);
      } else {
        missingImages.push(imageName);
      }
    } else {
      externalImages.push(config.url);
    }
  });

  return {
    localImages: Array.from(new Set(localImages)),
    externalImages: Array.from(new Set(externalImages)),
    missingImages: Array.from(new Set(missingImages)),
    availableImages: Array.from(new Set(availableImages))
  };
}

// Fonction pour obtenir un rapport complet
export function getHeaderImagesReport(): string {
  const diagnosis = diagnoseHeaderImages();
  
  return `
=== RAPPORT DES IMAGES DE FOND ===

📁 Images locales configurées: ${diagnosis.localImages.length}
${diagnosis.localImages.map(img => `  - ${img}`).join('\n')}

✅ Images disponibles: ${diagnosis.availableImages.length}
${diagnosis.availableImages.map(img => `  - ${img}`).join('\n')}

❌ Images manquantes: ${diagnosis.missingImages.length}
${diagnosis.missingImages.map(img => `  - ${img}`).join('\n')}

🌐 Images externes: ${diagnosis.externalImages.length}
${diagnosis.externalImages.map(img => `  - ${img}`).join('\n')}

=== RECOMMANDATIONS ===
${diagnosis.missingImages.length > 0 ? 
  `⚠️  Il manque ${diagnosis.missingImages.length} image(s) dans le dossier /public/images/backgrounds/` : 
  '✅ Toutes les images locales sont disponibles'
}
`;
} 