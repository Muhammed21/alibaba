export default interface Review {
    name: string;
    text: JSON;
    stars: number;
    picture: string;
    imagesReview: string[];
    publishableDate: string;
    reviewUrl: string;
    countryCode: string;
  }