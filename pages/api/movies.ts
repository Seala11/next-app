import clientPromise from '../../lib/mongobd';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();

  if (req.method === 'POST') {
    const data = req.body;

    const moviesCollection = db.collection('movies');

    const result = await moviesCollection.insertOne(data);
    if (!result) {
      res.status(404).json({ message: 'Not found' });
    }

    client.close();

    res.status(201).json({ message: 'Movie added' });
  }
}
