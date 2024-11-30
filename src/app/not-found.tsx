import Image from "next/image";
import React from "react";

import notFoundImage from "@/app/assets/error-404.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-6">
      <Image
        src={notFoundImage}
        alt="404 Image"
        width={420.82}
        height={390.05}
      />
      <h2 className="text-[56px] leading-[78.4px] font-bold text-secondary">
        Error 404
      </h2>

      <p className="text-sm font-medium text-secondary max-w-md text-center">
        The page you are looking for doesn&apos;t exist. Return to the
        website&apos;s homepage to find what you&apos;re looking for.
      </p>

      <Button size="lg">
        <Link href="/">Go back to homepage</Link>
      </Button>
    </div>
  );
}
