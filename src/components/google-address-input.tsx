"use client";

import { Search } from "lucide-react";
import { useMemo } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { Input } from "./ui/input";

type GoogleAddressInputProps = {
  onPlaceChange: (place: google.maps.places.PlaceResult) => void;
};

export default function GoogleAddressInput({
  onPlaceChange,
}: GoogleAddressInputProps) {
  const options = useMemo(
    () => ({
      types: ["address"],
    }),
    []
  );

  const { ref } = usePlacesWidget<HTMLInputElement>({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY,
    onPlaceSelected: (place: google.maps.places.PlaceResult) =>
      onPlaceChange(place),
    options,
  });
  return (
    <div className="relative">
      <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground z-10" />

      <Input
        ref={ref}
        className="flex h-10 ps-10 bg-[#F4FDF8] w-full rounded-md border border-input px-4 py-2 text-sm shadow-sm transition-colors  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Search your address on Google (optional)"
      />
    </div>
  );
}
