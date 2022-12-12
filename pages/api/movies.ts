import clientPromise from '../../lib/mongobd';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();

  if (req.method === 'POST') {
    const data = req.body;

    const moviesCollection = db.collection('movies');

    const movieExist = await moviesCollection.findOne({ id: req.body.id });

    if (movieExist) {
      return res.status(409).json({ res: movieExist, message: 'Movie already added' });
    }

    const result = await moviesCollection.insertOne(data);
    if (!result) {
      return res.status(404).json({ message: 'Not found' });
    }

    res.status(201).json({ message: 'Movie added' });
  }
}
