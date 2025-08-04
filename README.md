# 🧊 Projet NoSQL - Gestion de Distributeurs Automatiques Picard

Ce projet a pour objectif de concevoir une base de données NoSQL adaptée à la gestion des distributeurs automatiques de produits surgelés Picard. Il s'agit d'un système capable de gérer les stocks, les utilisateurs et l’historique des transactions en utilisant MongoDB.

---

## 📁 Structure du projet

```
picard-distributeurs/
├── data/
│   └── initData.js         # Script d’initialisation de la base
├── queries/
│   └── sampleQueries.js    # Requêtes types
├── config/
│   └── db.js               # Connexion MongoDB
├── .env                    # URI MongoDB
├── package.json            # Scripts et dépendances
└── README.md               # Ce fichier
```

---

## 🧩 Modélisation des données

Le modèle choisi repose sur 4 collections principales :

### 📦 `products`
```json
{
  "_id": "PROD123",
  "name": "Lasagnes saumon épinard",
  "category": "Plats préparés",
  "price": 4.99,
  "stock_by_distributor": [
    { "distributor_id": "DIST001", "quantity": 5 }
  ]
}
```

### 🏪 `distributors`
```json
{
  "_id": "DIST001",
  "location": {
    "city": "Paris",
    "address": "10 rue Picard, 75001"
  },
  "status": "actif",
  "products_stocked": ["PROD123", "PROD456"]
}
```

### 👤 `users`
```json
{
  "_id": "USER001",
  "name": "Claire Dupont",
  "email": "claire@example.com",
  "purchase_history": [
    {
      "product_id": "PROD123",
      "distributor_id": "DIST001",
      "quantity": 2,
      "date": "2025-07-30T10:15:00Z"
    }
  ]
}
```

### 💳 `transactions` *(optionnel)*
```json
{
  "_id": "TX001",
  "user_id": "USER001",
  "product_id": "PROD123",
  "distributor_id": "DIST001",
  "quantity": 2,
  "timestamp": "2025-07-30T10:15:00Z"
}
```

---

## 💡 Justification du choix NoSQL (MongoDB)

MongoDB, base de données orientée documents, a été choisie pour sa capacité à :

- Représenter facilement les entités complexes sous forme de documents JSON.
- Gérer les structures imbriquées sans jointures lourdes (ex. : `stock_by_distributor`, `purchase_history`).
- Être flexible et évolutive (ex : ajout futur de capteurs dans un distributeur).
- Exécuter des requêtes rapides et performantes sur des données semi-structurées.

Le modèle documentaire est **parfaitement adapté** à ce type d’application transactionnelle, contrairement à d’autres modèles NoSQL (clé-valeur, colonne, graphe).

---

## ⚙️ Installation & utilisation

### 1. Cloner le projet et installer les dépendances

```bash
git clone 
cd picard-distributeurs
npm install
```

### 2. Configurer l’environnement

Créer un fichier `.env` :

```
MONGO_URI=mongodb://localhost:27017
```

### 3. Initialiser la base avec des données de test

```bash
npm run init-db
```

### 4. Lancer des requêtes d'exemple

```bash
npm run query
```

---

##  Requêtes incluses

Dans `queries/sampleQueries.js` :

- Tous les produits d’un distributeur donné
- Produits filtrés par catégorie
- Historique d’achats d’un utilisateur

---

## Conclusion

La réalisation de ce projet m'a permis de démontrer que MongoDB est la technologie idéale pour gérer un système de distributeurs automatiques avec des structures de données souples, extensibles et rapides à interroger.

---
