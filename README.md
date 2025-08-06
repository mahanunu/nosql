# NoSQL - Gestion de Distributeurs Automatiques Picard

Ce projet a pour objectif de concevoir une base de données NoSQL pour la gestion de distributeurs automatiques de produits surgelés Picard. Il s'agit d'un système capable de gérer les stocks, les utilisateurs et l’historique des transactions en utilisant MongoDB.

---

## Structure du projet

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


## Justification du choix NoSQL (MongoDB)

MongoDB, base de données orientée documents, a été choisie pour sa capacité à :

- Représenter facilement les entités complexes sous forme de documents JSON.
- Gérer les structures imbriquées sans jointures lourdes (ex. : `stock_by_distributor`, `purchase_history`).
- Être flexible et évolutive (ex : ajout futur de capteurs dans un distributeur).
- Exécuter des requêtes rapides et performantes sur des données semi-structurées.


---

##  Installation & utilisation

### 1. Cloner le projet et installer les dépendances

```bash
git clone https://github.com/mahanunu/nosql.git
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
