import getCurrentUser from "@app/actions/getCurrentUser";
import getReservations from "@app/actions/getResrvations";
import EmptyState from "@app/components/EmptyState";
import ReservationsClient from "./ReservationsClient";

export default async function ReservationsPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="Unauthorized"
        subtitle="You must be signed in to view this page."
        showLoginButton
      />
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No Reservations"
        subtitle="Looks like you have no reservations on your properties."
      />
    );
  }

  return (
    <ReservationsClient reservations={reservations} currentUser={currentUser} />
  );
}
