import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/_utils/_prisma/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const reviews = await prisma.review.findMany();
      res.status(200).json(reviews);
    } catch (error) {
      console.error("Erreur lors de la récupération des avis :", error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}