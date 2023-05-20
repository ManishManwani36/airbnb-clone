"use client";

import Image from "next/image";

interface Props {
  src: string | null | undefined;
}

export default function Avatar({ src }: Props) {
  return (
    <Image
      alt="Avatar"
      className="rounded-full"
      height="30"
      width="30"
      src={src || "/images/placeholder.jpg"}
    />
  );
}
