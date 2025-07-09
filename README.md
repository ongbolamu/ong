# ONG BOLAMU - Site Web Officiel

## 🎨 Nouvelles Fonctionnalités - Headers avec Images de Fond

### Images de Fond Dynamiques
Chaque page du site possède maintenant un header avec une **image de fond unique** et des **overlays colorés adaptatifs** :

#### Pages avec Images Personnalisées :
- **🏠 Accueil** : Communauté unie, mains solidaires (gradient orange-cyan)
- **👥 À Propos** : Équipe de bénévoles (gradient bleu-cyan)
- **⚡ Nos Actions** : Volontaires distribuant aide (gradient vert-émeraude)
- **👨‍💼 Notre Équipe** : Équipe professionnelle (gradient violet-orange)
- **🤝 Devenir Membre** : Rejoindre communauté (gradient orange-jaune)
- **🛡️ Transparence** : Gouvernance financière (gradient gris-cyan)
- **📰 Actualités** : Nouvelles de l'ONG (gradient indigo-cyan)
- **📞 Contact** : Connexion et contact (gradient teal-vert)
- **📊 Notre Impact** : Impact communautaire (gradient émeraude-lime)
- **💝 Faire un Don** : Soutien aux actions (gradient rouge-orange)

### 🔧 Fonctionnalités Techniques

#### HeaderWithHero Component
- **Images haute qualité** d'Unsplash optimisées (1950px de large)
- **Chargement adaptatif** selon la page visitée
- **Préchargement** des images critiques pour les performances
- **Fallback automatique** vers l'image d'accueil si problème

#### Configuration Intelligente
```typescript
// src/utils/headerBackgrounds.ts
export const headerBackgrounds: Record<string, HeaderBackground> = {
  '/apropos': {
    url: 'https://images.unsplash.com/photo-xxx',
    alt: 'Description de l\'image',
    position: 'center center',
    overlay: 'bg-gradient-to-br from-blue-900/80 to-[#6ad4fe]/60'
  }
}
```

#### Overlays Adaptatifs
- **Gradients colorés** harmonisés avec l'identité visuelle BOLAMU
- **Opacité optimisée** pour garantir la lisibilité du texte
- **Couleurs thématiques** selon le contenu de chaque section
- **Effets de parallaxe** et particules flottantes

### 🎯 Avantages Utilisateur

#### Expérience Visuelle Améliorée
- **Navigation intuitive** grâce aux codes couleurs
- **Immersion visuelle** avec des images pertinentes
- **Cohérence graphique** maintenue sur tout le site
- **Chargement optimisé** sans impact sur les performances

#### Accessibilité
- **Contraste** suffisant pour la lecture
- **Alt text** descriptif pour les images
- **Responsive design** adapté mobile/desktop
- **Fallbacks** en cas de problème de chargement

### 📱 Pages Mises à Jour
Toutes les pages principales utilisent maintenant le nouveau `HeaderWithHero` :
- ✅ Page d'accueil (/) 
- ✅ À propos (/apropos)
- ✅ Nos actions (/actions)
- ✅ Notre équipe (/equipe)
- ✅ Devenir membre (/adhesion)
- ✅ Transparence (/transparence)
- ✅ Actualités (/actualites)
- ✅ Contact (/contact)
- ✅ Notre impact (/impact)
- ✅ Faire un don (/don)

### 🚀 Test et Démonstration
Visitez `/demo-headers` pour voir un aperçu de tous les headers avec leurs images de fond respectives.

---

## 📋 Informations Générales

**ONG BOLAMU** est une organisation non gouvernementale basée à Brazzaville, République du Congo, dédiée au développement communautaire, à l'accès à la santé et à l'éducation, à la lutte contre la pauvreté et à la protection de l'environnement.

### 🎯 Mission
Contribuer au développement durable du Congo en œuvrant pour l'amélioration des conditions de vie des populations, particulièrement les plus vulnérables.

### 💫 Devise
**"Entraide • Développement • Réussite"**

### 🛠️ Technologies Utilisées
- **Next.js 14** - Framework React full-stack
- **TypeScript** - Typage statique JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et interactions
- **Lucide React** - Icônes modernes
- **Vercel** - Déploiement et hébergement

### 🚀 Installation et Démarrage

```bash
# Cloner le projet
git clone [URL_DU_REPO]
cd ong-bolamu

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

### 📁 Structure du Projet
```
src/
├── app/                 # Pages Next.js App Router
├── components/          # Composants réutilisables
│   ├── Header.tsx      # Navigation principale
│   ├── HeaderWithHero.tsx # Nouveau header avec images
│   └── Footer.tsx      # Pied de page
├── utils/              # Utilitaires
│   └── headerBackgrounds.ts # Configuration images
└── styles/             # Styles globaux
```

### 🎨 Design System
- **Couleurs principales** : Orange (#ff6219) et Cyan (#6ad4fe)
- **Typographie** : Police système optimisée
- **Espacement** : Échelle Tailwind (4, 8, 12, 16...)
- **Breakpoints** : Mobile-first responsive

### 📞 Contact
- **Siège** : Brazzaville, République du Congo
- **Email** : contact@ongbolamu.org
- **Téléphone** : +242 [À DÉFINIR]

### 🤝 Contribution
Les contributions sont les bienvenues ! Consultez le guide de contribution pour plus d'informations.

### 📄 Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 🌍 À propos

Le site web officiel de l'ONG BOLAMU, une organisation non gouvernementale basée au Congo Brazzaville, dédiée au développement durable et à l'amélioration des conditions de vie des populations locales.

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React pour le développement web
- **TypeScript** - Typage statique pour un code plus robuste
- **Tailwind CSS** - Framework CSS utilitaire pour un design moderne
- **Framer Motion** - Animations fluides et interactives
- **Lucide React** - Icônes modernes et cohérentes

## 📋 Fonctionnalités

### 🎨 Design moderne et professionnel
- Interface utilisateur responsive et accessible
- Animations fluides avec Framer Motion
- Palette de couleurs cohérente (vert et bleu)
- Typographie optimisée avec Inter

### 📱 Sections principales
- **Page d'accueil** avec hero section impactante
- **Statistiques** des actions de l'ONG
- **À propos** - Mission et valeurs de BOLAMU
- **Nos missions** - Domaines d'action détaillés
- **Contact** - Formulaire et informations de contact
- **Call-to-action** pour les dons et le bénévolat

### 🔧 Fonctionnalités techniques
- SEO optimisé avec métadonnées complètes
- Performance optimisée avec Next.js
- Design responsive pour tous les appareils
- Navigation fluide avec ancres

## 🛠️ Installation et développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]
cd ong-bolamu

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts disponibles
```bash
npm run dev      # Lance le serveur de développement
npm run build    # Construit l'application pour la production
npm run start    # Lance l'application en production
npm run lint     # Vérifie le code avec ESLint
```

## 📁 Structure du projet

```
ong-bolamu/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout principal avec métadonnées
│   │   ├── page.tsx        # Page d'accueil
│   │   └── globals.css     # Styles globaux
│   └── components/         # Composants réutilisables (à venir)
├── public/                 # Assets statiques
├── tailwind.config.ts      # Configuration Tailwind CSS
├── package.json           # Dépendances et scripts
└── README.md              # Documentation
```

## 🎯 Missions de l'ONG BOLAMU

### Domaines d'action
1. **Santé communautaire** - Améliorer l'accès aux soins de base
2. **Éducation** - Construire des écoles et former les enseignants
3. **Environnement** - Protéger la biodiversité et promouvoir les énergies renouvelables
4. **Formation professionnelle** - Former les jeunes aux métiers d'avenir
5. **Développement rural** - Soutenir l'agriculture durable
6. **Autonomisation des femmes** - Promouvoir l'égalité des genres

### Valeurs
- **Solidarité** - Nous croyons en la force de l'unité et de l'entraide
- **Transparence** - Nous agissons avec honnêteté et transparence
- **Innovation** - Nous cherchons des solutions créatives aux défis

## 📞 Contact

- **Adresse** : Brazzaville, République du Congo
- **Téléphone** : +242 XX XX XX XX
- **Email** : contact@ongbolamu.org

## 🤝 Contribuer

Pour contribuer au développement du site web :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est développé pour l'ONG BOLAMU. Tous droits réservés.

## 🙏 Remerciements

- L'équipe de l'ONG BOLAMU pour leur confiance
- La communauté Next.js pour l'excellent framework
- Tous les bénévoles et supporters

---

**ONG BOLAMU** - Ensemble pour un Congo meilleur 🇨🇬 

## 🆕 **Dernières Modifications - Design Modernisé**

### ✨ **Nouveau Sliding Amélioré** (Section Call to Action)
- **Effet de zoom et morphing** : Les images ont maintenant un effet de zoom progressif pendant la transition
- **Overlay dynamique animé** : Dégradé qui change automatiquement entre purple-blue, emerald-green et red-pink
- **Particules flottantes** : 12 particules animées qui flottent et disparaissent
- **Rotation douce** : Légère rotation des images pour un effet plus dynamique
- **Logo 3D animé** : Logo dans un cercle qui fait une rotation 3D complète
- **Arrière-plans haute qualité** : Images Unsplash optimisées pour chaque slide

### 🎨 **Nouvelle Palette de Couleurs**
- **Boutons principaux** : Dégradé Purple → Blue (`from-purple-600 to-blue-600`)
- **Boutons secondaires** : Dégradé Emerald → Green (`from-emerald-600 to-green-600`)
- **Accents** : Amber → Orange pour les badges et éléments décoratifs
- **Ombres dynamiques** : Ombres colorées qui s'adaptent au bouton (`shadow-purple-500/25`, `shadow-emerald-500/25`)

### 🔧 **Améliorations Techniques**
- **Animations GPU-accelerated** : Utilisation de `transform` et `opacity` pour de meilleures performances
- **Effets de hover avancés** : Scale, ombres dynamiques et transitions fluides
- **Design responsive** : Optimisé pour mobile et desktop
- **Accessibilité améliorée** : Contrastes et focus améliorés

---

## 📋 Description du Projet 