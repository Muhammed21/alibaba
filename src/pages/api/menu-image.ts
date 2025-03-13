import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/_utils/_prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const menu = await prisma.menu.findMany({
        orderBy: {
          id: "asc",
        },
      });
      res.status(200).json(menu);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}
