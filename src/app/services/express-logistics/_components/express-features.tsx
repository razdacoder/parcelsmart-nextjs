import React from "react";

import expressLogistiicsBg from "@/app/assets/express-logistiics-bg.png";
import expressLogisticsFeatureImage from "@/app/assets/express-logistics-feature-image.png";
import Image from "next/image";

import scaleIcon from "@/app/assets/scale.svg";
import bellIcon from "@/app/assets/bell.svg";
import packageIcon from "@/app/assets/package-icon.svg";
import clockIcon from "@/app/assets/clock.svg";
import truckIcon from "@/app/assets/truck-door.svg";

export default function ExpressFeatures() {
  return (
    <section className="py-20 relative mb-[100px]">
      <Image
        src={expressLogistiicsBg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/90"></div>
      <div className="relative max-w-screen-lg mx-auto z-10  h-full text-white">
        <h3 className="text-[40px] leading-[40px] text-center font-bold text-secondary">
          Features
        </h3>
        <div className="mt-12 grid grid-cols-3 items-center gap-4">
          <div className="flex flex-col gap-[30px]">
            <div className="flex gap-4 bg-white py-6 px-4 rounded-md">
              <Image src={scaleIcon} alt="Scale Icon" width={45} height={45} />
              <div className="flex flex-col gap-4">
                <h5 className="font-semibold text-secondary">
                  Instant Rate Comparison
                </h5>
                <p className="text-sm text-secondary font-medium">
                  Easily compare rates from top-tier courier partners, including
                  regional and domestic courier partners
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white py-6 px-4 rounded-md">
              <Image
                src={packageIcon}
                alt="Scale Icon"
                width={45}
                height={45}
              />
              <div className="flex flex-col gap-4">
                <h5 className="font-semibold text-secondary">
                  Package Flexibility
                </h5>
                <p className="text-sm text-secondary font-medium">
                  Suitable for small packages starting from 0.5kg up to 3,000kg.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white py-6 px-4 rounded-md">
              <Image src={clockIcon} alt="Scale Icon" width={45} height={45} />
              <div className="flex flex-col gap-4">
                <h5 className="font-semibold text-secondary">
                  Real-Time Tracking
                </h5>
                <p className="text-sm text-secondary font-medium">
                  Track your shipments in real-time using our integrated
                  tracking tool.
                </p>
              </div>
            </div>
          </div>

          <Image
            src={expressLogisticsFeatureImage}
            alt="Express Logistics Feature Image"
            width={366}
            height={553.14}
          />

          <div className="flex flex-col gap-[30px]">
            <div className="flex gap-4 bg-white py-6 px-4 rounded-md">
              <Image src={bellIcon} alt="Scale Icon" width={45} height={45} />
              <div className="flex flex-col gap-4">
                <h5 className="font-semibold text-secondary">Notifications</h5>
                <p className="text-sm text-secondary font-medium">
                  Receive SMS and email notifications for each delivery
                  milestone (pickup, in transit, out for delivery, delivered)
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white py-6 px-4 rounded-md">
              <Image src={truckIcon} alt="Scale Icon" width={45} height={45} />
              <div className="flex flex-col gap-4">
                <h5 className="font-semibold text-secondary">
                  Door-to-Door Service
                </h5>
                <p className="text-sm text-secondary font-medium">
                  Full door-to-door delivery service with pickup and drop-off at
                  your specified location.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white py-6 px-4 rounded-md">
              <Image
                src={packageIcon}
                alt="Scale Icon"
                width={45}
                height={45}
              />
              <div className="flex flex-col gap-4">
                <h5 className="font-semibold text-secondary">
                  Special Handling for Sensitive Packages
                </h5>
                <p className="text-sm text-secondary font-medium">
                  Secure packaging solutions to ensure your items arrive safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
