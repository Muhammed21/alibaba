import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/_utils/_prisma/prisma";
import fetchReviews from "@/_utils/fetchReviews";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await prisma.review.deleteMany();

    const newReviews = await fetchReviews();

    for (const review of newReviews) {
      console.log(review);
      await prisma.review.create({ data: review });
    }

    res.status(200).json({ message: "Reviews refreshed successfully" });
  } catch (error) {
    console.error("Error refreshing reviews:", error);
    res.status(500).json({ error: "Failed to refresh reviews" });
  }
}

export default handler;
