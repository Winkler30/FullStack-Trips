import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { NextApiResponse } from "next";

export async function DELETE(_request: Request, { params: { reservationId } }: { params: { reservationId: string } }, _response: NextApiResponse) {
  if (!reservationId) {
    return new NextResponse(
      JSON.stringify({
        message: "Missing reservationId",
      }),
      { status: 400 }
    );
  }

  try {
    const reservation = await prisma.tripReservation.delete({
      where: {
        id: reservationId,
      },
    });

    return new NextResponse(
      JSON.stringify(reservation),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error deleting reservation",
      }),
      { status: 500 }
    );
  }
}
