# 🛠️ Guide de Dépannage - ONG BOLAMU

## 🚨 **Problèmes Résolus Récemment**

### ✅ **Page "À propos" ne fonctionnait pas - RÉSOLU**

#### **Problème**
- ❌ La page `/apropos` ne se chargeait pas correctement
- ❌ Erreur liée aux props manquantes du composant `HeaderWithHero`

#### **Cause**
```tsx
// PROBLÈME: Props manquantes
<HeaderWithHero />
```

#### **Solution**
```tsx
// SOLUTION: Props ajoutées
<HeaderWithHero 
  title="À Propos de Nous"
  subtitle="Découvrez notre histoire, notre mission et nos valeurs"
/>
```

#### **Impact**
- ✅ Page à propos entièrement fonctionnelle
- ✅ Navigation fluide vers `/apropos`
- ✅ Header avec titre et sous-titre appropriés

---

## 🔧 **Problèmes Techniques Fréquents**

### **1. Erreur `window is not defined`**

#### **Symptômes**
```
ReferenceError: window is not defined
```

#### **Causes Courantes**
- Utilisation de `window` ou `document` côté serveur (SSR)
- Hooks React mal implémentés

#### **Solutions**

**Méthode 1: Vérification conditionnelle**
```typescript
// AVANT (❌)
const width = window.innerWidth;

// APRÈS (✅)
const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
```

**Méthode 2: useEffect**
```typescript
// ✅ Solution recommandée
const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

useEffect(() => {
  if (typeof window !== 'undefined') {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
}, []);
```

### **2. Cache Webpack Corrompu**

#### **Symptômes**
- Compilations très lentes (30+ secondes)
- Erreurs de cache webpack
- Redémarrages multiples du serveur

#### **Solution Immédiate**
```bash
# Nettoyer le cache
rm -rf .next
npm run dev
```

#### **Solution Préventive**
```bash
# Nouveau script de nettoyage
npm run clean
```

### **3. Props Manquantes dans les Composants**

#### **Symptômes**
- Pages qui ne se chargent pas
- Erreurs TypeScript sur les props

#### **Diagnostic**
```bash
# Vérifier les props requises
grep -r "HeaderWithHero" src/app/
```

#### **Solution Type**
```tsx
// Vérifier l'interface du composant
interface HeaderWithHeroProps {
  title?: string;        // Optionnel
  subtitle?: string;     // Optionnel  
  showHero?: boolean;    // Optionnel avec défaut
}

// Utilisation correcte
<HeaderWithHero 
  title="Titre de la page"
  subtitle="Description de la page"
/>
```

### **4. Images Manquantes**

#### **Symptômes**
- Images qui ne se chargent pas
- Erreurs 404 dans la console

#### **Vérification**
```bash
# Vérifier les images critiques
ls -la public/images/
```

#### **Images Critiques Requises**
- `public/images/logo Bolamu.png`
- `public/images/placeholder-project.svg`
- `public/images/placeholder-team.svg`

### **5. Ports Multiples Occupés**

#### **Symptômes**
```
Port 3000 is in use, trying 3001 instead
Port 3001 is in use, trying 3002 instead
```

#### **Solution**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

---

## 📋 **Checklist de Diagnostic**

### **Avant de Signaler un Bug**

#### **1. Environnement**
- [ ] Node.js version ≥ 18
- [ ] npm/yarn à jour
- [ ] Cache nettoyé (`.next` supprimé)

#### **2. Code**
- [ ] Aucune erreur TypeScript
- [ ] Imports corrects
- [ ] Props requises fournies

#### **3. Performance**
- [ ] Serveur démarre en < 10s
- [ ] Compilation en < 5s après changements
- [ ] Aucun warning webpack critique

#### **4. Fonctionnel**
- [ ] Toutes les pages accessibles
- [ ] Navigation fluide
- [ ] Images chargées

---

## 🚀 **Scripts de Diagnostic**

### **Diagnostic Rapide**
```bash
# Vérification complète
npm run dev
```

### **Diagnostic Approfondi**
```typescript
// Importer l'utilitaire de diagnostic
import { diagnostics } from '@/utils/diagnostics';

// Lancer le diagnostic
diagnostics.runFullDiagnostic();
```

### **Nettoyage Complet**
```bash
# Arrêter tous les processus Node
# Windows
taskkill /f /im node.exe

# Linux/Mac  
pkill node

# Nettoyer
rm -rf .next
rm -rf node_modules/.cache
npm run dev
```

---

## 📊 **Monitoring en Temps Réel**

### **Console Browser**
- ✅ Aucune erreur rouge
- ⚠️ Warnings acceptables (< 3)
- 📊 Performance metrics

### **Terminal**
- ✅ `Ready in < 10s`
- ✅ `Compiled in < 5s`
- ❌ Aucune erreur critique

### **Page Status**
```
Accéder à: http://localhost:3000/status
```

---

## 🆘 **Contacts Support**

### **Problèmes Techniques**
1. **Vérifier** ce guide de dépannage
2. **Nettoyer** le cache et redémarrer
3. **Vérifier** la console pour erreurs
4. **Documenter** le problème avec:
   - Étapes pour reproduire
   - Messages d'erreur complets
   - Version Node.js/npm
   - OS et navigateur

### **Ressources Utiles**
- 📖 [Documentation Next.js](https://nextjs.org/docs)
- 🎯 [TypeScript Handbook](https://www.typescriptlang.org/docs)
- ⚡ [Framer Motion Docs](https://www.framer.com/motion)
- 🎨 [Tailwind CSS](https://tailwindcss.com/docs)

---

## 📈 **Prévention des Problèmes**

### **Bonnes Pratiques**

#### **Développement**
```typescript
// Toujours vérifier les types
interface Props {
  title: string;        // Requis
  subtitle?: string;    // Optionnel
}

// Toujours gérer SSR
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;
```

#### **Commits**
```bash
# Avant chaque commit
npm run type-check
npm run lint
npm run build
```

#### **Déploiement**
```bash
# Test local avant déploiement
npm run build
npm start
```

---

**🎉 Avec ces outils et bonnes pratiques, le site ONG BOLAMU reste stable et performant !** 