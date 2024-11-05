"use client";

import { Button } from "@/components/ui/button";
import useResendEmailVerification from "../api/useResendEmailVerification";
import { useRouteEmail } from "../hooks/use-route-email";

export default function ResendEmailButton() {
  const { email } = useRouteEmail();
  const { mutate } = useResendEmailVerification();
  return (
    <Button
      onClick={() => mutate({ email: email! })}
      variant="link"
      className="text-primary hover:no-underline p-0"
    >
      Resend
    </Button>
  );
}
