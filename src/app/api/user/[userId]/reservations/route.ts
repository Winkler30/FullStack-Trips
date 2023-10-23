import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

async function getReservations(request: NextApiRequest, response: NextApiResponse) {
  const { query } = request;
  const userId = query.userId as string; // Assegura que userId é uma string

  console.log({ userId });

  if (!userId) {
    return response.status(400).json({
      message: "Missing userId",
    });
  }

  try {
    const reservations = await prisma.tripReservation.findMany({
      where: {
        userId: userId, // Agora userId é do tipo string
      },
      include: {
        trip: true,
      },
    });

    return response.status(200).json(reservations);
  } catch (error) {
    return response.status(500).json({
      message: "Error retrieving reservations",
    });
  }
}

export default getReservations;
