# O'Pokedex API

API REST complète pour gérer une base de données Pokémon avec système d'équipes et authentification sécurisée.

Projet réalisé dans le cadre de ma formation de développeur web full-stack chez O'clock.

## 🎯 Fonctionnalités

- **CRUD complet** sur les Pokémon (151 premiers Pokémon de la génération 1)
- **Système d'équipes** : création, gestion et modification d'équipes de Pokémon
- **Authentification sécurisée** avec Argon2 pour le hashing des mots de passe
- **API RESTful** suivant les standards HTTP
- **Architecture MVC** claire et maintenable

## 🛠️ Stack technique

- **Backend** : Node.js, Express, TypeScript
- **Base de données** : PostgreSQL
- **ORM** : Sequelize
- **Authentification** : Argon2, JWT
- **Architecture** : MVC (Models, Controllers, Routes)

## 📦 Installation

### Prérequis

- Node.js (v18+)
- PostgreSQL (v14+)
- npm ou yarn

### Étapes

1. **Clone le repository**

```bash
git clone https://github.com/QuentinCaffray/o-pokedex.git
cd o-pokedex
```

2. **Installe les dépendances**

```bash
npm install
```

3. **Configure l'environnement**

Crée un fichier `.env` à la racine du projet :

```env
DATABASE_URL=postgres://user:password@localhost:5432/pokedex
JWT_SECRET=ton_secret_jwt_ici
PORT=3000
NODE_ENV=development
```

4. **Initialise la base de données**

```bash
# Crée la base de données
npm run db:create

# Applique les migrations (création des tables via Sequelize)
npm run db:migrate

# Charge les données (151 premiers Pokémon avec statistiques)
npm run db:seed
```

💡 **Note** : Le seed charge automatiquement les 151 premiers Pokémon de la génération 1 avec leurs statistiques complètes.

5. **Lance le serveur**

```bash
npm run dev          # Mode développement avec hot-reload
# ou
npm run build        # Compile TypeScript
npm start            # Lance la version production
```

L'API sera accessible sur `http://localhost:3000`

## 🚀 Endpoints API

### Authentification

- `POST /api/auth/register` - Inscription d'un nouvel utilisateur
- `POST /api/auth/login` - Connexion (retourne un JWT)

### Pokémon

- `GET /api/pokemon` - Liste tous les Pokémon
- `GET /api/pokemon/:id` - Détails d'un Pokémon spécifique
- `POST /api/pokemon` - Créer un Pokémon _(authentification requise)_
- `PATCH /api/pokemon/:id` - Modifier un Pokémon _(authentification requise)_
- `DELETE /api/pokemon/:id` - Supprimer un Pokémon _(authentification requise)_

### Équipes

- `GET /api/teams` - Liste toutes les équipes _(authentification requise)_
- `GET /api/teams/:id` - Détails d'une équipe
- `POST /api/teams` - Créer une équipe _(authentification requise)_
- `PATCH /api/teams/:id` - Modifier une équipe _(authentification requise)_
- `DELETE /api/teams/:id` - Supprimer une équipe _(authentification requise)_
- `POST /api/teams/:id/pokemon` - Ajouter un Pokémon à une équipe
- `DELETE /api/teams/:id/pokemon/:pokemonId` - Retirer un Pokémon d'une équipe

## 🏗️ Structure du projet

```
o-pokedex/
├── src/
│   ├── controllers/      # Logique métier
│   ├── models/           # Modèles Sequelize (Pokémon, Team, User)
│   ├── routes/           # Définition des routes Express
│   ├── middlewares/      # Auth, validation, gestion d'erreurs
│   ├── config/           # Configuration base de données
│   └── types/            # Types TypeScript personnalisés
├── api/
│   └── data/             # Scripts SQL et seeds
├── .env.example          # Template des variables d'environnement
└── package.json
```

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur en mode développement
- `npm run build` - Compile TypeScript vers JavaScript
- `npm start` - Lance le serveur en production
- `npm run db:create` - Crée la base de données PostgreSQL
- `npm run db:migrate` - Applique les migrations Sequelize
- `npm run db:seed` - Charge les 151 premiers Pokémon en base

## 🔒 Sécurité

- **Mots de passe** : Hashés avec Argon2 (algorithme recommandé par l'OWASP)
- **Authentification** : JWT avec expiration
- **Validation** : Middlewares de validation des données entrantes
- **Variables sensibles** : Stockées dans `.env` (non versionné)

## 📄 Licence

Projet pédagogique réalisé dans le cadre de la formation O'clock.

---

**Réalisé par Quentin Caffray** - [LinkedIn](https://www.linkedin.com/in/quentin-caffray-dev) - [GitHub](https://github.com/QuentinCaffray)
