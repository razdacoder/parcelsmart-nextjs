"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatNaira } from "@/lib/utils";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import QuoteForm from "./quote-form";

export default function QuotePage() {
  const [quotes, setQuotes] = useState<Quote[]>();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="bg-white py-12 px-8 space-y-8">
      <QuoteForm setIsLoading={setIsLoading} setQuotes={setQuotes} />
      {isLoading && !quotes && (
        <div className="flex items-center justify-center py-12">
          <Loader className="text-primary size-6 animate-spin" />
        </div>
      )}
      {quotes && !isLoading && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Available Rates</h3>
          <div className="flex flex-col gap-2">
            {quotes.map((quote) => (
              <div
                key={quote.carrier_reference}
                className="flex items-center space-x-2 w-full border-2 px-2 py-4 rounded-lg"
              >
                <div className="flex items-center justify-between w-full px-2">
                  <div className="flex items-center gap-4 w-4/12">
                    <Image
                      src={quote.carrier_logo}
                      alt="DHL Image"
                      width={48}
                      height={48}
                      className="size-8 md:size-12"
                    />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-xs md:text-sm font-medium">
                        {quote.carrier_name}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Normal Delivery
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col gap-1">
                    <h4 className="text-sm font-medium">
                      Pickup: {quote.estimated_pickup_time}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Delivery: {quote.estimated_delivery_time}
                    </p>
                  </div>
                  {quote.dropoff_available && (
                    <Badge className="hidden md:inline-flex bg-muted text-text hover:bg-muted hover:text-text shadow-none">
                      Dropoff
                    </Badge>
                  )}

                  <h2 className="text-base md:text-xl font-bold">
                    {formatNaira(quote.amount)}
                  </h2>

                  <Button asChild>
                    <Link href="/shipments/book">Book Shipment</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
