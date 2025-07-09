# Guide des Espacements et Marges - ONG BOLAMU

## Vue d'ensemble
Ce guide définit le système d'espacement standardisé pour maintenir une cohérence visuelle optimale à travers tout le site ONG BOLAMU.

## Système d'Espacement Standardisé

### 🎯 Classes Principales

#### Espacers de Navigation
```css
.section-spacer          /* h-24 (6rem / 96px) - Compensation navbar fixe */
```

#### Espacements de Sections
```css
.section-spacing         /* py-24 (6rem / 96px) - Standard sections */
.section-spacing-large   /* py-28 (7rem / 112px) - Sections importantes */
.section-spacing-small   /* py-16 (4rem / 64px) - Sections compactes */
```

#### Espacements de Contenu
```css
.section-content-spacing       /* mb-20 (5rem / 80px) - Entre titre et contenu */
.section-content-spacing-large /* mb-24 (6rem / 96px) - Large espacement */
.section-content-spacing-small /* mb-16 (4rem / 64px) - Espacement compact */
```

#### Espacements de Grilles
```css
.grid-spacing       /* gap-16 (4rem / 64px) - Standard grids */
.grid-spacing-large /* gap-20 (5rem / 80px) - Large grids */
.grid-spacing-small /* gap-12 (3rem / 48px) - Compact grids */
```

#### Padding des Cartes
```css
.card-padding       /* p-10 (2.5rem / 40px) - Standard cards */
.card-padding-large /* p-12 (3rem / 48px) - Large cards */
.card-padding-small /* p-8 (2rem / 32px) - Compact cards */
```

### 🎨 Arrière-plans Standardisés

```css
.section-background-primary   /* Dégradé emerald-teal-blue */
.section-background-secondary /* Dégradé violet-purple-pink */
.section-background-tertiary  /* bg-gray-50 */
.section-background-dark      /* Dégradé gray-900-800 */
```

### 📱 Responsive Design

#### Mobile (≤ 768px)
- `section-spacing` : py-16
- `section-content-spacing` : mb-12
- `grid-spacing` : gap-8
- `card-padding` : p-6

#### Tablette (769px - 1024px)
- `section-spacing` : py-20
- `section-content-spacing` : mb-16
- `grid-spacing` : gap-12
- `card-padding` : p-8

#### Desktop (≥ 1025px)
- Utilise les valeurs par défaut

## 📋 Guide d'Utilisation

### Structure Type d'une Section

```tsx
{/* Spacer de compensation navbar */}
<div className="section-spacer"></div>

{/* Section principale */}
<section className="section-spacing section-background-primary">
  <div className="container-standard">
    
    {/* En-tête de section */}
    <motion.div className="text-center section-content-spacing">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">
        Titre <span className="text-[#0369a1]">Coloré</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Description de la section
      </p>
    </motion.div>
    
    {/* Contenu principal */}
    <div className="grid grid-cols-1 lg:grid-cols-2 grid-spacing">
      <div className="bg-white card-padding rounded-3xl shadow-xl">
        {/* Contenu de carte */}
      </div>
    </div>
    
  </div>
</section>
```

### Exemples par Type de Page

#### Page d'Accueil
```tsx
{/* Hero avec HeaderWithHero */}
<HeaderWithHero showHero={true} />

{/* Spacer */}
<div className="section-spacer"></div>

{/* Section À propos */}
<section className="section-spacing section-background-primary">
  {/* Contenu */}
</section>

{/* Section Statistiques */}
<section className="section-spacing section-background-secondary">
  {/* Contenu */}
</section>

{/* Call to Action */}
<section className="section-spacing-large">
  {/* Contenu */}
</section>
```

#### Pages Internes
```tsx
{/* Header sans hero */}
<HeaderWithHero showHero={false} />

{/* Spacer réduit */}
<div className="section-spacer"></div>

{/* Sections de contenu */}
<section className="section-spacing">
  {/* Contenu */}
</section>
```

## 🎯 Règles d'Application

### ✅ Bonnes Pratiques

1. **Utiliser les classes standardisées** plutôt que des valeurs custom
2. **Maintenir la hiérarchie** : large > standard > small
3. **Respecter le responsive** automatique
4. **Appliquer systématiquement** sur toutes les pages

### ❌ À Éviter

1. Mélanger les systèmes d'espacement
2. Utiliser des marges custom sans raison
3. Oublier le spacer de navbar
4. Négliger la responsive

## 📊 Hiérarchie Visuelle

```
Navbar fixe (h-20)
    ↓ section-spacer (h-24)
Section Hero/Principale
    ↓ section-spacing-large (py-28)
Section Importante
    ↓ section-spacing (py-24)
Section Standard
    ↓ section-spacing (py-24)
Section Standard
    ↓ section-spacing-small (py-16)
Footer
```

## 🔍 Vérification et Maintenance

### Points de Contrôle
- [ ] Spacer navbar présent sur toutes les pages
- [ ] Cohérence des espacements entre sections
- [ ] Responsive fonctionnel sur mobile/tablette
- [ ] Hiérarchie visuelle respectée
- [ ] Arrière-plans appropriés utilisés

### Outils de Debug
```css
/* Ajout temporaire pour visualiser les espacements */
.section-spacing { border: 2px dashed red; }
.section-content-spacing { border: 2px dashed blue; }
.grid-spacing > * { border: 1px dashed green; }
```

## 🚀 Mise en Œuvre

### Fichiers Modifiés
- ✅ `src/app/globals.css` - Classes standardisées
- ✅ `src/app/page.tsx` - Page d'accueil
- ✅ `src/app/adhesion/page.tsx` - Page adhésion (partiellement)
- ✅ `src/app/apropos/page.tsx` - Page à propos (partiellement)

### À Compléter
- [ ] `src/app/actions/page.tsx`
- [ ] `src/app/programmes/page.tsx`
- [ ] `src/app/don/page.tsx`
- [ ] `src/app/benevolat/page.tsx`
- [ ] Autres pages du site

## 📝 Notes Importantes

1. **Palette de couleurs** : Utilisation de la palette "Océan Tropical"
   - Primaire : #0369a1 (Bleu océan)
   - Secondaire : #15803d (Vert tropical)
   - Accent : #c2410c (Orange corail)

2. **Nouvelle structure** : Le spacer de 24px (h-24) remplace l'ancien h-20 pour une meilleure compensation de la navbar sticky

3. **Responsive automatique** : Les classes s'adaptent automatiquement aux différentes tailles d'écran

---

*Guide créé pour maintenir la cohérence visuelle du site ONG BOLAMU* 