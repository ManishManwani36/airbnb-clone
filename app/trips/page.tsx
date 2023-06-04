import getCurrentUser from "@app/actions/getCurrentUser";
import getReservations from "@app/actions/getResrvations";
import EmptyState from "@app/components/EmptyState";
import TripsClient from "./TripsClient";
import useLoginModal from "@app/hooks/useLoginModal";

export default async function TripsPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="Unauthorized"
        subtitle="You must be logged in to view this page."
        showLoginButton
      />
    );
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No Trips found"
        subtitle="Head back to the homepage to book your next adventure."
      />
    );
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
}
