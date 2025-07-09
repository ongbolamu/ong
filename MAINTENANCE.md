# Guide de Maintenance - Site ONG BOLAMU

## 🔧 Optimisations Récentes (Janvier 2025)

### ✅ Modifications Effectuées

#### 1. **Suppression Section Contact de la Page Principale**
- **Problème** : Duplication de contenu avec la page `/contact` dédiée
- **Solution** : Suppression complète de la section contact de `src/app/page.tsx`
- **Impact** : 
  - Page d'accueil plus légère et focalisée
  - Navigation plus claire pour les utilisateurs
  - Évite la redondance de contenu

#### 2. **Nettoyage des Imports**
- **Problème** : Imports inutilisés (`MapPin`, `Phone`, `Mail`) après suppression section contact
- **Solution** : Suppression des icônes non utilisées de `lucide-react`
- **Impact** : Bundle JavaScript légèrement optimisé

#### 3. **Nettoyage Cache Webpack**
- **Problème** : Erreurs de cache et compilation lente
- **Solution** : Suppression du dossier `.next` et rebuild propre
- **Impact** : Compilation plus stable et rapide

### 📊 Structure Actuelle de la Page Principale

```
/ (Page d'accueil)
├── Section Hero (avec sliding amélioré)
├── Section Actions (missions ONG)
├── Section Impact (statistiques)
├── Section Call-to-Action (dons/bénévolat)
├── Section FAQ (questions fréquentes)
└── Footer
```

## 🚀 Headers Disponibles

| Header | Complexité | Performance | Mobile | Recommandé pour |
|--------|------------|-------------|--------|-----------------|
| **Header Principal** | Simple | ⭐⭐⭐⭐⭐ | ✅ | Production standard |
| **Header Minimal** | Simple | ⭐⭐⭐⭐⭐ | ✅ | Sites minimalistes |
| **Header Corporate** | Moyen | ⭐⭐⭐⭐ | ✅ | Présentation professionnelle |
| **Header Neo-Moderne** | Élevé | ⭐⭐⭐ | ⚠️ | Événements spéciaux |
| **Header Quantum** | Très élevé | ⭐⭐ | ⚠️ | Démonstrations tech |

## 🛠️ Tâches de Maintenance

### Quotidiennes
- [ ] Vérifier les logs d'erreur via `/status`
- [ ] Tester la fonctionnalité de don
- [ ] Vérifier les formulaires de contact

### Hebdomadaires
- [ ] Analyser les performances avec PageSpeed Insights
- [ ] Vérifier les liens cassés
- [ ] Tester sur différents navigateurs
- [ ] Backup de la base de données

### Mensuelles
- [ ] Mise à jour des dépendances NPM
- [ ] Optimisation des images
- [ ] Révision du contenu
- [ ] Test de sécurité

## 🐛 Problèmes Résolus

### ❌ Erreur `window is not defined`
- **Cause** : Utilisation de `window.innerHeight` côté serveur
- **Solution** : Remplacé par une valeur fixe ou hook `useEffect`
- **Statut** : ✅ Résolu

### ❌ Configuration Images Dépréciée
- **Cause** : Utilisation de `images.domains` obsolète
- **Solution** : Migration vers `images.remotePatterns`
- **Statut** : ✅ Résolu

### ❌ Cache Webpack Corrompu
- **Cause** : Erreurs de permissions Windows
- **Solution** : Suppression régulière du cache `.next`
- **Statut** : ✅ Résolu

## 📈 Performance

### Métriques Cibles
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **Time to Interactive** : < 3s

### Optimisations Implementées
- ✅ Images optimisées (WebP, AVIF)
- ✅ Code splitting automatique Next.js
- ✅ Compression Gzip/Brotli
- ✅ Headers de sécurité
- ✅ Lazy loading des composants

## 🔐 Sécurité

### Headers Configurés
```javascript
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: origin-when-cross-origin
```

### Best Practices
- ✅ Pas de données sensibles côté client
- ✅ Validation des formulaires
- ✅ HTTPS enforced en production
- ✅ CSP headers recommandés

## 🚀 Déploiement

### Commandes Essentielles
```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrage production
npm start

# Nettoyage cache
rm -rf .next

# Test de performance
npm run analyze
```

### Checklist Pre-déploiement
- [ ] Tests unitaires passent
- [ ] Build production sans erreur
- [ ] Performance acceptable (>90 PageSpeed)
- [ ] Tests cross-browser
- [ ] Vérification responsive
- [ ] Test des formulaires

## 📞 Support Technique

### Logs à Consulter
- **Next.js** : Terminal de développement
- **Vercel** : Dashboard Vercel (si déployé)
- **Browser** : Console développeur

### Contacts Techniques
- **Développeur Principal** : [Email du développeur]
- **Monitoring** : `/status` page
- **Documentation** : `README.md`, `HEADER_DESIGNS.md`

## 📝 Notes Importantes

### Images des Membres de l'Équipe
Pour ajouter ou mettre à jour les photos des membres :

1. **Ajouter l'image** dans le dossier `public/images/`
   - Format recommandé : JPG ou PNG
   - Taille optimale : 400x400px minimum
   - Nom du fichier : `Prenom.jpg` (ex: `Merphy.jpg`)

2. **Mettre à jour le code** dans `src/app/equipe/page.tsx`
   ```javascript
   // Changer le chemin de l'image :
   image: "/images/NomDuFichier.jpg"
   ```

3. **Photo de couverture spéciale** 
   Pour utiliser une photo comme image de couverture dans la section hero :
   ```javascript
   // Remplacer le placeholder par :
   <OptimizedImage
     src="/images/Merphy.jpg"
     alt="NKOUKA Merphy Allegresse - Vice-Président"
     width={320}
     height={320}
     className="w-full h-full object-cover rounded-full"
   />
   ```

### Images Déjà Ajoutées
- ✅ Arcanchel.jpg (Président)
- ✅ Rych.jpg (Secrétaire Général)  
- ✅ Exaucé.jpg (Trésorier Général)
- ✅ Dohm.jpg (Membre actif)
- ❌ Merphy.jpg (Vice-Président) - À ajouter

---

**Dernière mise à jour :** Janvier 2025  
**Version :** 1.2.0  
**Statut :** 🟢 Stable 