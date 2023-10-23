import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export default async function GET(request: Request, { params: { userId } }: { params: { userId: string } }) {
  const { searchParams } = new URL(request.url);

  console.log({ userId });

  if (!userId) {
    return new NextResponse(
      JSON.stringify({
        message: "Missing userId",
      }),
      { status: 400 }
    );
  }

  const reservations = await prisma.tripReservation.findMany({
    where: {
      userId: userId,
    },
    include: {
      trip: true,
    },
  });

  console.log({ reservations });

  return new Response(
    JSON.stringify(reservations),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
