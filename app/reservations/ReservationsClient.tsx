"use client";

import Container from "@app/components/Container";
import Heading from "@app/components/Heading";
import ListingCard from "@app/components/listings/ListingCard";
import { SafeReservation, SafeUser } from "@app/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

interface Props {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

export default function ReservationsClient({
  reservations,
  currentUser,
}: Props) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled.");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router],
  );

  return (
    <Container>
      <Heading title="Reservations" subTitle="Bookings on your properties." />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel Guest Reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}
