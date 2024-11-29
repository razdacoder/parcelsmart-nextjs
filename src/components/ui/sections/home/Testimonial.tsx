"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Circle, Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function Testimonial() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="py-48">
      <div className="max-w-screen-md mx-auto p-4">
        <Carousel setApi={setApi} className="w-full border rounded-md py-6">
          <h3 className="text-[40px] leading-[48px] font-bold text-secondary text-center">
            Trusted by Clients
          </h3>

          <CarouselContent className="mt-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1 space-y-8">
                  <h5 className="text-lg font-semibold text-secondary text-center">
                    <span className="text-[#FF5722]">Janet Cole</span> -
                    Marketing Manager
                  </h5>
                  <div className="flex items-center justify-center gap-4 mx-auto">
                    <Star className="fill-[#FACD49] stroke-[#FACD49] size-6" />
                    <Star className="fill-[#FACD49] stroke-[#FACD49] size-6" />
                    <Star className="fill-[#FACD49] stroke-[#FACD49] size-6" />
                    <Star className="fill-[#FACD49] stroke-[#FACD49] size-6" />
                    <Star className="fill-[#FACD49] stroke-[#FACD49] size-6" />
                  </div>
                  <p className="font-medium text-center px-8">
                    As a retailer, timely and reliable delivery is crucial to
                    our business success. Parcels Mart has consistently
                    delivered on their promise of express logistics and
                    last-mile delivery. Their extensive network of delivery
                    agents ensures that our parcels reach our customers promptly
                    and efficiently, even in remote locations.
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <div className="flex items-center justify-center mx-auto gap-4 mt-4">
            {Array.from({ length: count }).map((_, index) => (
              <Circle
                key={`count-${index}`}
                className={cn(
                  "fill-muted stroke-muted size-4",
                  current === index + 1 && "fill-secondary stroke-secondary"
                )}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
