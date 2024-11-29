"use client";
import Image from "next/image";
import arrowImage from "@/app/assets/pointer-arrow.png";
import CompareRateForm from "@/components/compare-rate-form";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

export default function CompareRate() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section className=" bg-primary-light py-[100px]">
      <div className="max-w-screen-2xl mx-auto p-4">
        <div className="grid grid-cols-2 gap-8 auto-rows-min">
          <div className="flex flex-col max-w-2xl">
            <h3 className="text-[36px] leading-[43.2px] font-bold pr-20">
              Easily compare rates from top-tier courier partners, including
              regional and domestic courier partners
            </h3>
            <Image
              src={arrowImage}
              alt="Arrow Image"
              width={371}
              height={369}
              className="self-end"
            />
          </div>
          <div className="bg-white p-6">
            {isClient ? (
              <CompareRateForm />
            ) : (
              <div className="flex items-center justify-center">
                <Loader className="animate-spin size-6 text-primary" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
