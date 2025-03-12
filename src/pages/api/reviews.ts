import { ApifyClient } from 'apify-client';
import { NextApiRequest, NextApiResponse } from 'next';

type ReviewItem = {
  name: string;
  textTranslated: string;
  stars: number;
  reviewerPhotoUrl: string | null;
  reviewImageUrls: string[];
  publishedAtDate: string;
  reviewUrl: string;
  countryCode: string;
};

type ReviewsByLanguage = {
  [key: string]: ReviewItem[];
};

async function GET(req: NextApiRequest, res: NextApiResponse) {
  const client = new ApifyClient({
    token: process.env.APIFY_API_TOKEN, 
  });

  const establishmentUrl = "https://www.google.fr/maps/place/Ali+Baba+Kebab/@45.9008973,6.1193425,15z/data=!4m6!3m5!1s0x478b8ffa3c0de239:0x1eea271a733826c8!8m2!3d45.899979!4d6.1266488!16s%2Fg%2F1tdc4379?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D";

  const input = {
    startUrls: [
      {
        url: establishmentUrl,
      },
    ],
    maxReviews: 1,
    reviewsSort: 'newest',
    reviewsOrigin: 'all',
    personalData: true,
    language: 'en', 
  };

  try {
    const languages = ['en', 'fr', 'tr'];
    const reviews: ReviewsByLanguage = {}; 

    for (const language of languages) {
      const languageInput = { ...input, language };
      const languageRun = await client.actor("Xb8osYTtOjlsgI6k9").call(languageInput);

      const languageDataset = await client.dataset(languageRun.defaultDatasetId).listItems();
      console.log(`Data for language ${language}:`, languageDataset.items); 

      if (!languageDataset.items || languageDataset.items.length === 0) {
        console.warn(`No data found for language: ${language}`);
        continue; 
      }

      const languageItems = languageDataset.items as ReviewItem[]; 
      reviews[language] = languageItems;

     /*  for (const review of languageItems) {
        await prisma.review.create({
          data: {
            name: review.name,
            text: review.textTranslated,
            stars: review.stars,
            picture: review.reviewerPhotoUrl || '',
            imagesReview: review.reviewImageUrls || [],
            publishableDate: review.publishedAtDate,
            reviewUrl: review.reviewUrl,
            countryCode: review.countryCode,
          },
        });
      } */
    }

    res.status(200).json(reviews); 
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return GET(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}