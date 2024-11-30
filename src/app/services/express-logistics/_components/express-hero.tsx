import Image from "next/image";

import expressLogisticsHeroImage from "@/app/assets/express-logistics-hero.png";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExpressLogisticsHero() {
  return (
    <section className="py-[100px]">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Image
              src={expressLogisticsHeroImage}
              alt="Express Logistics Hero Image"
              width={463.5}
              height={637.56}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[40px] leading-[40px] text-secondary font-bold">
              Express Logistics
            </h2>
            <p className="text-sm font-medium text-secondary">
              Parcels Mart Solutions offers reliable and fast express logistics
              services, specifically designed for small packages ranging from
              0.5kg to 3,000kg, depending on the courier company&apos;s weight
              restrictions. Our express logistics solution ensures that your
              urgent shipments reach their destination on time, no matter where
              in the world they are headed.
            </p>

            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-bold text-secondary">
                How It Works
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="size-10 fill-primary stroke-white" />
                  <span className="text-sm text-secondary">
                    <span className="font-semibold">Step 1:</span> Enter your
                    shipment details (weight, dimensions, pickup and delivery
                    addresses) using the{" "}
                    <span className="font-semibold">Compare Rates Tool.</span>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="size-6 fill-primary stroke-white" />
                  <span className="text-sm text-secondary">
                    <span className="font-semibold">Step 2:</span> Enter your
                    Review rates from multiple couriers and select your
                    preferred service.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="size-6 fill-primary stroke-white" />
                  <span className="text-sm text-secondary">
                    <span className="font-semibold">Step 3:</span> Enter your
                    Schedule a pickup and track your package in real-time.
                  </span>
                </li>
              </ul>
            </div>
            <Button size="lg" className="w-fit h-12">
              Comapre Rates & Ship Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
