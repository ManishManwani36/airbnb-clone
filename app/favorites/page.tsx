import getCurrentUser from "@app/actions/getCurrentUser";
import getFavoriteListings from "@app/actions/getFavoriteListings";
import EmptyState from "@app/components/EmptyState";
import FavoritesClient from "./FavoritesClient";

export default async function FavoritesPage() {
  const listings = await getFavoriteListings();
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

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites yet"
        subtitle="You can add a property to your favorites by clicking the heart icon on the property page."
      />
    );
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
}
