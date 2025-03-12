# Ali Baba - Frontend & Backend

Bienvenue sur le projet **Ali Baba** : un site web dynamique pour un restaurant de kebab, avec des horaires d'ouverture automatisés, des avis provenant de Google, et une base de données pour gérer les informations du restaurant.

Ce projet utilise **Next.js** pour le frontend, **Tailwind CSS** pour le design, **Prisma** et **Supabase** pour la gestion des données, et des API Google pour afficher les avis des clients.

## Table des matières

- [Installation](#installation)
- [Structure du projet](#structure)
- [Automatisation des horaires](#donnees-douverture-fermeture-a-adapter)

## Installation

### Prérequis

Avant de commencer, vous devez avoir installé les outils suivants sur votre machine :

- Node.js (version 14 ou supérieure)
- Supabase account (pour la base de données)
- Google API key (pour récupérer les avis via l'API Google)

### Étapes d'installation

1. Clonez le repository :

   ```bash
   git clone https://github.com/Muhammed21/alibaba.git
   cd alibaba
   ```

   ```js
   // Installe toute les dépendances
   npm install
   ```

   ### Structure

   ```graphql
   alibaba/
   ├── prisma/                  # Schémas Prisma et migrations de la base de données
   │   └── schema.prisma        # Définition du schéma de la base de données
   ├── public/                  # Dossier public pour les images et autres ressources statiques
   │   ├── _font/               # Polices personnalisées
   │   └── _img/                # Images statiques utilisées sur le site
   ├── src/                     # Code source principal
   │   ├── _components/         # Composants réutilisables React
   │   ├── _context/            # Contexte pour la gestion d'état global
   │   ├── _design/             # Design (tailwind config, couleurs, etc.)
   │   ├── _types/              # Types TypeScript pour les objets et données
   │   ├── _utils/              # Utilitaires et fonctions génériques
   │   ├── pages/               # Pages principales du site
   │   │   ├── index.tsx        # Page d'accueil
   │   └── styles/              # Styles globaux et Tailwind CSS
   │       ├── globals.css      # Styles globaux
   └── .env.local
   ```

   ### Données d'ouverture / fermeture à adapter

   ```graphql
   alibaba/
   ├── .../
   │
   ├── src/
   │   ├── _...
   │   ├── _utils/
   │       ├── Close_Time_Table.ts     # Ouvrir ce fichier
   │   ├── _...
   ```

   ```ts
   // Jour resto fermé
   export const timeTable = ["mercredi"];

   // Horaire d'ouverture
   export const openHour = 11;

   // Horaire de fermeture
   export const closeHour = 24;
   ```
