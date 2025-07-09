# Configuration de la Base de Données PostgreSQL pour ONG BOLAMU

## 1. Créer le fichier .env

Créez un fichier `.env` à la racine du projet avec le contenu suivant :

```env
# Configuration de la base de données PostgreSQL
DATABASE_URL="postgresql://username:password@localhost:5432/ong_bolamu?schema=public"

# Exemples pour différents services :

# PostgreSQL local
# DATABASE_URL="postgresql://postgres:password@localhost:5432/ong_bolamu?schema=public"

# Vercel Postgres
# DATABASE_URL="postgres://default:****@****-pooler.us-east-1.postgres.vercel-app.com/verceldb?sslmode=require"

# Supabase
# DATABASE_URL="postgresql://postgres:****@db.****.supabase.co:5432/postgres"

# Railway
# DATABASE_URL="postgresql://postgres:****@****-railway.app:5432/railway"
```

## 2. Options pour la base de données

### Option A : PostgreSQL Local
1. Installez PostgreSQL sur votre machine
2. Créez une base de données `ong_bolamu`
3. Utilisez l'URL de connexion locale

### Option B : Services Cloud (Recommandé)
- **Supabase** (gratuit) : https://supabase.com
- **Vercel Postgres** : https://vercel.com/storage/postgres
- **Railway** : https://railway.app
- **Render** : https://render.com

## 3. Commandes à exécuter après configuration

```bash
# Générer le client Prisma
npx prisma generate

# Créer et appliquer la migration
npx prisma migrate dev --name init

# (Optionnel) Ajouter des données de test
npx prisma db seed
```

## 4. Prochaines étapes

1. Configurer votre base de données
2. Créer les migrations
3. Ajouter des données de test
4. Intégrer les API routes pour récupérer les données 