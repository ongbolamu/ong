# Configuration des Images de Fond des En-têtes

## Vue d'ensemble

Le système d'images de fond des en-têtes est maintenant configuré et opérationnel. Chaque page de l'application ONG BOLAMU a une image de fond personnalisée qui s'affiche dans l'en-tête avec un overlay coloré approprié.

## Images Disponibles

### Images Locales (dans `/public/images/backgrounds/`)
- ✅ **About.jpg** - Utilisée pour `/apropos`, `/equipe`, `/contact`
- ✅ **Benevolat.jpg** - Utilisée pour la page `/benevolat`
- ✅ **Devenir membre.jpg** - Utilisée pour la page `/adhesion`
- ✅ **Faire un don.jpg** - Utilisée pour la page `/don`
- ✅ **Nos Actions.jpg** - Utilisée pour `/actions`, `/actualites`, `/programmes`
- ✅ **Partenariat.jpg** - Utilisée pour la page `/partenaires`
- ✅ **Transparence.jpg** - Utilisée pour `/transparence`, `/mentions-legales`, `/confidentialite`

### Toutes les Images Disponibles ✅
Toutes les images nécessaires sont maintenant disponibles et utilisées !

## Configuration

### Fichier Principal: `src/utils/headerBackgrounds.ts`

Ce fichier contient :
- **headerBackgrounds** : Objet de configuration pour chaque page
- **getHeaderBackground()** : Fonction pour obtenir l'image d'une page
- **preloadCriticalImages()** : Préchargement des images importantes
- **diagnoseHeaderImages()** : Diagnostic des images disponibles/manquantes

### Utilisation dans les Composants

```typescript
// Dans HeaderWithHero.tsx
import { getHeaderBackground } from '@/utils/headerBackgrounds';

const backgroundConfig = getHeaderBackground(pathname);
```

## Pages Configurées

| Page | Image | Overlay | Statut |
|------|-------|---------|--------|
| `/` | Unsplash (slideshow) | Bleu-vert | ✅ |
| `/apropos` | About.jpg | Bleu-indigo-vert | ✅ |
| `/actions` | Nos Actions.jpg | Vert-émeraude-lime | ✅ |
| `/don` | Faire un don.jpg | Rouge-orange | ✅ |
| `/transparence` | Transparence.jpg | Gris-vert | ✅ |
| `/adhesion` | Devenir membre.jpg | Orange-jaune | ✅ |
| `/benevolat` | Benevolat.jpg | Émeraude-vert | ✅ |
| `/partenaires` | Partenariat.jpg | Bleu-cyan | ✅ |
| `/equipe` | About.jpg | Violet-orange | ✅ |
| `/actualites` | Nos Actions.jpg | Indigo-cyan | ✅ |

## Page de Test

Une page de test a été créée : `/test-headers`

Cette page permet de :
- Visualiser toutes les images configurées
- Naviguer entre les différentes configurations
- Détecter les erreurs de chargement
- Voir les détails techniques de chaque image

## Fonctionnalités

### 1. Système de Fallback
- Si une image locale n'est pas trouvée, le système utilise une image alternative
- Les images externes (Unsplash) sont utilisées comme fallback général

### 2. Préchargement Intelligent
- Les images des pages critiques sont préchargées
- Améliore les performances de navigation

### 3. Overlay Adaptatif
- Chaque page a un overlay coloré unique
- Assure la lisibilité du texte sur l'image

### 4. Diagnostic Automatique
- Fonction de diagnostic pour vérifier l'état des images
- Rapport détaillé des images disponibles/manquantes

## Comment Ajouter une Nouvelle Image

1. **Ajouter l'image** dans `/public/images/backgrounds/`
2. **Mettre à jour** `headerBackgrounds.ts` :
   ```typescript
   '/nouvelle-page': {
     url: '/images/backgrounds/nouvelle-image.jpg',
     alt: 'Description de l\'image',
     position: 'center center',
     overlay: 'bg-gradient-to-br from-blue-900/85 to-green-600/65'
   }
   ```

## Optimisations Recommandées

### Images Manquantes à Ajouter
1. **About.jpg** - Image représentant l'équipe ou l'organisation
2. **Benevolat.jpg** - Image de bénévoles en action
3. **Devenir membre.jpg** - Image représentant l'adhésion/communauté

### Optimisations Techniques
- Compresser les images pour réduire la taille (WebP recommandé)
- Ajouter des images responsive pour différentes tailles d'écran
- Implémenter le lazy loading pour les images non critiques

## Tests

### Tester le Système
1. Lancer le serveur : `npm run dev`
2. Visiter `/test-headers` pour voir toutes les configurations
3. Naviguer entre les pages pour vérifier les images

### Vérifier les Images
```typescript
import { getHeaderImagesReport } from '@/utils/headerBackgrounds';
console.log(getHeaderImagesReport());
```

## Résolution des Problèmes

### Image ne s'affiche pas
1. Vérifier que l'image existe dans `/public/images/backgrounds/`
2. Vérifier l'orthographe du nom de fichier
3. Vérifier la configuration dans `headerBackgrounds.ts`

### Performance Lente
1. Compresser les images
2. Utiliser le format WebP
3. Vérifier le préchargement des images critiques

## Conclusion

Le système d'images de fond est maintenant **entièrement opérationnel** avec toutes les images nécessaires ! Chaque page du site ONG BOLAMU dispose de sa propre image de fond personnalisée, et la page "À propos" a été enrichie avec l'image "About.jpg" et une nouvelle section présentant l'équipe.

**Nouveautés ajoutées** :
- ✅ Image "About.jpg" intégrée dans la page "À propos"
- ✅ Section "Notre Équipe" avec photos des membres (Arcanchel, Dohm, Exaucé, Rych)
- ✅ Configuration mise à jour pour utiliser toutes les images disponibles
- ✅ Call-to-action pour rejoindre l'équipe

**Statut** : ✅ Entièrement fonctionnel et complet
**Images utilisées** : 7/7 images locales disponibles (100%)
**Pages couvertes** : Toutes les pages du site avec images personnalisées
