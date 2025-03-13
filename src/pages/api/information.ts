import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/_utils/_prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const information = await prisma.information.findMany({
        orderBy: {
          id: "asc",
        },
        include: {
          days: true,
        },
      });
      res.status(200).json(information);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}
