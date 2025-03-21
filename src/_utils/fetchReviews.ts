import { ApifyClient } from "apify-client";
import Review from "@/_types/review";

type ReviewItem = {
  name: string;
  textTranslated?: string | null;
  text?: string;
  stars: number;
  reviewerPhotoUrl?: string | null;
  reviewImageUrls?: string[];
  publishedAtDate: string;
  reviewUrl: string;
  countryCode: string;
};

export default async function fetchReviews() {
  const client = new ApifyClient({
    token: process.env.APIFY_API_TOKEN,
  });

  const establishmentUrl = process.env.ESTABLISHMENT_URL;

  const input = {
    startUrls: [{ url: establishmentUrl }],
    maxReviews: 10,
    reviewsSort: "newest",
    reviewsOrigin: "all",
    personalData: true,
  };

  const languages = ["en", "fr", "tr"];

  const reviewsMap = new Map<string, Review>();

  for (const language of languages) {
    const languageInput = { ...input, language };
    const languageRun = await client
      .actor("Xb8osYTtOjlsgI6k9")
      .call(languageInput);
    const languageDataset = await client
      .dataset(languageRun.defaultDatasetId)
      .listItems();

    if (!languageDataset.items || languageDataset.items.length === 0) continue;

    for (const review of languageDataset.items as ReviewItem[]) {
      const reviewText =
        review.textTranslated?.trim() || review.text?.trim() || "";

      // Appliquer les filtres : texte présent, photo de l’auteur, au moins une image, note >= 4
      if (!reviewText || !review.reviewerPhotoUrl || review.stars < 4) {
        continue;
      }

      const reviewKey = `${review.name}-${review.publishedAtDate}`;

      if (!reviewsMap.has(reviewKey)) {
        reviewsMap.set(reviewKey, {
          name: review.name,
          text: [],
          stars: review.stars,
          picture: review.reviewerPhotoUrl,
          imagesReview: review.reviewImageUrls || [],
          publishableDate: review.publishedAtDate,
          reviewUrl: review.reviewUrl,
          countryCode: review.countryCode,
        });
      }

      reviewsMap.get(reviewKey)?.text.push(reviewText);
    }
  }

  return Array.from(reviewsMap.values());
}
