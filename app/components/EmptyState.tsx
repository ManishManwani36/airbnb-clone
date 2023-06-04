"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";
import useLoginModal from "@app/hooks/useLoginModal";

interface Props {
  title?: string;
  subtitle?: string;
  showLoginButton?: boolean;
}

export default function EmptyState({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters",
  showLoginButton = false,
}: Props) {
  const router = useRouter();
  const loginModal = useLoginModal();
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subTitle={subtitle} center />
      <div className="w-48 mt-4">
        <Button
          outline
          label={showLoginButton ? "Login" : "Remove all filters"}
          onClick={showLoginButton ? loginModal.onOpen : () => router.push("/")}
        />
      </div>
    </div>
  );
}
