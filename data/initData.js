const { client } = require('../config/db');

async function main() {
  await client.connect();
  const db = client.db('picardDB');
  
  await db.collection('products').deleteMany({});
  await db.collection('distributors').deleteMany({});
  await db.collection('users').deleteMany({});

  await db.collection('products').insertMany([
    {
      _id: 'PROD123',
      name: 'Lasagnes saumon épinard',
      category: 'Plats préparés',
      price: 4.99,
      stock_by_distributor: [
        { distributor_id: 'DIST001', quantity: 5 },
        { distributor_id: 'DIST002', quantity: 8 }
      ]
    },
    {
      _id: 'PROD456',
      name: 'Soupe de légumes',
      category: 'Soupes',
      price: 2.99,
      stock_by_distributor: [
        { distributor_id: 'DIST001', quantity: 10 }
      ]
    }
  ]);

  await db.collection('distributors').insertOne({
    _id: 'DIST001',
    location: { city: 'Paris', address: '10 rue Picard, 75001' },
    status: 'actif',
    products_stocked: ['PROD123', 'PROD456']
  });

  await db.collection('users').insertOne({
    _id: 'USER001',
    name: 'Claire Dupont',
    email: 'claire@example.com',
    purchase_history: []
  });

  console.log('Base initialisée avec succès');
  await client.close();
}

main().catch(console.error);
