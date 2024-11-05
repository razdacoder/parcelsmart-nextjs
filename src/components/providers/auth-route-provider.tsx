"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAuth } from "./auth-provider";

export default function AuthRouteProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { authToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authToken) {
      return router.replace("/");
    }
  }, [authToken, router]);

  return <>{children}</>;
}
