"use client";

import Container from "@app/components/Container";
import Heading from "@app/components/Heading";
import ListingCard from "@app/components/listings/ListingCard";
import { SafeListing, SafeUser } from "@app/types";

interface Props {
  listings: SafeListing[];
  currentUser: SafeUser | null;
}

export default function FavoritesClient({ listings, currentUser }: Props) {
  return (
    <Container>
      <Heading title="Favorites" subTitle="Your favorite listings" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
}
