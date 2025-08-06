const { client } = require('../config/db');

async function main() {
  await client.connect();
  const db = client.db('picardDB');

  const productsCollection = db.collection('products');
  const usersCollection = db.collection('users');
  const transactionsCollection = db.collection('transactions');


  const products = await productsCollection.find({}).toArray();
  console.log('Produits disponibles :', products);

  const plats = await productsCollection.find({ category: 'Plats préparés' }).toArray();
  console.log('Plats préparés :', plats);


  const user = await usersCollection.findOne({ _id: 'USER001' });
  console.log('Historique utilisateur :', user?.purchase_history || []);


  const lowStockProducts = await productsCollection.find({ stock: { $lt: 5 } }).toArray();
  console.log('Produits en stock faible :', lowStockProducts);


  const topProduits = await transactionsCollection.aggregate([
    { $group: { _id: '$productId', totalVentes: { $sum: 1 } } },
    { $sort: { totalVentes: -1 } },
    { $limit: 5 },
    {
      $lookup: {
        from: 'products',
        localField: '_id',
        foreignField: '_id',
        as: 'productDetails'
      }
    }
  ]).toArray();
  console.log('Top 5 des produits les plus vendus :', topProduits);

  await client.close();
}

main().catch(console.error);
