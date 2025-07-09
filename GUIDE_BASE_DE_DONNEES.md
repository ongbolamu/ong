# Guide Base de Données - ONG BOLAMU

## 🎯 Vue d'ensemble

Ce projet utilise **Prisma** avec **PostgreSQL** pour gérer toutes les données de l'ONG BOLAMU de manière dynamique et sécurisée.

## 📋 Configuration initiale

### 1. Créer le fichier .env

Créez un fichier `.env` à la racine du projet :

```env
# Configuration PostgreSQL
DATABASE_URL="postgresql://username:password@localhost:5432/ong_bolamu?schema=public"

# Ou utilisez un service cloud (recommandé)
# Supabase: postgresql://postgres:password@db.supabase.co:5432/postgres
# Vercel: postgres://default:password@host-pooler.us-east-1.postgres.vercel-app.com/verceldb?sslmode=require
```

### 2. Options de base de données

#### Option A : Supabase (Gratuit - Recommandé)
1. Créez un compte sur [supabase.com](https://supabase.com)
2. Créez un nouveau projet
3. Récupérez l'URL de connexion dans Settings > Database
4. Utilisez cette URL dans votre `.env`

#### Option B : Vercel Postgres
1. Dans votre dashboard Vercel, ajoutez Postgres Storage
2. Copiez l'URL de connexion fournie
3. Ajoutez-la dans votre `.env`

#### Option C : PostgreSQL Local
1. Installez PostgreSQL
2. Créez une base `ong_bolamu`
3. Utilisez l'URL locale

## 🚀 Démarrage rapide

### 1. Installer les dépendances
```bash
npm install
```

### 2. Générer le client Prisma
```bash
npm run db:generate
```

### 3. Créer les tables
```bash
npm run db:migrate
```

### 4. Ajouter des données de test
```bash
npm run db:seed
```

### 5. Démarrer l'application
```bash
npm run dev
```

## 📊 Structure de la base de données

### Tables principales

1. **Statistiques** - Chiffres clés de l'ONG
2. **Actualités** - News et articles
3. **Actions** - Projets et interventions
4. **Équipe** - Membres de l'organisation
5. **Partenaires** - Organisations partenaires
6. **Bénévoles** - Personnes volontaires
7. **Dons** - Contributions financières
8. **Témoignages** - Retours d'expérience

### Relations importantes

- Les Actions peuvent appartenir à des Programmes
- Les Actualités peuvent avoir plusieurs Catégories
- Les Actions ont des Partenaires et Bénéficiaires associés

## 🔧 Scripts disponibles

```bash
# Génération du client
npm run db:generate

# Migrations
npm run db:migrate

# Ajout de données de test
npm run db:seed

# Interface d'administration
npm run db:studio

# Reset complet
npm run db:reset
```

## 📁 Structure des fichiers

```
prisma/
├── schema.prisma          # Schéma de la base
├── seed.ts               # Données de test
└── migrations/           # Historique des migrations

src/
├── lib/
│   └── prisma.ts         # Client Prisma
├── hooks/
│   └── useData.ts        # Hooks pour récupérer les données
└── app/api/              # Routes API
    ├── statistiques/
    ├── actualites/
    ├── actions/
    └── equipe/
```

## 🔌 API Routes créées

### GET /api/statistiques
Récupère les statistiques générales de l'ONG

### GET /api/actualites
Récupère les actualités publiées
- Paramètres : `limit`, `offset`
- Inclut la pagination

### GET /api/actions
Récupère les actions/projets
- Paramètres : `limit`, `offset`, `statut`
- Inclut partenaires et bénéficiaires

### GET /api/equipe
Récupère les membres actifs de l'équipe

## 🎨 Composants mis à jour

### Page d'accueil (`src/app/page.tsx`)
- Statistiques dynamiques depuis la base
- Chargement et gestion d'erreurs
- Animation pendant le chargement

### Hooks personnalisés (`src/hooks/useData.ts`)
- `useStatistiques()` - Statistiques
- `useActualites()` - Actualités avec pagination
- `useActions()` - Actions avec filtres
- `useEquipe()` - Membres de l'équipe

## 📈 Données de test incluses

Le script de seed ajoute :
- ✅ 4 statistiques principales
- ✅ 3 catégories d'actualités
- ✅ 3 domaines de programmes
- ✅ 4 membres d'équipe
- ✅ 3 actualités d'exemple
- ✅ 2 actions en cours
- ✅ 3 partenaires
- ✅ 2 témoignages

## 🛠️ Administration

### Prisma Studio
Lancez `npm run db:studio` pour accéder à l'interface d'administration web où vous pouvez :
- Visualiser toutes les données
- Ajouter/modifier/supprimer des enregistrements
- Exporter des données

### Ajout de nouvelles données

#### Ajouter une actualité
```typescript
await prisma.actualite.create({
  data: {
    titre: "Nouvelle actualité",
    contenu: "Contenu de l'actualité...",
    auteur: "Nom de l'auteur",
    statut: "PUBLIE"
  }
})
```

#### Ajouter une action
```typescript
await prisma.action.create({
  data: {
    titre: "Nouveau projet",
    description: "Description courte",
    contenu: "Description détaillée...",
    dateDebut: new Date(),
    statut: "EN_COURS",
    localisation: "Brazzaville"
  }
})
```

## 🔒 Sécurité

- Les variables d'environnement sont dans `.env` (non versionné)
- Validation des données côté serveur
- Gestion des erreurs appropriée
- Pagination pour limiter les requêtes

## 🚨 Dépannage

### Erreur de connexion
1. Vérifiez votre URL dans `.env`
2. Testez la connexion réseau
3. Vérifiez les credentials

### Erreur de migration
```bash
npm run db:reset  # Reset complet
npm run db:migrate
npm run db:seed
```

### Client Prisma non à jour
```bash
npm run db:generate
```

## 📝 Prochaines étapes

1. **Configuration de votre base** - Suivez les options ci-dessus
2. **Déploiement** - Configurez la production
3. **Authentification** - Ajoutez la gestion des utilisateurs
4. **Interface admin** - Créez des pages d'administration
5. **Backup** - Configurez les sauvegardes

## 🆘 Support

Pour toute question ou problème :
1. Consultez la [documentation Prisma](https://prisma.io/docs)
2. Vérifiez les logs d'erreur
3. Testez avec `npm run db:studio`

---

**Important** : N'oubliez pas d'ajouter `.env` dans votre `.gitignore` pour protéger vos credentials ! 