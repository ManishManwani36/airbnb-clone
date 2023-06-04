import getCurrentUser from "@app/actions/getCurrentUser";
import getReservations from "@app/actions/getResrvations";
import EmptyState from "@app/components/EmptyState";
import PropertiesClient from "./PropertiesClient";
import getListings from "@app/actions/getListings";

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

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No Properties found"
        subtitle="Looks like you have no properties"
      />
    );
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />;
}
