"use client"; // Error boundaries must be Client Components
import Image from "next/image";
import React from "react";

import errorImage from "@/app/assets/error-503.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-6">
      <Image src={errorImage} alt="Error Image" width={500} height={372.56} />
      <h2 className="text-[56px] leading-[78.4px] font-bold text-secondary">
        Error 503
      </h2>

      <p className="text-sm font-medium text-secondary max-w-md text-center">
        The service you requested is currently unavailable at the moment. Please
        try again later.
      </p>

      <Button size="lg">
        <Link href="/">Go back to homepage</Link>
      </Button>
    </div>
  );
}
