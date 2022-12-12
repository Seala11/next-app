import clientPromise from '../../lib/mongobd';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();

  if (req.method === 'POST') {
    const data = req.body;
    const moviesCollection = db.collection('movies');
    const movieExist = await moviesCollection.findOne({ id: data.id });

    if (movieExist) {
      return res.status(409).json({ res: movieExist, message: 'Movie already added' });
    }

    const result = await moviesCollection.insertOne(data);
    if (!result) {
      return res.status(404).json({ message: 'Not found' });
    }

    res.status(201).json({ message: 'Movie added' });
  }

  if (req.method === 'DELETE') {
    const id = req.body;
    const moviesCollection = db.collection('movies');
    const movieExist = await moviesCollection.findOne({ id: Number(id) });

    if (!movieExist) {
      return res.status(404).json({movie: movieExist, message: 'No movie with such id exist' });
    }

    const result = await moviesCollection.deleteOne({ id: Number(id) });
    if (!result) {
      return res.status(400).json({ message: 'Not found' });
    }

    return res.status(200).json({message: 'movie deleted from bookmarked'});
  }
}
