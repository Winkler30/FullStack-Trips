"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TripReservation } from "@prisma/client";

const MyTrips = () => {
  const [reservations, setReservations] = useState<TripReservation[]>(
    []
  ) as any;
  const { status, data } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated" || !data?.user) {
      return router.push("/");
    }

    const fetchReservations = async () => {
      const response = await fetch(
        `http://localhost:3000/api/user/${(data?.user as any).id}/reservations`
      );
      const json = await response.json();
      setReservations(json);
    };

    fetchReservations();
  }, [status]);

  return <div>MyTrips</div>;
};

export default MyTrips;
