import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import truckImage from "@/app/assets/express-logistics.png";
import packageImage from "@/app/assets/package.png";
import shipImage from "@/app/assets/ship.png";
import cargoImage from "@/app/assets/cargo.png";
import clearingImage from "@/app/assets/clearing.png";
import planeImage from "@/app/assets/plane.png";
import transBorderImage from "@/app/assets/trans-border.png";
import Image from "next/image";

const services = [
  {
    name: "Express Logistics",
    description: "Fast and reliable express delivery for urgent shipments.",
    icon: truckImage,
  },
  {
    name: "Last Mile Delivery",
    description:
      "Specialized last-mile delivery to ensure timely delivery to the final destination",
    icon: packageImage,
  },
  {
    name: "Dangerous Goods Handling",
    description:
      "Expertise in handling chemicals, explosives, and flammable materials",
    icon: packageImage,
  },

  {
    name: "Sea Freight",
    description: "Cost-effective solutions for bulk cargo shipments.",
    icon: shipImage,
  },
  {
    name: "Air Freight",
    description:
      "Efficient air cargo solutions for time-sensitive and high-value goods",
    icon: planeImage,
  },
  {
    name: "Large Cargo Solutions",
    description: "Handling of oversized and overweight shipments.",
    icon: cargoImage,
  },
  {
    name: "Customs Clearing",
    description: "Comprehensive customs brokerage services.",
    icon: clearingImage,
  },
  {
    name: "Aircraft Charters",
    description:
      "Exclusive air charter services for urgent and high-value shipments.",
    icon: planeImage,
  },
  {
    name: "Trans-Border Logistics",
    description: "Seamless cross-border logistics solutions.",
    icon: transBorderImage,
  },
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="max-w-screen-2xl mx-auto p-4">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-[40px] leading-[48px] text-secondary font-bold">
              Our Services
            </h2>
            <div className="relative flex items-center gap-4">
              <CarouselPrevious className="static -transalate-y-0" />
              <CarouselNext className="static -translate-x-0" />
            </div>
          </div>

          <CarouselContent className="mt-12">
            {services.map((service) => (
              <CarouselItem
                key={service.name}
                className="md:basis-1/3 lg:basis-1/4 -ml-[18px] gap-12"
              >
                <div className="p-[18px] mx-[18px] h-[180px] bg-primary-light bg-cover bg-center rounded-[8px]">
                  <div className="bg-primary z-10 size-12 rounded-full flex items-center justify-center">
                    <Image
                      src={service.icon}
                      alt={service.name}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="mt-3 flex flex-col gap-3">
                    <h4 className="font-semibold text-secondary">
                      {service.name}
                    </h4>
                    <p className="text-sm text-secondary">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
