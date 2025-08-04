const { client } = require('../config/db');

async function main() {
  await client.connect();
  const db = client.db('picardDB');

  const products = await db.collection('products').find({}).toArray();
  console.log('Produits disponibles :', products);

  const plats = await db.collection('products').find({ category: 'Plats préparés' }).toArray();
  console.log('Plats préparés :', plats);

  const user = await db.collection('users').findOne({ _id: 'USER001' });
  console.log('Historique utilisateur :', user.purchase_history);

  await client.close();
}

main().catch(console.error);