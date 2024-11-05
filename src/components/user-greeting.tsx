"use client";

import useMe from "@/features/auth/api/useMe";
import { Skeleton } from "./ui/skeleton";

export default function UserGreeting() {
  const { data: user, isLoading } = useMe();

  if (isLoading) {
    <Skeleton className="h-8 w-32" />;
  }

  if (!user) {
    return <h3 className="text-xl font-bold text-text">Hi</h3>;
  }

  return (
    <h3 className="text-xl font-bold text-text">Hi, {user.data.first_name}</h3>
  );
}
